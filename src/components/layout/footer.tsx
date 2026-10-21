import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CopyrightYear } from "@/components/layout/copyright-year";
import { Wordmark } from "@/components/layout/header";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";

export function Footer() {
  const { company } = siteConfig;
  const { phone, email } = company.contact;

  return (
    <footer className="bg-navy text-on-navy">
      <div className="container-site py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label={`${siteConfig.name}, home`}
              className="inline-block transition-opacity hover:opacity-90"
            >
              <Wordmark tone="dark" />
            </Link>
            <p className="text-on-navy-muted mt-6 max-w-sm text-[0.95rem] leading-relaxed">
              Industrial steel fabrication and on-site installation, built to your drawings.
            </p>

            <address className="text-on-navy-muted mt-8 space-y-1.5 text-[0.95rem] not-italic">
              <span className="label text-on-navy block">Works & Plant Office</span>
              <span className="block">
                {company.location.village}, {company.location.district}
              </span>
              <span className="block">
                {company.location.state}{" "}
                {company.location.postalCode ? `- ${company.location.postalCode}` : ""},{" "}
                {company.location.country}
              </span>
              {phone && (
                <span className="mt-2 block">
                  <span className="text-on-navy-muted/80 text-xs">Phone: </span>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-on-navy text-white transition-colors"
                  >
                    {phone}
                  </a>
                </span>
              )}
              {email && (
                <span className="block">
                  <span className="text-on-navy-muted/80 text-xs">Email: </span>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-on-navy text-white transition-colors"
                  >
                    {email}
                  </a>
                </span>
              )}
            </address>

            <ButtonLink href="/request-quote" className="mt-8">
              Request a quote
              <ButtonArrow />
            </ButtonLink>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {siteConfig.footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="label text-on-navy font-sans">{group.title}</h2>
                <ul className="mt-5 space-y-3" role="list">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-on-navy-muted hover:text-on-navy text-[0.92rem] leading-snug transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Title block, as found in the corner of an engineering drawing */}
        <dl className="border-navy-rule mt-16 grid grid-cols-2 border-t border-l text-xs md:grid-cols-4 lg:grid-cols-[1.4fr_1.6fr_0.8fr_1.2fr]">
          {[
            { term: "Company", detail: siteConfig.name },
            {
              term: "Works",
              detail: `${company.location.village}, ${company.location.district}, ${company.location.state}`,
            },
            { term: "Established", detail: String(company.foundedYear) },
            { term: "Scope", detail: "Fabrication and installation" },
          ].map((cell) => (
            <div key={cell.term} className="border-navy-rule border-r border-b px-4 py-3">
              <dt className="label text-on-navy-muted">{cell.term}</dt>
              <dd className="text-on-navy mt-1.5">{cell.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="text-on-navy-muted mt-8 flex flex-col gap-4 text-xs leading-relaxed md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <CopyrightYear fallback={2026} /> {siteConfig.name}. Operating since{" "}
            {company.foundedYear}.
          </p>

          <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link href="/privacy" className="hover:text-on-navy transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-on-navy transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-on-navy transition-colors">
              Cookie Policy
            </Link>
          </nav>

          <p className="max-w-md md:text-right">
            Photographs on this website are representative stock images and do not show Automech
            projects or premises.
          </p>
        </div>
      </div>
    </footer>
  );
}
