"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { industriesData } from "@/content/industries";
import { industryMedia, media } from "@/content/media";
import { StockTag } from "@/components/media/photo";
import { ButtonArrow } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/** Sector list with a photo that follows the hovered or focused sector. */
export function SectorShowcase() {
  const [active, setActive] = React.useState(industriesData[0].id);
  const prefersReducedMotion = useReducedMotion();
  const activeMedia =
    industryMedia[active] ?? industryMedia[industriesData[0].id] ?? media.sugarFactory;

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <div className="bg-navy relative aspect-[16/10] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={activeMedia.src}
                alt={activeMedia.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <StockTag />
        </div>
      </div>

      <ol className="border-navy self-center border-t lg:col-span-7">
        {industriesData.map((industry, i) => {
          const isActive = industry.id === active;
          return (
            <li key={industry.id} className="border-rule border-b">
              <Link
                href={`/industries#${industry.slug}`}
                onMouseEnter={() => setActive(industry.id)}
                onFocus={() => setActive(industry.id)}
                onClick={() => setActive(industry.id)}
                className="group/link grid grid-cols-[2.25rem_1fr_auto] items-center gap-x-3 py-3.5 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-4 sm:py-5 lg:py-5.5"
              >
                <span
                  className={cn(
                    "label transition-colors",
                    isActive ? "text-brand" : "text-graphite"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "font-display text-lg font-semibold transition-colors sm:text-2xl",
                    isActive ? "text-brand" : "text-navy"
                  )}
                >
                  {industry.title}
                </span>
                <ButtonArrow
                  className={cn("h-4 w-4 shrink-0 sm:h-5 sm:w-5", isActive ? "text-brand" : "text-rule-strong")}
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
