import type { Metadata } from "next";

import { AssessmentForm } from "@/components/assessment/assessment-form";
import { Container, Section } from "@/components/ui/layout";
import { Body, Display, Eyebrow } from "@/components/ui/typography";

export const metadata: Metadata = {
  description: "Tell Linfy Tech Solutions about the repetitive operational work your business wants to examine.",
  robots: {
    index: false,
    follow: false,
  },
  title: "Automation Assessment",
};

interface AssessmentPageProps {
  searchParams: Promise<{ source?: string | string[] }>;
}

export default async function AssessmentPage({ searchParams }: AssessmentPageProps) {
  const { source } = await searchParams;
  const sourceCta = typeof source === "string" && /^[a-z0-9-]{1,100}$/.test(source) ? source : "direct-assessment";

  return (
    <main id="main-content">
      <Section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <Container className="max-w-5xl">
          <div className="max-w-3xl">
            <Eyebrow>Automation Assessment</Eyebrow>
            <Display className="mt-3">
              Tell us what your business is still doing manually.
            </Display>
            <Body className="mt-4">
              This is a structured discovery form, not an automated diagnosis. It helps Linfy understand whether a paid Automation Audit from R1,500 may be appropriate.
            </Body>
          </div>
          <div className="mt-10">
            <AssessmentForm sourceCta={sourceCta} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
