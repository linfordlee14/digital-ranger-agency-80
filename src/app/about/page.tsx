import type { Metadata } from "next";
import Image from "next/image";

import {
  ArrowRight,
  BrainCircuit,
  Check,
  Code2,
  FileText,
  GitMerge,
  MapPin,
  Search,
  ShieldCheck,
  UserRound,
  Workflow,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Body, Display, Eyebrow, Heading, SmallText } from "@/components/ui/typography";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
  description:
    "Learn about Linfy Tech Solutions, founded by Linford Musiyambodza, and its practical approach to technology, automation, AI, data engineering, and full-stack development.",
  openGraph: {
    description:
      "Learn about Linfy Tech Solutions, founded by Linford Musiyambodza, and its practical approach to technology.",
    title: "About Linfy Tech Solutions",
    type: "website",
    url: "/about",
  },
  title: "About Linfy Tech Solutions",
};

const capabilityIcons = [BrainCircuit, Code2, Workflow, GitMerge];
const approachIcons = [Search, GitMerge, FileText, Workflow, BrainCircuit, UserRound];
const boundaryIcons = [Workflow, ShieldCheck, GitMerge, UserRound];

export default function AboutPage() {
  return (
    <main id="main-content">
      <Section className="overflow-hidden bg-muted/60 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.75fr)] lg:gap-16">
            <div className="max-w-3xl">
              <Eyebrow>{aboutContent.hero.eyebrow}</Eyebrow>
              <Display className="mt-4">{aboutContent.hero.title}</Display>
              <Body className="mt-6 max-w-2xl text-lg leading-8">{aboutContent.hero.description}</Body>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/assessment?source=about-hero" size="large">
                  Start an Automation Audit
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ButtonLink>
                <ButtonLink href="/solutions" size="large" variant="secondary">
                  See our solutions
                </ButtonLink>
              </div>
            </div>

            <aside className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8" aria-label="Linfy company context">
              <div className="flex items-start justify-between gap-4">
                <SmallText className="font-semibold uppercase tracking-wide text-brand-blue">Founder-led</SmallText>
                <Badge variant="neutral">Current company context</Badge>
              </div>
              <div className="mt-6 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <UserRound aria-hidden="true" className="size-6 text-brand-blue" />
              </div>
              <Heading as="h2" className="mt-5 text-2xl">{aboutContent.founder.name}</Heading>
              <SmallText className="mt-2 text-foreground">{aboutContent.founder.role}</SmallText>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm leading-6 text-muted-foreground">{aboutContent.founder.location}</p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="founder-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-card lg:mx-0 lg:max-w-none">
              <Image
                alt={aboutContent.founder.imageAlt}
                className="aspect-[4/5] h-full w-full object-cover"
                height={916}
                sizes="(max-width: 1023px) min(100vw - 2.5rem, 28rem), 34vw"
                src={aboutContent.founder.imageUrl}
                width={832}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-slate-950/90 px-6 py-5 text-white">
                <p className="font-display text-xl font-semibold tracking-[-0.02em]">{aboutContent.founder.name}</p>
                <p className="mt-1 text-sm text-slate-200">{aboutContent.founder.role}</p>
              </figcaption>
            </figure>
            <div className="flex flex-col justify-center">
              <Eyebrow>Founder</Eyebrow>
              <Heading as="h2" className="mt-3" id="founder-heading">A practical starting point for technology work.</Heading>
              <Body className="mt-5">{aboutContent.founder.description}</Body>
              <div className="mt-7 border-l-2 border-brand-blue pl-5">
                <p className="text-sm font-semibold text-foreground">Founder-led, with the workflow in view.</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{aboutContent.founder.location}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="africa-vision-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow>Founder vision</Eyebrow>
              <Heading as="h2" className="mt-3" id="africa-vision-heading">{aboutContent.vision.title}</Heading>
              <p className="mt-6 font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-foreground">{aboutContent.vision.principle}</p>
              <Body className="mt-5">{aboutContent.vision.description}</Body>
            </div>
            <Card className="border-brand-blue/35 bg-primary/5">
              <CardHeader>
                <CardTitle>What this vision means in practice</CardTitle>
                <CardDescription>It is an approach Linfy aims to bring to technology work, not an already-achieved outcome.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {aboutContent.vision.points.map((point) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={point}>
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-blue" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="capabilities-heading">
        <Container>
          <SectionHeading
            description="These are Linfy's current technical scope areas. They describe capabilities that can be applied to a problem, not a catalog of validated products."
            eyebrow="What Linfy does"
            id="capabilities-heading"
            title="Technology capability, applied with context."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aboutContent.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];
              return (
                <Card className="h-full" key={capability.title}>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                    </div>
                    <CardTitle className="mt-4">{capability.title}</CardTitle>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <TextLink className="mt-8 inline-flex" href="/solutions">
            Explore current solution hypotheses
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </TextLink>
        </Container>
      </Section>

      <Section aria-labelledby="approach-heading">
        <Container>
          <SectionHeading
            description="Technology should serve the workflow, not the other way around. The approach starts with the real work before choosing a technical response."
            eyebrow="How Linfy approaches technology"
            id="approach-heading"
            title="From problem to useful technology."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aboutContent.technologyApproach.map((item, index) => {
              const Icon = approachIcons[index];
              return (
                <li className="rounded-xl border border-border bg-card p-6" key={item.number}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">{item.number}</span>
                    <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                  </div>
                  <Heading as="h3" className="mt-5">{item.title}</Heading>
                  <SmallText className="mt-3">{item.description}</SmallText>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="project-history-heading">
        <Container>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <Eyebrow>Verified project history</Eyebrow>
              <Heading as="h2" className="mt-3" id="project-history-heading">{aboutContent.projectHistory.title}</Heading>
              <Body className="mt-4">{aboutContent.projectHistory.description}</Body>
            </div>
            <TextLink className="mt-6 inline-flex shrink-0 lg:mt-0" href="/case-studies">
              {aboutContent.projectHistory.linkLabel}
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </TextLink>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="location-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <div>
              <Eyebrow>Location and company context</Eyebrow>
              <Heading as="h2" className="mt-3" id="location-heading">{aboutContent.location.title}</Heading>
            </div>
            <Card>
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin aria-hidden="true" className="size-5 text-brand-blue" />
                </div>
                <CardDescription className="mt-4">{aboutContent.location.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="boundaries-heading">
        <Container>
          <SectionHeading
            description="Clear boundaries help keep the conversation focused on the actual workflow rather than a pre-decided technology outcome."
            eyebrow="Trust through clear boundaries"
            id="boundaries-heading"
            title="Technology is not the answer by default."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aboutContent.boundaries.map((boundary, index) => {
              const Icon = boundaryIcons[index];
              return (
                <Card className="border-brand-blue/35 bg-primary/5 shadow-none" key={boundary.title}>
                  <CardHeader>
                    <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                    <CardTitle className="mt-4">{boundary.title}</CardTitle>
                    <CardDescription>{boundary.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-900 text-white" aria-labelledby="about-cta-heading">
        <Container className="max-w-4xl text-center">
          <Eyebrow className="text-brand-green">Automation Audit from R1,500</Eyebrow>
          <Heading as="h2" className="mt-3 text-white" id="about-cta-heading">Start with the workflow that needs attention.</Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The Automation Audit is the current starting point for exploring whether a practical next step may be appropriate.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/assessment?source=about-final" size="large">
              Start an Automation Audit
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href="/how-it-works" size="large" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
