import { z } from "zod";

/**
 * Enquiry and RFQ (Request for Quote) data models and validation schemas
 * Tailored for industrial procurement and supply-chain inquiries across India.
 */

export const ProjectCategoryEnum = z.enum([
  "equipment-support-structures",
  "boiler-support-structures",
  "filtration-support-structures",
  "industrial-platforms-stairs-railings",
  "custom-structural-fabrication",
  "on-site-erection-assembly",
  "other-industrial-fabrication",
]);

export type ProjectCategory = z.infer<typeof ProjectCategoryEnum>;

export const EnquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Contact person name must be at least 2 characters." })
    .max(100),
  companyName: z.string().min(2, { message: "Company or enterprise name is required." }).max(120),
  email: z.string().email({ message: "Please provide a valid corporate or work email address." }),
  phone: z.string().min(10, { message: "Please enter a valid contact phone number." }).max(15),
  siteLocation: z
    .string()
    .min(2, { message: "Plant or delivery site location is required." })
    .max(120),
  projectCategory: ProjectCategoryEnum,
  estimatedTonnage: z.string().optional(),
  targetCompletionDate: z.string().optional(),
  projectBrief: z
    .string()
    .min(20, {
      message:
        "Please describe requirements, structural scope, or material specifications (minimum 20 characters).",
    })
    .max(2500),
  scopeAcknowledgment: z.boolean().refine((val) => val === true, {
    message:
      "Please acknowledge that structural fabrication and support scope applies (not complete OEM equipment).",
  }),
});

export type EnquiryFormValues = z.infer<typeof EnquirySchema>;

export interface EnquirySubmissionState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
  errors?: Record<string, string[]>;
}
