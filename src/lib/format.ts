import type { Locale } from "@/lib/types";

/** Format ngày ISO (yyyy-mm-dd) theo locale. */
export function formatDate(iso: string, locale: Locale): string {
  const date = new Date(iso + "T00:00:00");
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}
