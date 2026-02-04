import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "subtle";
  hover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl transition-all duration-300",
          "bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]",
          hover && "hover:border-white/[0.15] hover:shadow-[0_0_30px_hsl(187,100%,50%,0.1)]",
          variant === "glow" && "shadow-[0_0_30px_hsl(187,100%,50%,0.1)]",
          variant === "subtle" && "bg-white/[0.01] border-white/[0.05]",
          className
        )}
        {...props}
      >
        {/* Gradient overlay on hover */}
        <div 
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none",
            hover && "group-hover:opacity-100"
          )}
          style={{
            background: "linear-gradient(135deg, hsl(187, 100%, 50%, 0.03) 0%, hsl(152, 100%, 50%, 0.03) 100%)"
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
