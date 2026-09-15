"use client";

import { useState, type FormEvent } from "react";

import { ArrowLeft, ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox, Field, FieldError, FieldHint, FieldLabel, Select, TextArea, TextInput } from "@/components/ui/form-field";
import { StatusMessage } from "@/components/ui/status-message";
import {
  assessmentSteps,
  auditInterestOptions,
  budgetOptions,
  currentSystemOptions,
  desiredOutcomeOptions,
  emptyAssessmentFormValues,
  frequencyOptions,
  manualTaskOptions,
  teamSizeOptions,
  urgencyOptions,
  type AssessmentFormValues,
} from "@/lib/assessment/options";

type FieldErrors = Partial<Record<keyof AssessmentFormValues, string[]>>;
type SelectableField = "manualTasks" | "currentSystems" | "desiredOutcomes";

interface SelectableOption {
  label: string;
  value: string;
}

interface AssessmentFormProps {
  sourceCta: string;
}

function firstError(errors: FieldErrors, field: keyof AssessmentFormValues) {
  return errors[field]?.[0];
}

function hasValidUrl(value: string) {
  if (!value.trim()) return true;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function validateStep(step: number, values: AssessmentFormValues): FieldErrors {
  const errors: FieldErrors = {};
  const required = (field: keyof AssessmentFormValues, message: string) => {
    const value = values[field];
    if (typeof value === "string" && !value.trim()) errors[field] = [message];
  };

  if (step === 0) {
    required("businessName", "Enter your business name.");
    required("industry", "Enter your industry or category.");
    if (!values.teamSize) errors.teamSize = ["Select your team size."];
    if (!hasValidUrl(values.website)) errors.website = ["Enter a valid website URL, including https://."];
    required("contactName", "Enter your contact name.");
    if (!values.businessEmail.trim()) errors.businessEmail = ["Enter your business email address."];
    else if (!/^\S+@\S+\.\S+$/.test(values.businessEmail)) errors.businessEmail = ["Enter a valid business email address."];
  }
  if (step === 1) {
    if (!values.manualTasks.length) errors.manualTasks = ["Select at least one manual task."];
    if (values.manualTasks.includes("other") && !values.manualTaskOther.trim()) {
      errors.manualTaskOther = ["Describe the other manual task."];
    }
  }
  if (step === 2) {
    required("timeConsumingTask", "Describe the task taking the most time.");
    if (!values.frequency) errors.frequency = ["Select how often this task happens."];
    required("currentHandler", "Tell us who currently handles it.");
    required("delayImpact", "Describe what happens when this is delayed or missed.");
  }
  if (step === 3) {
    if (!values.currentSystems.length) errors.currentSystems = ["Select at least one current system."];
    if (values.currentSystems.includes("other") && !values.currentSystemsOther.trim()) {
      errors.currentSystemsOther = ["Describe the other current system."];
    }
  }
  if (step === 4) {
    if (!values.desiredOutcomes.length) errors.desiredOutcomes = ["Select at least one desired outcome."];
    if (values.desiredOutcomes.includes("other") && !values.desiredOutcomeOther.trim()) {
      errors.desiredOutcomeOther = ["Describe the other desired outcome."];
    }
  }
  if (step === 5) {
    if (!values.urgency) errors.urgency = ["Select when you would like to address this."];
    if (!values.auditInterest) errors.auditInterest = ["Select whether you are interested in an Automation Audit."];
  }
  if (step === 6 && !values.consent) errors.consent = ["Consent is required before you can submit."];

  return errors;
}

function getFirstErrorStep(errors: FieldErrors) {
  const fieldSteps: Record<number, (keyof AssessmentFormValues)[]> = {
    0: ["businessName", "industry", "teamSize", "website", "contactName", "businessEmail", "phone"],
    1: ["manualTasks", "manualTaskOther"],
    2: ["timeConsumingTask", "frequency", "currentHandler", "delayImpact"],
    3: ["currentSystems", "currentSystemsOther"],
    4: ["desiredOutcomes", "desiredOutcomeOther"],
    5: ["urgency", "budget", "auditInterest"],
    6: ["consent"],
  };

  return Number(Object.entries(fieldSteps).find(([, fields]) => fields.some((field) => errors[field]?.length))?.[0] ?? 0);
}

function ChoiceCheckboxGroup({
  error,
  legend,
  onToggle,
  options,
  selected,
}: {
  error?: string;
  legend: string;
  onToggle: (value: string) => void;
  options: readonly SelectableOption[];
  selected: readonly string[];
}) {
  const errorId = `${legend.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="text-sm font-semibold text-slate-900">{legend}</legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const id = `${errorId}-${option.value}`;
          return (
            <label className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300" htmlFor={id} key={option.value}>
              <Checkbox checked={selected.includes(option.value)} id={id} onChange={() => onToggle(option.value)} />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      {error ? <FieldError className="mt-2" id={errorId}>{error}</FieldError> : null}
    </fieldset>
  );
}

export function AssessmentForm({ sourceCta }: AssessmentFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState<AssessmentFormValues>({ ...emptyAssessmentFormValues, sourceCta });

  const step = assessmentSteps[currentStep];
  const progress = ((currentStep + 1) / assessmentSteps.length) * 100;

  function updateText<K extends keyof AssessmentFormValues>(field: K, value: AssessmentFormValues[K]) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function toggleSelection(field: SelectableField, value: string) {
    setValues((previous) => {
      const selected = previous[field] as string[];
      const next = selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value];
      return { ...previous, [field]: next } as AssessmentFormValues;
    });
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function moveToNextStep() {
    const stepErrors = validateStep(currentStep, values);
    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      setFormError("Please review the highlighted fields before continuing.");
      return;
    }

    setErrors({});
    setFormError("");
    setCurrentStep((previous) => Math.min(previous + 1, assessmentSteps.length - 1));
  }

  function moveToPreviousStep() {
    setFormError("");
    setCurrentStep((previous) => Math.max(previous - 1, 0));
  }

  async function handleSubmit() {
    const stepErrors = validateStep(currentStep, values);
    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      setFormError("Please review the highlighted fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("/api/assessments", {
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const payload: unknown = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        return;
      }

      if (response.status === 422 && typeof payload === "object" && payload !== null && "fieldErrors" in payload) {
        const fieldErrors = (payload as { fieldErrors: FieldErrors }).fieldErrors;
        setErrors(fieldErrors);
        setCurrentStep(getFirstErrorStep(fieldErrors));
      }

      const message = typeof payload === "object" && payload !== null && "error" in payload && typeof payload.error === "string"
        ? payload.error
        : "We could not submit your assessment right now. Please try again later.";
      setFormError(message);
    } catch {
      setFormError("We could not submit your assessment right now. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (currentStep === assessmentSteps.length - 1) void handleSubmit();
    else moveToNextStep();
  }

  if (isSubmitted) {
    return (
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CheckCircle2 aria-hidden="true" className="size-8 text-brand-blue" />
          <CardTitle>Your submission was received.</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-7 text-slate-700">
            Linfy will review your submission and contact you about whether an Automation Audit is appropriate.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form data-analytics-event="assessment_started" noValidate onSubmit={handleFormSubmit}>
      <div className="mb-8">
        <div aria-label="Assessment progress" className="flex items-center justify-between gap-4" role="progressbar" aria-valuemax={assessmentSteps.length} aria-valuemin={1} aria-valuenow={currentStep + 1} aria-valuetext={`Step ${currentStep + 1} of ${assessmentSteps.length}: ${step.label}`}>
          <p className="text-sm font-semibold text-brand-blue">Step {currentStep + 1} of {assessmentSteps.length}</p>
          <p className="text-sm text-slate-600">{step.label}</p>
        </div>
        <div aria-hidden="true" className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-brand-blue transition-[width] motion-reduce:transition-none" style={{ width: `${progress}%` }} />
        </div>
        <ol className="mt-5 flex flex-wrap gap-2" aria-label="Assessment steps">
          {assessmentSteps.map((item, index) => (
            <li key={item.id}>
              <button
                aria-current={index === currentStep ? "step" : undefined}
                className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={index > currentStep}
                onClick={() => setCurrentStep(index)}
                type="button"
              >
                {index + 1}. {item.label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {formError ? (
        <StatusMessage className="mb-6" data-analytics-event="assessment_error" variant="error">
          <div className="flex gap-3">
            <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <span>{formError}</span>
          </div>
        </StatusMessage>
      ) : null}

      <input aria-hidden="true" autoComplete="off" className="absolute -left-[9999px] h-px w-px opacity-0" name="companyFax" onChange={(event) => updateText("companyFax", event.target.value)} tabIndex={-1} type="text" value={values.companyFax} />

      <Card>
        <CardHeader>
          <CardTitle>{step.label}</CardTitle>
        </CardHeader>
        <CardContent>
          {currentStep === 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field className="sm:col-span-2">
                <FieldLabel htmlFor="businessName" required>Business name</FieldLabel>
                <TextInput aria-describedby={firstError(errors, "businessName") ? "businessName-error" : undefined} error={Boolean(firstError(errors, "businessName"))} id="businessName" onChange={(event) => updateText("businessName", event.target.value)} required value={values.businessName} />
                {firstError(errors, "businessName") ? <FieldError id="businessName-error">{firstError(errors, "businessName")}</FieldError> : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="industry" required>Industry or category</FieldLabel>
                <TextInput aria-describedby={firstError(errors, "industry") ? "industry-error" : undefined} error={Boolean(firstError(errors, "industry"))} id="industry" onChange={(event) => updateText("industry", event.target.value)} required value={values.industry} />
                {firstError(errors, "industry") ? <FieldError id="industry-error">{firstError(errors, "industry")}</FieldError> : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="teamSize" required>Team size</FieldLabel>
                <Select aria-describedby={firstError(errors, "teamSize") ? "teamSize-error" : undefined} error={Boolean(firstError(errors, "teamSize"))} id="teamSize" onChange={(event) => updateText("teamSize", event.target.value as AssessmentFormValues["teamSize"])} required value={values.teamSize}>
                  <option value="">Select team size</option>
                  {teamSizeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
                {firstError(errors, "teamSize") ? <FieldError id="teamSize-error">{firstError(errors, "teamSize")}</FieldError> : null}
              </Field>
              <Field className="sm:col-span-2">
                <FieldLabel htmlFor="website">Website <span className="font-normal text-slate-600">(optional)</span></FieldLabel>
                <TextInput aria-describedby={firstError(errors, "website") ? "website-error" : "website-hint"} error={Boolean(firstError(errors, "website"))} id="website" onChange={(event) => updateText("website", event.target.value)} placeholder="https://example.com" type="url" value={values.website} />
                {firstError(errors, "website") ? <FieldError id="website-error">{firstError(errors, "website")}</FieldError> : <FieldHint id="website-hint">Include https:// if you add a website.</FieldHint>}
              </Field>
              <Field>
                <FieldLabel htmlFor="contactName" required>Contact name</FieldLabel>
                <TextInput aria-describedby={firstError(errors, "contactName") ? "contactName-error" : undefined} autoComplete="name" error={Boolean(firstError(errors, "contactName"))} id="contactName" onChange={(event) => updateText("contactName", event.target.value)} required value={values.contactName} />
                {firstError(errors, "contactName") ? <FieldError id="contactName-error">{firstError(errors, "contactName")}</FieldError> : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="businessEmail" required>Business email</FieldLabel>
                <TextInput aria-describedby={firstError(errors, "businessEmail") ? "businessEmail-error" : undefined} autoComplete="email" error={Boolean(firstError(errors, "businessEmail"))} id="businessEmail" onChange={(event) => updateText("businessEmail", event.target.value)} required type="email" value={values.businessEmail} />
                {firstError(errors, "businessEmail") ? <FieldError id="businessEmail-error">{firstError(errors, "businessEmail")}</FieldError> : null}
              </Field>
              <Field className="sm:col-span-2">
                <FieldLabel htmlFor="phone">Phone or WhatsApp <span className="font-normal text-slate-600">(optional)</span></FieldLabel>
                <TextInput autoComplete="tel" id="phone" onChange={(event) => updateText("phone", event.target.value)} type="tel" value={values.phone} />
              </Field>
            </div>
          ) : null}

          {currentStep === 1 ? (
            <div className="space-y-5">
              <ChoiceCheckboxGroup error={firstError(errors, "manualTasks")} legend="What does your business currently do manually?" onToggle={(value) => toggleSelection("manualTasks", value)} options={manualTaskOptions} selected={values.manualTasks} />
              {values.manualTasks.includes("other") ? (
                <Field>
                  <FieldLabel htmlFor="manualTaskOther" required>Other manual task</FieldLabel>
                  <TextInput aria-describedby={firstError(errors, "manualTaskOther") ? "manualTaskOther-error" : undefined} error={Boolean(firstError(errors, "manualTaskOther"))} id="manualTaskOther" onChange={(event) => updateText("manualTaskOther", event.target.value)} required value={values.manualTaskOther} />
                  {firstError(errors, "manualTaskOther") ? <FieldError id="manualTaskOther-error">{firstError(errors, "manualTaskOther")}</FieldError> : null}
                </Field>
              ) : null}
            </div>
          ) : null}

          {currentStep === 2 ? (
            <div className="space-y-5">
              <Field>
                <FieldLabel htmlFor="timeConsumingTask" required>Which task takes the most time?</FieldLabel>
                <TextArea aria-describedby={firstError(errors, "timeConsumingTask") ? "timeConsumingTask-error" : undefined} error={Boolean(firstError(errors, "timeConsumingTask"))} id="timeConsumingTask" onChange={(event) => updateText("timeConsumingTask", event.target.value)} required value={values.timeConsumingTask} />
                {firstError(errors, "timeConsumingTask") ? <FieldError id="timeConsumingTask-error">{firstError(errors, "timeConsumingTask")}</FieldError> : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="frequency" required>How frequently does it happen?</FieldLabel>
                <Select aria-describedby={firstError(errors, "frequency") ? "frequency-error" : undefined} error={Boolean(firstError(errors, "frequency"))} id="frequency" onChange={(event) => updateText("frequency", event.target.value as AssessmentFormValues["frequency"])} required value={values.frequency}>
                  <option value="">Select frequency</option>
                  {frequencyOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
                {firstError(errors, "frequency") ? <FieldError id="frequency-error">{firstError(errors, "frequency")}</FieldError> : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="currentHandler" required>Who currently handles it?</FieldLabel>
                <TextInput aria-describedby={firstError(errors, "currentHandler") ? "currentHandler-error" : undefined} error={Boolean(firstError(errors, "currentHandler"))} id="currentHandler" onChange={(event) => updateText("currentHandler", event.target.value)} required value={values.currentHandler} />
                {firstError(errors, "currentHandler") ? <FieldError id="currentHandler-error">{firstError(errors, "currentHandler")}</FieldError> : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="delayImpact" required>What happens when it is delayed or missed?</FieldLabel>
                <TextArea aria-describedby={firstError(errors, "delayImpact") ? "delayImpact-error" : undefined} error={Boolean(firstError(errors, "delayImpact"))} id="delayImpact" onChange={(event) => updateText("delayImpact", event.target.value)} required value={values.delayImpact} />
                {firstError(errors, "delayImpact") ? <FieldError id="delayImpact-error">{firstError(errors, "delayImpact")}</FieldError> : null}
              </Field>
            </div>
          ) : null}

          {currentStep === 3 ? (
            <div className="space-y-5">
              <ChoiceCheckboxGroup error={firstError(errors, "currentSystems")} legend="What tools do you currently use?" onToggle={(value) => toggleSelection("currentSystems", value)} options={currentSystemOptions} selected={values.currentSystems} />
              {values.currentSystems.includes("other") ? (
                <Field>
                  <FieldLabel htmlFor="currentSystemsOther" required>Other current system</FieldLabel>
                  <TextInput aria-describedby={firstError(errors, "currentSystemsOther") ? "currentSystemsOther-error" : undefined} error={Boolean(firstError(errors, "currentSystemsOther"))} id="currentSystemsOther" onChange={(event) => updateText("currentSystemsOther", event.target.value)} required value={values.currentSystemsOther} />
                  {firstError(errors, "currentSystemsOther") ? <FieldError id="currentSystemsOther-error">{firstError(errors, "currentSystemsOther")}</FieldError> : null}
                </Field>
              ) : null}
            </div>
          ) : null}

          {currentStep === 4 ? (
            <div className="space-y-5">
              <ChoiceCheckboxGroup error={firstError(errors, "desiredOutcomes")} legend="What would you like to improve?" onToggle={(value) => toggleSelection("desiredOutcomes", value)} options={desiredOutcomeOptions} selected={values.desiredOutcomes} />
              {values.desiredOutcomes.includes("other") ? (
                <Field>
                  <FieldLabel htmlFor="desiredOutcomeOther" required>Other desired outcome</FieldLabel>
                  <TextInput aria-describedby={firstError(errors, "desiredOutcomeOther") ? "desiredOutcomeOther-error" : undefined} error={Boolean(firstError(errors, "desiredOutcomeOther"))} id="desiredOutcomeOther" onChange={(event) => updateText("desiredOutcomeOther", event.target.value)} required value={values.desiredOutcomeOther} />
                  {firstError(errors, "desiredOutcomeOther") ? <FieldError id="desiredOutcomeOther-error">{firstError(errors, "desiredOutcomeOther")}</FieldError> : null}
                </Field>
              ) : null}
            </div>
          ) : null}

          {currentStep === 5 ? (
            <div className="space-y-6">
              <Field>
                <FieldLabel htmlFor="urgency" required>How soon would you like to address this?</FieldLabel>
                <Select aria-describedby={firstError(errors, "urgency") ? "urgency-error" : undefined} error={Boolean(firstError(errors, "urgency"))} id="urgency" onChange={(event) => updateText("urgency", event.target.value as AssessmentFormValues["urgency"])} required value={values.urgency}>
                  <option value="">Select a timeframe</option>
                  {urgencyOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
                {firstError(errors, "urgency") ? <FieldError id="urgency-error">{firstError(errors, "urgency")}</FieldError> : null}
              </Field>
              <Field>
                <FieldLabel htmlFor="budget">Have you allocated a budget? <span className="font-normal text-slate-600">(optional)</span></FieldLabel>
                <Select id="budget" onChange={(event) => updateText("budget", event.target.value as AssessmentFormValues["budget"])} value={values.budget}>
                  <option value="">Prefer not to say</option>
                  {budgetOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
              </Field>
              <fieldset aria-describedby={firstError(errors, "auditInterest") ? "auditInterest-error" : undefined}>
                <legend className="text-sm font-semibold text-slate-900">Would you be interested in a paid Automation Audit starting from R1,500?</legend>
                <div className="mt-3 space-y-3">
                  {auditInterestOptions.map((option) => (
                    <label className="flex min-h-12 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300" htmlFor={`auditInterest-${option.value}`} key={option.value}>
                      <input checked={values.auditInterest === option.value} className="size-5 border-slate-300 text-brand-blue accent-[#0A6ED1]" id={`auditInterest-${option.value}`} name="auditInterest" onChange={() => updateText("auditInterest", option.value)} type="radio" value={option.value} />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
                {firstError(errors, "auditInterest") ? <FieldError id="auditInterest-error">{firstError(errors, "auditInterest")}</FieldError> : null}
              </fieldset>
            </div>
          ) : null}

          {currentStep === 6 ? (
            <div className="space-y-5">
              <StatusMessage variant="info">
                Linfy will review your submission and contact you about whether an Automation Audit is appropriate. Submitting this form does not guarantee an audit, automation, savings, or a particular outcome.
              </StatusMessage>
              <fieldset aria-describedby={firstError(errors, "consent") ? "consent-error" : undefined}>
                <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700" htmlFor="consent">
                  <Checkbox checked={values.consent} id="consent" onChange={(event) => updateText("consent", event.target.checked)} />
                  <span>I agree that Linfy may use this submission to review whether an Automation Audit is appropriate and contact me about it.</span>
                </label>
                {firstError(errors, "consent") ? <FieldError id="consent-error">{firstError(errors, "consent")}</FieldError> : null}
              </fieldset>
              <FieldHint>Privacy Policy and detailed data-handling information will be published with the formal legal pages. Linfy does not claim POPIA compliance.</FieldHint>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button disabled={currentStep === 0 || isSubmitting} onClick={moveToPreviousStep} type="button" variant="tertiary">
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back
        </Button>
        {currentStep === assessmentSteps.length - 1 ? (
          <Button data-analytics-event="assessment_submitted" isLoading={isSubmitting} size="large" type="submit">
            Submit assessment
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        ) : (
          <Button data-analytics-event="assessment_step_completed" onClick={moveToNextStep} size="large" type="button">
            Continue to {assessmentSteps[currentStep + 1]?.label.toLowerCase()}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        )}
      </div>
    </form>
  );
}
