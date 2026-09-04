import type { Localized } from "@/lib/types";

/** Cấu hình site — chỗ duy nhất chứa thông tin pháp nhân / liên hệ / SEO. */
export const site = {
  name: "VEA Group",
  legalName: "Vietnam Era Group",
  domain: "veagroup.global",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://veagroup.global",
  locales: ["vi", "en"] as const,

  tagline: {
    vi: "Kỷ nguyên Việt Nam",
    en: "Vietnam Era",
  } satisfies Localized,

  description: {
    vi: "Vietnam Era Group — Kỷ nguyên Việt Nam. Tập đoàn xây dựng hệ sinh thái kinh doanh đa ngành, kết nối 5 công ty thành viên và 14 nền tảng số tại Việt Nam và Đông Nam Á.",
    en: "Vietnam Era Group — Vietnam Era. A multi-industry business group connecting five member companies and 14 digital platforms across Vietnam and Southeast Asia.",
  } satisfies Localized,

  contact: {
    email: "hello@veagroup.global",
    phonePlaceholder: "+84 •••• ••• •••",
    // TODO(backend): thay bằng dữ liệu pháp nhân thật trước khi go-live
    address: {
      vi: "TP. Hồ Chí Minh, Việt Nam",
      en: "Ho Chi Minh City, Vietnam",
    } satisfies Localized,
    responseTime: {
      vi: "Phản hồi trong 24 giờ làm việc",
      en: "We reply within 1 business day",
    } satisfies Localized,
  },

  socials: [
    { key: "linkedin", label: "LinkedIn", href: "#" },
    { key: "facebook", label: "Facebook", href: "#" },
    { key: "youtube", label: "YouTube", href: "#" },
    { key: "x", label: "X", href: "#" },
  ],

  legal: [
    { label: { vi: "Chính sách bảo mật", en: "Privacy Policy" }, href: "/phap-ly/bao-mat" },
    { label: { vi: "Điều khoản sử dụng", en: "Terms of Use" }, href: "/phap-ly/dieu-khoan" },
    { label: { vi: "Chính sách cookie", en: "Cookie Policy" }, href: "/phap-ly/cookie" },
  ] satisfies { label: Localized; href: string }[],
};

export type Site = typeof site;
