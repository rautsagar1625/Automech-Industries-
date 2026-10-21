import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";

export const metadata: Metadata = {
  title: "Terms of Service & Commercial Conditions",
  description:
    "Terms of Service, fabrication scope boundaries, technical drawing specifications, and commercial conditions for Automech Industries.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const { company } = siteConfig;

  return (
    <>
      <PageIntro
        eyebrow="Commercial & Contracts"
        title="Terms of Service & Conditions"
        lead="Standard commercial conditions, engineering drawing boundaries, and project fabrication terms governing quotations and work orders with Automech Industries."
      />

      <section aria-label="Terms of Service content" className="pb-20 sm:pb-28">
        <div className="container-site max-w-4xl">
          <div className="border-navy text-graphite space-y-12 border-t pt-10 leading-relaxed">
            <div>
              <p className="label text-brand">Last Updated: October 2026</p>
              <h2 className="type-h3 text-navy mt-3">1. Scope of Engagement</h2>
              <p className="mt-4">
                These terms govern all commercial quotations, technical drawing reviews,
                manufacturing agreements, and site installation services executed by{" "}
                <strong>{company.name}</strong>, operating continuously since {company.foundedYear}{" "}
                from Dahigaon, Solapur district, Maharashtra.
              </p>
              <p className="mt-3">
                <strong>Strict Scope Boundary:</strong> Automech Industries specializes in heavy
                structural steel support systems, equipment skids, staging platforms, stairs,
                walkways, and on-site assembly. Automech Industries does <em>not</em> claim to
                manufacture or design proprietary boiler pressure parts, internal drums, pressure
                vessels, or specialized filtration membranes.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">2. Quotations and Engineering Specifications</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Drawing-Led Pricing:</strong> Quotations are prepared strictly against
                  approved client general arrangement drawings, structural design calculations,
                  bills of materials (BOM), and material specifications provided at the time of
                  inquiry.
                </li>
                <li>
                  <strong>Validity:</strong> Unless otherwise specified in writing on our formal
                  quote letter, commercial price quotations are valid for thirty (30) calendar days
                  due to market fluctuations in raw steel commodity prices (IS 2062 plates and
                  sections).
                </li>
                <li>
                  <strong>Scope Revisions:</strong> Any subsequent revisions to drawings,
                  dimensions, steel grades, weld inspection criteria, or paint systems after
                  quotation issuance will require a formal engineering review and price adjustment.
                </li>
              </ul>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">3. Fabrication Tolerances and Quality Standards</h2>
              <p className="mt-4">
                Unless explicitly agreed upon alternative standards in the purchase order:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  All structural steel fabrication conforms to applicable Indian Standards (IS 800
                  code of practice for general construction in steel, and IS 7215 for fabrication
                  tolerances).
                </li>
                <li>
                  Welding is executed using tested procedures (WPS) with certified fitters and
                  welders.
                </li>
                <li>
                  Material test certificates (MTC) from raw steel manufacturers can be furnished
                  upon prior written request before plate cutting commences.
                </li>
              </ul>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">
                4. Cancellation and Refund Policy (Custom Fabrication)
              </h2>
              <p className="mt-4">
                Because all structural steel framing, columns, skids, and walkways are custom-built
                to unique client drawings and cannot be resold in the commercial market:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Cancellation Prior to Raw Material Procurement:</strong> Client may cancel
                  with liability limited only to document review and engineering administrative
                  costs incurred.
                </li>
                <li>
                  <strong>Cancellation Post Raw Material Procurement or Cutting:</strong> In the
                  event of order cancellation after steel plates or rolled sections have been
                  procured, cut, or tacked, the client is liable for 100% of material costs incurred
                  plus labor completed up to the cancellation date. No refunds are granted for
                  custom cut or welded assemblies.
                </li>
                <li>
                  <strong>Defect Remediation:</strong> If any fabricated component fails to match
                  approved drawings or agreed tolerances, Automech Industries will inspect and
                  rectify or replace the affected structural member at its own cost in accordance
                  with the warranty clause.
                </li>
              </ul>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">5. On-Site Erection and Site Access</h2>
              <p className="mt-4">
                Where on-site installation is included in the contracted scope:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  The client is responsible for providing clear, unobstructed site access, level
                  foundations, verified civil anchor bolts, power and water supplies, and required
                  work permits.
                </li>
                <li>
                  Erection crews comply with client safety protocols and personal protective
                  equipment (PPE) mandates.
                </li>
                <li>
                  Delays arising from site readiness, foundation misalignments, or crane stoppage
                  outside Automech&apos;s control are subject to idle crew charges.
                </li>
              </ul>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">6. Payment Terms and Invoicing</h2>
              <p className="mt-4">
                Payment milestones are defined in individual purchase orders, typically structured
                as: advance mobilization against order confirmation, progressive stage payments
                against fabrication inspection, and balance prior to dispatch or upon site handover.
                GST invoices are issued in accordance with Indian tax statutes.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">7. Governing Law and Jurisdiction</h2>
              <p className="mt-4">
                All agreements, purchase orders, and disputes arising out of fabrication contracts
                with Automech Industries are governed by the laws of India, with exclusive
                jurisdiction in the courts of <strong>Solapur District, Maharashtra, India</strong>.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">8. Commercial Enquiries</h2>
              <p className="mt-4">
                For contract clarifications, vendor registration forms, or formal procurement
                submissions, please reach our commercial desk at{" "}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-brand font-medium hover:underline"
                >
                  {company.contact.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
