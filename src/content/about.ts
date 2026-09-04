import type { Localized, Pillar, ValueItem } from "@/lib/types";

/** Trụ cột mô hình vận hành (dùng ở trang chủ + /ve-vea/mo-hinh). */
export const operatingPillars: Pillar[] = [
  {
    emoji: "🔗",
    title: { vi: "Cross-company Synergy", en: "Cross-company synergy" },
    description: {
      vi: "5 công ty hoạt động như một hệ thống — doanh thu của công ty này là pipeline của công ty khác. Không có silo, không cạnh tranh nội bộ.",
      en: "Five companies operate as one system — one company's revenue is another's pipeline. No silos, no internal competition.",
    },
  },
  {
    emoji: "📐",
    title: { vi: "Tối ưu chi phí cấu trúc", en: "Structural cost efficiency" },
    description: {
      vi: "Shared infrastructure: tech, legal, admin, marketing — chia đều cho 5 công ty thay vì mỗi công ty build riêng. Chi phí vận hành thấp hơn 60% so với mô hình truyền thống.",
      en: "Shared infrastructure — tech, legal, ops, marketing — spread across all five companies instead of each rebuilding its own.",
    },
  },
  {
    emoji: "🇻🇳",
    title: { vi: "Sứ mệnh đất nước", en: "Country mission" },
    description: {
      vi: "Mỗi nền tảng, mỗi dịch vụ đều được xây dựng với câu hỏi: \"Điều này tốt cho người Việt Nam không?\" Đây là bộ lọc quyết định trong mọi chiến lược.",
      en: "Every platform and service is built around one question: 'Is this good for Vietnamese people?'",
    },
  },
];

/** Câu chuyện thương hiệu (dùng ở /ve-vea/cau-chuyen + section trang chủ). */
export const storyBlocks: { emoji: string; title: Localized; body: Localized }[] = [
  {
    emoji: "🏗️",
    title: { vi: "Xây dựng hạ tầng số Việt Nam", en: "Building Vietnam's digital infrastructure" },
    body: {
      vi: "25 nền tảng phục vụ nhu cầu thiết yếu của người dân: y tế, pháp lý, giáo dục, tài chính, giải trí — tất cả bằng tiếng Việt, cho người Việt. Mỗi nền tảng được xây dựng với câu hỏi: \"Điều này có thực sự cần thiết với người dân Việt Nam không?\"",
      en: "Platforms for essential needs — health, legal, education, finance, entertainment — all in Vietnamese, for Vietnamese people.",
    },
  },
  {
    emoji: "🎓",
    title: { vi: "Giáo dục miễn phí cho cộng đồng", en: "Free education for the community" },
    body: {
      vi: "VEA Academy không chỉ kinh doanh giáo dục — mà còn đào tạo miễn phí cho học sinh, sinh viên chưa có điều kiện. Đây là cam kết cụ thể với đất nước, không phải khẩu hiệu.",
      en: "VEA Academy is not only an education business — it also trains under-resourced students for free.",
    },
  },
  {
    emoji: "🌏",
    title: { vi: "Đưa Việt Nam ra thế giới", en: "Taking Vietnam to the world" },
    body: {
      vi: "DanhBaLuatSu.asia phủ 8 quốc gia Đông Nam Á ngay từ năm đầu. VEA Group xây dựng với tư duy toàn cầu từ ngày đầu tiên — không bắt đầu bằng thị trường nội địa rồi mới nghĩ đến mở rộng.",
      en: "DanhBaLuatSu.asia spans 8 SEA countries. The ecosystem is built with a regional mindset from day one.",
    },
  },
  {
    emoji: "💡",
    title: { vi: "Công nghệ phục vụ con người, không phải ngược lại", en: "Technology serves people, not the other way around" },
    body: {
      vi: "Dữ liệu công, tra cứu quy hoạch, nợ thuế, thông tin y tế — những thông tin thiết yếu mà mọi người dân Việt Nam đều có quyền tiếp cận dễ dàng. VEA Tech xây dựng civic tech không phải vì nó hợp xu hướng, mà vì đó là điều đúng đắn cần làm.",
      en: "Public data, land-use lookups, tax debt, health information — essentials everyone has the right to reach easily.",
    },
  },
];

export const storyQuote: { text: Localized; attribution: Localized } = {
  text: {
    vi: "Chúng tôi bắt đầu hành trình này không chỉ vì kinh doanh — mà vì muốn góp một phần gì đó cho đất nước.",
    en: "We started this journey not only for business — but to contribute something to the country.",
  },
  attribution: { vi: "— Tầm nhìn sáng lập VEA Group, 2024", en: "— VEA Group founding vision, 2024" },
};

/** Tầm nhìn & sứ mệnh (trang /ve-vea/tam-nhin). */
export const visionBlocks: ValueItem[] = [
  {
    emoji: "🎯",
    title: { vi: "Sứ mệnh 2026", en: "2026 Mission" },
    description: {
      vi: "Đưa 25 nền tảng số vào vận hành, phục vụ hàng triệu người Việt tiếp cận thông tin thiết yếu — y tế, pháp lý, tài chính, giáo dục và giải trí — dễ dàng hơn, minh bạch hơn.",
      en: "Bring the platforms into operation so millions of Vietnamese can reach essential information more easily and transparently.",
    },
  },
  {
    emoji: "🌏",
    title: { vi: "Tầm nhìn 2028", en: "2028 Vision" },
    description: {
      vi: "Mở rộng sang 5 quốc gia Đông Nam Á. DanhBaLuatSu.asia là bước đầu tiên. VEA Group xây dựng với tư duy regional từ ngày đầu tiên — không bắt đầu local rồi mới nghĩ ra ngoài.",
      en: "Expand into 5 SEA countries — regional thinking from day one, not local-first then expansion.",
    },
  },
  {
    emoji: "💡",
    title: { vi: "Cam kết cộng đồng", en: "Community commitment" },
    description: {
      vi: "VEA Academy đào tạo miễn phí cho học sinh, sinh viên chưa có điều kiện. ThienNguyen.com.vn kết nối thiện nguyện không phí. Civic tech cung cấp dữ liệu công khai cho người dân — không paywall.",
      en: "Free training for under-resourced students. Zero-fee charity. Public data without paywalls.",
    },
  },
  {
    emoji: "🔭",
    title: { vi: "Tầm nhìn dài hạn", en: "Long-term vision" },
    description: {
      vi: "\"Người Việt Nam xứng đáng có hạ tầng số tốt nhất.\" — Không nhập khẩu giải pháp ngoại. Xây dựng từ đầu, bằng người Việt, cho người Việt, với mindset toàn cầu.",
      en: "'Vietnamese people deserve the best digital infrastructure.' Built from scratch, by Vietnamese, for Vietnamese, with a global mindset.",
    },
  },
];

export const companyValues: ValueItem[] = [
  {
    emoji: "🎯",
    title: { vi: "Hiệu quả tổng thể", en: "System-level efficiency" },
    description: {
      vi: "Mọi quyết định đo bằng hiệu quả của cả hệ sinh thái, không phải từng đơn vị.",
      en: "Every decision is measured by ecosystem outcome, not by unit.",
    },
  },
  {
    emoji: "🔍",
    title: { vi: "Minh bạch", en: "Transparency" },
    description: {
      vi: "Số liệu có nguồn, quy trình rõ ràng, cam kết công khai.",
      en: "Sourced numbers, clear processes, public commitments.",
    },
  },
  {
    emoji: "⚡",
    title: { vi: "Tốc độ có kỷ luật", en: "Disciplined speed" },
    description: {
      vi: "Triển khai nhanh nhưng dùng chung chuẩn chất lượng và hạ tầng.",
      en: "Ship fast on shared quality standards and infrastructure.",
    },
  },
  {
    emoji: "🤝",
    title: { vi: "Đối tác cùng thắng", en: "Win-win partnerships" },
    description: {
      vi: "Đối tác của một công ty là đối tác của cả hệ sinh thái.",
      en: "A partner of one company is a partner of the whole ecosystem.",
    },
  },
];
