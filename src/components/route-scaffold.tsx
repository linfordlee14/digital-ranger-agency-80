import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Body, Display, Eyebrow } from "@/components/ui/typography";
import { site } from "@/lib/site";

interface RouteScaffoldProps {
  title: string;
}

export function RouteScaffold({ title }: RouteScaffoldProps) {
  return (
    <main id="main-content">
      <Section className="flex min-h-[calc(100vh-10rem)] items-center">
        <Container className="max-w-3xl">
          <Eyebrow>{site.name}</Eyebrow>
          <Display className="mt-4">{title}</Display>
          <Body className="mt-5 max-w-2xl">
            This route is established as part of the website foundation. Its reviewed commercial content will be added in a later phase.
          </Body>
          <TextLink className="mt-8 inline-flex" href="/">
            Return home
          </TextLink>
        </Container>
      </Section>
    </main>
  );
}
