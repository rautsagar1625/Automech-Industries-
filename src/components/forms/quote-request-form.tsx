"use client";

import * as React from "react";
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
  "mt-2 block w-full border border-rule-strong bg-card px-4 py-3 text-[0.98rem] text-ink placeholder:text-graphite/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-oxide aria-[invalid=true]:border-oxide";

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
      <label htmlFor={id} className="text-ink text-sm font-medium">
        {label}
        {optional && <span className="text-graphite font-normal"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-oxide mt-1.5 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteRequestForm({ defaultCategory }: { defaultCategory?: ProjectCategory }) {
  const [isSuccess, setIsSuccess] = React.useState(false);

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
    },
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    // TODO: connect to a real submission endpoint (email, CRM or server action).
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.info("Quote request submitted:", data);
    setIsSuccess(true);
    reset();
  };

  const a11y = (name: keyof EnquiryFormValues) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  if (isSuccess) {
    return (
      <div className="border-ink border-t pt-10" role="status">
        <p className="label text-oxide">Enquiry sent</p>
        <h3 className="type-h3 text-ink mt-3">Thank you. We have your enquiry.</h3>
        <p className="text-graphite mt-3 max-w-md">
          We will review the details and contact you to discuss scope, quantities and delivery.
        </p>
        <Button variant="outline" size="sm" className="mt-8" onClick={() => setIsSuccess(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      <fieldset>
        <legend className="label text-graphite border-ink mb-6 w-full border-t pt-6">
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
        <legend className="label text-graphite border-ink mb-6 w-full border-t pt-6">
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

      <div className="bg-card border-rule border p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="accent-oxide mt-1 h-4 w-4 shrink-0"
            {...a11y("scopeAcknowledgment")}
            {...register("scopeAcknowledgment")}
          />
          <span className="text-ink-soft text-sm leading-relaxed">
            I understand that Automech Industries fabricates and installs steel structures,
            platforms and supports, and does not manufacture complete boilers, pressure vessels or
            filtration equipment.
          </span>
        </label>
        {errors.scopeAcknowledgment && (
          <p id="scopeAcknowledgment-error" className="text-oxide mt-2 text-sm">
            {errors.scopeAcknowledgment.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send enquiry"}
        {!isSubmitting && <ButtonArrow />}
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
