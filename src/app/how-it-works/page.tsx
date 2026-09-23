import type { Metadata } from "next";

import {
  ArrowRight,
  Check,
  ClipboardList,
  FileText,
  GitMerge,
  Lightbulb,
  Route,
  Search,
  UsersRound,
  Workflow,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Disclosure } from "@/components/ui/disclosure";
import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Body, Display, Eyebrow, Heading, SmallText } from "@/components/ui/typography";
import { howItWorksContent } from "@/content/how-it-works";

export const metadata: Metadata = {
  alternates: {
    canonical: "/how-it-works",
  },
  description:
    "Understand how Linfy Tech Solutions approaches operational problems, Automation Audits, practical workflow design, and possible next steps.",
  openGraph: {
    description:
      "Understand Linfy's approach to operational problems, Automation Audits, practical workflow design, and possible next steps.",
    title: "How Linfy Works",
    type: "website",
    url: "/how-it-works",
  },
  title: "How Linfy Works",
};

const journeyIcons = [Search, Lightbulb, GitMerge, Workflow, Route];
const bringIcons = [ClipboardList, FileText, UsersRound, Lightbulb, Route];
const linfyDoesIcons = [GitMerge, Workflow, UsersRound, Lightbulb];

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <Section className="overflow-hidden bg-muted/60 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.75fr)] lg:gap-16">
            <div className="max-w-3xl">
              <Eyebrow>{howItWorksContent.hero.eyebrow}</Eyebrow>
              <Display className="mt-4">{howItWorksContent.hero.title}</Display>
              <Body className="mt-6 max-w-2xl text-lg leading-8">{howItWorksContent.hero.description}</Body>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/assessment?source=how-it-works-hero" size="large">
                  Start with an Automation Audit
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ButtonLink>
                <ButtonLink href="/solutions" size="large" variant="secondary">
                  Explore Solutions
                </ButtonLink>
              </div>
            </div>

            <aside className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8" aria-label="Linfy process overview">
              <div className="flex items-start justify-between gap-4">
                <SmallText className="font-semibold uppercase tracking-wide text-brand-blue">The broader approach</SmallText>
                <Badge variant="neutral">Five stages</Badge>
              </div>
              <Heading as="h2" className="mt-4 text-2xl">A process, not a predetermined outcome.</Heading>
              <ol className="mt-6 space-y-2">
                {howItWorksContent.journey.map((stage) => (
                  <li className="flex items-center gap-3 rounded-lg border border-border bg-muted p-3" key={stage.number}>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-brand-blue">{stage.number}</span>
                    <span className="text-sm font-semibold text-foreground">{stage.title}</span>
                  </li>
                ))}
              </ol>
              <SmallText className="mt-5">Not every workflow progresses through every stage.</SmallText>
            </aside>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="journey-heading">
        <Container>
          <SectionHeading
            description="These stages describe the broader Linfy approach. They are a way to understand the work, not a promise that every engagement reaches implementation or ongoing improvement."
            eyebrow="The journey"
            id="journey-heading"
            title="Discover, identify, design, automate, improve."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorksContent.journey.map((stage, index) => {
              const Icon = journeyIcons[index];
              return (
                <li className="relative rounded-xl border border-border bg-card p-6" key={stage.number}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">{stage.number}</span>
                    <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                  </div>
                  <Heading as="h3" className="mt-5">{stage.title}</Heading>
                  <SmallText className="mt-3">{stage.description}</SmallText>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">At this stage</p>
                    <p className="mt-2 text-sm leading-6 text-foreground">{stage.whatHappens}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="audit-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow>Start with the Automation Audit</Eyebrow>
              <Heading as="h2" className="mt-3" id="audit-heading">A structured discovery step before a build.</Heading>
              <p className="mt-5 font-display text-3xl font-semibold tracking-[-0.025em] text-foreground">{howItWorksContent.audit.price}</p>
              <Body className="mt-4">{howItWorksContent.audit.description}</Body>
              <ButtonLink className="mt-8" href="/assessment?source=how-it-works-audit" size="large">
                Start your Automation Audit
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>During the audit</CardTitle>
                <CardDescription>A defined first conversation, not an AI diagnosis or an automatic implementation commitment.</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {howItWorksContent.audit.stages.map((stage, index) => (
                    <li className="flex gap-4" key={stage}>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-brand-blue">0{index + 1}</span>
                      <p className="pt-1 text-sm leading-6 text-foreground">{stage}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="bring-heading">
        <Container>
          <SectionHeading
            description="You do not need to arrive with a technical answer. A practical description of the work and its context is enough to begin the conversation."
            eyebrow="What you bring"
            id="bring-heading"
            title="Start with what you already know about the work."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {howItWorksContent.whatYouBring.map((item, index) => {
              const Icon = bringIcons[index];
              return (
                <Card className="h-full" key={item.title}>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                    </div>
                    <CardTitle className="mt-4">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="linfy-role-heading">
        <Container>
          <SectionHeading
            description="Linfy helps translate operational problems into practical technical options. The technology follows the problem, not the other way around."
            eyebrow="What Linfy does"
            id="linfy-role-heading"
            title="Make the technical options understandable."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {howItWorksContent.linfyDoes.map((item, index) => {
              const Icon = linfyDoesIcons[index];
              return (
                <div className="border-t border-border pt-5" key={item.title}>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                  </div>
                  <Heading as="h3" className="mt-4">{item.title}</Heading>
                  <SmallText className="mt-3">{item.description}</SmallText>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="after-audit-heading">
        <Container>
          <SectionHeading
            description="The audit is a decision-making and discovery step, not an automatic commitment to a build. More than one next step can be reasonable depending on the workflow."
            eyebrow="What happens after the audit"
            id="after-audit-heading"
            title="The next step depends on what the workflow shows."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {howItWorksContent.afterAudit.map((outcome) => (
              <Card className="h-full" key={outcome.label}>
                <CardHeader>
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-brand-blue">{outcome.label}</span>
                  <CardTitle className="mt-4">{outcome.title}</CardTitle>
                  <CardDescription>{outcome.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="expectations-heading">
        <Container>
          <SectionHeading
            description="The goal is to increase confidence in the decision, rather than recommend technology before the workflow is understood."
            eyebrow="What Linfy does not promise"
            id="expectations-heading"
            title="A more considered starting point."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {howItWorksContent.expectations.map((expectation) => (
              <Card className="border-brand-blue/35 bg-primary/5 shadow-none" key={expectation.title}>
                <CardHeader>
                  <CardTitle>{expectation.title}</CardTitle>
                  <CardDescription>{expectation.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="how-it-works-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Questions, answered plainly"
            id="how-it-works-faq-heading"
            title="Before you start the conversation."
          />
          <div className="mt-8">
            {howItWorksContent.faq.map((item, index) => (
              <Disclosure className={index === 0 ? "border-t" : undefined} key={item.question} title={item.question}>
                {item.answer}
              </Disclosure>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-900 text-white" aria-labelledby="how-it-works-cta-heading">
        <Container className="max-w-4xl text-center">
          <Eyebrow className="text-brand-green">Automation Audit from R1,500</Eyebrow>
          <Heading as="h2" className="mt-3 text-white" id="how-it-works-cta-heading">
            Start by understanding the workflow.
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The Automation Audit is the current starting point for exploring whether a practical automation opportunity may exist.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/assessment?source=how-it-works-final" size="large">
              Start your Automation Audit
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href="/solutions" size="large" variant="secondary">
              Explore Solutions
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
