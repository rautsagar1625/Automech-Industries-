import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { media } from "@/content/media";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Automech Industries in Dahigaon, Solapur district, Maharashtra, for fabrication enquiries and quotations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const { company } = siteConfig;
  const { phone, whatsapp, email } = company.contact;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.location.fullAddressString
  )}`;

  const channels = [
    phone && { label: "Phone", value: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    whatsapp && {
      label: "WhatsApp",
      value: whatsapp,
      href: `https://wa.me/${whatsapp.replace(/\D/g, "")}`,
    },
    email && { label: "Email", value: email, href: `mailto:${email}` },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Talk to us about your project."
        lead="For quotations, the quickest route is our quote form. You can attach details of your drawings and requirements there."
        image={media.tanksStairs}
      />

      <section aria-label="Contact details" className="pb-20 sm:pb-28">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="border-navy border-t pt-8">
            <h2 className="label text-graphite font-sans">Works</h2>
            <address className="type-h3 text-navy mt-4 not-italic">
              {company.location.village}
              <br />
              {company.location.district}
              <br />
              {company.location.state}, {company.location.country}
            </address>
            <TextLink href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8">
              Open in Google Maps
            </TextLink>

            {channels.length > 0 && (
              <dl className="border-rule mt-10 border-t">
                {channels.map((c) => (
                  <div
                    key={c.label}
                    className="border-rule flex justify-between gap-6 border-b py-4"
                  >
                    <dt className="label text-graphite pt-1">{c.label}</dt>
                    <dd>
                      <a href={c.href} className="text-navy hover:text-brand font-medium">
                        {c.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="bg-navy text-on-navy p-8 sm:p-10">
            <h2 className="type-h3">Requesting a quotation?</h2>
            <p className="text-on-navy-muted mt-3">These details help us respond quickly:</p>
            <ul className="border-navy-rule mt-6 border-t" role="list">
              {[
                "General arrangement drawings or sketches",
                "Approximate steel weight or bill of materials",
                "Fabrication only, or fabrication and installation",
                "Site location and target date",
              ].map((item) => (
                <li key={item} className="border-navy-rule border-b py-3.5">
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/request-quote"
              variant="light"
              size="lg"
              className="mt-8 w-full sm:w-auto"
            >
              Go to the quote form
              <ButtonArrow />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
