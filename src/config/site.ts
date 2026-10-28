import type { SiteConfig } from "@/types";

/**
 * Automech Industries Central Site Configuration
 * Authentic business parameters, navigation structure, and verified positioning.
 */
export const siteConfig: SiteConfig = {
  name: "Automech Industries",
  shortName: "Automech",
  url: "https://automechindustries.in",
  tagline: "Industrial steel fabrication and installation",
  description:
    "Industrial steel fabrication from Dahigaon, Solapur district, Maharashtra. Equipment support structures, platforms, walkways, stairs and railings, built to your drawings and installed on site. Operating since 1997.",

  mainNav: [
    {
      title: "Home",
      href: "/",
      description:
        "Overview of Automech Industries fabrication capabilities and engineering heritage.",
    },
    {
      title: "About",
      href: "/about",
      description:
        "Company heritage, operational background since 1997, and Dahigaon facility location.",
    },
    {
      title: "Capabilities",
      href: "/capabilities",
      description:
        "Heavy equipment support structures, industrial platforms, walkways, stairs, and custom fabrication.",
    },
    {
      title: "Industries",
      href: "/industries",
      description:
        "Structural packages for power plants, process facilities, bulk material handling, and manufacturing.",
    },
    {
      title: "Vision",
      href: "/vision",
      description:
        "Engineering precision, safety standards, and progressive expansion into industrial machinery manufacturing.",
    },
    {
      title: "Careers",
      href: "/careers",
      description:
        "Career opportunities for structural fitters, certified welders, and site erection supervisors.",
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Plant office coordinates and direct project inquiry channels.",
    },
    {
      title: "Request a Quote",
      href: "/request-quote",
      description:
        "Submit fabrication drawings, structural specifications, and bill of quantities.",
    },
  ],

  footerNav: [
    {
      title: "Capabilities",
      items: [
        {
          title: "Equipment Frames & Skids",
          href: "/capabilities#equipment-support-frames",
        },
        {
          title: "Platforms, Stairs & Railings",
          href: "/capabilities#platforms-railings-stairs",
        },
        {
          title: "Boiler Support Structures",
          href: "/capabilities#boiler-support-structures",
        },
        {
          title: "Filtration System Structures",
          href: "/capabilities#filtration-support-structures",
        },
        {
          title: "Custom Components & Assemblies",
          href: "/capabilities#custom-fabrication",
        },
        {
          title: "On-Site Assembly & Installation",
          href: "/capabilities#site-setup-assembly",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Since 1997",
          href: "/about#heritage",
        },
        {
          title: "Vision",
          href: "/vision",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "Contact Desk",
          href: "/contact",
        },
      ],
    },
    {
      title: "Sectors",
      items: [
        {
          title: "Sugar & Cement Plants",
          href: "/industries#sugar-and-cement",
        },
        {
          title: "Chemical Processing & Refineries",
          href: "/industries#chemical-and-refineries",
        },
        {
          title: "Power & Energy",
          href: "/industries#power-and-energy",
        },
        {
          title: "Industrial Filtration Systems",
          href: "/industries#industrial-filtration",
        },
        {
          title: "Machinery & Manufacturing",
          href: "/industries#machinery-manufacturing",
        },
      ],
    },
    {
      title: "Legal & Enquiries",
      items: [
        {
          title: "Request a Quote",
          href: "/request-quote",
        },
        {
          title: "Contact Plant",
          href: "/contact",
        },
        {
          title: "Privacy Policy",
          href: "/privacy",
        },
        {
          title: "Terms of Service",
          href: "/terms",
        },
        {
          title: "Cookie Policy",
          href: "/cookie-policy",
        },
      ],
    },
  ],

  legalNav: [
    {
      title: "Privacy Policy",
      href: "/privacy",
      description: "Data collection, DPDP Act 2023 compliance, and personal data handling.",
    },
    {
      title: "Terms of Service",
      href: "/terms",
      description: "Commercial fabrication terms, drawing specifications, and project scope.",
    },
    {
      title: "Cookie Policy",
      href: "/cookie-policy",
      description: "Information about local storage and essential web operation cookies.",
    },
  ],

  company: {
    name: "Automech Industries",
    legalEntityNote: "Operating under the name Automech Industries continuously since 1997",
    foundedYear: 1997,
    operatingSince: "1997",
    tagline: "Industrial Structural Fabrication & Equipment Support Engineering",
    contact: {
      phone: "+91 94220 28540",
      whatsapp: "+91 94220 28540",
      email: "contact@automechindustries.in",
    },
    location: {
      village: "Dahigaon",
      district: "Solapur District",
      state: "Maharashtra",
      postalCode: "413401",
      country: "India",
      fullAddressString: "Dahigaon, Solapur District, Maharashtra 413401, India",
      mapUrl: "https://maps.google.com/?cid=4446693415291422969",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4670.536192871224!2d74.73552027591869!3d17.944400286518515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc391c5e3ffcab5%3A0x3db5d41a038388f9!2sAutomech%20Industries!5e1!3m2!1sen!2sin!4v1793176928326!5m2!1sen!2sin",
      coordinates: { latitude: 17.9444, longitude: 74.7355 },
    },
    inquiryNotice:
      "For procurement inquiries, structural drawing submissions, and bill of quantities reviews, please submit your requirements through our Request a Quote portal or schedule an appointment with our plant office.",
    scopeStatement:
      "Automech Industries manufactures heavy industrial structures, equipment support frameworks, access platforms, walkways, and railings, and executes on-site installation work. Complex components are supported through vetted specialist subcontractors.",
    strategicVision:
      "Building on over two decades of structural fabrication heritage, Automech is positioned to expand into comprehensive industrial machinery manufacturing and turnkey structural projects.",
  },
};
