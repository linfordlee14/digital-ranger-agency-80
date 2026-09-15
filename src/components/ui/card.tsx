import * as React from "react";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={cn("rounded-xl border border-border bg-card shadow-card transition-[border-color,box-shadow] duration-200 hover:border-foreground/30 hover:shadow-card-hover", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("space-y-2 p-6 sm:p-8", className)} {...props} />;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h3">>(
  ({ className, ...props }, ref) => <h3 className={cn("text-heading-3", className)} ref={ref} {...props} />,
);

CardTitle.displayName = "CardTitle";

export function CardDescription({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-small", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("px-6 pb-6 sm:px-8 sm:pb-8", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex items-center gap-3 border-t border-border px-6 py-4 sm:px-8", className)} {...props} />;
}
