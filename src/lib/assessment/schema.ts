import "server-only";

import { z } from "zod";

import {
  assessmentSteps,
  auditInterestOptions,
  budgetOptions,
  currentSystemOptions,
  desiredOutcomeOptions,
  frequencyOptions,
  manualTaskOptions,
  teamSizeOptions,
  urgencyOptions,
  type AssessmentFormValues,
} from "@/lib/assessment/options";

const optionalText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength)
    .optional()
    .transform((value) => value || undefined);

const requiredText = (label: string, maxLength: number) =>
  z.string().trim().min(2, `${label} is required.`).max(maxLength, `${label} is too long.`);

const manualTaskValues = manualTaskOptions.map((option) => option.value) as [
  (typeof manualTaskOptions)[number]["value"],
  ...(typeof manualTaskOptions)[number]["value"][],
];
const currentSystemValues = currentSystemOptions.map((option) => option.value) as [
  (typeof currentSystemOptions)[number]["value"],
  ...(typeof currentSystemOptions)[number]["value"][],
];
const desiredOutcomeValues = desiredOutcomeOptions.map((option) => option.value) as [
  (typeof desiredOutcomeOptions)[number]["value"],
  ...(typeof desiredOutcomeOptions)[number]["value"][],
];
const teamSizeValues = teamSizeOptions.map((option) => option.value) as [
  (typeof teamSizeOptions)[number]["value"],
  ...(typeof teamSizeOptions)[number]["value"][],
];
const frequencyValues = frequencyOptions.map((option) => option.value) as [
  (typeof frequencyOptions)[number]["value"],
  ...(typeof frequencyOptions)[number]["value"][],
];
const urgencyValues = urgencyOptions.map((option) => option.value) as [
  (typeof urgencyOptions)[number]["value"],
  ...(typeof urgencyOptions)[number]["value"][],
];
const budgetValues = budgetOptions.map((option) => option.value) as [
  (typeof budgetOptions)[number]["value"],
  ...(typeof budgetOptions)[number]["value"][],
];
const auditInterestValues = auditInterestOptions.map((option) => option.value) as [
  (typeof auditInterestOptions)[number]["value"],
  ...(typeof auditInterestOptions)[number]["value"][],
];

export const assessmentSubmissionSchema = z
  .object({
    auditInterest: z.enum(auditInterestValues, { errorMap: () => ({ message: "Select whether you are interested in an Automation Audit." }) }),
    budget: z
      .union([z.enum(budgetValues), z.literal("")])
      .transform((value) => (value === "" ? undefined : value)),
    businessEmail: z.string().trim().email("Enter a valid business email address.").max(254),
    businessName: requiredText("Business name", 120),
    consent: z.literal(true, { errorMap: () => ({ message: "Consent is required before you can submit." }) }),
    contactName: requiredText("Contact name", 120),
    currentHandler: requiredText("Current handler", 200),
    currentSystems: z.array(z.enum(currentSystemValues)).min(1, "Select at least one current system.").max(currentSystemValues.length),
    currentSystemsOther: optionalText(200),
    delayImpact: requiredText("Delay or missed-work description", 500),
    desiredOutcomeOther: optionalText(200),
    desiredOutcomes: z.array(z.enum(desiredOutcomeValues)).min(1, "Select at least one desired outcome.").max(desiredOutcomeValues.length),
    frequency: z.enum(frequencyValues, { errorMap: () => ({ message: "Select how often this task happens." }) }),
    industry: requiredText("Industry or category", 100),
    manualTaskOther: optionalText(200),
    manualTasks: z.array(z.enum(manualTaskValues)).min(1, "Select at least one manual task.").max(manualTaskValues.length),
    phone: optionalText(40),
    sourceCta: optionalText(100),
    sourcePath: z.string().trim().startsWith("/").max(200),
    teamSize: z.enum(teamSizeValues, { errorMap: () => ({ message: "Select your team size." }) }),
    timeConsumingTask: requiredText("Most time-consuming task", 500),
    urgency: z.enum(urgencyValues, { errorMap: () => ({ message: "Select when you would like to address this." }) }),
    website: z
      .union([z.string().trim().url("Enter a valid website URL, including https://."), z.literal("")])
      .transform((value) => value || undefined),
  })
  .superRefine((values, context) => {
    if (values.manualTasks.includes("other") && !values.manualTaskOther) {
      context.addIssue({ code: z.ZodIssueCode.custom, message: "Describe the other manual task.", path: ["manualTaskOther"] });
    }
    if (values.currentSystems.includes("other") && !values.currentSystemsOther) {
      context.addIssue({ code: z.ZodIssueCode.custom, message: "Describe the other current system.", path: ["currentSystemsOther"] });
    }
    if (values.desiredOutcomes.includes("other") && !values.desiredOutcomeOther) {
      context.addIssue({ code: z.ZodIssueCode.custom, message: "Describe the other desired outcome.", path: ["desiredOutcomeOther"] });
    }
  });

export type ValidAssessmentSubmission = z.output<typeof assessmentSubmissionSchema>;
export type AssessmentFieldErrors = Partial<Record<keyof AssessmentFormValues, string[]>>;

export function getAssessmentFieldErrors(input: unknown): AssessmentFieldErrors | null {
  const result = assessmentSubmissionSchema.safeParse(input);
  if (result.success) return null;

  return result.error.flatten().fieldErrors as AssessmentFieldErrors;
}

export function getStepForAssessmentField(field: string) {
  const stepFields: Record<number, readonly string[]> = {
    0: ["businessName", "industry", "teamSize", "website", "contactName", "businessEmail", "phone"],
    1: ["manualTasks", "manualTaskOther"],
    2: ["timeConsumingTask", "frequency", "currentHandler", "delayImpact"],
    3: ["currentSystems", "currentSystemsOther"],
    4: ["desiredOutcomes", "desiredOutcomeOther"],
    5: ["urgency", "budget", "auditInterest"],
    6: ["consent"],
  };

  return Number(Object.entries(stepFields).find(([, fields]) => fields.includes(field))?.[0] ?? assessmentSteps.length - 1);
}
