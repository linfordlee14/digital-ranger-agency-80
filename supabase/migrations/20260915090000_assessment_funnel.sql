-- Public browser writes are replaced by a server-only service-role submission path.
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admin read access" ON public.contact_submissions;
REVOKE ALL ON TABLE public.contact_submissions FROM anon, authenticated;

CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL CHECK (char_length(business_name) BETWEEN 2 AND 120),
  industry TEXT NOT NULL CHECK (char_length(industry) BETWEEN 2 AND 100),
  team_size TEXT NOT NULL,
  website TEXT,
  contact_name TEXT NOT NULL CHECK (char_length(contact_name) BETWEEN 2 AND 120),
  business_email TEXT NOT NULL CHECK (char_length(business_email) BETWEEN 3 AND 254),
  phone TEXT,
  lead_status TEXT NOT NULL DEFAULT 'new' CHECK (lead_status IN ('new', 'contacted', 'qualified', 'not-qualified', 'won', 'lost')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.automation_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  manual_tasks TEXT[] NOT NULL,
  manual_task_other TEXT,
  time_consuming_task TEXT NOT NULL CHECK (char_length(time_consuming_task) BETWEEN 2 AND 500),
  frequency TEXT NOT NULL,
  current_handler TEXT NOT NULL CHECK (char_length(current_handler) BETWEEN 2 AND 200),
  delay_impact TEXT NOT NULL CHECK (char_length(delay_impact) BETWEEN 2 AND 500),
  current_systems TEXT[] NOT NULL,
  current_systems_other TEXT,
  desired_outcomes TEXT[] NOT NULL,
  desired_outcome_other TEXT,
  urgency TEXT NOT NULL,
  budget_status TEXT,
  audit_interest TEXT NOT NULL CHECK (audit_interest IN ('yes', 'maybe', 'no')),
  audit_status TEXT NOT NULL DEFAULT 'not-requested' CHECK (audit_status IN ('not-requested', 'interested', 'pending-review', 'offered', 'accepted', 'declined')),
  consent_version TEXT NOT NULL,
  consented_at TIMESTAMPTZ NOT NULL,
  source_path TEXT NOT NULL,
  source_cta TEXT,
  schema_version INTEGER NOT NULL DEFAULT 1,
  answers JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.submission_rate_limits (
  endpoint TEXT NOT NULL,
  key_hash TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 1 CHECK (attempts >= 1),
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (endpoint, key_hash)
);

CREATE INDEX leads_business_email_idx ON public.leads (business_email);
CREATE INDEX leads_status_created_at_idx ON public.leads (lead_status, created_at DESC);
CREATE INDEX automation_assessments_lead_id_idx ON public.automation_assessments (lead_id);
CREATE INDEX automation_assessments_audit_status_idx ON public.automation_assessments (audit_status, created_at DESC);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER leads_set_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER automation_assessments_set_updated_at
BEFORE UPDATE ON public.automation_assessments
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submission_rate_limits ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.leads, public.automation_assessments, public.submission_rate_limits FROM anon, authenticated;

CREATE OR REPLACE FUNCTION public.consume_assessment_submission_rate_limit(
  p_endpoint TEXT,
  p_key_hash TEXT,
  p_max_attempts INTEGER,
  p_window_minutes INTEGER
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_attempts INTEGER;
BEGIN
  INSERT INTO public.submission_rate_limits (endpoint, key_hash, attempts, window_started_at)
  VALUES (p_endpoint, p_key_hash, 1, now())
  ON CONFLICT (endpoint, key_hash) DO UPDATE
  SET
    attempts = CASE
      WHEN public.submission_rate_limits.window_started_at <= now() - make_interval(mins => p_window_minutes) THEN 1
      ELSE public.submission_rate_limits.attempts + 1
    END,
    window_started_at = CASE
      WHEN public.submission_rate_limits.window_started_at <= now() - make_interval(mins => p_window_minutes) THEN now()
      ELSE public.submission_rate_limits.window_started_at
    END
  RETURNING attempts INTO v_attempts;

  RETURN v_attempts <= p_max_attempts;
END;
$$;

CREATE OR REPLACE FUNCTION public.submit_automation_assessment(p_submission JSONB)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_lead_id UUID;
  v_assessment_id UUID;
BEGIN
  IF COALESCE((p_submission->>'consent')::BOOLEAN, false) IS NOT TRUE THEN
    RAISE EXCEPTION 'Consent is required.';
  END IF;

  INSERT INTO public.leads (
    business_name,
    industry,
    team_size,
    website,
    contact_name,
    business_email,
    phone
  ) VALUES (
    p_submission->>'businessName',
    p_submission->>'industry',
    p_submission->>'teamSize',
    NULLIF(p_submission->>'website', ''),
    p_submission->>'contactName',
    p_submission->>'businessEmail',
    NULLIF(p_submission->>'phone', '')
  ) RETURNING id INTO v_lead_id;

  INSERT INTO public.automation_assessments (
    lead_id,
    manual_tasks,
    manual_task_other,
    time_consuming_task,
    frequency,
    current_handler,
    delay_impact,
    current_systems,
    current_systems_other,
    desired_outcomes,
    desired_outcome_other,
    urgency,
    budget_status,
    audit_interest,
    audit_status,
    consent_version,
    consented_at,
    source_path,
    source_cta,
    answers
  ) VALUES (
    v_lead_id,
    ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_submission->'manualTasks', '[]'::JSONB))),
    NULLIF(p_submission->>'manualTaskOther', ''),
    p_submission->>'timeConsumingTask',
    p_submission->>'frequency',
    p_submission->>'currentHandler',
    p_submission->>'delayImpact',
    ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_submission->'currentSystems', '[]'::JSONB))),
    NULLIF(p_submission->>'currentSystemsOther', ''),
    ARRAY(SELECT jsonb_array_elements_text(COALESCE(p_submission->'desiredOutcomes', '[]'::JSONB))),
    NULLIF(p_submission->>'desiredOutcomeOther', ''),
    p_submission->>'urgency',
    NULLIF(p_submission->>'budget', ''),
    p_submission->>'auditInterest',
    CASE p_submission->>'auditInterest'
      WHEN 'yes' THEN 'pending-review'
      WHEN 'maybe' THEN 'interested'
      ELSE 'not-requested'
    END,
    'assessment-v1',
    now(),
    p_submission->>'sourcePath',
    NULLIF(p_submission->>'sourceCta', ''),
    p_submission
  ) RETURNING id INTO v_assessment_id;

  RETURN v_assessment_id;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_assessment_submission_rate_limit(TEXT, TEXT, INTEGER, INTEGER) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.submit_automation_assessment(JSONB) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_assessment_submission_rate_limit(TEXT, TEXT, INTEGER, INTEGER) TO service_role;
GRANT EXECUTE ON FUNCTION public.submit_automation_assessment(JSONB) TO service_role;
