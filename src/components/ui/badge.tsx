import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", {
  variants: {
    variant: {
      neutral: "bg-muted text-muted-foreground",
      info: "bg-primary/15 text-foreground",
      success: "bg-secondary/35 text-foreground",
      warning: "bg-accent/20 text-foreground",
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

interface BadgeProps extends ComponentPropsWithoutRef<"span">, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
