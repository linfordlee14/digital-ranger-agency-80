import type { Metadata } from "next";
import Image from "next/image";

import {
  ArrowRight,
  Bot,
  Check,
  Database,
  Globe2,
  Mail,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Body, Display, Eyebrow, Heading, SmallText } from "@/components/ui/typography";

export const metadata: Metadata = {
  alternates: {
    canonical: "/case-studies/linfy-beacon",
  },
  description:
    "Explore Linfy Beacon, a local prototype for business discovery, website assessment, and considered outreach drafting.",
  openGraph: {
    description:
      "Explore Linfy Beacon, a local prototype for business discovery, website assessment, and considered outreach drafting.",
    title: "Linfy Beacon Case Study",
    type: "article",
    url: "/case-studies/linfy-beacon",
  },
  title: "Linfy Beacon Case Study",
};

const capabilities = [
  {
    description: "A locally run Python module queries public map data, inserts new lead records, and skips matching name-and-address conflicts. Records without an address may still duplicate.",
    icon: MapPinned,
    title: "Business discovery",
  },
  {
    description: "A separate assessment module generates notes from available website data or a missing website URL in the source record.",
    icon: Globe2,
    title: "Website assessment",
  },
  {
    description: "A drafting module uses a stored template and an AI-assisted rewrite of assessment notes to prepare an email draft.",
    icon: Sparkles,
    title: "Considered drafting",
  },
  {
    description: "A local sender module attempts to log sends on a best-effort basis. A send may succeed even if its log entry fails.",
    icon: Mail,
    title: "Outbound groundwork",
  },
];

const stack = [
  { description: "Local discovery, assessment, drafting, and sender modules.", icon: Wrench, title: "Python" },
  { description: "Lead state, templates, and outreach-log data model.", icon: Database, title: "Supabase" },
  { description: "Public business discovery by category and mapped area.", icon: MapPinned, title: "OpenStreetMap" },
  { description: "Website-content extraction used by the assessment module.", icon: Globe2, title: "Tavily" },
  { description: "Prompted rewrite of assessment notes for an email draft.", icon: Bot, title: "Anthropic" },
  { description: "A local email delivery integration module.", icon: Mail, title: "Resend" },
];

export default function LinfyBeaconCaseStudyPage() {
  return (
    <main id="main-content">
      <Section className="overflow-hidden bg-muted/60 py-14 sm:py-20 lg:py-24">
        <Container>
          <TextLink className="inline-flex" href="/case-studies">
            Case studies
            <ArrowRight aria-hidden="true" className="ml-2 size-4 rotate-180" />
          </TextLink>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:gap-16">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Linfy Beacon</Eyebrow>
                <Badge variant="warning">Local prototype</Badge>
              </div>
              <Display className="mt-4">A clearer way to find businesses that may be hard to find online.</Display>
              <Body className="mt-6 max-w-2xl text-lg leading-8">
                Linfy Beacon is a locally developed prototype with separate modules for public business discovery, website assessment, and AI-assisted outreach drafting. Integrated orchestration remains planned.
              </Body>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <ButtonLink href="/assessment?source=case-study-linfy-beacon" size="large">
                  Start an Automation Audit
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ButtonLink>
                <ButtonLink href="https://wa.me/27613960466" rel="noopener noreferrer" size="large" target="_blank" variant="secondary">
                  <MessageCircle aria-hidden="true" className="size-4" />
                  Chat with Linfy on WhatsApp
                </ButtonLink>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Have a question before starting? Message us directly on WhatsApp.</p>
            </div>
            <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <Image
                alt="Conceptual artwork showing Linfy Beacon discovery, assessment, drafting, and record-keeping modules"
                className="h-auto w-full"
                height={900}
                priority
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 54vw"
                src="/case-studies/linfy-beacon/hero-artwork.svg"
                width={1600}
              />
              <figcaption className="border-t border-border px-5 py-3 text-xs leading-5 text-muted-foreground sm:px-6">
                Conceptual case study artwork. It illustrates the intended workflow, not a live product screen.
                {" "}<TextLink href="/case-studies/linfy-beacon/hero-artwork.svg" rel="noopener noreferrer" target="_blank">View full-size illustration (opens in a new tab)</TextLink>
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="problem-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <Heading as="h2" className="mt-3" id="problem-heading">Some small businesses are harder to discover than they need to be.</Heading>
            </div>
            <div className="max-w-2xl">
              <Body>
                A business without a current website or clear online presence can be difficult for a prospective customer to find. Identifying that gap manually across local areas is slow, inconsistent, and difficult to track responsibly.
              </Body>
              <Body className="mt-5">
                Beacon was designed as a practical exploration of how public business data, website signals, structured records, and careful drafting could support a more focused local outreach workflow.
              </Body>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="discovery-heading">
        <Container>
          <SectionHeading
            description="The local discovery module collects public business information for separately invoked assessment and outreach modules."
            eyebrow="Discovery, with context"
            id="discovery-heading"
            title="A business-discovery workflow built for review."
          />
          <figure className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <Image
              alt="Conceptual Linfy Beacon business discovery dashboard showing generic categories and review states"
              className="h-auto w-full"
              height={960}
              sizes="(max-width: 1279px) calc(100vw - 2.5rem), 72rem"
              src="/case-studies/linfy-beacon/discovery-dashboard-concept.svg"
              width={1440}
            />
            <figcaption className="border-t border-border px-5 py-3 text-xs leading-5 text-muted-foreground sm:px-6">
              Conceptual interface. Generic labels illustrate a review queue and do not represent real businesses or contact records.
              {" "}<TextLink href="/case-studies/linfy-beacon/discovery-dashboard-concept.svg" rel="noopener noreferrer" target="_blank">View full-size illustration (opens in a new tab)</TextLink>
            </figcaption>
          </figure>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card className="h-full shadow-none" key={capability.title}>
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
        </Container>
      </Section>

      <Section aria-labelledby="assessment-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Assessment, not assumption</Eyebrow>
              <Heading as="h2" className="mt-3" id="assessment-heading">Review web-presence signals before drafting a message.</Heading>
              <Body className="mt-5">
                The assessment process generates notes from available website data or a missing website URL in the source record. A missing URL does not prove that a business has no website, and automated findings need verification before they are used in outreach.
              </Body>
              <div className="mt-7 rounded-xl border border-brand-blue/35 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                  <SmallText className="text-foreground">The prototype does not enforce human review. Review is recommended before outreach, alongside appropriate production safeguards.</SmallText>
                </div>
              </div>
            </div>
            <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <Image
                alt="Conceptual Linfy Beacon website assessment interface with generic signals and review note"
                className="h-auto w-full"
                height={960}
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 62vw"
                src="/case-studies/linfy-beacon/website-assessment-concept.svg"
                width={1440}
              />
              <figcaption className="border-t border-border px-5 py-3 text-xs leading-5 text-muted-foreground sm:px-6">
                Conceptual assessment interface. It demonstrates an illustrative review process, not a production assessment result.
                {" "}<TextLink href="/case-studies/linfy-beacon/website-assessment-concept.svg" rel="noopener noreferrer" target="_blank">View full-size illustration (opens in a new tab)</TextLink>
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="workflow-heading">
        <Container>
          <SectionHeading
            align="center"
            description="Discovery, assessment, drafting, and sending exist as separate local modules. Integrated orchestration and event handling remain planned; send logging is best-effort and can fail even when a send succeeds."
            eyebrow="The workflow"
            id="workflow-heading"
            title="Separate local modules, with orchestration still planned."
          />
          <figure className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <Image
              alt="Conceptual diagram of separate Linfy Beacon modules and planned orchestration"
              className="h-auto w-full"
              height={800}
              sizes="(max-width: 1279px) calc(100vw - 2.5rem), 72rem"
              src="/case-studies/linfy-beacon/workflow-concept.svg"
              width={1600}
            />
            <figcaption className="border-t border-border px-5 py-3 text-xs leading-5 text-muted-foreground sm:px-6">
              Conceptual workflow. The connections represent planned orchestration; reply routing and event handling are not presented as live capabilities.
              {" "}<TextLink href="/case-studies/linfy-beacon/workflow-concept.svg" rel="noopener noreferrer" target="_blank">View full-size illustration (opens in a new tab)</TextLink>
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section aria-labelledby="personalisation-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
            <figure className="order-2 overflow-hidden rounded-xl border border-border bg-card shadow-card lg:order-1">
              <Image
                alt="Conceptual Linfy Beacon AI-assisted email drafting interface without real recipient data"
                className="h-auto w-full"
                height={960}
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 62vw"
                src="/case-studies/linfy-beacon/email-personalisation-concept.svg"
                width={1440}
              />
              <figcaption className="border-t border-border px-5 py-3 text-xs leading-5 text-muted-foreground sm:px-6">
                Conceptual drafting interface. No real recipient, message, business record, or delivery outcome is shown.
                {" "}<TextLink href="/case-studies/linfy-beacon/email-personalisation-concept.svg" rel="noopener noreferrer" target="_blank">View full-size illustration (opens in a new tab)</TextLink>
              </figcaption>
            </figure>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <Eyebrow>AI-assisted drafting</Eyebrow>
              <Heading as="h2" className="mt-3" id="personalisation-heading">Turn assessment notes into an outreach draft.</Heading>
              <Body className="mt-5">
                Beacon uses a stored template and prompts an AI model to rewrite assessment notes for an outreach draft. Notes can contain multiple findings, and the generated rewrite is not automatically validated.
              </Body>
              <ul className="mt-7 space-y-3">
                {[
                  "The model is prompted to produce a concise rewrite; the result is not guaranteed.",
                  "Template placeholders keep the drafting structure consistent.",
                  "Human review is recommended but not enforced by the prototype.",
                ].map((item) => (
                  <li className="flex gap-3 text-sm leading-6 text-foreground" key={item}>
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="stack-heading">
        <Container>
          <SectionHeading
            description="The prototype uses services chosen for separate local modules. The stack below describes the local implementation, not a public SaaS platform."
            eyebrow="Technology stack"
            id="stack-heading"
            title="Focused tools for a practical prototype."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((item) => {
              const Icon = item.icon;
              return (
                <Card className="h-full" key={item.title}>
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                    </div>
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription className="mt-2">{item.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="journey-heading">
        <Container>
          <SectionHeading
            description="Beacon is being developed as a careful local prototype. The next work is about validation, operating controls, and evidence rather than presenting unfinished automation as complete."
            eyebrow="Development journey"
            id="journey-heading"
            title="Built in stages, with the next boundaries visible."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Foundation", "A local data model and separate discovery, assessment, drafting, and sender modules establish the prototype's components."],
              ["02", "Current focus", "Review assessment quality and complete controlled sender verification. Outreach logging is best-effort rather than guaranteed."],
              ["03", "Future roadmap", "Add integrated orchestration, scheduling, stronger send safeguards, unsubscribe handling, and event processing before representing those capabilities as active."],
            ].map(([number, title, description]) => (
              <li className="rounded-xl border border-border bg-card p-6" key={number}>
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-brand-blue">{number}</span>
                <Heading as="h3" className="mt-5">{title}</Heading>
                <SmallText className="mt-3">{description}</SmallText>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-slate-900 text-white" aria-labelledby="beacon-cta-heading">
        <Container className="max-w-4xl text-center">
          <Eyebrow className="text-brand-green">Start with the workflow</Eyebrow>
          <Heading as="h2" className="mt-3 text-white" id="beacon-cta-heading">Could a more considered system make your work easier to run?</Heading>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            An Automation Audit is Linfy&apos;s current starting point for understanding one workflow before deciding whether a technical next step is appropriate.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/assessment?source=case-study-linfy-beacon-final" size="large">
              Start an Automation Audit
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href="https://wa.me/27613960466" rel="noopener noreferrer" size="large" target="_blank" variant="secondary">
              <MessageCircle aria-hidden="true" className="size-4" />
              Chat with Linfy on WhatsApp
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
