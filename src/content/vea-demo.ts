import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Megaphone,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";

export const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Về VEA", href: "/ve-vea" },
  { label: "Hệ sinh thái", href: "/he-sinh-thai" },
  { label: "Đối tác", href: "/doi-tac" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const heroStats = [
  { value: "5", label: "Công ty thành viên" },
  { value: "14", label: "Nền tảng số" },
  { value: "8M+", label: "Potential reach/tháng" },
  { value: "2026", label: "Năm ra mắt toàn bộ" },
] as const;

export const companyChips = [
  "VEA Media",
  "VEA Tech",
  "VEA Law",
  "VEA Retail",
  "VEA Academy",
  "TranhChap ✦",
  "ThienNguyen ✦",
] as const;

export const operatingPillars = [
  {
    emoji: "🔗",
    title: "Cross-company synergy",
    description: "5 công ty hoạt động như một hệ thống — doanh thu của công ty này là pipeline của công ty khác.",
  },
  {
    emoji: "📐",
    title: "Tối ưu chi phí cấu trúc",
    description: "Shared infrastructure: tech, legal, admin, marketing — chia đều cho 5 công ty thay vì mỗi công ty build riêng.",
  },
  {
    emoji: "🇻🇳",
    title: "Sứ mệnh đất nước",
    description: "Mỗi nền tảng, mỗi dịch vụ đều được xây dựng với câu hỏi: \"Điều này tốt cho người Việt Nam không?\"",
  },
] as const;

export const homeStoryBlocks = [
  {
    emoji: "🏗️",
    title: "Xây dựng hạ tầng số Việt Nam",
    description: "17+ nền tảng phục vụ nhu cầu thiết yếu của người dân: y tế, pháp lý, giáo dục, tài chính, giải trí — tất cả bằng tiếng Việt, cho người Việt.",
  },
  {
    emoji: "🎓",
    title: "Giáo dục miễn phí cho cộng đồng",
    description: "VEA Academy: không chỉ kinh doanh giáo dục — mà còn đào tạo miễn phí cho học sinh, sinh viên chưa có điều kiện. Đây là cam kết với đất nước.",
  },
  {
    emoji: "🌏",
    title: "Đưa Việt Nam ra thế giới",
    description: "DanhBaLuatSu.asia phủ 8 quốc gia ĐNA. VEA Group xây dựng với tư duy toàn cầu từ ngày đầu tiên.",
  },
  {
    emoji: "💡",
    title: "Công nghệ phục vụ con người",
    description: "Dữ liệu công, tra cứu quy hoạch, nợ thuế, thông tin y tế — những thông tin thiết yếu mà mọi người dân Việt Nam đều có quyền tiếp cận dễ dàng.",
  },
] as const;

export const homeAboutStats = [
  ["5", "Công ty thành viên hoạt động đa lĩnh vực"],
  ["17+", "Nền tảng số đang phát triển song song"],
  ["ĐNA", "Thị trường: Việt Nam → Đông Nam Á"],
  ["2026", "Năm ra mắt chính thức toàn bộ hệ sinh thái"],
] as const;

/**
 * 5 công ty thành viên — dữ liệu cho section "5 COMPANIES" trên trang chủ.
 * `accent` map sang màu tint theo demo; `statusTone` "green" | "amber" cho chấm trạng thái.
 */
export const companies = [
  {
    key: "media",
    accent: "media",
    emoji: "📡",
    member: "VEA GROUP · THÀNH VIÊN 01",
    name: "VEA Media",
    sub: "Truyền thông & Marketing",
    tagline: "Agency truyền thông tập trung Influencer Marketing, Digital Marketing và E-commerce Marketing.",
    services: ["Influencer Marketing", "Digital Marketing", "E-commerce Mktg", "KOL Management"],
    stats: [["200+", "Brand đã hợp tác"], ["2,800+", "KOL/KOC đã verify"]],
    platformsLabel: "Nền tảng liên quan",
    platforms: ["BookingKOLs.com", "BookingModel.com", "Nightlife.com.vn", "BookingLivestream"],
    status: "Đang hoạt động",
    statusTone: "green",
    cta: "Tìm hiểu",
  },
  {
    key: "tech",
    accent: "tech",
    emoji: "⚙️",
    member: "VEA GROUP · THÀNH VIÊN 02",
    name: "VEA Tech",
    sub: "Công nghệ & Nền tảng số",
    tagline: "Chuyên xây dựng nền tảng, hệ thống và hạ tầng số — vận hành toàn bộ 17+ nền tảng digital của VEA Group.",
    services: ["Platform Dev", "AI & Automation", "SEO Technical", "Data Infrastructure"],
    stats: [["14", "Nền tảng đang build"], ["2026", "Target: all sites live"]],
    platformsLabel: "14 nền tảng đang build",
    platforms: ["ViecLamCongNhan", "SuaEmbe", "Nightlife", "TranhChap ✦", "ThienNguyen ✦", "+12"],
    status: "Phát triển tích cực",
    statusTone: "green",
    cta: "Tech stack",
  },
  {
    key: "law",
    accent: "law",
    emoji: "⚖️",
    member: "VEA GROUP · THÀNH VIÊN 03",
    name: "VEA Law",
    sub: "Công ty Luật",
    tagline: "Sắp đi vào hoạt động, chuyên tranh tụng và tư vấn pháp lý — phục vụ cá nhân, doanh nghiệp và toàn hệ sinh thái VEA.",
    services: ["Tranh tụng", "Tư vấn doanh nghiệp", "Hợp đồng & M&A", "Pháp lý BĐS"],
    stats: [["Soon", "Sắp đi vào hoạt động"], ["VN+SEA", "Thị trường mục tiêu"]],
    platformsLabel: "Nền tảng liên quan",
    platforms: ["TranhChap.com.vn ✦", "DanhBaLuatSu.asia", "LuatSuTranhTung"],
    status: "Sắp ra mắt",
    statusTone: "amber",
    cta: "Đăng ký tư vấn",
  },
  {
    key: "retail",
    accent: "retail",
    emoji: "🛍️",
    member: "VEA GROUP · THÀNH VIÊN 04",
    name: "VEA Retail",
    sub: "Bán lẻ & Thương mại",
    tagline: "Chuyên bán lẻ, bán buôn với nhãn hiệu VEA Group hoặc sản phẩm OEM, và hoạt động theo mô hình đại lý phân phối.",
    services: ["Sản phẩm VEA Brand", "OEM Manufacturing", "Đại lý phân phối", "Ticket & Event"],
    stats: [["Direct", "Sales nhãn hiệu VEA"], ["D2C", "Direct to consumer"]],
    platformsLabel: "Kênh bán hàng",
    platforms: ["Nightlife.com.vn", "SuaEmbe C2C", "BookingLivestream"],
    status: "Đang phát triển",
    statusTone: "green",
    cta: "Trở thành đại lý",
  },
  {
    key: "academy",
    accent: "academy",
    emoji: "🎓",
    member: "VEA GROUP · THÀNH VIÊN 05",
    name: "VEA Academy",
    sub: "Giáo dục & Đào tạo",
    tagline: "Giáo dục trực tuyến (có thu phí) và đào tạo trực tiếp miễn phí — sứ mệnh đặc biệt: phục vụ học sinh, sinh viên chưa có điều kiện.",
    services: ["Online Education", "Offline Campus", "Miễn phí cộng đồng", "Cert Programs"],
    stats: [["Online", "Học trực tuyến có phí"], ["Free", "Đào tạo cộng đồng miễn phí"]],
    platformsLabel: "Nền tảng học trực tuyến",
    platforms: ["TiếngAnhPhápLý.com.vn", "Khóa học nghề"],
    status: "Đang xây dựng",
    statusTone: "amber",
    cta: "Đăng ký học",
  },
] as const;

export const featuredPlatforms: {
  name: string;
  domain: string;
  status: "Live ✓" | "Demo ✦";
  description: string;
  emoji: string;
  url?: string;
}[] = [
  {
    name: "ViecLamCongNhan",
    domain: "vieclamcongnhan.com",
    status: "Live ✓",
    description: "Tuyển dụng công nhân KCN toàn quốc · 34 tỉnh · 12 nhà máy",
    emoji: "🏭",
    url: "https://vieclamcongnhan.vercel.app",
  },
  {
    name: "SuaEmbe",
    domain: "suaembe.com",
    status: "Live ✓",
    description: "Hệ sinh thái mẹ & bé · AI sữa · Chợ C2C · BS Nhi",
    emoji: "🍼",
    url: "https://suaembe-pi.vercel.app",
  },
  {
    name: "Nightlife.vn",
    domain: "nightlife.com.vn",
    status: "Live ✓",
    description: "Bar · Club · Rooftop · Đặt bàn · Happy Hour",
    emoji: "🌙",
    url: "https://nightlife-xi.vercel.app",
  },
  {
    name: "BookingKOLs",
    domain: "bookingkols.com.vn",
    status: "Live ✓",
    description: "2,800+ KOL/KOC đã verify · Platform booking influencer",
    emoji: "🌟",
  },
  {
    name: "TranhChap.com.vn",
    domain: "tranhchap.com.vn",
    status: "Demo ✦",
    description: "Pháp lý · Bản án · Hỏi đáp luật sư · SEO pháp lý",
    emoji: "⚖️",
  },
  {
    name: "ThienNguyen.com.vn",
    domain: "thiennguyen.com.vn",
    status: "Demo ✦",
    description: "Thiện nguyện minh bạch · 0đ phí · 128 tổ chức xác thực",
    emoji: "🙏",
  },
];

export const partners = [
  ["VPBank", "Ngân hàng đối tác", Banknote],
  ["Vietnam Airlines", "Du lịch & tour", BriefcaseBusiness],
  ["Agoda", "Khách sạn", Building2],
  ["Shopee", "E-commerce", ShoppingBag],
  ["Be · Grab", "Di chuyển", BadgeCheck],
  ["Long Châu", "Nhà thuốc", Stethoscope],
  ["TikTok Shop", "E-commerce · Livestream", Megaphone],
  ["VNPay · MoMo", "Thanh toán", ShieldCheck],
] as const;

export const news = [
  {
    date: "06/06/2026",
    tag: "BookingKOLs",
    title: "BookingKOLs vượt mốc 2,800 KOL/KOC trong hệ thống",
    excerpt: "Nền tảng booking influencer của VEA Media chính thức đạt 2,800+ KOL/KOC đã verify, khẳng định vị trí top 3 platform influencer tại Việt Nam.",
    gradient: "from-fuchsia-900 via-purple-700 to-pink-500",
  },
  {
    date: "01/06/2026",
    tag: "VEA Tech",
    title: "VEA Tech deploy thành công 4 nền tảng Civic Tech",
    excerpt: "NợThuế.com.vn, TraCuuQuyHoach.com.vn và 2 nền tảng tra cứu dữ liệu công đã chính thức live, phục vụ hàng trăm nghìn lượt tra cứu mỗi tháng.",
    gradient: "from-emerald-900 via-emerald-700 to-emerald-400",
  },
  {
    date: "20/05/2026",
    tag: "VEA Law",
    title: "VEA Law chính thức chuẩn bị ra mắt Q3/2026",
    excerpt: "Công ty luật thành viên của VEA Group sắp đi vào hoạt động chính thức, cung cấp dịch vụ tranh tụng và tư vấn pháp lý.",
    gradient: "from-indigo-900 via-indigo-800 to-indigo-500",
  },
] as const;

export const jobs = [
  { title: "Full-stack Developer", team: "VEA Tech", location: "Remote/HCM", level: "Senior", status: "open" },
  { title: "SEO & Content Strategist", team: "VEA Tech · Media", location: "HCM", level: "Mid-level", status: "open" },
  { title: "Influencer Mktg Manager", team: "VEA Media", location: "HCM", level: "Mid-Senior", status: "open" },
] as const;
