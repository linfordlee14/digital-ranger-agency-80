import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { MobileNavigation, NavigationLinks } from "@/components/ui/navigation";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <Container className="flex min-h-18 items-center justify-between gap-3 py-3">
        <Link className="font-display text-lg font-semibold tracking-[-0.02em] text-slate-900" href="/">
          {site.name}
        </Link>
        <NavigationLinks className="hidden lg:flex" items={navigation} />
        <div className="flex items-center gap-1 sm:gap-3">
          <MobileNavigation items={navigation} />
          <ButtonLink className="hidden sm:inline-flex" data-analytics-event="assessment_cta_clicked" href="/assessment?source=global-navigation" size="small">
            {site.primaryCta}
          </ButtonLink>
          <ButtonLink aria-label="Start an automation assessment" className="sm:hidden" data-analytics-event="assessment_cta_clicked" href="/assessment?source=global-navigation" size="small">
            Assessment
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
