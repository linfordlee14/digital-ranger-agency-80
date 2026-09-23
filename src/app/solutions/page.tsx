import type { Metadata } from "next";

import {
  ArrowRight,
  Bot,
  Check,
  ClipboardList,
  FileSpreadsheet,
  GitMerge,
  MessageSquareMore,
  Repeat2,
  Route,
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
import { solutionsContent } from "@/content/solutions";

export const metadata: Metadata = {
  alternates: {
    canonical: "/solutions",
  },
  description:
    "Explore Linfy Tech Solutions' current automation solution areas for repetitive operational work, including workflow automation, AI, integrations, and custom software.",
  openGraph: {
    description:
      "Explore current automation solution areas for repetitive operational work, including workflow automation, AI, integrations, and custom software.",
    title: "Automation Solution Areas",
    type: "website",
    url: "/solutions",
  },
  title: "Automation Solution Areas",
};

const solutionIcons = [MessageSquareMore, Repeat2, FileSpreadsheet, Workflow, Bot, ClipboardList];
const expectationIcons = [Route, GitMerge, Workflow, Bot];

export default function SolutionsPage() {
  return (
    <main id="main-content">
      <Section className="overflow-hidden bg-muted/60 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.75fr)] lg:gap-16">
            <div className="max-w-3xl">
              <Eyebrow>{solutionsContent.hero.eyebrow}</Eyebrow>
              <Display className="mt-4">{solutionsContent.hero.title}</Display>
              <Body className="mt-6 max-w-2xl text-lg leading-8">{solutionsContent.hero.description}</Body>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/assessment?source=solutions-hero" size="large">
                  Start with an Automation Audit
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ButtonLink>
                <ButtonLink href="/how-it-works" size="large" variant="secondary">
                  See how it works
                </ButtonLink>
              </div>
            </div>

            <aside className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8" aria-label="How Linfy approaches solution exploration">
              <SmallText className="font-semibold uppercase tracking-wide text-brand-blue">A practical starting point</SmallText>
              <Heading as="h2" className="mt-4 text-2xl">Start with the problem, not the technology.</Heading>
              <div className="mt-6 space-y-3">
                {[
                  ["01", "Describe the work", "What repeats or gets delayed?"],
                  ["02", "Review the workflow", "Where do people and tools hand work over?"],
                  ["03", "Choose a next step", "What is worth exploring, if anything?"],
                ].map(([number, title, description]) => (
                  <div className="flex gap-3 rounded-lg border border-border bg-muted p-3" key={number}>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-brand-blue">{number}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="solution-overview-heading">
        <Container>
          <SectionHeading
            description="Each area is a current solution hypothesis. The right approach depends on the workflow, existing tools, and the role people need to keep playing."
            eyebrow="Explore solution areas"
            id="solution-overview-heading"
            title="Different operational problems call for different systems."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {solutionsContent.solutions.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <Card className="flex h-full flex-col" key={solution.slug}>
                  <CardHeader className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                      </div>
                      <Badge variant="neutral">Current hypothesis</Badge>
                    </div>
                    <CardTitle className="mt-4">{solution.title}</CardTitle>
                    <CardDescription>{solution.problem}</CardDescription>
                    <SmallText className="pt-2 text-foreground">{solution.summary}</SmallText>
                  </CardHeader>
                  <CardContent>
                    <TextLink href={`#${solution.slug}`}>
                      Explore solution
                      <ArrowRight aria-hidden="true" className="ml-2 inline size-4" />
                    </TextLink>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <div aria-label="Detailed solution areas">
        {solutionsContent.solutions.map((solution, index) => {
          const Icon = solutionIcons[index];
          const isMuted = index % 2 === 1;

          return (
            <Section className={isMuted ? "bg-muted/60" : undefined} id={solution.slug} key={solution.slug} aria-labelledby={`${solution.slug}-heading`}>
              <Container>
                <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon aria-hidden="true" className="size-6 text-brand-blue" />
                    </div>
                    <SmallText className="mt-6 font-semibold uppercase tracking-wide text-brand-blue">Current solution hypothesis</SmallText>
                    <Heading as="h2" className="mt-3" id={`${solution.slug}-heading`}>{solution.title}</Heading>
                    <Body className="mt-4">{solution.summary}</Body>
                    <ButtonLink className="mt-7" href={`/assessment?source=solutions-${solution.slug}`} variant="secondary">
                      Discuss this workflow
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </ButtonLink>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Card className="sm:col-span-2">
                      <CardHeader>
                        <CardTitle>What problem it can address</CardTitle>
                        <CardDescription>{solution.problem}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Body>{solution.whatItCanAddress}</Body>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>What may be involved</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {solution.involves.map((item) => (
                            <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-blue" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Who may explore it</CardTitle>
                        <CardDescription>{solution.audience}</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="border-brand-blue/35 bg-primary/5 sm:col-span-2">
                      <CardHeader>
                        <CardTitle>What it does not promise</CardTitle>
                        <CardDescription>{solution.doesNotPromise}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </Container>
            </Section>
          );
        })}
      </div>

      <Section className="bg-muted/60" aria-labelledby="workflow-heading">
        <Container>
          <SectionHeading
            align="center"
            description="The goal is a clearer workflow with the right level of automation and human review, not simply adding AI to a process."
            eyebrow="What done looks like"
            id="workflow-heading"
            title="A system should make the workflow clearer."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsContent.workflow.map((step, index) => (
              <li className="rounded-xl border border-border bg-card p-6" key={step.title}>
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">0{index + 1}</span>
                <Heading as="h3" className="mt-5">{step.title}</Heading>
                <SmallText className="mt-3">{step.description}</SmallText>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section aria-labelledby="expectations-heading">
        <Container>
          <SectionHeading
            description="Linfy does not recommend automation simply because automation is possible. The starting point is whether it serves the workflow.
"
            eyebrow="Expectation setting"
            id="expectations-heading"
            title="Keep the solution proportionate to the work."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutionsContent.expectations.map((expectation, index) => {
              const Icon = expectationIcons[index];
              return (
                <div className="border-t border-border pt-5" key={expectation.title}>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                  </div>
                  <Heading as="h3" className="mt-4">{expectation.title}</Heading>
                  <SmallText className="mt-3">{expectation.description}</SmallText>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="solutions-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Questions, answered plainly"
            id="solutions-faq-heading"
            title="Before you choose a solution area."
          />
          <div className="mt-8">
            {solutionsContent.faq.map((item, index) => (
              <Disclosure className={index === 0 ? "border-t" : undefined} key={item.question} title={item.question}>
                {item.answer}
              </Disclosure>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-900 text-white" aria-labelledby="solutions-cta-heading">
        <Container className="max-w-4xl text-center">
          <Eyebrow className="text-brand-green">Automation Audit from R1,500</Eyebrow>
          <Heading as="h2" className="mt-3 text-white" id="solutions-cta-heading">
            Start with the workflow that is still taking too much attention.
          </Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Share one operational problem and Linfy can review whether a paid Automation Audit may be an appropriate next step.
          </p>
          <ButtonLink className="mt-8" href="/assessment?source=solutions-final" size="large">
            Start your Automation Audit
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </Container>
      </Section>
    </main>
  );
}
