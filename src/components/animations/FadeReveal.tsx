"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface FadeRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

/**
 * FadeReveal Component
 * Subtle, professional fade-up reveal for sections, cards, and text blocks.
 * Degrades gracefully if reduced motion is preferred or JS is disabled.
 */
export function FadeReveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 16,
  className,
  viewportMargin = "-40px",
  once = true,
  ...props
}: FadeRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn("opacity-100", className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Crisp industrial cubic-bezier
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
