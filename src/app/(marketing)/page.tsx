import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Industrial Steel Fabrication & Equipment Support Structures | Dahigaon, Maharashtra",
  description:
    "Automech Industries manufactures heavy equipment support structures, platforms, walkways, stairs and railings built to your engineering drawings. Operating continuously since 1997 in Dahigaon, Solapur.",
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
    title: "Your drawing is the brief",
    text: "We work to the approved drawings and specifications you send us. If something on the drawing isn't clear, we ask before we cut.",
  },
  {
    title: "Workshop and site",
    text: "Fabrication happens at our Dahigaon works. Setup and installation happen at your plant.",
  },
  {
    title: "Straight answers on scope",
    text: "We tell you plainly what we make and what we don't: the steel structures that support equipment, not the equipment itself.",
  },
  {
    title: "Specialists where it counts",
    text: "For complex components and heavy lifts, we work with specialist subcontractors.",
  },
];

const audiences = [
  "Procurement departments",
  "Engineering and EPC firms",
  "Supply-chain teams",
  "Plant and maintenance managers",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stationary brand statement */}
      <div className="bg-brand py-4.5 text-white sm:py-5">
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

        {/* 01 — What we fabricate */}
        <section aria-labelledby="capabilities-title" className="pb-20 sm:pb-28">
          <div className="container-site">
            <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end">
              <div data-rise>
                <SectionHeader
                  index="01"
                  eyebrow="What we fabricate"
                  id="capabilities-title"
                  title="Steel structures for industrial plants."
                  description="Six kinds of work make up most of what we do. Each one is fabricated to your drawing."
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
        <section aria-labelledby="why-title" className="py-20 sm:py-28">
          <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="relative pb-10 lg:col-span-5 lg:pb-0">
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
                className="bg-brand absolute right-0 bottom-0 px-7 py-6 text-white sm:px-9 sm:py-8 lg:-right-10 lg:-bottom-10"
              >
                <p className="label text-white/75">In Dahigaon since</p>
                <p className="font-display mt-1 text-[clamp(3.5rem,7vw,6rem)] leading-none font-bold tracking-tight">
                  {siteConfig.company.foundedYear}
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
              <div data-rise>
                <SectionHeader
                  index="03"
                  eyebrow="Why work with us"
                  id="why-title"
                  title={`A fabrication works you can rely on, since ${siteConfig.company.foundedYear}.`}
                />
              </div>
              <ol className="border-navy mt-12 border-t">
                {reasons.map((reason, i) => (
                  <li
                    key={reason.title}
                    data-rise
                    className="border-rule group grid grid-cols-[3rem_1fr] gap-x-4 border-b py-6 sm:grid-cols-[4.5rem_1fr]"
                  >
                    <span
                      className="font-display text-rule-strong group-hover:text-brand text-3xl leading-none font-bold transition-colors sm:text-4xl"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-navy text-xl font-semibold">{reason.title}</h3>
                      <p className="text-graphite mt-1.5">{reason.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 04 — Industries */}
        <section aria-labelledby="industries-title" className="bg-steel py-20 sm:py-28">
          <div className="container-site">
            <div className="mb-14 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div data-rise className="lg:col-span-7">
                <SectionHeader
                  index="04"
                  eyebrow="Who we work with"
                  id="industries-title"
                  title="Industrial buyers across India."
                />
              </div>
              <div className="lg:col-span-5">
                <p className="text-graphite">
                  We work with teams who need structural steel delivered to drawing and on time:
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" role="list">
                  {audiences.map((a) => (
                    <li
                      key={a}
                      className="border-rule-strong text-navy-soft hover:border-navy border px-3.5 py-2 text-sm transition-colors"
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
