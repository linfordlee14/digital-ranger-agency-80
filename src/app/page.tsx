import type { Metadata } from "next";

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ClipboardList,
  Code2,
  FileSpreadsheet,
  GitMerge,
  MapPin,
  MessagesSquare,
  Plug,
  ShieldCheck,
  UserRound,
  Workflow,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Disclosure } from "@/components/ui/disclosure";
import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Body, Display, Eyebrow, Heading, SmallText } from "@/components/ui/typography";
import { homeContent } from "@/content/home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description:
    "Explore Linfy Tech Solutions' Automation Audit for businesses reviewing repetitive operational work before committing to a build.",
  openGraph: {
    description:
      "Explore an Automation Audit for businesses reviewing repetitive operational work before committing to a build.",
    title: "Business Automation Audit",
    type: "website",
    url: "/",
  },
  title: "Business Automation Audit",
};

const problemIcons = [ClipboardList, MessagesSquare, GitMerge, FileSpreadsheet, Plug];
const solutionIcons = [BrainCircuit, Workflow, Code2, Plug, BarChart3];
const trustIcons = [UserRound, MapPin, Code2, ShieldCheck];

export default function HomePage() {
  return (
    <main id="main-content">
      <Section className="overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.75fr)] lg:gap-16">
            <div className="max-w-3xl">
              <Eyebrow>{homeContent.hero.eyebrow}</Eyebrow>
              <Display className="mt-4">{homeContent.hero.title}</Display>
              <Body className="mt-6 max-w-2xl text-lg leading-8">{homeContent.hero.description}</Body>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink data-analytics-event="assessment_cta_clicked" href="/assessment?source=homepage-hero" size="large">
                  {site.primaryCta}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ButtonLink>
                <ButtonLink href="#how-it-works" size="large" variant="secondary">
                  See how the process works
                </ButtonLink>
              </div>
            </div>

            <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-card sm:p-8" aria-label="Automation Audit starting point">
              <SmallText className="font-semibold uppercase tracking-wide text-brand-blue">Automation Audit</SmallText>
              <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-slate-900">{homeContent.audit.price}</p>
              <Body className="mt-4">
                Describe one workflow that feels too manual. The audit creates a structured place to examine possible next steps.
              </Body>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <SmallText>Paid discovery, before a build is discussed.</SmallText>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="problems-heading">
        <Container>
          <SectionHeading
            description="These are examples of operational work a business may want to examine. They are not presented as prevalence claims."
            eyebrow="Recognise the work"
            id="problems-heading"
            title="Manual work can hide in the handovers between systems."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.problems.map((problem, index) => {
              const Icon = problemIcons[index];
              return (
                <Card key={problem.title}>
                  <CardHeader>
                    <Icon aria-hidden="true" className="size-6 text-brand-blue" />
                    <CardTitle>{problem.title}</CardTitle>
                    <CardDescription>{problem.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" aria-labelledby="solutions-heading">
        <Container>
          <SectionHeading
            description="Linfy can explore a combination of approaches, based on the workflow rather than a predetermined tool."
            eyebrow="What Linfy does"
            id="solutions-heading"
            title="Practical ways to approach operational work."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {homeContent.solutions.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <Card className="shadow-none" key={solution.title}>
                  <CardHeader>
                    <Icon aria-hidden="true" className="size-6 text-brand-blue" />
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <TextLink className="mt-8 inline-flex" href="/solutions">
            Explore solution areas
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </TextLink>
        </Container>
      </Section>

      <Section aria-labelledby="audit-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow>Automation Audit</Eyebrow>
              <Heading as="h2" className="mt-3" id="audit-heading">
                Start with a clearer picture of the work.
              </Heading>
              <p className="mt-5 font-display text-3xl font-semibold tracking-[-0.025em] text-slate-900">{homeContent.audit.price}</p>
              <Body className="mt-4">{homeContent.audit.audience}</Body>
              <ButtonLink className="mt-8" data-analytics-event="assessment_cta_clicked" href="/assessment?source=homepage-audit" size="large">
                Start an Automation Audit
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="sm:col-span-2">
                <CardHeader>
                  <CardTitle>What you receive</CardTitle>
                  <CardDescription>A defined first step, not a promise of a particular outcome.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {homeContent.audit.deliverables.map((deliverable) => (
                      <li className="flex gap-3 text-base leading-7 text-slate-700" key={deliverable}>
                        <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-blue" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>During the audit</CardTitle>
                  <CardDescription>{homeContent.audit.process}</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>After the audit</CardTitle>
                  <CardDescription>{homeContent.audit.after}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" id="how-it-works" aria-labelledby="how-it-works-heading">
        <Container>
          <SectionHeading
            align="center"
            description="The exact scope depends on the workflow. This is the proposed path from first conversation to a possible next step."
            eyebrow="How it works"
            id="how-it-works-heading"
            title="A straightforward way to move from manual work to a plan."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {homeContent.process.map((step, index) => (
              <li className="rounded-xl border border-slate-200 bg-white p-6" key={step.title}>
                <p className="text-sm font-semibold text-brand-blue">0{index + 1}</p>
                <Heading as="h3" className="mt-4">
                  {step.title}
                </Heading>
                <SmallText className="mt-3">{step.description}</SmallText>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="proof-heading">
        <Container>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card sm:p-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <Eyebrow>Proof, published carefully</Eyebrow>
              <Heading as="h2" className="mt-3" id="proof-heading">
                {homeContent.proof.title}
              </Heading>
              <Body className="mt-4">
                {homeContent.proof.description}
              </Body>
            </div>
            <TextLink className="mt-6 inline-flex shrink-0 lg:mt-0" href="/case-studies">
              {homeContent.proof.linkLabel}
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </TextLink>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" aria-labelledby="why-linfy-heading">
        <Container>
          <SectionHeading
            description="These are the principles Linfy intends to demonstrate through the engagement, not claims of being the only or best option."
            eyebrow="Why Linfy"
            id="why-linfy-heading"
            title="A working approach built around the business problem."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.positioning.map((item, index) => (
              <Card className="shadow-none" key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="trust-heading">
        <Container>
          <SectionHeading
            description="Linfy is a founder-led company. The information below is limited to what is currently known and can be stated plainly."
            eyebrow="Who you are dealing with"
            id="trust-heading"
            title="Identity, scope, and an honest privacy boundary."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.trust.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={item.title}>
                  <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                  <Heading as="h3" className="mt-4">
                    {item.title}
                  </Heading>
                  <SmallText className="mt-3">{item.description}</SmallText>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50" aria-labelledby="faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions, answered plainly" id="faq-heading" title="Before you decide to start." />
          <div className="mt-8">
            {homeContent.faq.map((item, index) => (
              <Disclosure className={index === 0 ? "border-t" : undefined} key={item.question} title={item.question}>
                {item.answer}
              </Disclosure>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-900 text-white" aria-labelledby="final-cta-heading">
        <Container className="max-w-4xl text-center">
          <Eyebrow className="text-brand-green">Start with one workflow</Eyebrow>
          <Heading as="h2" className="mt-3 text-white" id="final-cta-heading">
            Tell us what your business is still doing manually.
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The next step is a focused conversation about one workflow, not a commitment to a solution before the work is understood.
          </p>
          <ButtonLink className="mt-8" data-analytics-event="assessment_cta_clicked" href="/assessment?source=homepage-final" size="large">
            {site.primaryCta}
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </Container>
      </Section>
    </main>
  );
}
