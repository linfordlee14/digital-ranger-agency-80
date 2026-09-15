export const manualTaskOptions = [
  { label: "Customer enquiries", value: "customer-enquiries" },
  { label: "Lead follow-up", value: "lead-follow-up" },
  { label: "Quotations", value: "quotations" },
  { label: "Invoicing and payment tracking", value: "invoicing-payment-tracking" },
  { label: "Reporting", value: "reporting" },
  { label: "Appointment or booking management", value: "appointment-booking-management" },
  { label: "Document processing", value: "document-processing" },
  { label: "Internal administration", value: "internal-administration" },
  { label: "Customer support", value: "customer-support" },
  { label: "Data entry", value: "data-entry" },
  { label: "Other", value: "other" },
] as const;

export const currentSystemOptions = [
  { label: "WhatsApp", value: "whatsapp" },
  { label: "Email", value: "email" },
  { label: "Excel or Google Sheets", value: "spreadsheets" },
  { label: "Accounting software", value: "accounting-software" },
  { label: "CRM", value: "crm" },
  { label: "Website", value: "website" },
  { label: "Point of sale", value: "pos" },
  { label: "Custom software", value: "custom-software" },
  { label: "Other", value: "other" },
] as const;

export const desiredOutcomeOptions = [
  { label: "Save staff time", value: "save-staff-time" },
  { label: "Respond faster", value: "respond-faster" },
  { label: "Reduce repetitive work", value: "reduce-repetitive-work" },
  { label: "Improve follow-up", value: "improve-follow-up" },
  { label: "Reduce errors", value: "reduce-errors" },
  { label: "Organise information", value: "organise-information" },
  { label: "Connect existing systems", value: "connect-existing-systems" },
  { label: "Understand business data", value: "understand-business-data" },
  { label: "Other", value: "other" },
] as const;

export const teamSizeOptions = [
  { label: "Just me", value: "1" },
  { label: "2 to 5 people", value: "2-5" },
  { label: "6 to 10 people", value: "6-10" },
  { label: "11 to 25 people", value: "11-25" },
  { label: "26 to 50 people", value: "26-50" },
  { label: "More than 50 people", value: "51-plus" },
] as const;

export const frequencyOptions = [
  { label: "Several times a day", value: "several-times-daily" },
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Less often", value: "less-often" },
] as const;

export const urgencyOptions = [
  { label: "As soon as possible", value: "as-soon-as-possible" },
  { label: "Within the next 3 months", value: "within-3-months" },
  { label: "Later this year", value: "later-this-year" },
  { label: "I am exploring options", value: "exploring" },
] as const;

export const budgetOptions = [
  { label: "Yes", value: "yes" },
  { label: "Not yet", value: "not-yet" },
  { label: "I would prefer to discuss it", value: "discuss" },
] as const;

export const auditInterestOptions = [
  { label: "Yes, I would like to discuss it", value: "yes" },
  { label: "Maybe, I would like more information", value: "maybe" },
  { label: "Not at this stage", value: "no" },
] as const;

export type ManualTaskValue = (typeof manualTaskOptions)[number]["value"];
export type CurrentSystemValue = (typeof currentSystemOptions)[number]["value"];
export type DesiredOutcomeValue = (typeof desiredOutcomeOptions)[number]["value"];
export type TeamSizeValue = (typeof teamSizeOptions)[number]["value"];
export type FrequencyValue = (typeof frequencyOptions)[number]["value"];
export type UrgencyValue = (typeof urgencyOptions)[number]["value"];
export type BudgetValue = (typeof budgetOptions)[number]["value"];
export type AuditInterestValue = (typeof auditInterestOptions)[number]["value"];

export interface AssessmentFormValues {
  auditInterest: AuditInterestValue | "";
  budget: BudgetValue | "";
  businessEmail: string;
  businessName: string;
  companyFax: string;
  consent: boolean;
  contactName: string;
  currentHandler: string;
  currentSystems: CurrentSystemValue[];
  currentSystemsOther: string;
  delayImpact: string;
  desiredOutcomeOther: string;
  desiredOutcomes: DesiredOutcomeValue[];
  frequency: FrequencyValue | "";
  industry: string;
  manualTaskOther: string;
  manualTasks: ManualTaskValue[];
  phone: string;
  sourceCta: string;
  sourcePath: string;
  teamSize: TeamSizeValue | "";
  timeConsumingTask: string;
  urgency: UrgencyValue | "";
  website: string;
}

export const assessmentSteps = [
  { id: "business-context", label: "Business context" },
  { id: "operations", label: "Operations" },
  { id: "pain", label: "Pain" },
  { id: "current-systems", label: "Current systems" },
  { id: "desired-outcome", label: "Desired outcome" },
  { id: "commercial-qualification", label: "Next steps" },
  { id: "consent", label: "Submit" },
] as const;

export const assessmentEventNames = [
  "assessment_started",
  "assessment_step_completed",
  "assessment_submitted",
  "assessment_error",
  "assessment_cta_clicked",
] as const;

export const emptyAssessmentFormValues: AssessmentFormValues = {
  auditInterest: "",
  budget: "",
  businessEmail: "",
  businessName: "",
  companyFax: "",
  consent: false,
  contactName: "",
  currentHandler: "",
  currentSystems: [],
  currentSystemsOther: "",
  delayImpact: "",
  desiredOutcomeOther: "",
  desiredOutcomes: [],
  frequency: "",
  industry: "",
  manualTaskOther: "",
  manualTasks: [],
  phone: "",
  sourceCta: "direct-assessment",
  sourcePath: "/assessment",
  teamSize: "",
  timeConsumingTask: "",
  urgency: "",
  website: "",
};
