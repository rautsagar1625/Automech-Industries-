import type { Metadata } from "next";
import { capabilitiesData } from "@/content/capabilities";
import { capabilityMedia, media } from "@/content/media";
import { siteConfig } from "@/config/site";
import { Photo } from "@/components/media/photo";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";
import { SectionNav } from "@/components/sections/section-nav";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import type { ProjectCategory } from "@/types/enquiry";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Equipment support structures, boiler and filtration support structures, platforms, walkways, stairs and railings, custom fabrication to drawing, and on-site installation.",
  alternates: {
    canonical: "/capabilities",
  },
};

/** Maps each capability to the matching enquiry category for a pre-filled quote form. */
const quoteCategory: Record<string, ProjectCategory> = {
  "boiler-support-structures": "boiler-support-structures",
  "filtration-support-structures": "filtration-support-structures",
  "platforms-railings-stairs": "industrial-platforms-stairs-railings",
  "equipment-support-frames": "equipment-support-structures",
  "custom-fabrication": "custom-structural-fabrication",
  "site-setup-assembly": "on-site-erection-assembly",
};

/** Short labels for the in-page menu. */
const shortLabel: Record<string, string> = {
  "boiler-support-structures": "Boiler support structures",
  "filtration-support-structures": "Filtration support structures",
  "platforms-railings-stairs": "Platforms, stairs & railings",
  "equipment-support-frames": "Equipment supports & skids",
  "custom-fabrication": "Custom fabrication",
  "site-setup-assembly": "On-site installation",
};

export default function CapabilitiesPage() {
  const navItems = capabilitiesData.map((c) => ({
    id: c.slug,
    label: shortLabel[c.id] ?? c.title,
  }));

  return (
    <>
      <PageIntro
        eyebrow="Capabilities"
        title="What we fabricate and install."
        lead="Steel structures for industrial plants, made at our Dahigaon works to your drawings and specifications, and installed on site when you need it."
        image={media.heroSteelFrameErection}
      />

      <div className="container-site grid grid-cols-1 gap-x-12 lg:grid-cols-12">
        {/* In-page menu */}
        <aside className="sticky top-[var(--header-height)] z-30 lg:top-[calc(var(--header-height)+2rem)] lg:col-span-3 lg:self-start lg:pt-16">
          <p className="label text-graphite mb-4 hidden lg:block">On this page</p>
          <SectionNav items={navItems} label="Capabilities on this page" />
          <div className="mt-8 hidden lg:block">
            <ButtonLink href="/request-quote" variant="dark" size="sm" className="w-full">
              Request a quote
              <ButtonArrow />
            </ButtonLink>
          </div>
        </aside>

        <div className="lg:col-span-9">
          {capabilitiesData.map((item, i) => {
            const image = capabilityMedia[item.id];
            return (
              <section
                key={item.id}
                id={item.slug}
                aria-labelledby={`${item.slug}-title`}
                className="border-rule scroll-mt-[calc(var(--header-height)+4.5rem)] border-b py-16 first:pt-10 sm:py-20 lg:scroll-mt-[calc(var(--header-height)+1.5rem)] lg:first:pt-16"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-9 lg:items-end lg:gap-10">
                  <div className="lg:col-span-5">
                    <p className="label text-brand">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(capabilitiesData.length).padStart(2, "0")}
                    </p>
                    <h2 id={`${item.slug}-title`} className="type-h2 text-navy mt-4">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-graphite lg:col-span-4">{item.shortDescription}</p>
                </div>

                {image && (
                  <Photo
                    item={image}
                    aspect="aspect-[16/9] lg:aspect-[21/9]"
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="mt-10"
                  />
                )}

                <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div>
                    <h3 className="label text-navy font-sans">Typical scope</h3>
                    <ul className="border-navy mt-4 border-t" role="list">
                      {item.detailedScope.map((line) => (
                        <li key={line} className="border-rule text-navy-soft border-b py-3.5">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="label text-navy font-sans">How we work</h3>
                    <ul className="border-navy mt-4 border-t" role="list">
                      {item.keyFeatures.map((line) => (
                        <li
                          key={line}
                          className="border-rule text-navy-soft flex gap-3 border-b py-3.5"
                        >
                          <span
                            className="bg-brand mt-[0.6rem] h-1.5 w-1.5 shrink-0"
                            aria-hidden="true"
                          />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="border-brand text-navy-soft max-w-2xl border-l-2 pl-5 text-[0.95rem]">
                    <span className="text-navy font-semibold">Scope note. </span>
                    {item.scopeBoundaries}
                  </p>
                  <ButtonLink
                    href={`/request-quote?type=${quoteCategory[item.id]}`}
                    variant="outline"
                    size="sm"
                    className="shrink-0"
                  >
                    Quote this
                    <ButtonArrow />
                  </ButtonLink>
                </div>
              </section>
            );
          })}

          <p className="text-graphite py-14 text-[0.95rem]">
            <span className="text-navy font-semibold">Our scope in one line. </span>
            {siteConfig.company.scopeStatement}
          </p>
        </div>
      </div>

      <QuoteBand />
    </>
  );
}
