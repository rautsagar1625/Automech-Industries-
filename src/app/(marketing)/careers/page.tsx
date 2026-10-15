import type { Metadata } from "next";
import { media } from "@/content/media";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work with Automech Industries in Dahigaon, Solapur district: fabrication, welding and site erection roles.",
};

const roles = [
  {
    title: "Structural fabricator / fitter",
    place: "Dahigaon works",
    text: "Reading fabrication drawings, marking, fit-up and tack welding of columns, trusses and platform assemblies.",
    needs: "Experience in industrial steel fabrication and reading drawings.",
  },
  {
    title: "Welder (SMAW / GMAW)",
    place: "Dahigaon works",
    text: "Fillet and groove welds on structural sections, following the weld procedures for each job.",
    needs: "Experience in structural welding in different positions.",
  },
  {
    title: "Erection supervisor",
    place: "Project sites",
    text: "Leading on-site assembly, alignment, lifting coordination and bolting while following site safety rules.",
    needs: "Experience leading structural steel erection crews.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Careers"
        title="Work with us."
        lead="We look for fitters, welders and site supervisors who take pride in good steelwork."
        image={media.weldingStructure}
      />

      <section aria-label="Roles" className="pb-20 sm:pb-28">
        <div className="container-site">
          <p className="label text-graphite">Roles we hire for</p>
          <ul className="border-ink mt-5 border-t" role="list">
            {roles.map((role) => (
              <li
                key={role.title}
                className="border-rule grid grid-cols-1 gap-4 border-b py-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <h2 className="type-h3 text-ink">{role.title}</h2>
                  <p className="label text-graphite mt-2">{role.place}</p>
                </div>
                <div className="text-ink-soft lg:col-span-6">
                  <p>{role.text}</p>
                  <p className="text-graphite mt-2 text-[0.95rem]">{role.needs}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <h2 className="type-h2 text-ink lg:col-span-4">How to apply</h2>
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
              {[
                {
                  t: "Get in touch",
                  d: "Contact our works office with your experience and the role you want.",
                },
                {
                  t: "Trade test",
                  d: "Skilled roles include a practical test at Dahigaon, by appointment.",
                },
                { t: "Start work", d: "We agree the role, timing and where you will be based." },
              ].map((step, i) => (
                <li key={step.t} className="border-ink border-t pt-5">
                  <span className="label text-oxide">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-ink mt-2 text-lg font-semibold">{step.t}</h3>
                  <p className="text-graphite mt-1.5 text-[0.95rem]">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-night text-on-night mt-16 flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <p className="type-h3 max-w-xl">Interested in working with us?</p>
            <ButtonLink href="/contact" variant="light" className="shrink-0">
              Contact us
              <ButtonArrow />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
