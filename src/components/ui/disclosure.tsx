import type { ReactNode } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface DisclosureProps {
  children: ReactNode;
  className?: string;
  title: string;
}

// Native details/summary preserves keyboard access without a client component.
export function Disclosure({ children, className, title }: DisclosureProps) {
  return (
    <details className={cn("group border-b border-slate-200 py-5", className)}>
      <summary className="flex list-none items-center justify-between gap-6 text-left text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-brand-blue transition-transform group-open:rotate-180 motion-reduce:transition-none" />
      </summary>
      <div className="pt-3 pr-10 text-base leading-7 text-slate-700">{children}</div>
    </details>
  );
}
