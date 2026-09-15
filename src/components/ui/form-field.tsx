import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Field({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

interface FieldLabelProps extends ComponentPropsWithoutRef<"label"> {
  required?: boolean;
}

export function FieldLabel({ children, className, required = false, ...props }: FieldLabelProps) {
  return (
    <label className={cn("block text-sm font-semibold text-foreground", className)} {...props}>
      {children}
      {required ? <span aria-hidden="true" className="ml-1 text-red-700">*</span> : null}
      {required ? <span className="sr-only"> (required)</span> : null}
    </label>
  );
}

const fieldClassName =
  "block min-h-11 w-full rounded-lg border bg-card px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground transition-colors hover:border-foreground/30 focus:border-brand-blue focus:outline-none disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground";

interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  error?: boolean;
}

export function TextInput({ className, error = false, ...props }: TextInputProps) {
  return (
    <input
      aria-invalid={error || undefined}
      className={cn(fieldClassName, error ? "border-red-700 focus:border-red-700" : "border-border", className)}
      {...props}
    />
  );
}

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  error?: boolean;
}

export function TextArea({ className, error = false, ...props }: TextAreaProps) {
  return (
    <textarea
      aria-invalid={error || undefined}
      className={cn(fieldClassName, "min-h-28 resize-y", error ? "border-red-700 focus:border-red-700" : "border-border", className)}
      {...props}
    />
  );
}

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  error?: boolean;
}

export function Select({ children, className, error = false, ...props }: SelectProps) {
  return (
    <select
      aria-invalid={error || undefined}
      className={cn(fieldClassName, error ? "border-red-700 focus:border-red-700" : "border-border", className)}
      {...props}
    >
      {children}
    </select>
  );
}

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<"input">, "type"> {
  error?: boolean;
}

export function Checkbox({ className, error = false, ...props }: CheckboxProps) {
  return (
    <input
      aria-invalid={error || undefined}
      className={cn(
        "size-5 rounded border-border text-brand-blue accent-[#0A6ED1] disabled:cursor-not-allowed disabled:opacity-50",
        error && "border-red-700",
        className,
      )}
      type="checkbox"
      {...props}
    />
  );
}

export function FieldHint({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-sm leading-6 text-muted-foreground", className)} {...props} />;
}

export function FieldError({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-sm font-medium leading-6 text-red-700", className)} role="alert" {...props} />;
}
