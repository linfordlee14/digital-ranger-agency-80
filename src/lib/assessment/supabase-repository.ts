import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";

import type { ValidAssessmentSubmission } from "@/lib/assessment/schema";
import type { AssessmentSubmissionRepository } from "@/lib/assessment/submit";

function getPositiveInteger(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : fallback;
}

export function createSupabaseAssessmentRepository(client: SupabaseClient): AssessmentSubmissionRepository {
  const maxAttempts = getPositiveInteger(process.env.ASSESSMENT_RATE_LIMIT_MAX_ATTEMPTS, 5);
  const windowMinutes = getPositiveInteger(process.env.ASSESSMENT_RATE_LIMIT_WINDOW_MINUTES, 15);

  return {
    async consumeRateLimit(keyHash) {
      const { data, error } = await client.rpc("consume_assessment_submission_rate_limit", {
        p_endpoint: "assessment",
        p_key_hash: keyHash,
        p_max_attempts: maxAttempts,
        p_window_minutes: windowMinutes,
      });
      if (error) throw new Error("Unable to check submission rate limit.");
      return data === true;
    },
    async createAssessment(submission: ValidAssessmentSubmission) {
      const { data, error } = await client.rpc("submit_automation_assessment", { p_submission: submission });
      if (error || typeof data !== "string") throw new Error("Unable to persist assessment submission.");
      return data;
    },
  };
}
