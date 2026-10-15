"use client";

import * as React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * TextReveal Component
 * Precision typographic reveal using masked line clip.
 * Preserves semantic HTML and screen-reader accessibility.
 */
export function TextReveal({
  text,
  as: Component = "h2",
  className,
  delay = 0,
  duration = 0.6,
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={cn(className)}>{text}</Component>;
  }

  return (
    <Component className={cn("overflow-hidden", className)}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Smooth acceleration into settle
        }}
        className="inline-block will-change-transform"
      >
        {text}
      </motion.span>
    </Component>
  );
}
