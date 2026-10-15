import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { capabilitiesData } from "@/content/capabilities";
import { media } from "@/content/media";
import { Photo } from "@/components/media/photo";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";
import { ButtonArrow } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Automech Industries has operated under this name since 1997 from Dahigaon, Solapur district, Maharashtra, fabricating and installing industrial steel structures.",
};

const pillars = [
  {
    title: "In the workshop",
    text: "Cutting, bending, welding, finishing, painting and inspection at our works in Dahigaon, all to your drawings.",
    image: media.cuttingMachine,
  },
  {
    title: "On your site",
    text: "Delivery, erection, bolting, alignment and site welding, working within your site's safety rules and permits.",
    image: media.siteErection,
  },
  {
    title: "With specialists",
    text: "For complex components and heavy lifts, we work alongside specialist subcontractors.",
    image: media.dispatchLifting,
  },
];

export default function AboutPage() {
  const { company } = siteConfig;

  const facts = [
    { term: "Name", detail: company.name },
    {
      term: "Operating since",
      detail: `${company.foundedYear}, under the Automech Industries name`,
    },
    { term: "Location", detail: company.location.fullAddressString },
    { term: "What we do", detail: "Steel fabrication to drawing, and on-site installation" },
    { term: "Who we serve", detail: "Industrial buyers and engineering teams across India" },
  ];

  return (
    <>
      <PageIntro
        eyebrow="About us"
        title={`A steel fabrication works in Dahigaon, since ${company.foundedYear}.`}
        lead="We make the steel structures that industrial plants depend on: supports for equipment, and the platforms, stairs and walkways people use to reach it."
      >
        {/* Photo collage */}
        <div className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-12">
          <Photo
            item={media.fabricationBay}
            aspect="aspect-[4/3] lg:aspect-auto lg:h-full"
            sizes="(min-width: 1024px) 58vw, 100vw"
            preload
            className="col-span-2 lg:col-span-7 lg:row-span-2 [&>div]:h-full"
          />
          <Photo
            item={media.grindingFrames}
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 40vw, 50vw"
            className="lg:col-span-5"
          />
          <Photo
            item={media.rawSteelSections}
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 40vw, 50vw"
            className="lg:col-span-5"
          />
        </div>
      </PageIntro>

      {/* At a glance */}
      <section id="heritage" aria-labelledby="glance-title" className="pb-20 sm:pb-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="01"
              eyebrow="At a glance"
              id="glance-title"
              title="The short version"
            />
            <p
              className="font-display text-oxide mt-10 text-[clamp(5rem,12vw,10rem)] leading-[0.85] font-bold tracking-tight"
              aria-hidden="true"
            >
              {company.foundedYear}
            </p>
            <p className="text-graphite mt-4 max-w-xs text-[0.95rem]">
              The year we started operating as Automech Industries in Dahigaon.
            </p>
          </div>
          <dl className="border-ink self-end border-t lg:col-span-6 lg:col-start-7">
            {facts.map((fact) => (
              <div
                key={fact.term}
                className="border-rule grid grid-cols-1 gap-1 border-b py-5 sm:grid-cols-3 sm:gap-6"
              >
                <dt className="label text-graphite pt-1">{fact.term}</dt>
                <dd className="text-ink sm:col-span-2">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="work-title" className="bg-night text-on-night py-20 sm:py-28">
        <div className="container-site">
          <SectionHeader
            index="02"
            eyebrow="How we work"
            tone="dark"
            id="work-title"
            title="Built in our workshop, finished on your site"
            description="We are clear about our scope: we build the structures that support boilers, filters and other equipment, not the equipment itself."
          />
          <ul className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6" role="list">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Photo
                  item={p.image}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <p className="label text-on-night-muted mt-6">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="type-h3 text-on-night mt-2">{p.title}</h3>
                <p className="text-on-night-muted mt-3">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we make */}
      <section aria-labelledby="make-title" className="py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              index="03"
              eyebrow="What we make"
              id="make-title"
              title="Six kinds of work"
            />
            <TextLink href="/capabilities" className="shrink-0">
              All capabilities
            </TextLink>
          </div>
          <ol className="bg-rule border-rule mt-12 grid grid-cols-1 gap-px border-y sm:grid-cols-2 lg:grid-cols-3">
            {capabilitiesData.map((c, i) => (
              <li key={c.id} className="bg-paper">
                <Link
                  href={`/capabilities#${c.slug}`}
                  className="group/link hover:bg-card flex h-full items-start justify-between gap-4 p-6 transition-colors"
                >
                  <span>
                    <span className="label text-oxide">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ink group-hover/link:text-oxide mt-2 block text-lg font-semibold transition-colors">
                      {c.title}
                    </span>
                  </span>
                  <ButtonArrow className="text-rule-strong group-hover/link:text-oxide mt-7 shrink-0" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Looking ahead */}
      <section aria-labelledby="ahead-title" className="bg-paper-deep py-20 sm:py-24">
        <div className="container-site grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            index="04"
            eyebrow="Looking ahead"
            id="ahead-title"
            title="Growing with our customers"
            description={company.strategicVision}
            className="lg:col-span-8"
          />
          <div className="lg:col-span-4 lg:text-right">
            <TextLink href="/vision">Read about our vision</TextLink>
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
