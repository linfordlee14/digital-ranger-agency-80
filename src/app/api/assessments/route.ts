import { NextResponse } from "next/server";

import { createRateLimitKey, submitAssessment } from "@/lib/assessment/submit";
import { createSupabaseAssessmentRepository } from "@/lib/assessment/supabase-repository";
import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";

const MAX_REQUEST_BYTES = 50_000;

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    headers: { "Cache-Control": "no-store" },
    status,
  });
}

function getClientIpAddress(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return json({ error: "The submission is too large. Please shorten your responses and try again." }, 413);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Please submit the assessment using the form." }, 415);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "We could not read that submission. Please try again." }, 400);
  }

  if (!isRecord(body)) {
    return json({ error: "We could not read that submission. Please try again." }, 400);
  }

  const submission = {
    ...body,
    sourcePath: "/assessment",
  };

  let result;
  try {
    const repository = createSupabaseAssessmentRepository(createSupabaseServiceRoleClient());
    result = await submitAssessment(submission, body.companyFax, createRateLimitKey(getClientIpAddress(request)), repository);
  } catch {
    return json({ error: "We could not submit your assessment right now. Please try again later." }, 500);
  }

  if (result.kind === "accepted") return json({ received: true }, 202);
  if (result.kind === "validation-error") {
    return json({ error: "Please review the highlighted fields and try again.", fieldErrors: result.fieldErrors }, 422);
  }
  if (result.kind === "rate-limited") {
    return json({ error: "Please wait before sending another assessment." }, 429);
  }
  if (result.kind === "server-error") {
    return json({ error: "We could not submit your assessment right now. Please try again later." }, 500);
  }

  return json({ id: result.id, received: true }, 201);
}
