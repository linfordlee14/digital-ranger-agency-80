import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-sm font-semibold tracking-wide text-brand-blue", className)} {...props} />;
}

export function Display({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return <h1 className={cn("text-display", className)} {...props} />;
}

interface HeadingProps extends ComponentPropsWithoutRef<"h2"> {
  as: "h2" | "h3" | "h4";
}

export function Heading({ as: Component, className, ...props }: HeadingProps) {
  const styles = {
    h2: "text-heading-1",
    h3: "text-heading-2",
    h4: "text-heading-3",
  } as const;

  return <Component className={cn(styles[Component], className)} {...props} />;
}

export function Body({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-body", className)} {...props} />;
}

export function SmallText({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-small", className)} {...props} />;
}
