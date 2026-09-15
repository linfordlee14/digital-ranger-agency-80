import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", {
  variants: {
    variant: {
      neutral: "bg-slate-100 text-slate-700",
      info: "bg-blue-50 text-blue-800",
      success: "bg-lime-100 text-slate-900",
      warning: "bg-orange-100 text-slate-900",
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
