"use client";

import { useGSAP } from "@gsap/react";
import { initGSAP } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { DependencyList, RefObject } from "react";

// Ensure GSAP plugins are registered on client
if (typeof window !== "undefined") {
  initGSAP();
}

export interface UseSafeGSAPOptions {
  scope?: RefObject<HTMLElement | null> | HTMLElement | null;
  dependencies?: DependencyList;
  revertOnUpdate?: boolean;
}

/**
 * A safe wrapper around useGSAP that automatically checks for reduced motion
 * and ensures full cleanup of ScrollTrigger instances and timelines on unmount.
 */
export function useSafeGSAP(
  callback: (context: {
    context: gsap.Context;
    contextSafe: <T extends (...args: unknown[]) => unknown>(func: T) => T;
    prefersReducedMotion: boolean;
  }) => void,
  options: UseSafeGSAPOptions = {}
) {
  const prefersReducedMotion = useReducedMotion();

  return useGSAP(
    (context, contextSafe) => {
      // Execute animation setup passing prefersReducedMotion flag
      callback({
        context,
        contextSafe: contextSafe as <T extends (...args: unknown[]) => unknown>(func: T) => T,
        prefersReducedMotion,
      });
    },
    {
      scope: options.scope as RefObject<HTMLElement | null> | undefined,
      dependencies: [...(options.dependencies || []), prefersReducedMotion],
      revertOnUpdate: options.revertOnUpdate ?? true,
    }
  );
}
