import Image from "next/image";
import type { MediaItem } from "@/content/media";
import { cn } from "@/lib/utils";

export interface PhotoProps {
  item: MediaItem;
  /** Tailwind aspect ratio class for the frame, e.g. "aspect-[4/5]". */
  aspect?: string;
  sizes?: string;
  preload?: boolean;
  /** Small tag shown inside the frame. Stock photos are tagged by default. */
  caption?: string | false;
  className?: string;
  imageClassName?: string;
  /** Kept for API compatibility; the tag style works on light and dark. */
  tone?: "light" | "dark";
}

/** Small "Stock image" tag placed inside a photo or video frame. */
export function StockTag({
  children = "Stock image",
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-navy/55 pointer-events-none absolute bottom-2.5 left-2.5 px-1.5 py-0.5 text-[0.65rem] tracking-wide text-white/85 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Cropped photograph with a discreet stock-image tag. */
export function Photo({
  item,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  preload = false,
  caption = "Stock image",
  className,
  imageClassName,
}: PhotoProps) {
  return (
    <figure className={cn("relative", className)}>
      <div className={cn("group/photo bg-steel relative overflow-hidden", aspect)}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          preload={preload}
          placeholder="blur"
          className={cn(
            "object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/photo:scale-[1.025]",
            imageClassName
          )}
        />
        {caption && <StockTag>{caption}</StockTag>}
      </div>
    </figure>
  );
}
