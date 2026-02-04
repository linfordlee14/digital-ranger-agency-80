import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Enterprise Gradient Button
        gradient: "bg-gradient-to-r from-neon-cyan to-bio-green text-deep-space font-semibold hover:shadow-lg hover:shadow-neon-cyan/30 hover:brightness-110",
        
        // Glass Variants
        glass: "bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-foreground hover:bg-white/[0.1] hover:border-white/[0.2]",
        "glass-outline": "bg-transparent backdrop-blur-sm border border-white/[0.15] text-foreground hover:bg-white/[0.05] hover:border-neon-cyan/50 hover:text-neon-cyan",
        
        // Legacy variants updated to new palette
        cyber: "bg-neon-cyan text-deep-space font-semibold hover:bg-neon-cyan/90 hover:shadow-lg hover:shadow-neon-cyan/30",
        "cyber-outline": "border-2 border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan/10 hover:shadow-lg hover:shadow-neon-cyan/20",
        earth: "bg-bio-green text-deep-space font-semibold hover:bg-bio-green/90 hover:shadow-lg hover:shadow-bio-green/20",
        "earth-outline": "border-2 border-bio-green text-bio-green font-semibold hover:bg-bio-green/10",
        terminal: "bg-deep-space-light border border-white/[0.1] text-neon-cyan font-mono hover:border-neon-cyan/50 hover:shadow-lg hover:shadow-neon-cyan/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
