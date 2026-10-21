import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Automech Industries. Learn how we handle customer information, technical drawings, and data under the Digital Personal Data Protection Act (DPDP Act, India).",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const { company } = siteConfig;

  return (
    <>
      <PageIntro
        eyebrow="Legal & Governance"
        title="Privacy Policy"
        lead="We believe in transparency and data minimization. This policy explains what information we collect, why we need it to execute structural fabrication orders, and how we protect it."
      />

      <section aria-label="Privacy Policy content" className="pb-20 sm:pb-28">
        <div className="container-site max-w-4xl">
          <div className="border-navy text-graphite space-y-12 border-t pt-10 leading-relaxed">
            <div>
              <p className="label text-brand">Effective Date: October 2026</p>
              <h2 className="type-h3 text-navy mt-3">1. Scope and Identity</h2>
              <p className="mt-4">
                This Privacy Policy applies to personal and commercial business information
                collected through the website and direct communications of{" "}
                <strong>{company.name}</strong>, with works and registered office in{" "}
                {company.location.fullAddressString}. Automech Industries has operated continuously
                under this name since {company.foundedYear}.
              </p>
              <p className="mt-3">
                We operate primarily in business-to-business (B2B) industrial fabrication, equipment
                staging, and on-site erection services for industrial plant procurement,
                engineering, and EPC supply chains across India.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">2. Information We Collect (Data Minimization)</h2>
              <p className="mt-4">
                We adhere strictly to the principle of data minimization and collect only the data
                necessary to evaluate, quote, and deliver your structural fabrication packages:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Contact Details:</strong> Full name, corporate email address, contact
                  telephone or mobile number, and company or enterprise name.
                </li>
                <li>
                  <strong>Project & Technical Data:</strong> Delivery or site location, structural
                  drawings, general arrangement sketches, bills of materials (BOM), tonnage
                  estimates, weld procedure specifications, and finishing requirements.
                </li>
                <li>
                  <strong>Communication Records:</strong> Emails, formal correspondence, purchase
                  orders, technical clarifications, and quotation history.
                </li>
              </ul>
              <p className="mt-4">
                We do not collect sensitive personal data, biometric data, personal credit card
                details, or information concerning children.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">3. Purpose and Legal Grounds for Processing</h2>
              <p className="mt-4">
                Under the Indian Digital Personal Data Protection Act (DPDP Act, 2023) and
                applicable commercial laws, your information is processed on the grounds of
                legitimate commercial use, consent, and contractual necessity:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Reviewing engineering drawings and preparing commercial bids/quotations.</li>
                <li>
                  Coordinating manufacturing schedules, material procurement (IS 2062 steel), and
                  workshop fit-up.
                </li>
                <li>
                  Arranging site installation logistics, dispatch, gate permits, and safety
                  compliance coordination.
                </li>
                <li>
                  Fulfilling legal, statutory accounting, GST invoicing, and tax obligations under
                  Indian law.
                </li>
              </ul>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">4. Confidentiality of Technical Drawings</h2>
              <p className="mt-4">
                Engineering drawings, CAD files, structural layouts, and bills of materials provided
                to Automech Industries remain the intellectual property of the client or the
                providing engineering firm. We treat all client drawings as strictly confidential
                proprietary information and do not disclose, distribute, or repurpose them for third
                parties.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">5. Third-Party Sharing and Subcontractors</h2>
              <p className="mt-4">
                We do not sell, rent, or trade your personal or business data. We only share
                information with vetted partners where essential to execute your project:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Specialist Subcontractors:</strong> Certified non-destructive testing
                  (NDT) inspectors, heavy mobile crane operators, or specialized machining partners
                  under non-disclosure obligations.
                </li>
                <li>
                  <strong>Logistics & Freight Carriers:</strong> Heavy trailer transport agencies
                  delivering fabricated girders, platforms, and skids to client project sites.
                </li>
                <li>
                  <strong>Statutory Authorities:</strong> Indian government bodies, tax authorities,
                  or law enforcement agencies when strictly mandated by legal statute or valid court
                  orders.
                </li>
              </ul>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">6. Data Retention and Security</h2>
              <p className="mt-4">
                We retain client project data and quotation files for as long as needed to service
                project warranty requirements, ongoing plant modifications, and statutory tax
                record-keeping requirements (typically 8 years under Indian tax regulations).
              </p>
              <p className="mt-3">
                We implement technical safeguards including encrypted transmissions (TLS 1.3),
                restricted administrative access, and strict internal access controls to protect
                your data from unauthorized access or destruction.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">7. Your Rights and Data Deletion Requests</h2>
              <p className="mt-4">
                Under Indian data protection laws, you have the right to review, update, or request
                the erasure of personal data held about you (subject to our legal retention duties).
              </p>
              <p className="mt-3">
                To request data deletion or update your records, please email our Grievance Desk at{" "}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-brand font-medium hover:underline"
                >
                  {company.contact.email}
                </a>{" "}
                with the subject line &quot;Data Erasure / Rights Request&quot;.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">8. Grievance Officer and Contact Desk</h2>
              <p className="mt-4">
                In compliance with the Digital Personal Data Protection Act, 2023, the details of
                our Grievance and Compliance Desk are:
              </p>
              <address className="bg-steel border-rule text-navy mt-5 space-y-1 border p-6 text-sm not-italic">
                <span className="block font-semibold">{company.name} — Grievance Redressal</span>
                <span>Works: {company.location.fullAddressString}</span>
                <span className="block">
                  Email:{" "}
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-brand hover:underline"
                  >
                    {company.contact.email}
                  </a>
                </span>
                <span className="block">
                  Phone:{" "}
                  <a
                    href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                    className="text-brand hover:underline"
                  >
                    {company.contact.phone}
                  </a>
                </span>
              </address>
            </div>
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
