import type { Achievement, Milestone } from "@/lib/types";

export const achievements: Achievement[] = [
  {
    value: "25",
    label: { vi: "Nền tảng số đang xây dựng", en: "Digital platforms in build" },
    description: {
      vi: "Từ civic tech, y tế, pháp lý đến giải trí và thương mại — 25 nền tảng phục vụ mọi nhu cầu thiết yếu của người Việt.",
      en: "From civic tech and health to legal, entertainment and commerce — covering essential needs.",
    },
  },
  {
    value: "5",
    label: { vi: "Công ty thành viên", en: "Member companies" },
    description: {
      vi: "VEA Media, VEA Tech, VEA Law, VEA Retail, VEA Academy — 5 mảng kinh doanh bổ trợ chéo nhau.",
      en: "VEA Media, VEA Tech, VEA Law, VEA Retail, VEA Academy — cross-supporting one another.",
    },
  },
  {
    value: "2,800+",
    label: { vi: "KOL/KOC trong hệ thống BookingKOLs", en: "KOL/KOC in the BookingKOLs network" },
    description: {
      vi: "Nền tảng booking influencer đứng top 3 tại Việt Nam — đã phục vụ 200+ brands.",
      en: "A leading influencer-booking platform in Vietnam — 200+ brands served.",
    },
  },
  {
    value: "200+",
    label: { vi: "Brand đã hợp tác với VEA Media", en: "Brands worked with VEA Media" },
    description: {
      vi: "Từ L'Oréal, VinFast đến Highlands Coffee — chiến dịch influencer marketing đạt kết quả benchmark ngành.",
      en: "Influencer campaigns delivering industry-benchmark results.",
    },
  },
  {
    value: "8",
    label: { vi: "Quốc gia phủ sóng — DanhBaLuatSu.asia", en: "Countries covered — DanhBaLuatSu.asia" },
    description: {
      vi: "Nền tảng thư mục luật sư đầu tiên phủ 8 quốc gia Đông Nam Á từ năm đầu ra mắt.",
      en: "A lawyer directory spanning 8 SEA countries from year one.",
    },
  },
  {
    value: "10K+",
    label: { vi: "Lượt tra cứu tháng đầu — DanhBaBacSi", en: "First-month lookups — DanhBaBacSi" },
    description: {
      vi: "Vượt kỳ vọng 3 lần trong tháng đầu ra mắt.",
      en: "3× ahead of target in the launch month.",
    },
  },
];

export const milestones: Milestone[] = [
  {
    period: "2024 · Khởi đầu",
    title: { vi: "VEA Group thành lập — BookingKOLs ra mắt", en: "VEA Group founded — BookingKOLs launches" },
    description: {
      vi: "Nền tảng booking influencer đầu tiên đi vào hoạt động, thu hút 200+ brands trong năm đầu.",
      en: "The first influencer-booking platform goes live, drawing 200+ brands in year one.",
    },
  },
  {
    period: "Q1/2025",
    title: { vi: "VEA Tech ra đời — bắt đầu build 14 nền tảng đầu tiên", en: "VEA Tech is born — the first 14 platforms begin" },
    description: {
      vi: "DanhBaBacSi, NợThuế, TraCuuQuyHoach đồng loạt đi vào xây dựng.",
      en: "DanhBaBacSi, NoThue and TraCuuQuyHoach all enter development.",
    },
  },
  {
    period: "Q2/2025",
    title: { vi: "DanhBaLuatSu.asia live — phủ 8 quốc gia Đông Nam Á", en: "DanhBaLuatSu.asia goes live — 8 Southeast Asian countries" },
    description: {
      vi: "Bước đầu tiên đưa VEA Group ra thị trường khu vực.",
      en: "The first step taking VEA Group regional.",
    },
  },
  {
    period: "2026 · Năm bứt phá",
    title: { vi: "ViecLamCongNhan, SuaEmbe, Nightlife đồng loạt live", en: "ViecLamCongNhan, SuaEmbe, Nightlife go live" },
    description: {
      vi: "3 vertical platforms phục vụ 3 tệp người dùng khác nhau — đánh dấu bước chuyển từ build sang scale.",
      en: "Three vertical platforms for three audiences — moving from build to scale.",
    },
  },
  {
    period: "Q3/2026 · Đang triển khai",
    title: { vi: "VEA Law ra mắt · TranhChap + ThienNguyen demo · 25 nền tảng", en: "VEA Law launches · TranhChap + ThienNguyen demo · 25 platforms" },
    description: {
      vi: "Hệ sinh thái đạt 25 nền tảng — VEA Law chính thức hoạt động phục vụ cá nhân và doanh nghiệp.",
      en: "The ecosystem moves toward 25 platforms — VEA Law officially serves individuals and businesses.",
    },
    highlight: true,
  },
];
