import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageIntro } from "@/components/sections/page-intro";
import { QuoteBand } from "@/components/sections/quote-band";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Automech Industries. Learn how cookies and local storage are used on our industrial fabrication website.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  const { company } = siteConfig;

  return (
    <>
      <PageIntro
        eyebrow="Privacy & Preferences"
        title="Cookie Policy"
        lead="Our website is built on principles of privacy and minimal tracking. Here is how we use cookies and browser storage."
      />

      <section aria-label="Cookie Policy content" className="pb-20 sm:pb-28">
        <div className="container-site max-w-4xl">
          <div className="border-navy text-graphite space-y-12 border-t pt-10 leading-relaxed">
            <div>
              <p className="label text-brand">Last Updated: October 2026</p>
              <h2 className="type-h3 text-navy mt-3">1. What Are Cookies?</h2>
              <p className="mt-4">
                Cookies and browser local storage are small text files or key-value entries stored
                on your device when you browse websites. They help the website remember your
                interaction preferences (such as reduced-motion settings and cookie consent status)
                to deliver a consistent experience.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">2. How Automech Industries Uses Cookies</h2>
              <p className="mt-4">
                We believe in privacy by default. We do <strong>not</strong> use invasive
                third-party ad-tracking cookies, cross-site trackers, or data-broker profiling tools
                on our website.
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="border-rule w-full border text-left text-sm">
                  <thead className="bg-steel text-navy">
                    <tr>
                      <th className="border-rule border-b p-3 font-semibold">Category</th>
                      <th className="border-rule border-b p-3 font-semibold">Purpose</th>
                      <th className="border-rule border-b p-3 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-rule border-b">
                      <td className="text-navy p-3 font-medium">Strictly Necessary</td>
                      <td className="p-3">
                        Remembers your cookie consent choice and form submission tokens to prevent
                        duplicate RFQ submissions.
                      </td>
                      <td className="p-3">Up to 1 year</td>
                    </tr>
                    <tr className="border-rule border-b">
                      <td className="text-navy p-3 font-medium">Preferences / Accessibility</td>
                      <td className="p-3">
                        Detects and honors your operating system&apos;s reduced-motion preference
                        for animation pause controls.
                      </td>
                      <td className="p-3">Session / Persistent</td>
                    </tr>
                    <tr>
                      <td className="text-navy p-3 font-medium">Analytics (Aggregated)</td>
                      <td className="p-3">
                        Measures aggregate page performance and Core Web Vitals anonymously without
                        storing personal identifiers.
                      </td>
                      <td className="p-3">Session only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">3. Managing and Disabling Cookies</h2>
              <p className="mt-4">
                You can configure your browser to block cookies or alert you when cookies are being
                set. If you disable cookies, all informational pages, specifications, and
                phone/email contact links will remain fully operational.
              </p>
            </div>

            <div className="border-rule border-t pt-8">
              <h2 className="type-h3 text-navy">4. Questions and Contact</h2>
              <p className="mt-4">
                If you have questions regarding this Cookie Policy or data storage practices, please
                contact our compliance desk at{" "}
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
