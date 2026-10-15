import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "solid" | "glow";
  withPip?: boolean;
}

/**
 * Technical Eyebrow & Spec Badge
 * Monospace industrial annotation badge for system categories, dates, and standards.
 */
export function Badge({
  className,
  variant = "outline",
  withPip = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-xs px-2.5 py-1 font-mono text-[11px] tracking-wider uppercase",
        variant === "outline" &&
          "border-surface-border bg-surface/80 text-steel-white border backdrop-blur-xs",
        variant === "default" && "border-primary/40 bg-surface text-primary border",
        variant === "solid" && "bg-surface-raised border-surface-border text-steel-white border",
        variant === "glow" &&
          "border-primary/50 bg-primary/10 text-primary border shadow-[0_0_12px_rgba(231,107,48,0.15)]",
        className
      )}
      {...props}
    >
      {withPip && (
        <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" aria-hidden="true" />
      )}
      <span>{children}</span>
    </div>
  );
}
