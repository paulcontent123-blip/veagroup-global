import type { CompanyAccent, Localized } from "@/lib/types";

export const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Về VEA", href: "/ve-vea" },
  { label: "Hệ sinh thái", href: "/he-sinh-thai" },
  { label: "Đối tác", href: "/doi-tac" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const heroStats: { value: string; label: Localized }[] = [
  { value: "5", label: { vi: "Công ty thành viên", en: "Member companies" } },
  { value: "14", label: { vi: "Nền tảng số", en: "Digital platforms" } },
  { value: "8M+", label: { vi: "Potential reach/tháng", en: "Potential reach / month" } },
  { value: "2026", label: { vi: "Năm ra mắt toàn bộ", en: "Ecosystem launch year" } },
];

export const companyChips = [
  "VEA Media",
  "VEA Tech",
  "VEA Law",
  "VEA Retail",
  "VEA Academy",
  "TranhChap ✦",
  "ThienNguyen ✦",
];

export const operatingPillars: { emoji: string; title: Localized; description: Localized }[] = [
  {
    emoji: "🔗",
    title: { vi: "Cross-company synergy", en: "Cross-company synergy" },
    description: {
      vi: "5 công ty hoạt động như một hệ thống — doanh thu của công ty này là pipeline của công ty khác.",
      en: "Five companies operate as one system — one company's revenue is another's pipeline.",
    },
  },
  {
    emoji: "📐",
    title: { vi: "Tối ưu chi phí cấu trúc", en: "Structural cost efficiency" },
    description: {
      vi: "Shared infrastructure: tech, legal, admin, marketing — chia đều cho 5 công ty thay vì mỗi công ty build riêng.",
      en: "Shared tech, legal, operations and marketing infrastructure across all five companies.",
    },
  },
  {
    emoji: "🇻🇳",
    title: { vi: "Sứ mệnh đất nước", en: "Country mission" },
    description: {
      vi: "Mỗi nền tảng, mỗi dịch vụ đều được xây dựng với câu hỏi: \"Điều này tốt cho người Việt Nam không?\"",
      en: "Every platform and service is built around one question: \"Is this good for Vietnamese people?\"",
    },
  },
];

export const homeStoryBlocks: { emoji: string; title: Localized; description: Localized }[] = [
  {
    emoji: "🏗️",
    title: { vi: "Xây dựng hạ tầng số Việt Nam", en: "Building Vietnam's digital infrastructure" },
    description: {
      vi: "17+ nền tảng phục vụ nhu cầu thiết yếu của người dân: y tế, pháp lý, giáo dục, tài chính, giải trí — tất cả bằng tiếng Việt, cho người Việt.",
      en: "17+ platforms serve essential needs across health, legal, education, finance and entertainment — in Vietnamese, for Vietnamese people.",
    },
  },
  {
    emoji: "🎓",
    title: { vi: "Giáo dục miễn phí cho cộng đồng", en: "Free education for the community" },
    description: {
      vi: "VEA Academy: không chỉ kinh doanh giáo dục — mà còn đào tạo miễn phí cho học sinh, sinh viên chưa có điều kiện. Đây là cam kết với đất nước.",
      en: "VEA Academy is not only an education business — it also offers free training to under-resourced students.",
    },
  },
  {
    emoji: "🌏",
    title: { vi: "Đưa Việt Nam ra thế giới", en: "Taking Vietnam to the world" },
    description: {
      vi: "DanhBaLuatSu.asia phủ 8 quốc gia ĐNA. VEA Group xây dựng với tư duy toàn cầu từ ngày đầu tiên.",
      en: "DanhBaLuatSu.asia spans 8 Southeast Asian countries. VEA Group has had a global mindset from day one.",
    },
  },
  {
    emoji: "💡",
    title: { vi: "Công nghệ phục vụ con người", en: "Technology serves people" },
    description: {
      vi: "Dữ liệu công, tra cứu quy hoạch, nợ thuế, thông tin y tế — những thông tin thiết yếu mà mọi người dân Việt Nam đều có quyền tiếp cận dễ dàng.",
      en: "Public data, planning lookups, tax debt and health information — essential resources everyone should access easily.",
    },
  },
];

export const homeAboutStats: [string, Localized][] = [
  ["5", { vi: "Công ty thành viên hoạt động đa lĩnh vực", en: "Member companies across industries" }],
  ["17+", { vi: "Nền tảng số đang phát triển song song", en: "Digital platforms in parallel development" }],
  ["ĐNA", { vi: "Thị trường: Việt Nam → Đông Nam Á", en: "Market: Vietnam → Southeast Asia" }],
  ["2026", { vi: "Năm ra mắt chính thức toàn bộ hệ sinh thái", en: "Full ecosystem launch year" }],
];

/**
 * 5 công ty thành viên — dữ liệu cho section "5 COMPANIES" trên trang chủ.
 * `accent` map sang màu tint theo demo; `statusTone` "green" | "amber" cho chấm trạng thái.
 */
type HomeCompany = {
  key: string;
  accent: CompanyAccent;
  emoji: string;
  member: Localized;
  name: string;
  sub: Localized;
  tagline: Localized;
  services: Localized[];
  stats: [string, Localized][];
  platformsLabel: Localized;
  platforms: string[];
  status: Localized;
  statusTone: "green" | "amber";
  cta: Localized;
};

export const companies: HomeCompany[] = [
  {
    key: "media",
    accent: "media",
    emoji: "📡",
    member: { vi: "VEA GROUP · THÀNH VIÊN 01", en: "VEA GROUP · MEMBER 01" },
    name: "VEA Media",
    sub: { vi: "Truyền thông & Marketing", en: "Media & Marketing" },
    tagline: {
      vi: "Agency truyền thông tập trung Influencer Marketing, Digital Marketing và E-commerce Marketing.",
      en: "A media agency focused on influencer, digital and e-commerce marketing.",
    },
    services: [
      { vi: "Influencer Marketing", en: "Influencer Marketing" },
      { vi: "Digital Marketing", en: "Digital Marketing" },
      { vi: "E-commerce Mktg", en: "E-commerce Marketing" },
      { vi: "KOL Management", en: "KOL Management" },
    ],
    stats: [["200+", { vi: "Brand đã hợp tác", en: "Brands served" }], ["2,800+", { vi: "KOL/KOC đã verify", en: "Verified KOL/KOC" }]],
    platformsLabel: { vi: "Nền tảng liên quan", en: "Related platforms" },
    platforms: ["BookingKOLs.com", "BookingModel.com", "Nightlife.com.vn", "BookingLivestream"],
    status: { vi: "Đang hoạt động", en: "Active" },
    statusTone: "green",
    cta: { vi: "Tìm hiểu", en: "Learn more" },
  },
  {
    key: "tech",
    accent: "tech",
    emoji: "⚙️",
    member: { vi: "VEA GROUP · THÀNH VIÊN 02", en: "VEA GROUP · MEMBER 02" },
    name: "VEA Tech",
    sub: { vi: "Công nghệ & Nền tảng số", en: "Technology & Digital Platforms" },
    tagline: {
      vi: "Chuyên xây dựng nền tảng, hệ thống và hạ tầng số — vận hành toàn bộ 17+ nền tảng digital của VEA Group.",
      en: "Builds the platforms, systems and digital infrastructure behind VEA Group's ecosystem.",
    },
    services: [
      { vi: "Platform Dev", en: "Platform Development" },
      { vi: "AI & Automation", en: "AI & Automation" },
      { vi: "SEO Technical", en: "Technical SEO" },
      { vi: "Data Infrastructure", en: "Data Infrastructure" },
    ],
    stats: [["14", { vi: "Nền tảng đang build", en: "Platforms in build" }], ["2026", { vi: "Target: all sites live", en: "Target: all sites live" }]],
    platformsLabel: { vi: "14 nền tảng đang build", en: "14 platforms in build" },
    platforms: ["ViecLamCongNhan", "SuaEmbe", "Nightlife", "TranhChap ✦", "ThienNguyen ✦", "+12"],
    status: { vi: "Phát triển tích cực", en: "Active development" },
    statusTone: "green",
    cta: { vi: "Tech stack", en: "Tech stack" },
  },
  {
    key: "law",
    accent: "law",
    emoji: "⚖️",
    member: { vi: "VEA GROUP · THÀNH VIÊN 03", en: "VEA GROUP · MEMBER 03" },
    name: "VEA Law",
    sub: { vi: "Công ty Luật", en: "Law Firm" },
    tagline: {
      vi: "Sắp đi vào hoạt động, chuyên tranh tụng và tư vấn pháp lý — phục vụ cá nhân, doanh nghiệp và toàn hệ sinh thái VEA.",
      en: "Launching soon with litigation and legal advisory for individuals, businesses and the VEA ecosystem.",
    },
    services: [
      { vi: "Tranh tụng", en: "Litigation" },
      { vi: "Tư vấn doanh nghiệp", en: "Corporate advisory" },
      { vi: "Hợp đồng & M&A", en: "Contracts & M&A" },
      { vi: "Pháp lý BĐS", en: "Real-estate law" },
    ],
    stats: [["Soon", { vi: "Sắp đi vào hoạt động", en: "Opening soon" }], ["VN+SEA", { vi: "Thị trường mục tiêu", en: "Target market" }]],
    platformsLabel: { vi: "Nền tảng liên quan", en: "Related platforms" },
    platforms: ["TranhChap.com.vn ✦", "DanhBaLuatSu.asia", "LuatSuTranhTung"],
    status: { vi: "Sắp ra mắt", en: "Coming soon" },
    statusTone: "amber",
    cta: { vi: "Đăng ký tư vấn", en: "Request advisory" },
  },
  {
    key: "retail",
    accent: "retail",
    emoji: "🛍️",
    member: { vi: "VEA GROUP · THÀNH VIÊN 04", en: "VEA GROUP · MEMBER 04" },
    name: "VEA Retail",
    sub: { vi: "Bán lẻ & Thương mại", en: "Retail & Commerce" },
    tagline: {
      vi: "Chuyên bán lẻ, bán buôn với nhãn hiệu VEA Group hoặc sản phẩm OEM, và hoạt động theo mô hình đại lý phân phối.",
      en: "Retail and wholesale under the VEA brand or OEM, supported by a distribution-agent model.",
    },
    services: [
      { vi: "Sản phẩm VEA Brand", en: "VEA-branded products" },
      { vi: "OEM Manufacturing", en: "OEM manufacturing" },
      { vi: "Đại lý phân phối", en: "Distribution agents" },
      { vi: "Ticket & Event", en: "Tickets & events" },
    ],
    stats: [["Direct", { vi: "Sales nhãn hiệu VEA", en: "VEA brand sales" }], ["D2C", { vi: "Direct to consumer", en: "Direct to consumer" }]],
    platformsLabel: { vi: "Kênh bán hàng", en: "Sales channels" },
    platforms: ["Nightlife.com.vn", "SuaEmbe C2C", "BookingLivestream"],
    status: { vi: "Đang phát triển", en: "In development" },
    statusTone: "green",
    cta: { vi: "Trở thành đại lý", en: "Become an agent" },
  },
  {
    key: "academy",
    accent: "academy",
    emoji: "🎓",
    member: { vi: "VEA GROUP · THÀNH VIÊN 05", en: "VEA GROUP · MEMBER 05" },
    name: "VEA Academy",
    sub: { vi: "Giáo dục & Đào tạo", en: "Education & Training" },
    tagline: {
      vi: "Giáo dục trực tuyến (có thu phí) và đào tạo trực tiếp miễn phí — sứ mệnh đặc biệt: phục vụ học sinh, sinh viên chưa có điều kiện.",
      en: "Paid online education and free in-person training for students who need it most.",
    },
    services: [
      { vi: "Online Education", en: "Online education" },
      { vi: "Offline Campus", en: "Offline campus" },
      { vi: "Miễn phí cộng đồng", en: "Free for the community" },
      { vi: "Cert Programs", en: "Certificate programs" },
    ],
    stats: [["Online", { vi: "Học trực tuyến có phí", en: "Paid online" }], ["Free", { vi: "Đào tạo cộng đồng miễn phí", en: "Free community track" }]],
    platformsLabel: { vi: "Nền tảng học trực tuyến", en: "Online learning platforms" },
    platforms: ["TiếngAnhPhápLý.com.vn", "Khóa học nghề"],
    status: { vi: "Đang xây dựng", en: "Building" },
    statusTone: "amber",
    cta: { vi: "Đăng ký học", en: "Join a course" },
  },
];

export const featuredPlatforms: {
  name: string;
  domain: string;
  status: "Live ✓" | "Demo ✦";
  description: Localized;
  emoji: string;
  url?: string;
}[] = [
  {
    name: "ViecLamCongNhan",
    domain: "vieclamcongnhan.com",
    status: "Live ✓",
    description: { vi: "Tuyển dụng công nhân KCN toàn quốc · 34 tỉnh · 12 nhà máy", en: "Factory recruitment nationwide · 34 provinces · 12 factories" },
    emoji: "🏭",
    url: "https://vieclamcongnhan.vercel.app",
  },
  {
    name: "SuaEmbe",
    domain: "suaembe.com",
    status: "Live ✓",
    description: { vi: "Hệ sinh thái mẹ & bé · AI sữa · Chợ C2C · BS Nhi", en: "Mother and baby ecosystem · AI formula · C2C marketplace · Pediatricians" },
    emoji: "🍼",
    url: "https://suaembe-pi.vercel.app",
  },
  {
    name: "Nightlife.vn",
    domain: "nightlife.com.vn",
    status: "Live ✓",
    description: { vi: "Bar · Club · Rooftop · Đặt bàn · Happy Hour", en: "Bar · Club · Rooftop · Table booking · Happy Hour" },
    emoji: "🌙",
    url: "https://nightlife-xi.vercel.app",
  },
  {
    name: "BookingKOLs",
    domain: "bookingkols.com.vn",
    status: "Live ✓",
    description: { vi: "2,800+ KOL/KOC đã verify · Platform booking influencer", en: "2,800+ verified KOL/KOC · Influencer booking platform" },
    emoji: "🌟",
  },
  {
    name: "TranhChap.com.vn",
    domain: "tranhchap.com.vn",
    status: "Demo ✦",
    description: { vi: "Pháp lý · Bản án · Hỏi đáp luật sư · SEO pháp lý", en: "Legal · Court rulings · Lawyer Q&A · Legal SEO" },
    emoji: "⚖️",
  },
  {
    name: "ThienNguyen.com.vn",
    domain: "thiennguyen.com.vn",
    status: "Demo ✦",
    description: { vi: "Thiện nguyện minh bạch · 0đ phí · 128 tổ chức xác thực", en: "Transparent charity · Zero fees · 128 verified organizations" },
    emoji: "🙏",
  },
];

/** Đối tác chiến lược / khách hàng (trang /hop-tac). */
export const partners: { name: string; type: Localized; emoji: string }[] = [
  { name: "VPBank", type: { vi: "Ngân hàng đối tác", en: "Banking partner" }, emoji: "🏦" },
  { name: "Vietnam Airlines", type: { vi: "Du lịch & tour", en: "Travel & tours" }, emoji: "✈️" },
  { name: "Agoda", type: { vi: "Khách sạn", en: "Hotels" }, emoji: "🏨" },
  { name: "Shopee", type: { vi: "E-commerce", en: "E-commerce" }, emoji: "🛒" },
  { name: "Be · Grab", type: { vi: "Di chuyển", en: "Mobility" }, emoji: "🚗" },
  { name: "Long Châu", type: { vi: "Nhà thuốc", en: "Pharmacy" }, emoji: "💊" },
  { name: "TikTok Shop", type: { vi: "E-commerce · Livestream", en: "E-commerce · Livestream" }, emoji: "🎯" },
  { name: "VNPay · MoMo", type: { vi: "Thanh toán", en: "Payments" }, emoji: "💳" },
];

export const news: { date: string; tag: string; title: Localized; excerpt: Localized; gradient: string }[] = [
  {
    date: "06/06/2026",
    tag: "BookingKOLs",
    title: { vi: "BookingKOLs vượt mốc 2,800 KOL/KOC trong hệ thống", en: "BookingKOLs passes 2,800 KOL/KOC in its network" },
    excerpt: {
      vi: "Nền tảng booking influencer của VEA Media chính thức đạt 2,800+ KOL/KOC đã verify, khẳng định vị trí top 3 platform influencer tại Việt Nam.",
      en: "VEA Media's influencer booking platform reaches 2,800+ verified KOL/KOC, ranking among Vietnam's top three influencer platforms.",
    },
    gradient: "from-fuchsia-900 via-purple-700 to-pink-500",
  },
  {
    date: "01/06/2026",
    tag: "VEA Tech",
    title: { vi: "VEA Tech deploy thành công 4 nền tảng Civic Tech", en: "VEA Tech successfully deploys four civic-tech platforms" },
    excerpt: {
      vi: "NợThuế.com.vn, TraCuuQuyHoach.com.vn và 2 nền tảng tra cứu dữ liệu công đã chính thức live, phục vụ hàng trăm nghìn lượt tra cứu mỗi tháng.",
      en: "NoThue.com.vn, TraCuuQuyHoach.com.vn and two public-data platforms are live, serving hundreds of thousands of monthly lookups.",
    },
    gradient: "from-emerald-900 via-emerald-700 to-emerald-400",
  },
  {
    date: "20/05/2026",
    tag: "VEA Law",
    title: { vi: "VEA Law chính thức chuẩn bị ra mắt Q3/2026", en: "VEA Law prepares for its official Q3/2026 launch" },
    excerpt: {
      vi: "Công ty luật thành viên của VEA Group sắp đi vào hoạt động chính thức, cung cấp dịch vụ tranh tụng và tư vấn pháp lý.",
      en: "VEA Group's member law firm is preparing to launch litigation and legal-advisory services.",
    },
    gradient: "from-indigo-900 via-indigo-800 to-indigo-500",
  },
];

export const jobs: { title: string; team: string; location: Localized; level: Localized; status: "open" | "soon" }[] = [
  { title: "Full-stack Developer", team: "VEA Tech", location: { vi: "Remote/HCM", en: "Remote/HCMC" }, level: { vi: "Senior", en: "Senior" }, status: "open" },
  { title: "SEO & Content Strategist", team: "VEA Tech · Media", location: { vi: "HCM", en: "HCMC" }, level: { vi: "Mid-level", en: "Mid-level" }, status: "open" },
  { title: "Influencer Mktg Manager", team: "VEA Media", location: { vi: "HCM", en: "HCMC" }, level: { vi: "Mid-Senior", en: "Mid-Senior" }, status: "open" },
];
