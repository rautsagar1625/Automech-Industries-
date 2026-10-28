import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, Martian_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

// Bricolage Grotesque (headings) has an optical-size axis, so large
// headlines get tighter, punchier shapes. DM Sans keeps body text easy to read.
// Martian Mono is used for small labels and numbers.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14283F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Industrial Steel Fabrication, Dahigaon, Maharashtra`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Industrial steel fabrication",
    "Equipment support structures",
    "Boiler support structures",
    "Filtration support structures",
    "Industrial platforms, walkways and stairs",
    "Custom fabrication to drawing",
    "Solapur steel fabricators",
    "Maharashtra structural fabrication",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | Industrial Steel Fabrication`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Industrial Steel Fabrication`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.company.contact.phone,
    email: siteConfig.company.contact.email,
    priceRange: "₹₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.location.village,
      addressLocality: siteConfig.company.location.district,
      addressRegion: siteConfig.company.location.state,
      postalCode: siteConfig.company.location.postalCode,
      addressCountry: "IN",
    },
    ...(siteConfig.company.location.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        ...siteConfig.company.location.coordinates,
      },
    }),
    hasMap: siteConfig.company.location.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "18:30",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${martianMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="text-navy flex min-h-screen flex-col bg-white font-sans antialiased">
        <a
          href="#main-content"
          className="bg-navy sr-only z-[100] px-4 py-2.5 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
