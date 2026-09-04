import "server-only";
import { cookies } from "next/headers";
import type { Locale } from "@/lib/types";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from "./config";

/**
 * Ngôn ngữ hiện tại, đọc từ cookie (server-side).
 * Trang gọi 1 lần rồi truyền `locale` xuống các section (Server Components).
 * Migration path: thay bằng `next-intl` getLocale() khi cần i18n routing.
 */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
