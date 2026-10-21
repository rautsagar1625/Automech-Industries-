"use client";

import * as React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("Critical global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center font-sans">
        <div className="max-w-md">
          <p className="font-mono text-xs font-bold tracking-wider text-red-600 uppercase">
            Critical Error
          </p>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Application Error</h1>
          <p className="mt-3 text-sm text-gray-600">
            A critical system error occurred. Please attempt to reload the application.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 inline-flex items-center justify-center bg-[#14283F] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1f3a59]"
          >
            Reload application
          </button>
        </div>
      </body>
    </html>
  );
}
