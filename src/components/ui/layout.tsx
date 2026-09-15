import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)} {...props} />;
}

export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return <section className={cn("py-16 sm:py-20 lg:py-28", className)} {...props} />;
}
