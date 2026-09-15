import Link from "next/link";

import { Container } from "@/components/ui/layout";
import { TextLink } from "@/components/ui/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <div className="flex gap-4">
          <TextLink href="/privacy">Privacy</TextLink>
          <TextLink href="/terms">Terms</TextLink>
        </div>
      </Container>
    </footer>
  );
}
