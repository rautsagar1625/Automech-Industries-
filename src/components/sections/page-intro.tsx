import * as React from "react";
import type { MediaItem } from "@/content/media";
import { Photo } from "@/components/media/photo";

export interface PageIntroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  image?: MediaItem;
  children?: React.ReactNode;
}

/** Opening block for inner pages: label, page title, lead and an optional wide photo. */
export function PageIntro({ eyebrow, title, lead, image, children }: PageIntroProps) {
  return (
    <section className="pt-12 pb-16 sm:pt-16 lg:pt-20">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label text-graphite animate-rise flex items-center gap-3">
              <span className="bg-brand inline-block h-2 w-2" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1
              className="type-h1 text-navy animate-rise mt-6"
              style={{ "--delay": "80ms" } as React.CSSProperties}
            >
              {title}
            </h1>
          </div>
          {lead && (
            <div
              className="type-lead text-graphite animate-rise lg:col-span-4"
              style={{ "--delay": "160ms" } as React.CSSProperties}
            >
              {lead}
            </div>
          )}
        </div>
        {children}
        {image && (
          <div
            className="animate-rise mt-12 lg:mt-16"
            style={{ "--delay": "220ms" } as React.CSSProperties}
          >
            <Photo item={image} aspect="aspect-[4/3] sm:aspect-[21/9]" sizes="100vw" preload />
          </div>
        )}
      </div>
    </section>
  );
}
