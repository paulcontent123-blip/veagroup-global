import type { Localized } from "@/lib/types";

/**
 * Nguồn số liệu nền dùng chung. Những màn hình có ngữ cảnh riêng (trang chủ,
 * hệ sinh thái, thành tựu) chọn đúng con số được ghi trong demo HTML.
 */
export const stats = {
  companies: 5,
  platforms: 25,
  platformsLive: 14,
  reachPerMonth: "8M+",
  launchYear: 2026,
  kols: "2.800+",
  brands: "200+",
  seaCountries: 8,
};

/** Ô số liệu hiển thị ở hero. */
export const heroStats: { value: string; label: Localized }[] = [
  { value: String(stats.companies), label: { vi: "Công ty thành viên", en: "Member companies" } },
  { value: "14", label: { vi: "Nền tảng số", en: "Digital platforms" } },
  { value: stats.reachPerMonth, label: { vi: "Reach tiềm năng / tháng", en: "Potential reach / month" } },
  { value: String(stats.launchYear), label: { vi: "Năm hoàn thiện hệ sinh thái", en: "Ecosystem completion" } },
];
