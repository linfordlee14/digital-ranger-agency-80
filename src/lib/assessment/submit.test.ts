import { describe, expect, it } from "vitest";

import type { AssessmentSubmissionRepository } from "@/lib/assessment/submit";
import { submitAssessment } from "@/lib/assessment/submit";

const validSubmission = {
  auditInterest: "yes",
  budget: "",
  businessEmail: "owner@example.com",
  businessName: "Example Business",
  consent: true,
  contactName: "Example Owner",
  currentHandler: "Office manager",
  currentSystems: ["email", "spreadsheets"],
  currentSystemsOther: "",
  delayImpact: "A customer may need to wait for a response.",
  desiredOutcomeOther: "",
  desiredOutcomes: ["reduce-repetitive-work"],
  frequency: "daily",
  industry: "Professional services",
  manualTaskOther: "",
  manualTasks: ["lead-follow-up"],
  phone: "",
  sourceCta: "test",
  sourcePath: "/assessment",
  teamSize: "2-5",
  timeConsumingTask: "Following up with new enquiries.",
  urgency: "within-3-months",
  website: "",
};

function createRepository(overrides: Partial<AssessmentSubmissionRepository> = {}): AssessmentSubmissionRepository {
  return {
    consumeRateLimit: async () => true,
    createAssessment: async () => "d58d6d8f-80e7-421d-80c8-a9412c171f2a",
    ...overrides,
  };
}

describe("submitAssessment", () => {
  it("persists a valid assessment after rate-limit approval", async () => {
    let persisted = false;
    const result = await submitAssessment(
      validSubmission,
      "",
      "rate-key",
      createRepository({
        createAssessment: async () => {
          persisted = true;
          return "d58d6d8f-80e7-421d-80c8-a9412c171f2a";
        },
      }),
    );

    expect(result).toEqual({ id: "d58d6d8f-80e7-421d-80c8-a9412c171f2a", kind: "created" });
    expect(persisted).toBe(true);
  });

  it("rejects invalid input without persisting it", async () => {
    const result = await submitAssessment(
      { ...validSubmission, businessEmail: "not-an-email" },
      "",
      "rate-key",
      createRepository({ createAssessment: async () => { throw new Error("should not persist"); } }),
    );

    expect(result.kind).toBe("validation-error");
    if (result.kind === "validation-error") expect(result.fieldErrors.businessEmail).toBeDefined();
  });

  it("rejects a missing required consent field", async () => {
    const result = await submitAssessment(
      { ...validSubmission, consent: false },
      "",
      "rate-key",
      createRepository(),
    );

    expect(result.kind).toBe("validation-error");
    if (result.kind === "validation-error") expect(result.fieldErrors.consent).toBeDefined();
  });

  it("returns a safe server error when persistence fails", async () => {
    const result = await submitAssessment(
      validSubmission,
      "",
      "rate-key",
      createRepository({ createAssessment: async () => { throw new Error("database unavailable"); } }),
    );

    expect(result).toEqual({ kind: "server-error" });
  });

  it("blocks a rapid repeat once the rate limiter refuses it", async () => {
    let attempts = 0;
    const repository = createRepository({
      consumeRateLimit: async () => {
        attempts += 1;
        return attempts === 1;
      },
    });

    const first = await submitAssessment(validSubmission, "", "rate-key", repository);
    const second = await submitAssessment(validSubmission, "", "rate-key", repository);

    expect(first.kind).toBe("created");
    expect(second).toEqual({ kind: "rate-limited" });
  });
});
