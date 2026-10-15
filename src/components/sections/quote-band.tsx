import { ButtonArrow, ButtonLink } from "@/components/ui/button";

const checklist = [
  "Drawings or sketches of the structure",
  "Approximate quantity or steel weight, if known",
  "Site location and required delivery date",
  "Whether you need installation as well",
];

export interface QuoteBandProps {
  title?: string;
  description?: string;
}

/** Closing call to action used at the end of most pages. */
export function QuoteBand({
  title = "Have a drawing? Ask us for a quotation.",
  description = "Send us what you have. We will review it and contact you to discuss scope, quantities and delivery.",
}: QuoteBandProps) {
  return (
    <section aria-labelledby="quote-band-title" className="bg-oxide text-white">
      <div className="container-site grid grid-cols-1 gap-12 py-20 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="label text-white/75">Request a quote</p>
          <h2 id="quote-band-title" className="type-h2 mt-5 max-w-2xl">
            {title}
          </h2>
          <p className="type-lead mt-5 max-w-xl text-white/85">{description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/request-quote" variant="light" size="lg">
              Request a quote
              <ButtonArrow />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              className="border border-white/50 bg-transparent hover:border-white hover:bg-white/10"
            >
              Contact us
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <h3 className="label font-sans text-white/75">Helpful to include</h3>
          <ul className="mt-5 border-t border-white/30" role="list">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 border-b border-white/30 py-3.5 text-[0.98rem]">
                <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
