import type { Metadata } from "next";
import { industriesData } from "@/content/industries";
import { industryMedia, media } from "@/content/media";
import { Photo } from "@/components/media/photo";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Structural steel for power, process, cement and bulk materials, air pollution control and general manufacturing plants across India.",
  alternates: {
    canonical: "/industries",
  },
};

const audiences = [
  {
    title: "Procurement departments",
    text: "Buying fabricated steel against drawings and a bill of materials.",
  },
  {
    title: "Engineering and EPC firms",
    text: "Needing a fabricator for structures within a larger package.",
  },
  {
    title: "Supply-chain teams",
    text: "Sourcing support steel for equipment they supply or install.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industries"
        title="Where our structures are used."
        lead="These are the kinds of plants our structures typically go into. If your project needs steel made to a drawing, we can likely help."
      />

      {/* Who buys from us */}
      <section aria-label="Who we work with" className="pb-16 sm:pb-20">
        <div className="container-site">
          <ul className="border-navy grid grid-cols-1 border-t md:grid-cols-3" role="list">
            {audiences.map((a) => (
              <li
                key={a.title}
                className="border-rule border-b py-6 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
              >
                <h2 className="text-navy text-lg font-semibold">{a.title}</h2>
                <p className="text-graphite mt-1.5 text-[0.95rem]">{a.text}</p>
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
