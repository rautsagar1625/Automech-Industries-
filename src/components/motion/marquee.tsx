import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps {
  children: React.ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Endless horizontal strip. Content is rendered twice and shifted by half,
 * so the loop is seamless. Pauses on hover; stops under reduced motion.
 */
export function Marquee({ children, duration = 40, reverse = false, className }: MarqueeProps) {
  return (
    <div className={cn("group/marquee flex overflow-hidden", className)}>
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 ? true : undefined}
          className="animate-marquee flex shrink-0 items-center group-hover/marquee:[animation-play-state:paused]"
          style={
            {
              "--marquee-duration": `${duration}s`,
              animationDirection: reverse ? "reverse" : "normal",
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      ))}
    </div>
  );
}
