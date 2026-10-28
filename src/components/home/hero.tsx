"use client";

import * as React from "react";
import { HeroVideo } from "@/components/home/hero-video";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { useSafeGSAP } from "@/hooks/use-gsap-animation";
import { gsap } from "@/lib/animations/gsap";

const facts = [
  { term: "Since 1997", detail: "Operating under the Automech Industries name" },
  { term: "Based in Dahigaon", detail: "Solapur district, Maharashtra" },
  {
    term: "Made to Your Requirements",
    detail: "Manufactured to your drawings and specifications",
  },
  {
    term: "Manufacturing & Assembly",
    detail: "On-site setup available by agreement",
  },
];

function delay(ms: number) {
  return { "--delay": `${ms}ms` } as React.CSSProperties;
}

export function Hero() {
  const sectionRef = React.useRef<HTMLElement>(null);

  // As the hero scrolls away: video slowly zooms, copy drifts up and fades.
  useSafeGSAP(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to("[data-hero-video]", { scale: 1.15, ease: "none", scrollTrigger });
      gsap.to("[data-hero-copy]", { yPercent: -18, opacity: 0.2, ease: "none", scrollTrigger });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="bg-navy relative isolate flex min-h-[680px] flex-col overflow-hidden text-white md:h-[calc(100svh-var(--header-height)-2.25rem)] md:min-h-[680px]"
    >
      <div className="animate-settle absolute inset-0 -z-10">
        <HeroVideo />
      </div>
      {/* Legibility: darker on the left and bottom, where the copy sits */}
      <div
        className="from-navy/90 via-navy/55 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r to-transparent"
        aria-hidden="true"
      />
      <div
        className="from-navy pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t to-transparent"
        aria-hidden="true"
      />

      <div
        data-hero-copy
        className="container-site flex flex-1 flex-col justify-end pt-20 pb-8 sm:pt-24 sm:pb-10"
      >
        <div className="animate-rise flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="label flex items-center gap-3 text-white/80">
            <span className="bg-brand inline-block h-2 w-2" aria-hidden="true" />
            INDUSTRIAL MANUFACTURING · INDIA
          </p>
        </div>

        <h1 id="hero-title" className="type-display mt-6 max-w-5xl">
          <span className="animate-rise block" style={delay(100)}>
            Industrial Manufacturing.
          </span>
          <span className="animate-rise block" style={delay(200)}>
            Precision in Every <span className="text-brand-light">Build.</span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div
            className="type-lead animate-rise max-w-xl space-y-2.5 text-white/80"
            style={delay(320)}
          >
            <p>
              We manufacture steel structures, equipment supports, platforms, walkways, stairs and
              railings for industrial plants. We also undertake custom machinery manufacturing and
              assembly.
            </p>
            <p className="text-[0.95rem] leading-relaxed text-white/65">
              Based in Dahigaon, Maharashtra. Serving projects across India.
            </p>
          </div>
          <div className="animate-rise flex flex-wrap gap-3" style={delay(420)}>
            <ButtonLink href="/request-quote" size="lg">
              Request a Quote
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink href="/capabilities" variant="outline-light" size="lg">
              Explore Our Capabilities
            </ButtonLink>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 lg:mt-16 lg:grid-cols-4 lg:gap-x-8">
          {facts.map((fact, i) => (
            <div
              key={fact.term}
              className="animate-rise border-t border-white/30 pt-4"
              style={delay(520 + i * 80)}
            >
              <dt className="font-display text-lg font-semibold sm:text-xl">{fact.term}</dt>
              <dd className="mt-1 text-sm text-white/65">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
