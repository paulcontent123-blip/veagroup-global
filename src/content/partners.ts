import type { Localized, Partner } from "@/lib/types";

/** Nhãn hàng hiển thị theo danh sách trong bản HTML demo. */
export const brandPartners: Partner[] = [
  { name: "L'Oréal Paris", emoji: "💄", type: { vi: "Beauty · 3 campaigns", en: "Beauty · 3 campaigns" } },
  { name: "VinFast", emoji: "🚗", type: { vi: "Automotive · 2 campaigns", en: "Automotive · 2 campaigns" } },
  { name: "Highlands Coffee", emoji: "☕", type: { vi: "F&B · 2 campaigns", en: "F&B · 2 campaigns" } },
  { name: "Samsung Vietnam", emoji: "📱", type: { vi: "Electronics · 4 campaigns", en: "Electronics · 4 campaigns" } },
  { name: "Vinmec", emoji: "🏥", type: { vi: "Healthcare · Partnership", en: "Healthcare · Partnership" } },
  { name: "Shopee Vietnam", emoji: "🛒", type: { vi: "E-commerce · 3 campaigns", en: "E-commerce · 3 campaigns" } },
  { name: "Masan Consumer", emoji: "🍜", type: { vi: "FMCG · 2 campaigns", en: "FMCG · 2 campaigns" } },
];

/** Nhãn hàng đã chạy chiến dịch cùng VEA Media (trang /hop-tac). */
export const mediaCampaignPartners: Partner[] = [
  { name: "L'Oréal Paris", emoji: "💄", type: { vi: "Beauty · 3 chiến dịch", en: "Beauty · 3 campaigns" } },
  { name: "VinFast", emoji: "🚗", type: { vi: "Automotive · 2 chiến dịch", en: "Automotive · 2 campaigns" } },
  { name: "Highlands Coffee", emoji: "☕", type: { vi: "F&B · 2 chiến dịch", en: "F&B · 2 campaigns" } },
  { name: "Vinamilk", emoji: "🍼", type: { vi: "FMCG · 1 chiến dịch", en: "FMCG · 1 campaign" } },
  { name: "Cocoon Vietnam", emoji: "🌿", type: { vi: "Beauty · 1 chiến dịch", en: "Beauty · 1 campaign" } },
  { name: "Nestlé Vietnam", emoji: "🛍️", type: { vi: "FMCG · 1 chiến dịch", en: "FMCG · 1 campaign" } },
  { name: "Canifa", emoji: "👗", type: { vi: "Fashion · 1 chiến dịch", en: "Fashion · 1 campaign" } },
];

/** Đối tác thể chế / hệ sinh thái. */
export const institutionalPartners: Partner[] = [
  {
    name: "Bệnh viện Từ Dũ",
    emoji: "🏥",
    type: { vi: "Đối tác y tế — SuaEmbe, DanhBaBacSi", en: "Healthcare partner — SuaEmbe, DanhBaBacSi" },
  },
  {
    name: "Đoàn Luật sư TP.HCM",
    emoji: "🏛️",
    type: { vi: "Đối tác pháp lý — VEA Law, DanhBaLuatSu.asia", en: "Legal partner — VEA Law, DanhBaLuatSu.asia" },
  },
  {
    name: "Hội Chữ thập đỏ Việt Nam",
    emoji: "🌿",
    type: { vi: "Đối tác thiện nguyện — ThienNguyen.com.vn", en: "Charity partner — ThienNguyen.com.vn" },
  },
];

export const partnerTracks: { title: Localized; description: Localized; emoji: string; cta: Localized }[] = [
  {
    emoji: "💼",
    title: { vi: "Nhà đầu tư", en: "Investors" },
    description: {
      vi: "Cơ hội đầu tư vào hệ sinh thái 14 nền tảng số tại thị trường Việt Nam và ĐNA đang tăng trưởng nhanh.",
      en: "Invest in a fast-growing digital-platform ecosystem across Vietnam and Southeast Asia.",
    },
    cta: { vi: "Xem Investment Deck", en: "View the deck" },
  },
  {
    emoji: "🤝",
    title: { vi: "Đối tác chiến lược", en: "Strategic partners" },
    description: {
      vi: "Brand, agency, nền tảng muốn tích hợp vào hệ sinh thái VEA hoặc co-develop sản phẩm phục vụ người Việt.",
      en: "Brands, agencies and platforms that want to integrate with — or co-build inside — the VEA ecosystem.",
    },
    cta: { vi: "Đề xuất hợp tác", en: "Propose a partnership" },
  },
  {
    emoji: "📡",
    title: { vi: "Brand Advertising", en: "Brand Advertising" },
    description: {
      vi: "Chạy chiến dịch influencer marketing qua BookingKOLs — từ Nano KOC đến Mega KOL, đa nền tảng.",
      en: "Run influencer marketing campaigns through BookingKOLs — from Nano KOC to Mega KOL, across platforms.",
    },
    cta: { vi: "Liên hệ ngay", en: "Contact us" },
  },
];

export const partnershipTopics: Localized[] = [
  { vi: "VEA Group (hợp tác chiến lược cấp tập đoàn)", en: "VEA Group (group-level strategic partnership)" },
  { vi: "VEA Media (Influencer, KOL, Digital Marketing)", en: "VEA Media (influencer, KOL, digital marketing)" },
  { vi: "VEA Tech (nền tảng, phần mềm, công nghệ)", en: "VEA Tech (platforms, software, technology)" },
  { vi: "VEA Law (pháp lý, tranh tụng, tư vấn)", en: "VEA Law (legal, litigation, advisory)" },
  { vi: "VEA Retail (bán lẻ, phân phối, OEM)", en: "VEA Retail (retail, distribution, OEM)" },
  { vi: "VEA Academy (đào tạo, giáo dục)", en: "VEA Academy (training, education)" },
  { vi: "Nhà đầu tư", en: "Investor" },
  { vi: "Khác", en: "Other" },
];
