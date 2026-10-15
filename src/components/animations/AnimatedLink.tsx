import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  withArrow?: boolean;
}

/**
 * AnimatedLink Component
 * Architectural link with micro-interaction hover state and WCAG focus compliance.
 */
export function AnimatedLink({
  href,
  children,
  className,
  external = false,
  withArrow = false,
}: AnimatedLinkProps) {
  const content = (
    <span className="group relative inline-flex items-center gap-1 font-medium transition-colors hover:text-white">
      <span className="relative">
        {children}
        <span
          className="bg-primary absolute -bottom-0.5 left-0 h-[1.5px] w-0 transition-all duration-300 ease-out group-hover:w-full"
          aria-hidden="true"
        />
      </span>
      {withArrow && (
        <ArrowUpRight
          className="group-hover:text-primary h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "focus-visible:ring-primary inline-block rounded-sm focus-visible:ring-2 focus-visible:outline-none",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "focus-visible:ring-primary inline-block rounded-sm focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
    >
      {content}
    </Link>
  );
}
