import type { Locale } from "@/lib/types";

export const LOCALES = ["vi", "en"] as const;
export const DEFAULT_LOCALE: Locale = "vi";
export const LOCALE_COOKIE = "vea_locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "vi" || value === "en";
}
