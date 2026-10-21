"use client";

import * as React from "react";
import { weldingVideo } from "@/content/media";
import { StockTag } from "@/components/media/photo";
import { SectionHeader } from "@/components/ui/section-header";
import { useSafeGSAP } from "@/hooks/use-gsap-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap } from "@/lib/animations/gsap";

const steps = [
  { title: "Drawing review", text: "We study your drawings and agree the scope with you." },
  { title: "Cutting", text: "Steel sections and plates are cut to size." },
  { title: "Bending", text: "Parts are bent and formed to the drawing." },
  { title: "Welding", text: "Members are fitted up and welded into assemblies." },
  { title: "Painting", text: "Surfaces are cleaned and painted as specified." },
  { title: "Inspection", text: "Dimensions and welds are checked against the drawing." },
  { title: "Installation", text: "Delivered and, where required, erected at your site." },
];

/** Muted background loop that only plays while visible. */
function ProcessVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <figure>
      <div className="bg-navy-raised relative aspect-video overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={weldingVideo.src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <StockTag>Stock footage</StockTag>
      </div>
    </figure>
  );
}

export function Process() {
  const scopeRef = React.useRef<HTMLDivElement>(null);

  useSafeGSAP(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;

      const mm = gsap.matchMedia();
      const trigger = { trigger: "[data-steps]", start: "top 75%", end: "bottom 55%", scrub: 0.5 };

      // Horizontal timeline on large screens, vertical below.
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", scrollTrigger: trigger }
        );
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          "[data-progress]",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: trigger }
        );
      });

      gsap.from("[data-step]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-steps]", start: "top 80%", once: true },
      });

      return () => mm.revert();
    },
    { scope: scopeRef }
  );

  return (
    <section aria-labelledby="process-title" className="bg-navy text-on-navy py-20 sm:py-28">
      <div ref={scopeRef} className="container-site">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="02"
              eyebrow="How we work"
              tone="dark"
              id="process-title"
              title="From your drawing to your site"
              description="Every job follows the same clear sequence, so you know what happens at each stage."
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ProcessVideo />
          </div>
        </div>

        <ol
          data-steps
          className="relative mt-16 grid grid-cols-1 gap-y-10 lg:mt-24 lg:grid-cols-7 lg:gap-x-6"
        >
          {/* Track and progress: vertical on small screens, horizontal on large */}
          <span
            className="bg-navy-rule absolute top-0 bottom-0 left-4 w-px lg:top-4 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
            aria-hidden="true"
          />
          <span
            data-progress
            className="bg-brand absolute top-0 bottom-0 left-4 w-px origin-top lg:top-4 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto lg:origin-left"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-step
              className="relative grid grid-cols-[2rem_1fr] gap-x-5 lg:block"
            >
              <span className="bg-navy border-navy-rule text-on-navy relative z-10 flex h-8 w-8 items-center justify-center border font-mono text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-6">
                <h3 className="text-on-navy text-lg font-semibold">{step.title}</h3>
                <p className="text-on-navy-muted mt-1.5 text-[0.92rem] leading-relaxed">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
