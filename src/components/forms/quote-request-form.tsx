"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EnquirySchema,
  ProjectCategoryEnum,
  type EnquiryFormValues,
  type ProjectCategory,
} from "@/types/enquiry";
import { Button, ButtonArrow } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categoryOptions: { value: ProjectCategory; label: string }[] = [
  { value: "equipment-support-structures", label: "Equipment support structures and skids" },
  { value: "boiler-support-structures", label: "Boiler support structures (steelwork only)" },
  {
    value: "filtration-support-structures",
    label: "Filtration support structures (steelwork only)",
  },
  {
    value: "industrial-platforms-stairs-railings",
    label: "Platforms, walkways, stairs and railings",
  },
  { value: "custom-structural-fabrication", label: "Custom fabrication to drawing" },
  { value: "on-site-erection-assembly", label: "On-site installation" },
  { value: "other-industrial-fabrication", label: "Something else" },
];

const inputClass =
  "mt-2 block w-full border border-rule-strong bg-card px-4 py-3 text-[0.98rem] text-navy placeholder:text-graphite/70 transition-colors focus:border-navy focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand aria-[invalid=true]:border-brand";

function Field({
  id,
  label,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-navy text-sm font-medium">
        {label}
        {optional && <span className="text-graphite font-normal"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-brand mt-1.5 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteRequestForm({ defaultCategory }: { defaultCategory?: ProjectCategory }) {
  const [submissionState, setSubmissionState] = React.useState<{
    success: boolean;
    referenceId?: string;
    errorMessage?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      siteLocation: "",
      projectCategory: defaultCategory ?? "equipment-support-structures",
      estimatedTonnage: "",
      targetCompletionDate: "",
      projectBrief: "",
      scopeAcknowledgment: false,
      privacyConsent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    setSubmissionState(null);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmissionState({
          success: false,
          errorMessage:
            result.message || "Failed to submit enquiry. Please check your inputs or try again.",
        });
        return;
      }

      setSubmissionState({
        success: true,
        referenceId: result.referenceId,
      });
      reset();
    } catch {
      setSubmissionState({
        success: false,
        errorMessage: "Network error. Please check your connection and try again.",
      });
    }
  };

  const a11y = (name: keyof EnquiryFormValues) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  if (submissionState?.success) {
    return (
      <div className="border-navy border-t pt-10" role="status" tabIndex={-1}>
        <div className="bg-brand-tint text-brand inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-medium tracking-wider uppercase">
          ✓ Enquiry Received
        </div>
        <h3 className="type-h3 text-navy mt-4">
          Thank you. Your quotation request has been logged.
        </h3>
        {submissionState.referenceId && (
          <div className="bg-steel border-rule mt-4 border p-4">
            <span className="text-graphite block text-xs">Your Enquiry Reference:</span>
            <span className="text-brand font-mono text-lg font-bold">
              {submissionState.referenceId}
            </span>
          </div>
        )}
        <p className="text-graphite mt-4 max-w-md">
          Our engineering desk in Dahigaon will review your requirements, inspect the drawing scope,
          and contact you directly.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-8"
          onClick={() => setSubmissionState(null)}
        >
          Submit another quotation request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      <fieldset>
        <legend className="label text-graphite border-navy mb-6 w-full border-t pt-6">
          1 · Your details
        </legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="fullName" label="Your name" error={errors.fullName?.message}>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              className={inputClass}
              {...a11y("fullName")}
              {...register("fullName")}
            />
          </Field>
          <Field id="companyName" label="Company" error={errors.companyName?.message}>
            <input
              id="companyName"
              type="text"
              autoComplete="organization"
              className={inputClass}
              {...a11y("companyName")}
              {...register("companyName")}
            />
          </Field>
          <Field id="email" label="Work email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              {...a11y("email")}
              {...register("email")}
            />
          </Field>
          <Field id="phone" label="Phone" error={errors.phone?.message}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91"
              className={inputClass}
              {...a11y("phone")}
              {...register("phone")}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend className="label text-graphite border-navy mb-6 w-full border-t pt-6">
          2 · Your project
        </legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field
            id="projectCategory"
            label="Type of work"
            error={errors.projectCategory?.message}
            className="sm:col-span-2"
          >
            <select
              id="projectCategory"
              className={cn(inputClass, "appearance-none")}
              {...register("projectCategory")}
            >
              {categoryOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field id="siteLocation" label="Site location" error={errors.siteLocation?.message}>
            <input
              id="siteLocation"
              type="text"
              placeholder="City, state"
              className={inputClass}
              {...a11y("siteLocation")}
              {...register("siteLocation")}
            />
          </Field>
          <Field id="targetCompletionDate" label="When do you need it?" optional>
            <input
              id="targetCompletionDate"
              type="text"
              placeholder="e.g. within 8 weeks"
              className={inputClass}
              {...register("targetCompletionDate")}
            />
          </Field>
          <Field
            id="estimatedTonnage"
            label="Approximate steel weight"
            optional
            className="sm:col-span-2"
          >
            <input
              id="estimatedTonnage"
              type="text"
              placeholder="e.g. 25 tonnes"
              className={inputClass}
              {...register("estimatedTonnage")}
            />
          </Field>
          <Field
            id="projectBrief"
            label="Describe what you need"
            error={errors.projectBrief?.message}
            className="sm:col-span-2"
          >
            <textarea
              id="projectBrief"
              rows={5}
              placeholder="Structure type, sizes, whether drawings are ready, steel grade, finish, and whether you need installation."
              className={inputClass}
              {...a11y("projectBrief")}
              {...register("projectBrief")}
            />
          </Field>
        </div>
      </fieldset>

      {/* Anti-spam honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website_url">Do not fill this field</label>
        <input
          id="company_website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      {submissionState?.errorMessage && (
        <div
          role="alert"
          className="border-brand bg-brand-tint/60 text-navy flex items-start gap-3 border p-4"
        >
          <span className="text-brand text-lg leading-none font-bold" aria-hidden="true">
            !
          </span>
          <p className="text-sm font-medium">{submissionState.errorMessage}</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="bg-card border-rule border p-5">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="accent-brand mt-1 h-4 w-4 shrink-0"
              {...a11y("scopeAcknowledgment")}
              {...register("scopeAcknowledgment")}
            />
            <span className="text-navy-soft text-sm leading-relaxed">
              I understand that Automech Industries fabricates and installs steel structures,
              platforms and supports, and does not manufacture complete boilers, pressure vessels or
              filtration equipment.
            </span>
          </label>
          {errors.scopeAcknowledgment && (
            <p id="scopeAcknowledgment-error" className="text-brand mt-2 text-sm">
              {errors.scopeAcknowledgment.message}
            </p>
          )}
        </div>

        <div className="bg-card border-rule border p-5">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="accent-brand mt-1 h-4 w-4 shrink-0"
              {...a11y("privacyConsent")}
              {...register("privacyConsent")}
            />
            <span className="text-navy-soft text-sm leading-relaxed">
              I consent to Automech Industries storing and processing these project details and
              technical specifications to prepare our quotation, in accordance with the{" "}
              <Link
                href="/privacy"
                target="_blank"
                className="text-brand hover:text-brand-deep underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.privacyConsent && (
            <p id="privacyConsent-error" className="text-brand mt-2 text-sm">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="inline-flex w-full min-w-[160px] items-center justify-center gap-2 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <svg
              className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span>Submitting RFQ…</span>
          </>
        ) : (
          <>
            <span>Send enquiry</span>
            <ButtonArrow />
          </>
        )}
      </Button>
    </form>
  );
}

/** Reads ?type= from the URL to pre-select the type of work. */
export function QuoteRequestFormWithParams() {
  const type = useSearchParams().get("type");
  const parsed = ProjectCategoryEnum.safeParse(type);
  return <QuoteRequestForm defaultCategory={parsed.success ? parsed.data : undefined} />;
}
