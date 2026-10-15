"use client";

import * as React from "react";
import { useSafeGSAP } from "@/hooks/use-gsap-animation";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reveals descendants as they scroll into view.
 * - `data-reveal`: image frame wipes open from the bottom.
 * - `data-rise`: element fades and rises.
 * - `data-parallax`: element drifts slightly against the scroll.
 */
export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  useSafeGSAP(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;

      gsap.set("[data-reveal]", { clipPath: "inset(100% 0% 0% 0%)" });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.12,
          }),
      });

      gsap.set("[data-rise]", { opacity: 0, y: 28 });
      ScrollTrigger.batch("[data-rise]", {
        start: "top 90%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }),
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
