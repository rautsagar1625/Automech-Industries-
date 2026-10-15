"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function CopyrightYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => fallback
  );

  return <span>{year}</span>;
}
