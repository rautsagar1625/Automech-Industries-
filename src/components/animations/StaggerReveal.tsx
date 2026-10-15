"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface StaggerRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
  className?: string;
}

export function StaggerReveal({
  children,
  staggerDelay = 0.08,
  baseDelay = 0,
  className,
  ...props
}: StaggerRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: baseDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export function StaggerItem({ children, className, yOffset = 14, ...props }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
