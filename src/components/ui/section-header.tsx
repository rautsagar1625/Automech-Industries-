import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Short section number, e.g. "01". */
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Section heading: numbered label, title and an optional lead paragraph.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  as: Heading = "h2",
  id,
  className,
  children,
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div className={cn("max-w-3xl", className)}>
      {(index || eyebrow) && (
        <p
          className={cn(
            "label mb-5 flex items-center gap-3",
            dark ? "text-on-night-muted" : "text-graphite"
          )}
        >
          {index && <span className={dark ? "text-on-night" : "text-oxide"}>{index}</span>}
          {index && eyebrow && (
            <span className={cn("h-px w-8", dark ? "bg-night-rule" : "bg-rule-strong")} />
          )}
          {eyebrow && <span>{eyebrow}</span>}
        </p>
      )}
      <Heading
        id={id}
        className={cn(
          Heading === "h1" ? "type-h1" : "type-h2",
          dark ? "text-on-night" : "text-ink"
        )}
      >
        {title}
      </Heading>
      {description && (
        <div
          className={cn("type-lead mt-5 max-w-2xl", dark ? "text-on-night-muted" : "text-graphite")}
        >
          {description}
        </div>
      )}
      {children}
    </div>
  );
}
