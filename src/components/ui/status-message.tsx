import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const statusMessageVariants = cva("rounded-lg border px-4 py-3 text-sm leading-6", {
  variants: {
    variant: {
      info: "border-blue-200 bg-blue-50 text-blue-900",
      success: "border-lime-300 bg-lime-50 text-slate-900",
      error: "border-red-200 bg-red-50 text-red-900",
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
