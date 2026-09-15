# Linfy Tech Solutions

The Linfy Tech commercial website is built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Local Development

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env.local` and set the required values.
3. Run `npm run dev`.

## Commands

- `npm run dev` starts the development server.
- `npm run lint` checks the codebase.
- `npm run typecheck` checks TypeScript types.
- `npm run test` runs server-side assessment tests.
- `npm run test:e2e` runs browser assessment tests on a supported environment with Playwright Chromium installed.
- `npm run build` creates the production build.
- `npm run start` runs the production build locally.

## Configuration

Configuration is supplied through environment variables. Never commit `.env.local` or server-only credentials. The approved production domain is `https://linfytech.co.za`.

### Assessment Environment Variables

Set these values in the target Vercel environment before enabling real assessment submissions:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL. This is public project configuration.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: Supabase publishable key. This is public project configuration.
- `SUPABASE_SERVICE_ROLE_KEY`: server-only Supabase service-role key. Never prefix it with `NEXT_PUBLIC_`.
- `RATE_LIMIT_SALT`: unique random server-only value used to hash rate-limit keys.
- `LEAD_DATA_RETENTION_MONTHS`: configurable retention target. The current approved target is `24`, subject to privacy/legal review.

### Assessment Production Integration Gate

1. Identify the intended Supabase staging or production project before making any change.
2. Authenticate the Supabase CLI, link only that confirmed project, and apply `supabase/migrations/20260915090000_assessment_funnel.sql` through the normal migration workflow.
3. Confirm the migration removes the legacy anonymous `contact_submissions` policies and creates `leads`, `automation_assessments`, and `submission_rate_limits`.
4. Set the assessment environment variables in the matching Vercel environment, then redeploy.
5. Submit one controlled assessment using a clearly identifiable test business/email. Verify the lead, assessment, source attribution, consent timestamp, and audit status through a privileged database connection only.
6. Confirm anonymous access cannot read or write protected assessment tables, and verify that a rapid repeat receives a rate-limit response.
7. Record the test lead/assessment IDs and remove the controlled records through an authorized database process once verification is complete.
8. Run `npm run test:e2e` in CI or another supported environment with Playwright Chromium installed. macOS 12 cannot install the required Playwright Chromium binary.

Do not use the service-role key in browser code, analytics scripts, or public environment variables.

See [Infrastructure Handoff](docs/infrastructure-handoff.md) for the staging/production checklist, variable ownership, and verification steps.
