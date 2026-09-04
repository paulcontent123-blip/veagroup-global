import type { Company } from "@/lib/types";

export const companies: Company[] = [
  {
    slug: "media",
    index: 1,
    name: "VEA Media",
    kicker: { vi: "Truyền thông · Influencer Marketing · E-commerce Marketing", en: "Media · Influencer Marketing · E-commerce Marketing" },
    tagline: {
      vi: "Agency truyền thông tập trung Influencer Marketing, Digital Marketing và E-commerce Marketing.",
      en: "A media agency focused on influencer, digital and e-commerce marketing.",
    },
    description: {
      vi: "Agency truyền thông tập trung Influencer Marketing, Digital Marketing và E-commerce. Đội ngũ quản lý 2,800+ KOL/KOC đã verify, đã phục vụ 200+ brands từ các chiến dịch nano đến mega.",
      en: "Manages a vetted KOL/KOC network and has run campaigns for hundreds of brands, from nano to mega. It feeds media demand into the whole ecosystem.",
    },
    emoji: "📡",
    accent: "media",
    services: [
      { vi: "Influencer Marketing", en: "Influencer Marketing" },
      { vi: "Digital Marketing", en: "Digital Marketing" },
      { vi: "KOL Management", en: "KOL Management" },
      { vi: "E-commerce Mktg", en: "E-commerce Marketing" },
    ],
    stats: [
      { value: "200+", label: { vi: "Brand đã hợp tác", en: "Brands served" } },
      { value: "2,800+", label: { vi: "KOL/KOC đã verify", en: "Verified KOL/KOC" } },
    ],
    platforms: ["BookingKOLs", "BookingModel", "BookingLivestream"],
    platformNote: "Nền tảng: BookingKOLs · BookingModel",
    status: "active",
  },
  {
    slug: "tech",
    index: 2,
    name: "VEA Tech",
    kicker: { vi: "Công nghệ · Platform Development · AI & Automation", en: "Technology · Platform Development · AI & Automation" },
    tagline: {
      vi: "Chuyên xây dựng nền tảng, hệ thống và hạ tầng số — vận hành toàn bộ 25 nền tảng digital của VEA Group.",
      en: "Builds the platforms, systems and infrastructure that run every VEA Group digital product.",
    },
    description: {
      vi: "Chuyên xây dựng nền tảng, hệ thống và hạ tầng số — vận hành toàn bộ 25 nền tảng digital của VEA Group. VEA Tech là backbone kỹ thuật của toàn bộ hệ sinh thái.",
      en: "Builds the platforms, systems and infrastructure that run all 25 VEA Group digital products. VEA Tech is the technical backbone of the whole ecosystem.",
    },
    emoji: "⚙️",
    accent: "tech",
    services: [
      { vi: "Platform Dev", en: "Platform Development" },
      { vi: "AI & Automation", en: "AI & Automation" },
      { vi: "SEO Technical", en: "Technical SEO" },
      { vi: "Data Infrastructure", en: "Data Infrastructure" },
    ],
    stats: [
      { value: "14", label: { vi: "Nền tảng đang build", en: "Platforms in build" } },
      { value: "2026", label: { vi: "Target: all sites live", en: "Target: all sites live" } },
    ],
    platforms: ["ViecLamCongNhan", "SuaEmbe", "Nightlife", "TranhChap ✦", "ThienNguyen ✦", "+12"],
    platformNote: "25 nền tảng đang build",
    status: "active-dev",
  },
  {
    slug: "law",
    index: 3,
    name: "VEA Law",
    kicker: { vi: "Pháp lý · Tranh tụng · Tư vấn doanh nghiệp", en: "Legal · Litigation · Corporate advisory" },
    tagline: {
      vi: "Sắp đi vào hoạt động, chuyên tranh tụng và tư vấn pháp lý — phục vụ cá nhân, doanh nghiệp và toàn hệ sinh thái VEA.",
      en: "Litigation and legal advisory for individuals, businesses and the VEA ecosystem.",
    },
    description: {
      vi: "Công ty luật thành viên VEA Group — chuyên tranh tụng và tư vấn pháp lý phục vụ cá nhân, doanh nghiệp và toàn hệ sinh thái VEA. Dự kiến chính thức ra mắt Q3/2026.",
      en: "Preparing to launch. Works alongside the legal-tech platforms to convert legal search traffic into service clients.",
    },
    emoji: "⚖️",
    accent: "law",
    services: [
      { vi: "Tranh tụng", en: "Litigation" },
      { vi: "Tư vấn doanh nghiệp", en: "Corporate advisory" },
      { vi: "Hợp đồng & M&A", en: "Contracts & M&A" },
      { vi: "Pháp lý BĐS", en: "Real-estate law" },
    ],
    stats: [
      { value: "Soon", label: { vi: "Sắp đi vào hoạt động", en: "Opening soon" } },
      { value: "VN+SEA", label: { vi: "Thị trường mục tiêu", en: "Target market" } },
    ],
    platforms: ["TranhChap.com.vn", "DanhBaLuatSu.asia", "LuatSuTranhTung"],
    platformNote: "TranhChap.com.vn · DanhBaLuatSu.asia",
    status: "coming-soon",
  },
  {
    slug: "retail",
    index: 4,
    name: "VEA Retail",
    kicker: { vi: "Bán lẻ · Thương mại · D2C", en: "Retail · Commerce · D2C" },
    tagline: {
      vi: "Chuyên bán lẻ, bán buôn với nhãn hiệu VEA Group hoặc sản phẩm OEM, và hoạt động theo mô hình đại lý phân phối.",
      en: "Retail and wholesale under the VEA brand or OEM, operating a distribution-agent model.",
    },
    description: {
      vi: "Chuyên bán lẻ, bán buôn với nhãn hiệu VEA Group hoặc sản phẩm OEM, và hoạt động theo mô hình đại lý phân phối. Khai thác network từ các nền tảng để bán hàng D2C.",
      en: "Retail and wholesale under the VEA brand or OEM, running a distribution-agent model. Leverages platform audiences for D2C sales.",
    },
    emoji: "🛍️",
    accent: "retail",
    services: [
      { vi: "VEA Brand Products", en: "VEA-branded products" },
      { vi: "Sản xuất OEM", en: "OEM manufacturing" },
      { vi: "Đại lý phân phối", en: "Distribution agents" },
      { vi: "Ticket & Event", en: "Tickets & events" },
    ],
    stats: [
      { value: "Direct", label: { vi: "Sales nhãn hiệu VEA", en: "VEA brand sales" } },
      { value: "D2C", label: { vi: "Direct to consumer", en: "Direct to consumer" } },
    ],
    platforms: ["Nightlife", "SuaEmbe", "VEA Brand"],
    platformNote: "Nightlife · SuaEmbe · VEA Brand",
    status: "building",
  },
  {
    slug: "academy",
    index: 5,
    name: "VEA Academy",
    kicker: { vi: "Giáo dục · Đào tạo · Cộng đồng", en: "Education · Training · Community" },
    tagline: {
      vi: "Giáo dục trực tuyến (có thu phí) và đào tạo trực tiếp miễn phí — sứ mệnh đặc biệt: phục vụ học sinh, sinh viên chưa có điều kiện.",
      en: "Paid online education plus free in-person training for the community.",
    },
    description: {
      vi: "Giáo dục trực tuyến có thu phí và đào tạo trực tiếp miễn phí. Sứ mệnh đặc biệt: phục vụ học sinh, sinh viên chưa có điều kiện — đây là cam kết cụ thể của VEA với đất nước, không phải marketing.",
      en: "A distinct mission: serving under-resourced students — a concrete community commitment, not a slogan.",
    },
    emoji: "🎓",
    accent: "academy",
    services: [
      { vi: "Online Education", en: "Online education" },
      { vi: "Offline Campus", en: "Offline campus" },
      { vi: "Miễn phí cộng đồng", en: "Free for community" },
      { vi: "Cert Programs", en: "Certificate programs" },
    ],
    stats: [
      { value: "Online", label: { vi: "Học trực tuyến có phí", en: "Paid online" } },
      { value: "Free", label: { vi: "Đào tạo cộng đồng miễn phí", en: "Free community track" } },
    ],
    platforms: ["TiengAnhPhapLy", "HocToeic"],
    platformNote: "TiengAnhPhapLy · HocToeic",
    status: "building",
  },
];

export function getCompany(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}
