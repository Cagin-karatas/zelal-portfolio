import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names and resolves conflicting Tailwind
 * utilities (e.g. passing both `p-4` and `p-2`) by keeping the last one.
 * Use this instead of template-string class concatenation anywhere a
 * class list has a condition in it.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
