import type { Locale, Localized } from "@/lib/types";

/**
 * Lấy chuỗi theo ngôn ngữ. Dùng được cả ở Server & Client Component
 * (hàm thuần, không phụ thuộc runtime).
 */
export function tx(value: Localized | undefined | null, locale: Locale): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return locale === "en" ? value.en ?? value.vi : value.vi;
}
