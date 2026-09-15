import Link from "next/link";

import { cn } from "@/lib/utils";

type TextLinkProps = React.ComponentProps<typeof Link>;

export function TextLink({ className, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "rounded-sm font-medium text-brand-blue underline decoration-brand-blue/40 underline-offset-4 transition-colors hover:text-slate-900 hover:decoration-slate-900 focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
}
