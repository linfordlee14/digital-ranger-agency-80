# Infrastructure Handoff

## Scope

This repository is ready for an infrastructure owner to configure a confirmed staging environment first, then production. No production migration, deployment, or live submission has been performed from this workspace.

## Environment Checklist

Set values independently in Vercel Preview/Staging and Production. Do not copy production secrets into staging or local files.

| Variable | Visibility | Required in | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Public browser configuration | Local, Preview/Staging, Production | Identifies the matching Supabase project URL. |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Public browser configuration | Local, Preview/Staging, Production | Identifies the matching Supabase project. It is not a service-role credential. |
| `NEXT_PUBLIC_SITE_URL` | Public browser configuration | Preview/Staging, Production | Canonical site URL. Use the staging URL in staging and `https://linfytech.co.za` in production. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only secret | Preview/Staging, Production | Used only by the Next.js assessment route to call protected Supabase RPCs. Never use a `NEXT_PUBLIC_` prefix. |
| `RATE_LIMIT_SALT` | Server-only secret | Preview/Staging, Production | Unique, random, per-environment salt for hashed rate-limit keys. |
| `LEAD_DATA_RETENTION_MONTHS` | Server-only configuration | Preview/Staging, Production | Retention target, currently `24`; it does not create automatic deletion. |
| `ASSESSMENT_RATE_LIMIT_MAX_ATTEMPTS` | Server-only configuration | Optional | Defaults to `5` attempts in the configured window. |
| `ASSESSMENT_RATE_LIMIT_WINDOW_MINUTES` | Server-only configuration | Optional | Defaults to `15` minutes. |

CI intentionally does not require any of these variables. It tests static build, unit behavior, and browser form navigation without submitting to Supabase.

## Secret Boundaries

- `SUPABASE_SERVICE_ROLE_KEY` is imported only through `src/lib/supabase/server.ts`, which imports `server-only`.
- `RATE_LIMIT_SALT` is read only by `src/lib/assessment/submit.ts`, which imports `server-only`.
- Neither secret uses a `NEXT_PUBLIC_` prefix.
- The public Supabase URL and publishable key are intended for browser use, but RLS and revoked grants prevent direct browser access to assessment data.
- `.gitignore` excludes `.env`, `.env.local`, and all `*.local` files. Only the empty `.env.example` template is tracked.

## Supabase Migration

Target selection is a manual ownership decision. Confirm the intended Supabase project reference and whether it is staging or production before running any migration.

Apply migrations through the normal, ordered Supabase workflow so both migrations run:

1. `20260309044440_b0f7c5df-df49-4d36-98c6-4195840f7ed7.sql` creates the legacy contact table.
2. `20260915090000_assessment_funnel.sql` removes its anonymous policies, creates `leads`, `automation_assessments`, and `submission_rate_limits`, enables RLS, and grants the RPCs only to `service_role`.

The assessment migration is ready for this ordered workflow. Do not apply the second file by itself to a database that does not contain the legacy table.

## Vercel Deployment Readiness

Vercel detects this as a Next.js application; no `vercel.json` is required for the current architecture. Before deployment:

1. Link the repository to the intended Vercel project.
2. Set the environment variables above in the matching Vercel environment.
3. Confirm the staging `NEXT_PUBLIC_SITE_URL` differs from production.
4. Deploy staging after the Supabase migration and run the controlled submission check below.
5. Promote only after staging verification succeeds.

The current Vercel CLI session is logged out, so no project/environment association has been verified from this workspace.

## Controlled Submission Verification

Run this only after migration and variables are configured in staging:

1. Submit one assessment with a clearly identifiable controlled test business and email address.
2. Record the response ID and verify a matching `leads` row and `automation_assessments` row using an authorized database connection.
3. Verify `source_path`, `source_cta`, `consented_at`, `consent_version`, and `audit_status`.
4. Confirm a second rapid submission is handled according to the configured rate limit.
5. Confirm anonymous Supabase access cannot read or write `leads`, `automation_assessments`, or `submission_rate_limits`.
6. Record the lead and assessment IDs, then delete the controlled test records through an authorized database process.

Do not use a real customer as an integration test record.

## CI

`.github/workflows/ci.yml` runs without infrastructure credentials:

- lint
- typecheck
- unit tests
- production build
- production dependency audit
- Playwright assessment UI tests on Ubuntu with Chromium

## Remaining Manual Blockers

- Confirm the Supabase staging and production project references and ownership.
- Provide Supabase and Vercel access to the infrastructure operator.
- Configure the listed Vercel variables per environment.
- Apply and verify the migration in staging.
- Run a real controlled staging submission and remove its records.
- Review privacy/legal retention terms before treating the 24-month target as a policy.
