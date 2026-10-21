import { NextRequest, NextResponse } from "next/server";
import { EnquirySchema } from "@/types/enquiry";

// In-memory sliding rate limiter: IP -> timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many quote requests from this IP. Please try again after 10 minutes or contact us by phone.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Spam & Bot Protection: check honeypot
    if (body.honeypot && String(body.honeypot).trim() !== "") {
      // Return simulated success to trick automated spam bots
      return NextResponse.json(
        {
          success: true,
          referenceId: "RFQ-" + Math.floor(100000 + Math.random() * 900000),
          message: "Enquiry submitted successfully.",
        },
        { status: 200 }
      );
    }

    // Server-side Zod validation
    const parsed = EnquirySchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string[]> = {};
      parsed.error.issues.forEach((err) => {
        const field = err.path[0]?.toString() || "form";
        if (!fieldErrors[field]) fieldErrors[field] = [];
        fieldErrors[field].push(err.message);
      });

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Sanitize user-provided text fields
    const sanitizedData = {
      fullName: sanitize(data.fullName),
      companyName: sanitize(data.companyName),
      email: data.email.trim().toLowerCase(),
      phone: sanitize(data.phone),
      siteLocation: sanitize(data.siteLocation),
      projectCategory: data.projectCategory,
      estimatedTonnage: data.estimatedTonnage ? sanitize(data.estimatedTonnage) : undefined,
      targetCompletionDate: data.targetCompletionDate
        ? sanitize(data.targetCompletionDate)
        : undefined,
      projectBrief: sanitize(data.projectBrief),
      scopeAcknowledgment: data.scopeAcknowledgment,
      privacyConsent: data.privacyConsent,
    };

    // Generate reference code
    const year = new Date().getFullYear();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `RFQ-${year}-${randomCode}`;

    // Log internally for operations
    console.info(`[Quote Request Received] Ref: ${referenceId}`, {
      company: sanitizedData.companyName,
      contact: sanitizedData.fullName,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      category: sanitizedData.projectCategory,
      siteLocation: sanitizedData.siteLocation,
      tonnage: sanitizedData.estimatedTonnage,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Thank you. Your quotation request has been received by our engineering desk.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An internal error occurred while processing your request. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
