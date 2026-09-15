import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { MobileNavigation, NavigationLinks } from "@/components/ui/navigation";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <Container className="flex min-h-18 items-center justify-between gap-3 py-3">
        <Link aria-label={site.name} className="shrink-0 font-display text-lg font-semibold tracking-[-0.02em] text-foreground" href="/">
          Linfy<span className="hidden sm:inline"> Tech Solutions</span>
        </Link>
        <NavigationLinks className="hidden lg:flex" items={navigation} />
        <div className="flex items-center gap-1 sm:gap-3">
          <MobileNavigation items={navigation} />
          <ThemeToggle />
          <ButtonLink aria-label={site.primaryCta} className="hidden sm:inline-flex" data-analytics-event="assessment_cta_clicked" href="/assessment?source=global-navigation" size="small">
            <span className="hidden 2xl:inline">{site.primaryCta}</span>
            <span className="2xl:hidden">Start an assessment</span>
          </ButtonLink>
          <ButtonLink aria-label="Start an automation assessment" className="sm:hidden" data-analytics-event="assessment_cta_clicked" href="/assessment?source=global-navigation" size="small">
            Assessment
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
