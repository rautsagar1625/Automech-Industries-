"use client";

import * as React from "react";
import { Button, ButtonLink } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to monitoring service
    console.error("Application error encountered:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="container-site max-w-xl">
        <p className="label text-brand">System Notice</p>
        <h1 className="type-h2 text-navy mt-4">Something went wrong</h1>
        <p className="text-graphite mt-3 text-[0.95rem] leading-relaxed">
          An unexpected error occurred while loading this page. Our technical team has been
          notified.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button onClick={() => reset()} size="md">
            Try again
          </Button>
          <ButtonLink href="/" variant="outline" size="md">
            Return to homepage
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
