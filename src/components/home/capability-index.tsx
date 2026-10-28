import Image from "next/image";
import Link from "next/link";
import { capabilitiesData } from "@/content/capabilities";
import { capabilityMedia } from "@/content/media";
import { StockTag } from "@/components/media/photo";
import { ButtonArrow } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Short, plain-language summaries for the homepage grid. */
const summaries: Record<string, string> = {
  "equipment-support-frames":
    "Steel frames, skids, motor supports and pump bases for industrial machinery and equipment.",
  "platforms-railings-stairs":
    "Platforms, walkways, stairs, ladders and railings for access throughout industrial facilities.",
  "boiler-support-structures":
    "Steel columns, beams, frameworks and access platforms for boilers and associated equipment.",
  "filtration-support-structures":
    "Support frames, towers, bases and platforms for filtration systems and dust collection equipment.",
  "custom-fabrication":
    "Steel components and welded assemblies made from plates, channels, angles and pipes.",
  "site-setup-assembly":
    "On-site structural assembly, positioning, alignment, bolting and welding.",
};

const order = [
  "equipment-support-frames",
  "platforms-railings-stairs",
  "boiler-support-structures",
  "filtration-support-structures",
  "custom-fabrication",
  "site-setup-assembly",
];

/** Alternating wide / narrow tiles on large screens: 7+5, 5+7, 7+5. */
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
];

const items = order
  .map((id) => capabilitiesData.find((c) => c.id === id))
  .filter((c): c is (typeof capabilitiesData)[number] => Boolean(c));

export function CapabilityIndex() {
  return (
    <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
      {items.map((item, i) => {
        const image = capabilityMedia[item.id];
        return (
          <li key={item.id} className={cn("relative", spans[i])}>
            <Link
              href={`/capabilities#${item.slug}`}
              data-reveal
              className="group/link bg-navy relative block aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-auto lg:h-[28rem]"
            >
              <Image
                src={image.src}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 58vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:scale-[1.06]"
              />
              <div
                className="from-navy/90 via-navy/35 absolute inset-0 bg-gradient-to-t to-transparent"
                aria-hidden="true"
              />
              <div
                className="bg-brand absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover/link:opacity-40"
                aria-hidden="true"
              />
              <StockTag className="top-3 right-3 bottom-auto left-auto" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-7">
                <div>
                  <span className="label text-white/75">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="type-h3 mt-2 text-white">{item.title}</h3>
                  <p className="mt-2 max-h-0 max-w-md overflow-hidden text-[0.95rem] text-white/85 opacity-0 transition-all duration-500 group-hover/link:max-h-24 group-hover/link:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
                    {summaries[item.id]}
                  </p>
                </div>
                <span className="text-navy group-hover/link:bg-navy flex h-12 w-12 shrink-0 items-center justify-center bg-white transition-all duration-300 group-hover/link:-rotate-45 group-hover/link:text-white">
                  <ButtonArrow />
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
