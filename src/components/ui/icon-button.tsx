import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function IconButton({ className, label, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 active:bg-slate-200 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      type={type}
      {...props}
    />
  );
}
