import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Small details borrowed from engineering drawings and print proofs.
 * Used sparingly to give the site a fabricator's hand, not as decoration everywhere.
 */

/** Four L-shaped corner marks sitting just outside a frame. Parent must be `relative`. */
export function CropMarks({ className }: { className?: string }) {
  const corner = "absolute h-4 w-4 border-ink/60";
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute -inset-3", className)}>
      <span className={cn(corner, "top-0 left-0 border-t border-l")} />
      <span className={cn(corner, "top-0 right-0 border-t border-r")} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(corner, "right-0 bottom-0 border-r border-b")} />
    </span>
  );
}

/** A horizontal dimension line with end ticks and arrowheads, labelled at both ends and the middle. */
export function DimensionLine({
  start,
  end,
  middle,
  tone = "light",
  className,
}: {
  start: React.ReactNode;
  end: React.ReactNode;
  middle?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const color = tone === "light" ? "text-ink-soft" : "text-on-night-muted";
  return (
    <div className={cn("flex items-center gap-3 font-mono text-[0.7rem]", color, className)}>
      <span className="shrink-0">{start}</span>
      <span className="relative flex h-3 flex-1 items-center" aria-hidden="true">
        <span className="absolute top-0 left-0 h-3 w-px bg-current" />
        <span className="absolute top-0 right-0 h-3 w-px bg-current" />
        <svg className="absolute left-0 h-2 w-2" viewBox="0 0 8 8">
          <path d="M8 0L0 4l8 4" fill="none" stroke="currentColor" />
        </svg>
        <svg className="absolute right-0 h-2 w-2" viewBox="0 0 8 8">
          <path d="M0 0l8 4-8 4" fill="none" stroke="currentColor" />
        </svg>
        <span className="h-px w-full bg-current" />
        {middle && (
          <span className="bg-paper absolute left-1/2 -translate-x-1/2 px-2 whitespace-nowrap">
            {middle}
          </span>
        )}
      </span>
      <span className="shrink-0">{end}</span>
    </div>
  );
}
