import type { Synergy } from "@/lib/types";

export const synergies: Synergy[] = [
  {
    emoji: "🏥→🍼",
    from: "DanhBaBacSi × SuaEmbe",
    title: { vi: "BS Nhi tư vấn chọn sữa cho bé", en: "Pediatrician advises formula choice" },
    description: {
      vi: "Sau khám tại DanhBaBacSi, BS Nhi recommend loại sữa → kết nối thẳng vào SuaEmbe để tìm review và mua ngay.",
      en: "After a DanhBaBacSi visit, the pediatrician recommends a formula and links straight into SuaEmbe for reviews and purchase.",
    },
    chain: "VEA Tech → VEA Tech → VEA Retail",
  },
  {
    emoji: "📋→⚖️",
    from: "NoThue × VEA Law",
    title: { vi: "DN nợ thuế cần luật sư xử lý", en: "Tax-debt businesses need counsel" },
    description: {
      vi: "Doanh nghiệp tra ra mình đang nợ thuế → CTA kết nối ngay với VEA Law để được tư vấn xử lý.",
      en: "A business discovers it owes tax → a CTA connects it directly to VEA Law for resolution advice.",
    },
    chain: "VEA Tech → VEA Law",
  },
  {
    emoji: "🌃→🎭→📡",
    from: "Nightlife × BookingModel × VEA Media",
    title: { vi: "Venue cần DJ, dancer và media", en: "Venues need DJs, dancers and media" },
    description: {
      vi: "Bar đặt table → book DJ/dancer từ BookingModel → VEA Media làm PR + KOL seeding → triple revenue.",
      en: "A bar takes a booking → hires DJ/dancers via BookingModel → VEA Media runs PR and KOL seeding.",
    },
    chain: "VEA Tech → VEA Media → VEA Retail",
  },
  {
    emoji: "📡→⚙️→🛍️",
    from: "VEA Media × VEA Tech × VEA Retail",
    title: { vi: "Full-stack campaign cho khách hàng", en: "Full-stack campaign for a client" },
    description: {
      vi: "VEA Media run campaign → VEA Tech build landing page → VEA Retail fulfillment → toàn bộ value chain trong VEA.",
      en: "VEA Media runs the campaign → VEA Tech builds the landing page → VEA Retail handles fulfillment.",
    },
    chain: "Media + Tech + Retail = Full stack",
  },
];
