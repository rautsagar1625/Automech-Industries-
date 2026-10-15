import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionDividerProps {
  className?: string;
  withPip?: boolean;
  label?: string;
}

/**
 * SectionDivider Component
 * Precision engineering-inspired hairline divider with architectural markers.
 */
export function SectionDivider({ className, withPip = true, label }: SectionDividerProps) {
  return (
    <div
      className={cn("relative flex w-full items-center justify-center py-8", className)}
      role="separator"
      aria-orientation="horizontal"
    >
      <div className="via-surface-border h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />

      {withPip && (
        <div className="bg-background absolute left-1/2 flex -translate-x-1/2 items-center gap-2 px-3">
          <span className="border-primary bg-primary/20 h-1.5 w-1.5 rotate-45 border" />
          {label && (
            <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
