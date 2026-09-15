import * as React from "react";

import Link from "next/link";
import { LoaderCircle } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-[background-color,border-color,box-shadow,transform] focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-brand-orange text-slate-900 shadow-sm hover:bg-[#eb6820] hover:shadow-md active:bg-[#d95816]",
        secondary: "border border-brand-blue bg-white text-brand-blue hover:bg-blue-50 active:bg-blue-100",
        tertiary: "text-brand-blue hover:bg-blue-50 active:bg-blue-100",
        destructive: "bg-red-700 text-white hover:bg-red-800 active:bg-red-900",
      },
      size: {
        default: "px-4 py-2.5",
        small: "min-h-9 px-3 py-2 text-xs",
        large: "min-h-12 px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, isLoading = false, size, variant, ...props }, ref) => (
    <button
      aria-busy={isLoading || undefined}
      className={cn(buttonVariants({ size, variant }), className)}
      disabled={disabled || isLoading}
      ref={ref}
      {...props}
    >
      {isLoading ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : null}
      <span>{children}</span>
    </button>
  ),
);

Button.displayName = "Button";

type ButtonLinkProps = Omit<React.ComponentProps<typeof Link>, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

function ButtonLink({ className, size, variant, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ size, variant }), className)} {...props} />;
}

export { Button, ButtonLink, buttonVariants };
