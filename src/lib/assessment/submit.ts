import "server-only";

import { createHmac } from "node:crypto";

import { assessmentSubmissionSchema, type AssessmentFieldErrors, type ValidAssessmentSubmission } from "@/lib/assessment/schema";

export interface AssessmentSubmissionRepository {
  consumeRateLimit: (keyHash: string) => Promise<boolean>;
  createAssessment: (submission: ValidAssessmentSubmission) => Promise<string>;
}

export type AssessmentSubmissionResult =
  | { id: string; kind: "created" }
  | { kind: "accepted" }
  | { fieldErrors: AssessmentFieldErrors; kind: "validation-error" }
  | { kind: "rate-limited" }
  | { kind: "server-error" };

export function createRateLimitKey(ipAddress: string) {
  const salt = process.env.RATE_LIMIT_SALT;
  if (!salt) throw new Error("Rate limiting is not configured.");

  return createHmac("sha256", salt).update(ipAddress).digest("hex");
}

export async function submitAssessment(
  input: unknown,
  honeypotValue: unknown,
  keyHash: string,
  repository: AssessmentSubmissionRepository,
): Promise<AssessmentSubmissionResult> {
  // Bots receive an uninformative success response, while no data is persisted.
  if (typeof honeypotValue === "string" && honeypotValue.trim()) return { kind: "accepted" };

  try {
    const allowed = await repository.consumeRateLimit(keyHash);
    if (!allowed) return { kind: "rate-limited" };

    const parsed = assessmentSubmissionSchema.safeParse(input);
    if (!parsed.success) {
      return {
        fieldErrors: parsed.error.flatten().fieldErrors as AssessmentFieldErrors,
        kind: "validation-error",
      };
    }

    const id = await repository.createAssessment(parsed.data);
    return { id, kind: "created" };
  } catch {
    return { kind: "server-error" };
  }
}
