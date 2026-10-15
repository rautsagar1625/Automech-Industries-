"use client";

import * as React from "react";
import { useSafeGSAP } from "@/hooks/use-gsap-animation";
import { gsap } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

export interface ScrollWordsProps {
  /** Text segments; segments marked `accent` are highlighted. */
  parts: { text: string; accent?: boolean }[];
  className?: string;
}

/** Large statement whose words brighten one by one as it scrolls into view. */
export function ScrollWords({ parts, className }: ScrollWordsProps) {
  const ref = React.useRef<HTMLParagraphElement>(null);

  useSafeGSAP(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;
      gsap.fromTo(
        "[data-word]",
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <p ref={ref} className={className}>
      {parts.map((part, p) => [
        p > 0 ? " " : null,
        ...part.text.split(/(\s+)/).map((word, w) =>
          /^\s+$/.test(word) || word === "" ? (
            word
          ) : (
            <span key={`${p}-${w}`} data-word className={cn(part.accent && "text-oxide")}>
              {word}
            </span>
          )
        ),
      ])}
    </p>
  );
}
