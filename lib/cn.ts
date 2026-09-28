import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combines conditional classes while resolving conflicting Tailwind utilities. */
export function cn(...inputs: readonly ClassValue[]): string {
  return twMerge(clsx(inputs));
}
