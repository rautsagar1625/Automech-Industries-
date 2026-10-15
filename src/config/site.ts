import type { SiteConfig } from "@/types";

/**
 * Automech Industries Central Site Configuration
 * Authentic business parameters, navigation structure, and verified positioning.
 */
export const siteConfig: SiteConfig = {
  name: "Automech Industries",
  shortName: "Automech",
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
          title: "Boiler Support Structures",
          href: "/capabilities#boiler-support-structures",
        },
        {
          title: "Filtration Support Structures",
          href: "/capabilities#filtration-support-structures",
        },
        {
          title: "Platforms, Railings & Stairs",
          href: "/capabilities#platforms-railings-stairs",
        },
        {
          title: "Equipment Support Frames",
          href: "/capabilities#equipment-support-frames",
        },
        {
          title: "Custom Fabrication",
          href: "/capabilities#custom-fabrication",
        },
        {
          title: "On-Site Installation",
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
      ],
    },
    {
      title: "Sectors",
      items: [
        {
          title: "Power & Energy",
          href: "/industries#power-and-energy",
        },
        {
          title: "Chemical & Process",
          href: "/industries#chemical-and-process",
        },
        {
          title: "Cement & Bulk Materials",
          href: "/industries#cement-and-minerals",
        },
        {
          title: "Air Pollution Control",
          href: "/industries#environmental-and-filtration",
        },
        {
          title: "General Manufacturing",
          href: "/industries#general-manufacturing",
        },
      ],
    },
    {
      title: "Enquiries",
      items: [
        {
          title: "Request a Quote",
          href: "/request-quote",
        },
        {
          title: "Contact",
          href: "/contact",
        },
        {
          title: "Our Capabilities",
          href: "/capabilities",
        },
      ],
    },
  ],

  company: {
    name: "Automech Industries",
    legalEntityNote: "Operating under the name Automech Industries continuously since 1997",
    foundedYear: 1997,
    operatingSince: "1997",
    tagline: "Industrial Structural Fabrication & Equipment Support Engineering",
    // Fill these in once confirmed by the business; they are hidden while empty.
    contact: {
      phone: "",
      whatsapp: "",
      email: "",
    },
    location: {
      village: "Dahigaon",
      district: "Solapur District",
      state: "Maharashtra",
      country: "India",
      fullAddressString: "Dahigaon, Solapur District, Maharashtra, India",
    },
    inquiryNotice:
      "For procurement inquiries, structural drawing submissions, and bill of quantities reviews, please submit your requirements through our Request a Quote portal or schedule an appointment with our plant office.",
    scopeStatement:
      "Automech Industries manufactures heavy industrial structures, equipment support frameworks, access platforms, walkways, and railings, and executes on-site installation work. Complex components are supported through vetted specialist subcontractors.",
    strategicVision:
      "Building on over two decades of structural fabrication heritage, Automech is positioned to expand into comprehensive industrial machinery manufacturing and turnkey structural projects.",
  },
};
