"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "automech_cookie_consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("cookie_consent_updated", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("cookie_consent_updated", callback);
  };
}

function getClientSnapshot(): string {
  try {
    return localStorage.getItem(CONSENT_KEY) ?? "unanswered";
  } catch {
    return "unanswered";
  }
}

function getServerSnapshot(): string {
  return "server_hydrating";
}

export function CookieBanner() {
  const consent = React.useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const handleChoice = (level: "all" | "essential") => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ level, timestamp: Date.now() }));
      window.dispatchEvent(new Event("cookie_consent_updated"));
    } catch {
      // Ignore write errors
    }
  };

  if (consent !== "unanswered") return null;

  return (
    <aside
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="container-site max-w-4xl">
        <div className="bg-navy border-navy-rule text-on-navy border p-5 shadow-2xl sm:p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div className="flex-1">
            <p className="label text-brand-light">Privacy & Data Notice</p>
            <p className="text-on-navy-muted mt-1.5 text-sm leading-relaxed">
              We use strictly necessary cookies to ensure our drawings portal and RFQ features
              function securely. We do not use third-party advertising trackers. Read our{" "}
              <Link href="/cookie-policy" className="hover:text-brand-light text-white underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="hover:text-brand-light text-white underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 md:mt-0 md:shrink-0">
            <Button size="sm" variant="outline-light" onClick={() => handleChoice("essential")}>
              Essential only
            </Button>
            <Button size="sm" onClick={() => handleChoice("all")}>
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
