/**
 * Automech Industries - Core Type Definitions
 * Typed data models for navigation, business metadata, capabilities, industries, and enquiries.
 */

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
  disabled?: boolean;
  children?: NavItem[];
}

export interface FooterNavGroup {
  title: string;
  items: NavItem[];
}

export interface BusinessLocation {
  village: string;
  district: string;
  state: string;
  postalCode?: string;
  country: string;
  fullAddressString: string;
}

export interface CompanyMetadata {
  name: string;
  legalEntityNote: string;
  foundedYear: number;
  tagline: string;
  operatingSince: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  location: BusinessLocation;
  inquiryNotice: string;
  scopeStatement: string;
  strategicVision: string;
}

export interface CapabilityItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  detailedScope: string[];
  structuralCategory:
    "support-structures" | "access-systems" | "custom-fabrication" | "site-services";
  keyFeatures: string[];
  scopeBoundaries: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  targetProcurementRole: string;
  description: string;
  applicableStructures: string[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  tagline: string;
  description: string;
  mainNav: NavItem[];
  footerNav: FooterNavGroup[];
  legalNav: NavItem[];
  company: CompanyMetadata;
}
