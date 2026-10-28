import type { Metadata } from "next";
import { industriesData } from "@/content/industries";
import { industryMedia, media } from "@/content/media";
import { Photo } from "@/components/media/photo";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Industries & Customers",
  description:
    "Structural steel for sugar and cement plants, chemical processing, power and energy, industrial filtration, and machinery manufacturing across India.",
  alternates: {
    canonical: "/industries",
  },
};

const audiences = [
  {
    title: "Procurement & Supply Chain Teams",
    text: "Buying fabricated structural steel and equipment supports against engineering drawings and bills of materials.",
  },
  {
    title: "Engineering & EPC Companies",
    text: "Partnering for equipment support frameworks, access galleries, and staging within turnkey packages.",
  },
  {
    title: "Equipment Manufacturers",
    text: "Sourcing dedicated mounting skids, support stands, and integrated access platforms for industrial equipment.",
  },
  {
    title: "Industrial Project Contractors",
    text: "Supplying fabricated assemblies, stairs, walkways, and on-site erection packages across India.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industries & Customers"
        title="Supporting Industry Across India."
        lead="We manufacture steel structures, equipment supports and custom assemblies for industrial projects, with a focus on quality, precision and timely delivery."
      />

      {/* Who buys from us */}
      <section aria-label="Customer groups" className="pb-16 sm:pb-20">
        <div className="container-site">
          <ul className="border-navy grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4" role="list">
            {audiences.map((a) => (
              <li
                key={a.title}
                className="border-rule border-b py-6 sm:px-6 sm:border-l sm:first:border-l-0 sm:first:pl-0 lg:border-b-0"
              >
                <h2 className="text-navy text-base sm:text-lg font-semibold">{a.title}</h2>
                <p className="text-graphite mt-1.5 text-sm">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sectors */}
      <section aria-labelledby="sectors-title" className="bg-steel py-16 sm:py-24">
        <div className="container-site">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 id="sectors-title" className="type-h2 text-navy">
              Typical sectors
            </h2>
            <p className="label text-graphite hidden sm:block">
              {String(industriesData.length).padStart(2, "0")} sectors
            </p>
          </div>

          <ol className="border-navy border-t">
            {industriesData.map((industry, i) => (
              <li
                key={industry.id}
                id={industry.slug}
                className="border-rule grid scroll-mt-[calc(var(--header-height)+1.5rem)] grid-cols-1 gap-8 border-b py-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10"
              >
                <div className="md:col-span-2 lg:col-span-4">
                  <Photo
                    item={industryMedia[industry.id] ?? media.plantStructure}
                    aspect="aspect-[16/10]"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
                <div className="lg:col-span-4">
                  <p className="label text-brand">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="type-h3 text-navy mt-3">{industry.title}</h3>
                  <p className="text-graphite mt-3">{industry.description}</p>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="label text-navy font-sans">Typical structures</h4>
                  <ul className="border-navy mt-4 border-t" role="list">
                    {industry.applicableStructures.map((line) => (
                      <li
                        key={line}
                        className="border-rule text-navy-soft border-b py-3 text-[0.95rem]"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-navy-soft max-w-xl">
              Don&apos;t see your sector? If the work is structural steel made to a drawing, ask us.
            </p>
            <TextLink href="/contact">Contact us</TextLink>
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
