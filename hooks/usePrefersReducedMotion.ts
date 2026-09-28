// Client subscription is required to track the operating system's live motion preference.
"use client";

import { useSyncExternalStore } from "react";

import { MEDIA_QUERY } from "@/lib/constants";

function subscribeToMotionPreference(onStoreChange: () => void): () => void {
  const mediaQuery = window.matchMedia(MEDIA_QUERY.reducedMotion);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

function getMotionPreferenceSnapshot(): boolean {
  return window.matchMedia(MEDIA_QUERY.reducedMotion).matches;
}

function getServerMotionPreferenceSnapshot(): boolean {
  return false;
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreferenceSnapshot,
    getServerMotionPreferenceSnapshot,
  );
}
