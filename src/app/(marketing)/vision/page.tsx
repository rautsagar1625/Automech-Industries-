import type { Metadata } from "next";
import { media } from "@/content/media";
import { Photo } from "@/components/media/photo";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "How Automech Industries works today, and its plans for larger industrial projects and machinery manufacturing.",
  alternates: {
    canonical: "/vision",
  },
};

const principles = [
  {
    title: "Follow the drawing",
    text: "Every beam, bracket, platform and skid is made to your approved drawings, weld details and tolerances.",
  },
  {
    title: "Safe access by design",
    text: "Stairs, handrails, toe-boards and walkways are built to the clearances and safety details shown on your drawings.",
  },
  {
    title: "Honest about material and scope",
    text: "We quote and build to the steel grades and thicknesses you specify, and we say clearly what is and isn't in our scope.",
  },
  {
    title: "Workshop and site working together",
    text: "Match-marking in the workshop and coordination with the site crew help structures go up with less rework.",
  },
];

const today = [
  "Equipment support structures and skids",
  "Boiler and filtration support structures",
  "Platforms, walkways, stairs and railings",
  "Custom fabrication to drawing",
  "On-site setup and installation",
];

const next = ["Larger industrial projects", "Machinery manufacturing"];

export default function VisionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Vision"
        title="Doing the basics well, and growing from there."
        lead="Since 1997 our work has rested on a few simple principles. They are also the foundation for where we want to go next."
        image={media.inspectionCaliper}
      />

      {/* Principles */}
      <section aria-labelledby="principles-title" className="pb-20 sm:pb-28">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <SectionHeader
                index="01"
                eyebrow="How we work"
                id="principles-title"
                title="Our principles"
              />
            </div>
          </div>
          <ol className="border-navy border-t lg:col-span-7 lg:col-start-6">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="border-rule grid grid-cols-[3rem_1fr] gap-x-4 border-b py-8 sm:grid-cols-[5rem_1fr]"
              >
                <span className="font-display text-brand text-3xl font-bold sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="type-h3 text-navy">{p.title}</h3>
                  <p className="text-graphite mt-2 max-w-lg">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Today and next */}
      <section aria-labelledby="next-title" className="bg-navy text-on-navy py-20 sm:py-28">
        <div className="container-site">
          <SectionHeader
            index="02"
            eyebrow="Looking ahead"
            tone="dark"
            id="next-title"
            title="Today, and where we are heading"
          />

          <div className="mt-14 grid grid-cols-1 gap-3 lg:grid-cols-12">
            <div className="border-navy-rule bg-navy-raised border p-8 sm:p-10 lg:col-span-5">
              <p className="label text-on-navy">Today</p>
              <ul className="border-navy-rule mt-6 border-t" role="list">
                {today.map((t) => (
                  <li key={t} className="border-navy-rule text-on-navy border-b py-3.5">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-on-navy-muted/50 border border-dashed p-8 sm:p-10 lg:col-span-4">
              <p className="label text-on-navy flex items-center justify-between gap-4">
                Next
                <span className="text-on-navy-muted tracking-normal normal-case">
                  Plans, not current services
                </span>
              </p>
              <ul className="border-navy-rule mt-6 border-t" role="list">
                {next.map((t) => (
                  <li
                    key={t}
                    className="border-navy-rule text-on-navy border-b border-dashed py-3.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-on-navy-muted mt-6 text-[0.95rem]">
                Building on more than two decades of structural fabrication and site work. For
                complex components we continue to work with specialist subcontractors.
              </p>
            </div>

            <div className="lg:col-span-3">
              <Photo
                item={media.dispatchLifting}
                aspect="aspect-[4/3] lg:aspect-auto lg:h-full"
                sizes="(min-width: 1024px) 25vw, 100vw"
                tone="dark"
                className="h-full [&>div]:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
