import * as React from "react";
import Link from "next/link";
import { ButtonArrow } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface TextLinkProps extends React.ComponentProps<typeof Link> {
  tone?: "light" | "dark";
  className?: string;
}

/** Underlined text link with a small arrow, for secondary actions. */
export function TextLink({ tone = "light", className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group/link inline-flex items-center gap-2 border-b pb-1 text-[0.95rem] font-medium transition-colors",
        tone === "light"
          ? "text-ink border-ink/30 hover:border-oxide hover:text-oxide"
          : "text-on-night border-on-night/30 hover:border-on-night",
        className
      )}
      {...props}
    >
      {children}
      <ButtonArrow />
    </Link>
  );
}
