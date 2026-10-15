import { Suspense } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import {
  QuoteRequestForm,
  QuoteRequestFormWithParams,
} from "@/components/forms/quote-request-form";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Send Automech Industries your drawings and requirements for a fabrication and installation quotation.",
};

const steps = [
  { title: "You send your details", text: "Tell us what you need using this form." },
  { title: "We review", text: "We look at your requirements and ask for drawings if needed." },
  { title: "We get in touch", text: "We discuss scope, quantities and delivery, then quote." },
];

export default function RequestQuotePage() {
  return (
    <>
      <PageIntro
        eyebrow="Request a quote"
        title="Tell us what you need."
        lead="The more detail you share, the more accurate our quotation can be. Fields marked optional can be left blank."
      />

      <section aria-label="Quote form" className="pb-20 sm:pb-28">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Suspense fallback={<QuoteRequestForm />}>
              <QuoteRequestFormWithParams />
            </Suspense>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <h2 className="label text-graphite border-ink border-t pt-6 font-sans">
                What happens next
              </h2>
              <ol className="mt-6 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="label text-oxide pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-ink font-medium">{s.title}</p>
                      <p className="text-graphite mt-1 text-[0.95rem]">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="bg-paper-deep mt-10 p-6">
                <h2 className="text-ink font-medium">Our scope</h2>
                <p className="text-graphite mt-2 text-[0.95rem]">
                  {siteConfig.company.scopeStatement}
                </p>
              </div>

              <p className="text-graphite mt-6 text-sm">
                Drawings and project details you share are used only to prepare your quotation.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
