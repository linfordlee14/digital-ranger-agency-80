import Link from "next/link";

import { cn } from "@/lib/utils";

export interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationLinksProps {
  className?: string;
  items: readonly NavigationItem[];
}

export function NavigationLinks({ className, items }: NavigationLinksProps) {
  return (
    <nav aria-label="Primary navigation" className={cn("flex items-center gap-1", className)}>
      {items.map((item) => (
        <Link
          className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

interface MobileNavigationProps {
  items: readonly NavigationItem[];
}

// Native details/summary provides keyboard operation without adding client-side state.
export function MobileNavigation({ items }: MobileNavigationProps) {
  return (
    <details className="relative lg:hidden">
      <summary className="list-none rounded-md px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <NavigationLinks
        className="absolute right-0 top-[calc(100%+0.5rem)] w-56 flex-col items-stretch rounded-xl border border-slate-200 bg-white p-2 shadow-card"
        items={items}
      />
    </details>
  );
}
