import type { Metadata } from "next";

import {
  ArrowRight,
  Check,
  ClipboardList,
  FileSearch,
  GitMerge,
  Handshake,
  Scale,
  Settings2,
} from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Disclosure } from "@/components/ui/disclosure";
import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Body, Display, Eyebrow, Heading, SmallText } from "@/components/ui/typography";
import { pricingContent } from "@/content/pricing";

export const metadata: Metadata = {
  alternates: {
    canonical: "/pricing",
  },
  description:
    "Review Linfy Tech Solutions' public Automation Audit starting price and understand how custom implementation and ongoing work are scoped after consultation.",
  openGraph: {
    description:
      "Review Linfy's public Automation Audit starting price and understand how custom implementation and ongoing work are scoped after consultation.",
    title: "Automation Audit Pricing",
    type: "website",
    url: "/pricing",
  },
  title: "Automation Audit Pricing",
};

const architectureIcons = [ClipboardList, Settings2, Handshake];
const scopeIcons = [GitMerge, FileSearch, Settings2, Scale, ClipboardList, Handshake];

export default function PricingPage() {
  return (
    <main id="main-content">
      <Section className="overflow-hidden bg-muted/60 py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.75fr)] lg:gap-16">
            <div className="max-w-3xl">
              <Eyebrow>{pricingContent.hero.eyebrow}</Eyebrow>
              <Display className="mt-4">{pricingContent.hero.title}</Display>
              <Body className="mt-6 max-w-2xl text-lg leading-8">{pricingContent.hero.description}</Body>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/assessment?source=pricing-hero" size="large">
                  Start the Automation Audit
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ButtonLink>
                <ButtonLink href="/how-it-works" size="large" variant="secondary">
                  How It Works
                </ButtonLink>
              </div>
            </div>

            <aside className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8" aria-label="Public and consultation pricing overview">
              <div className="flex items-start justify-between gap-4">
                <SmallText className="font-semibold uppercase tracking-wide text-brand-blue">Public starting point</SmallText>
                <Badge variant="info">{pricingContent.audit.price}</Badge>
              </div>
              <Heading as="h2" className="mt-4 text-2xl">The Audit is priced publicly. The work after it is scoped.</Heading>
              <div className="mt-6 space-y-3">
                {[
                  ["01", "Automation Audit", "Public starting price"],
                  ["02", "Implementation", "Custom scope after consultation"],
                  ["03", "Ongoing work", "Consultation-based"],
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

      <Section aria-labelledby="audit-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow>Featured starting point</Eyebrow>
              <Heading as="h2" className="mt-3" id="audit-heading">Automation Audit</Heading>
              <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.025em] text-foreground">{pricingContent.audit.price}</p>
              <Body className="mt-4">{pricingContent.audit.summary}</Body>
              <ButtonLink className="mt-8" href="/assessment?source=pricing-audit" size="large">
                Start the Automation Audit
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>What the Audit is intended to explore</CardTitle>
                <CardDescription>Understand the work before deciding whether a technical change is appropriate.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pricingContent.audit.included.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="audit-boundaries-heading">
        <Container>
          <SectionHeading
            description="The Audit provides a structured basis for a decision. It is not a pre-decided outcome or an automatic implementation package."
            eyebrow="What the Audit is and is not"
            id="audit-boundaries-heading"
            title="Clarity before commitment."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <Badge className="w-fit" variant="success">What is included</Badge>
                <CardTitle className="mt-3">A structured discovery step</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pricingContent.audit.included.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-brand-blue/35 bg-primary/5">
              <CardHeader>
                <Badge className="w-fit" variant="neutral">What is not promised</Badge>
                <CardTitle className="mt-3">No outcome is assumed before the workflow is understood</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pricingContent.audit.notPromised.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}>
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="pricing-architecture-heading">
        <Container>
          <SectionHeading
            description="The public Audit price is the current starting point. Other work is scoped around the actual workflow rather than presented as a generic price list."
            eyebrow="Pricing architecture"
            id="pricing-architecture-heading"
            title="What is public and what needs a conversation."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingContent.architecture.map((item, index) => {
              const Icon = architectureIcons[index];
              const isAudit = index === 0;
              return (
                <Card className={isAudit ? "border-brand-blue/50" : ""} key={item.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                      </div>
                      <Badge variant={isAudit ? "info" : "neutral"}>{item.label}</Badge>
                    </div>
                    <CardTitle className="mt-4">{item.title}</CardTitle>
                    <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground">{item.price}</p>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="scope-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow>Why implementation is not flat-rate</Eyebrow>
              <Heading as="h2" className="mt-3" id="scope-heading">Understand the work first, then scope the right solution.</Heading>
              <Body className="mt-4">
                Two businesses can describe a similar problem while needing very different technical work. The appropriate scope depends on the current workflow and the systems around it.
              </Body>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {pricingContent.scopeFactors.map((factor, index) => {
                const Icon = scopeIcons[index];
                return (
                  <div className="rounded-xl border border-border bg-card p-5" key={factor}>
                    <Icon aria-hidden="true" className="size-5 text-brand-blue" />
                    <p className="mt-4 text-sm font-semibold text-foreground">{factor}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="after-audit-heading">
        <Container>
          <SectionHeading
            description="The Audit does not automatically commit a business to implementation. It is a way to make a clearer decision about what should happen next."
            eyebrow="What happens after the Audit"
            id="after-audit-heading"
            title="A decision path, not a sales funnel."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pricingContent.afterAudit.map((step) => (
              <li className="rounded-xl border border-border bg-card p-6" key={step.number}>
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">{step.number}</span>
                <Heading as="h3" className="mt-5">{step.title}</Heading>
                <SmallText className="mt-3">{step.description}</SmallText>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-muted/60" aria-labelledby="pricing-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Questions, answered plainly"
            id="pricing-faq-heading"
            title="Before you decide to start."
          />
          <div className="mt-8">
            {pricingContent.faq.map((item, index) => (
              <Disclosure className={index === 0 ? "border-t" : undefined} key={item.question} title={item.question}>
                {item.answer}
              </Disclosure>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="alternative-path-heading">
        <Container className="max-w-4xl">
          <Card>
            <CardHeader>
              <SmallText className="font-semibold uppercase tracking-wide text-brand-blue">Not ready to start?</SmallText>
              <CardTitle className="mt-2">Review the work before deciding.</CardTitle>
              <CardDescription>
                The current public path is the Automation Audit. Visitors who are not ready can review the solution areas and process before deciding whether to begin.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row">
              <TextLink href="/solutions">Explore Solutions</TextLink>
              <TextLink href="/how-it-works">How It Works</TextLink>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section className="bg-slate-900 text-white" aria-labelledby="pricing-cta-heading">
        <Container className="max-w-4xl text-center">
          <Eyebrow className="text-brand-green">Automation Audit</Eyebrow>
          <Heading as="h2" className="mt-3 text-white" id="pricing-cta-heading">Start with a clear view of the workflow.</Heading>
          <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.025em] text-white">{pricingContent.audit.price}</p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The Audit is the current starting point for exploring whether a practical automation opportunity may exist.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/assessment?source=pricing-final" size="large">
              Start the Automation Audit
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
