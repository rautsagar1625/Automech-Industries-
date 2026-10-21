"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  id: string;
  label: string;
}

/**
 * In-page navigation that highlights the section currently in view.
 * Vertical and sticky on large screens; a horizontal scrolling strip below.
 */
export function SectionNav({ items, label }: { items: SectionNavItem[]; label: string }) {
  const [active, setActive] = React.useState(items[0]?.id);
  const stripRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active chip visible in the mobile strip.
  React.useEffect(() => {
    const strip = stripRef.current;
    const chip = strip?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (strip && chip && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({ left: chip.offsetLeft - 20, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav aria-label={label}>
      {/* Mobile / tablet strip */}
      <ul
        ref={stripRef}
        className="border-rule -mx-5 flex [scrollbar-width:none] gap-1 overflow-x-auto border-y bg-white/95 px-5 py-2 backdrop-blur-md sm:-mx-8 sm:px-8 lg:hidden"
      >
        {items.map((item, i) => (
          <li key={item.id} data-id={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "block px-3 py-2 text-sm whitespace-nowrap transition-colors",
                active === item.id ? "bg-navy text-white" : "text-graphite hover:text-navy"
              )}
            >
              <span className="mr-1.5 font-mono text-[0.7rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop list */}
      <ol className="border-navy hidden border-t lg:block">
        {items.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="border-rule border-b">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative flex gap-3 py-3.5 pl-4 text-[0.95rem] leading-snug transition-colors",
                  isActive ? "text-navy font-medium" : "text-graphite hover:text-navy"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0 bottom-0 left-0 w-0.5 transition-colors",
                    isActive ? "bg-brand" : "bg-transparent"
                  )}
                  aria-hidden="true"
                />
                <span className={cn("label pt-0.5", isActive ? "text-brand" : "text-graphite")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
