import { Container, Section } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { Display, Eyebrow } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <main id="main-content">
      <Section className="flex min-h-[calc(100vh-10rem)] items-center">
        <Container className="max-w-3xl">
          <Eyebrow>404</Eyebrow>
          <Display className="mt-4">Page not found</Display>
          <TextLink className="mt-8 inline-flex" href="/">
            Return home
          </TextLink>
        </Container>
      </Section>
    </main>
  );
}
