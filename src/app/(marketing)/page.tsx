import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Industrial Steel Fabrication & Equipment Support Structures | Dahigaon, Maharashtra",
  description:
    "Automech Industries manufactures steel structures, equipment supports, platforms, walkways, stairs and railings for industrial plants, along with custom machinery manufacturing and assembly. Based in Dahigaon, Maharashtra, serving projects across India.",
  alternates: {
    canonical: "/",
  },
};
import { media } from "@/content/media";
import { Hero } from "@/components/home/hero";
import { CapabilityIndex } from "@/components/home/capability-index";
import { Process } from "@/components/home/process";
import { SectorShowcase } from "@/components/home/sector-showcase";
import { StockTag } from "@/components/media/photo";
import { Marquee } from "@/components/motion/marquee";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ScrollWords } from "@/components/motion/scroll-words";
import { QuoteBand } from "@/components/sections/quote-band";
import { SectionHeader } from "@/components/ui/section-header";
import { TextLink } from "@/components/ui/text-link";
const strip = [
  media.cuttingMachine,
  media.platformStairGrating,
  media.welderPortrait,
  media.rawSteelSections,
  media.columnBasePlate,
  media.grindingFrames,
  media.stairTower,
  media.inspectionCaliper,
];

const reasons = [
  {
    title: "Accuracy & Workmanship",
    text: "Attention to dimensions, fit and finish in every component we manufacture.",
  },
  {
    title: "Manufacturing & Installation",
    text: "Workshop manufacturing and on-site assembly to support your project from production to installation.",
  },
  {
    title: "Project Coordination",
    text: "Clear communication and careful planning to keep manufacturing and delivery on schedule.",
  },
  {
    title: "Specialist Support",
    text: "We work with specialist subcontractors for complex components and additional manufacturing capabilities.",
  },
];

const audiences = [
  "Procurement & Supply Chain Teams",
  "Engineering & EPC Companies",
  "Equipment Manufacturers",
  "Industrial Project Contractors",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stationary brand statement */}
      <div className="bg-brand py-4 text-white sm:py-5">
        <div className="container-site flex items-center justify-center text-center">
          <p className="font-display text-[clamp(1.05rem,2.2vw,1.35rem)] font-semibold tracking-wide text-white">
            Accuracy in Every Detail. Quality in Every Build.
          </p>
        </div>
      </div>

      <ScrollReveal>
        {/* Scope statement + image strip */}
        <section aria-label="What we do" className="overflow-hidden py-20 sm:py-28">
          <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-12">
            <ScrollWords
              className="font-display text-navy text-[clamp(1.85rem,3.6vw,3.4rem)] leading-[1.1] font-semibold tracking-[-0.02em] lg:col-span-10"
              parts={[
                { text: "We don't build boilers, filters or machines. We build" },
                { text: "the steel that holds them up,", accent: true },
                { text: "and the stairs and walkways your people use to reach them." },
              ]}
            />
            <div className="lg:col-span-2 lg:flex lg:items-end lg:justify-end">
              <TextLink href="/capabilities">Our scope</TextLink>
            </div>
          </div>

          <Marquee duration={60} className="mt-16 sm:mt-20">
            {strip.map((item) => (
              <div
                key={item.source}
                className="bg-steel relative mr-3 h-48 w-64 shrink-0 overflow-hidden sm:h-64 sm:w-[22rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="352px"
                  className="object-cover grayscale-[35%] transition duration-500 hover:grayscale-0"
                />
                <StockTag />
              </div>
            ))}
          </Marquee>
        </section>

        {/* 01 — Capabilities */}
        <section aria-labelledby="capabilities-title" className="pb-12 sm:pb-20 lg:pb-28">
          <div className="container-site">
            <div className="mb-8 flex flex-col justify-between gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end">
              <div data-rise>
                <SectionHeader
                  index="01"
                  eyebrow="OUR MANUFACTURING CAPABILITIES"
                  id="capabilities-title"
                  title="Industrial Manufacturing. Built with Precision."
                  description="We manufacture steel structures, equipment supports and custom components for industrial plants, with a focus on accuracy, quality and practical requirements."
                />
              </div>
              <TextLink href="/capabilities" className="shrink-0">
                All capabilities
              </TextLink>
            </div>
            <CapabilityIndex />
          </div>
        </section>

        {/* 02 — Process */}
        <Process />

        {/* 03 — Why Automech */}
        <section aria-labelledby="why-title" className="py-12 sm:py-20 lg:py-28">
          <div className="container-site grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="relative pb-8 sm:pb-10 lg:col-span-5 lg:pb-0">
              <div data-reveal className="bg-steel relative aspect-[4/5] overflow-hidden">
                <Image
                  data-parallax
                  src={media.welderPortrait.src}
                  alt={media.welderPortrait.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="scale-[1.2] object-cover"
                />
                <StockTag />
              </div>
              <div
                data-rise
                className="bg-brand absolute right-0 bottom-0 px-6 py-5 text-white sm:px-9 sm:py-8 lg:-right-10 lg:-bottom-10"
              >
                <p className="label text-[0.65rem] text-white/80 sm:text-xs">
                  Automech Industries since
                </p>
                <p className="font-display mt-0.5 text-3xl leading-none font-bold tracking-tight sm:mt-1 sm:text-[clamp(3.5rem,7vw,6rem)]">
                  {siteConfig.company.foundedYear}
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
              <div data-rise>
                <SectionHeader
                  index="03"
                  eyebrow="WHY CHOOSE US"
                  id="why-title"
                  title={
                    <>
                      A Commitment to Quality.
                      <br />A Focus on Precision.
                    </>
                  }
                />
              </div>
              <ol className="border-navy mt-6 border-t sm:mt-10 lg:mt-12">
                {reasons.map((reason, i) => (
                  <li
                    key={reason.title}
                    data-rise
                    className="border-rule group grid grid-cols-[2.5rem_1fr] gap-x-3 border-b py-3.5 sm:grid-cols-[4.5rem_1fr] sm:gap-x-4 sm:py-5 lg:py-6"
                  >
                    <span
                      className="font-display text-rule-strong group-hover:text-brand text-2xl leading-none font-bold transition-colors sm:text-4xl"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-navy text-lg font-semibold sm:text-xl">{reason.title}</h3>
                      <p className="text-graphite mt-1 text-sm leading-relaxed sm:mt-1.5 sm:text-base">
                        {reason.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 04 — Industries */}
        <section aria-labelledby="industries-title" className="bg-steel py-12 sm:py-20 lg:py-28">
          <div className="container-site">
            <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-12 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div data-rise className="lg:col-span-7">
                <SectionHeader
                  index="04"
                  eyebrow="INDUSTRIES & CUSTOMERS"
                  id="industries-title"
                  title="Supporting Industry Across India."
                />
              </div>
              <div className="lg:col-span-5">
                <p className="text-graphite text-base leading-relaxed sm:text-lg">
                  We manufacture steel structures, equipment supports and custom assemblies for
                  industrial projects, with a focus on quality, precision and timely delivery.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5" role="list">
                  {audiences.map((a) => (
                    <li
                      key={a}
                      className="border-rule-strong text-navy-soft hover:border-navy border px-3 py-1.5 text-xs transition-colors sm:px-3.5 sm:py-2 sm:text-sm"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <SectorShowcase />
          </div>
        </section>

        {/* 05 — Looking ahead */}
        <section
          aria-labelledby="vision-title"
          className="bg-navy relative isolate overflow-hidden"
        >
          <Image
            data-parallax
            src={media.dispatchLifting.src}
            alt=""
            fill
            placeholder="blur"
            sizes="100vw"
            className="-z-10 scale-[1.2] object-cover opacity-55"
          />
          <div className="from-navy via-navy/85 absolute inset-0 -z-10 bg-gradient-to-r to-transparent" />
          <div className="container-site py-28 sm:py-40">
            <div data-rise className="max-w-2xl">
              <SectionHeader
                index="05"
                eyebrow="Looking ahead"
                tone="dark"
                id="vision-title"
                title="Growing towards larger projects and machinery manufacturing."
                description="Our plan is to take on larger industrial projects and to expand into manufacturing machinery, building on our experience in structural fabrication. It's a plan, not a service we offer yet."
              />
              <TextLink href="/vision" tone="dark" className="mt-9">
                Read about our vision
              </TextLink>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <QuoteBand />
    </>
  );
}
