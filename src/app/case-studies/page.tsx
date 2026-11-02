import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Body, Display, Eyebrow, Heading } from "@/components/ui/typography";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies" },
  description: "Explore Linfy Tech Solutions case studies, starting with the Linfy Beacon local prototype.",
  title: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <Section className="bg-muted/60">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Linfy Tech Solutions</Eyebrow>
            <Display className="mt-4">Case studies</Display>
            <Body className="mt-5">Explore how Linfy approaches practical technology work, with a clear view of what has been built and what remains in development.</Body>
          </div>
          <Card className="mt-10 overflow-hidden lg:grid lg:grid-cols-2">
            <Image
              alt="Conceptual Linfy Beacon discovery and outreach artwork"
              className="h-auto w-full"
              height={900}
              sizes="(max-width: 1023px) calc(100vw - 2.5rem), 38rem"
              src="/case-studies/linfy-beacon/hero-artwork.svg"
              width={1600}
            />
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <div><Badge variant="warning">Local prototype</Badge></div>
              <Heading as="h2" className="mt-4">Linfy Beacon</Heading>
              <Body className="mt-4">A locally developed prototype exploring public business discovery, website assessment, and AI-assisted outreach drafting.</Body>
              <TextLink className="mt-6 inline-flex items-center self-start" href="/case-studies/linfy-beacon">
                Explore the case study
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </TextLink>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
