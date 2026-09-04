import type { Localized, NavItem } from "@/lib/types";

/** Cây điều hướng chính (đổ ra từ nav desktop + mobile). */
export const mainNav: NavItem[] = [
  { label: { vi: "Trang chủ", en: "Home" }, href: "/" },
  {
    label: { vi: "Về VEA", en: "About VEA" },
    href: "/ve-vea",
    children: [
      { label: { vi: "Về VEA (Tổng quan)", en: "About VEA (Overview)" }, href: "/ve-vea", emoji: "🏠" },
      { label: { vi: "Câu chuyện VEA", en: "The VEA Story" }, href: "/ve-vea/cau-chuyen", emoji: "🇻🇳" },
      { label: { vi: "5 Công ty thành viên", en: "5 Member Companies" }, href: "/ve-vea/cong-ty", emoji: "🏢" },
      { label: { vi: "Mô hình vận hành", en: "Operating Model" }, href: "/ve-vea/mo-hinh", emoji: "📐" },
      { label: { vi: "Tầm nhìn & Sứ mệnh", en: "Vision & Mission" }, href: "/ve-vea/tam-nhin", emoji: "🔭" },
    ],
  },
  {
    label: { vi: "Hệ sinh thái", en: "Ecosystem" },
    href: "/he-sinh-thai",
    children: [
      { label: { vi: "Toàn bộ nền tảng", en: "All platforms" }, href: "/he-sinh-thai", emoji: "🌐" },
      { label: { vi: "Sức mạnh cộng hưởng", en: "Cross-company synergy" }, href: "/he-sinh-thai#synergy", emoji: "🔗" },
      { label: { vi: "Lộ trình phát triển", en: "Roadmap" }, href: "/he-sinh-thai#roadmap", emoji: "🗺️" },
    ],
  },
  {
    label: { vi: "Tin tức & Thành tựu", en: "News & Milestones" },
    children: [
      { label: { vi: "Bài viết & Cập nhật", en: "Articles & Updates" }, href: "/tin-tuc", emoji: "📰" },
      { label: { vi: "Cột mốc & Thành tựu", en: "Milestones & Achievements" }, href: "/thanh-tuu", emoji: "🏆" },
    ],
  },
  {
    label: { vi: "Đồng hành", en: "Join Us" },
    children: [
      { label: { vi: "Tuyển dụng", en: "Careers" }, href: "/tuyen-dung", emoji: "💼" },
      { label: { vi: "Hợp tác & Đối tác", en: "Partnership" }, href: "/hop-tac", emoji: "🤝" },
      { label: { vi: "Đối tác của VEA", en: "Our Partners" }, href: "/doi-tac", emoji: "🌐" },
    ],
  },
  { label: { vi: "Liên hệ", en: "Contact" }, href: "/lien-he" },
];

/** Nhóm link footer theo đúng cấu trúc trong bản HTML gốc. */
export const footerNav: { title: Localized; links: { label: Localized; href: string }[] }[] = [
  {
    title: { vi: "Công ty thành viên", en: "Member companies" },
    links: [
      { label: "VEA Media", href: "/ve-vea/cong-ty#media" },
      { label: "VEA Tech", href: "/ve-vea/cong-ty#tech" },
      { label: "VEA Law", href: "/ve-vea/cong-ty#law" },
      { label: "VEA Retail", href: "/ve-vea/cong-ty#retail" },
      { label: "VEA Academy", href: "/ve-vea/cong-ty#academy" },
    ],
  },
  {
    title: { vi: "Civic & Health", en: "Civic & Health" },
    links: [
      { label: "NợThuế.com.vn", href: "/he-sinh-thai" },
      { label: "TraCuuNoThue.com", href: "/he-sinh-thai" },
      { label: "TraCuuQuyHoach", href: "/he-sinh-thai" },
      { label: "DanhBaBacSi", href: "/he-sinh-thai" },
      { label: "SuaEmbe.com", href: "/he-sinh-thai" },
    ],
  },
  {
    title: { vi: "Legal & Edu", en: "Legal & Edu" },
    links: [
      { label: "DanhBaLuatSu.asia", href: "/he-sinh-thai" },
      { label: "LuatSuTranhTung", href: "/he-sinh-thai" },
      { label: "Tiếng Anh Pháp Lý", href: "/he-sinh-thai" },
      { label: "SuaCongThuc", href: "/he-sinh-thai" },
    ],
  },
  {
    title: { vi: "Content & Booking", en: "Content & Booking" },
    links: [
      { label: "TruyenMa.com.vn", href: "/he-sinh-thai" },
      { label: "Nightlife.com.vn", href: "/he-sinh-thai" },
      { label: "SanCrypto.com.vn", href: "/he-sinh-thai" },
      { label: "BookingLivestream", href: "/he-sinh-thai" },
      { label: "BookingModel.com", href: "/he-sinh-thai" },
    ],
  },
  {
    title: { vi: "VEA Group", en: "VEA Group" },
    links: [
      { label: "Về chúng tôi", href: "/ve-vea" },
      { label: "Tuyển dụng", href: "/tuyen-dung" },
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Đầu tư", href: "/hop-tac" },
      { label: "Liên hệ", href: "/lien-he" },
    ],
  },
];
