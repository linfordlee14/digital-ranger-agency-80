import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusMessageVariants = cva("rounded-lg border px-4 py-3 text-sm leading-6", {
  variants: {
    variant: {
      info: "border-brand-blue/40 bg-primary/10 text-foreground",
      success: "border-brand-green/60 bg-secondary/20 text-foreground",
      error: "border-red-400/60 bg-red-950/20 text-red-700",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

interface StatusMessageProps extends ComponentPropsWithoutRef<"div">, VariantProps<typeof statusMessageVariants> {}

export function StatusMessage({ className, variant, ...props }: StatusMessageProps) {
  return (
    <div
      className={cn(statusMessageVariants({ variant }), className)}
      role={variant === "error" ? "alert" : "status"}
      {...props}
    />
  );
}
