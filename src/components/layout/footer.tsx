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
    <footer className="bg-night text-on-night">
      <div className="container-site py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark tone="dark" />
            <p className="text-on-night-muted mt-6 max-w-sm text-[0.95rem] leading-relaxed">
              Industrial steel fabrication and on-site installation, built to your drawings.
            </p>

            <address className="text-on-night-muted mt-8 space-y-1 text-[0.95rem] not-italic">
              <span className="label text-on-night block">Works</span>
              <span className="block">
                {company.location.village}, {company.location.district}
              </span>
              <span className="block">
                {company.location.state}, {company.location.country}
              </span>
              {phone && (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-on-night block">
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="hover:text-on-night block">
                  {email}
                </a>
              )}
            </address>

            <ButtonLink href="/request-quote" variant="light" className="mt-8">
              Request a quote
              <ButtonArrow />
            </ButtonLink>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {siteConfig.footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="label text-on-night font-sans">{group.title}</h2>
                <ul className="mt-5 space-y-3" role="list">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-on-night-muted hover:text-on-night text-[0.92rem] leading-snug transition-colors"
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
        <dl className="border-night-rule mt-16 grid grid-cols-2 border-t border-l text-xs md:grid-cols-4 lg:grid-cols-[1.4fr_1.6fr_0.8fr_1.2fr]">
          {[
            { term: "Company", detail: siteConfig.name },
            {
              term: "Works",
              detail: `${company.location.village}, ${company.location.district}, ${company.location.state}`,
            },
            { term: "Established", detail: String(company.foundedYear) },
            { term: "Scope", detail: "Fabrication and installation" },
          ].map((cell) => (
            <div key={cell.term} className="border-night-rule border-r border-b px-4 py-3">
              <dt className="label text-on-night-muted">{cell.term}</dt>
              <dd className="text-on-night mt-1.5">{cell.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="text-on-night-muted mt-8 flex flex-col gap-4 text-xs leading-relaxed md:flex-row md:items-start md:justify-between">
          <p>
            &copy; <CopyrightYear fallback={2026} /> {siteConfig.name}. Operating since{" "}
            {company.foundedYear}.
          </p>
          <p className="max-w-xl md:text-right">
            Photographs on this website are representative stock images and do not show Automech
            projects or premises.
          </p>
        </div>
      </div>
    </footer>
  );
}
