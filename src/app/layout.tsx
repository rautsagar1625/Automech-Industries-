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
  themeColor: "#F4F2EE",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
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
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${martianMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="bg-ink sr-only z-[100] px-4 py-2.5 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
