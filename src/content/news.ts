import type { NewsArticle } from "@/lib/types";

const gradients = {
  media: "linear-gradient(135deg,#1a0035,#5B21B6,#C026D3)",
  tech: "linear-gradient(135deg,#064e3b,#059669,#34D399)",
  law: "linear-gradient(135deg,#1e1b4b,#312E81,#4F46E5)",
  group: "linear-gradient(135deg,#7c2d12,#C2410C,#FB923C)",
  data: "linear-gradient(135deg,#0c4a6e,#0284C7,#38BDF8)",
  beauty: "linear-gradient(135deg,#831843,#DB2777,#F472B6)",
  legal: "linear-gradient(135deg,#1B2444,#2B3A67,#4F46E5)",
  charity: "linear-gradient(135deg,#1B2444,#2B3A67,#5D7A4B)",
} as const;

export const newsCategories: { key: string; label: string }[] = [
  { key: "media", label: "VEA Media" },
  { key: "tech", label: "VEA Tech" },
  { key: "law", label: "VEA Law" },
  { key: "group", label: "VEA Group" },
];

export const news: NewsArticle[] = [
  {
    slug: "bookingkols-vuot-moc-2800-kol-koc",
    title: { vi: "BookingKOLs vượt mốc 2,800 KOL/KOC trong hệ thống", en: "BookingKOLs passes 2,800 KOL/KOC in its network" },
    excerpt: {
      vi: "Nền tảng booking influencer của VEA Media chính thức đạt 2,800+ KOL/KOC đã verify, khẳng định vị trí top 3 platform influencer tại Việt Nam.",
      en: "VEA Media's influencer booking platform reaches 2,800+ verified KOL/KOC, ranking among Vietnam's top three influencer platforms.",
    },
    category: "media",
    categoryLabel: "BookingKOLs",
    date: "2026-06-06",
    gradient: gradients.media,
    body: [
      {
        vi: "Nền tảng BookingKOLs.com.vn của VEA Media đạt 2,800+ KOL/KOC đã verify thực tế. Không dùng tool tự động — mỗi KOL qua kiểm tra tay, audience thật, engagement thật.",
        en: "VEA Media's BookingKOLs.com.vn platform has reached 2,800+ verified KOL/KOC. No automated shortcuts — every creator is checked for real audiences and engagement.",
      },
    ],
  },
  {
    slug: "vea-tech-deploy-7-nen-tang-vertical",
    title: { vi: "VEA Tech deploy 7 nền tảng vertical — ViecLamCongNhan, SuaEmbe, Nightlife, TranhChap, ThienNguyen và Civic platforms", en: "VEA Tech deploys seven vertical platforms" },
    excerpt: {
      vi: "NợThuế.com.vn, TraCuuQuyHoach.com.vn và 2 nền tảng tra cứu dữ liệu công đã chính thức live, phục vụ hàng trăm nghìn lượt tra cứu mỗi tháng.",
      en: "NoThue.com.vn, TraCuuQuyHoach.com.vn and two public-data platforms are now live, serving hundreds of thousands of monthly lookups.",
    },
    category: "tech",
    categoryLabel: "VEA Tech",
    date: "2026-06-01",
    gradient: gradients.tech,
    body: [
      {
        vi: "NợThuế.com.vn, TraCuuQuyHoach.com.vn và 2 nền tảng tra cứu dữ liệu công đã chính thức live, phục vụ hàng trăm nghìn lượt tra cứu mỗi tháng.",
        en: "NoThue.com.vn, TraCuuQuyHoach.com.vn and two public-data lookup platforms are now live, serving hundreds of thousands of monthly searches.",
      },
    ],
  },
  {
    slug: "vea-law-chinh-thuc-chuan-bi-ra-mat-q3-2026",
    title: { vi: "VEA Law chính thức chuẩn bị ra mắt Q3/2026", en: "VEA Law officially prepares for its Q3/2026 launch" },
    excerpt: {
      vi: "Công ty luật thành viên của VEA Group sắp đi vào hoạt động chính thức, cung cấp dịch vụ tranh tụng và tư vấn pháp lý.",
      en: "VEA Group's member law firm is preparing to launch litigation and legal-advisory services.",
    },
    category: "law",
    categoryLabel: "VEA Law",
    date: "2026-05-20",
    gradient: gradients.law,
    body: [
      {
        vi: "VEA Law sẽ cung cấp dịch vụ tranh tụng, tư vấn doanh nghiệp và soạn thảo hợp đồng. Khách hàng BookingKOLs được ưu tiên tiếp cận tư vấn hợp đồng KOL.",
        en: "VEA Law will provide litigation, corporate advisory and contract drafting. BookingKOLs customers will receive priority access to KOL-contract advice.",
      },
    ],
  },
  {
    slug: "vea-group-ra-mat-website-veagroup-global",
    title: { vi: "VEA Group ra mắt website tổng hợp veagroup.global", en: "VEA Group launches the veagroup.global website" },
    excerpt: {
      vi: "veagroup.global chính thức ra mắt — cổng thông tin tổng hợp về hệ sinh thái 5 công ty và 14 nền tảng số của VEA Group.",
      en: "veagroup.global launches as the information hub for VEA Group's five companies and 14 digital platforms.",
    },
    category: "group",
    categoryLabel: "VEA Group",
    date: "2026-05-10",
    gradient: gradients.group,
    body: [
      {
        vi: "veagroup.global chính thức ra mắt — cổng thông tin tổng hợp về hệ sinh thái 5 công ty và 14 nền tảng số của VEA Group.",
        en: "veagroup.global has launched as the information hub for VEA Group's five-company, 14-platform ecosystem.",
      },
    ],
  },
  {
    slug: "danhbabacsi-10000-luot-tra-cuu-thang-dau",
    title: { vi: "DanhBaBacSi.com.vn đạt 10,000 lượt tra cứu trong tháng đầu", en: "DanhBaBacSi.com.vn reaches 10,000 lookups in its first month" },
    excerpt: {
      vi: "Nền tảng tìm kiếm bác sĩ đầu tiên đạt cột mốc 10K lượt tra cứu trong tháng đầu ra mắt — vượt kỳ vọng 3 lần.",
      en: "The doctor-search platform reaches 10K lookups in its first month, three times above expectations.",
    },
    category: "tech",
    categoryLabel: "VEA Tech",
    date: "2026-05-01",
    gradient: gradients.data,
    body: [
      {
        vi: "DanhBaBacSi.com.vn đạt 10K lượt tra cứu trong tháng đầu — vượt 3 lần kỳ vọng. Top keyword: bác sĩ nhi HCM, bác sĩ da liễu Hà Nội.",
        en: "DanhBaBacSi.com.vn reached 10K searches in its first month — three times above expectations. Top keywords include pediatricians in HCMC and dermatologists in Hanoi.",
      },
    ],
  },
  {
    slug: "vea-media-hoan-thanh-loreal-summer-glow",
    title: { vi: "VEA Media hoàn thành chiến dịch L’Oréal Summer Glow", en: "VEA Media completes the L'Oréal Summer Glow campaign" },
    excerpt: {
      vi: "Chiến dịch đạt 18.4M reach, engagement rate 4.2% — top benchmark ngành beauty. Son Kem L’Oréal trending FYP 14 ngày liên tiếp.",
      en: "The campaign reached 18.4M with a 4.2% engagement rate, topping the beauty benchmark.",
    },
    category: "media",
    categoryLabel: "VEA Media",
    date: "2026-04-15",
    gradient: gradients.beauty,
    body: [
      {
        vi: "Chiến dịch Summer Glow với 12 KOC Beauty Tier 1. Son Kem trending FYP 14 ngày. Sales lift +340% so với baseline.",
        en: "The Summer Glow campaign featured 12 Tier-1 beauty KOCs. Son Kem trended on FYP for 14 days, with sales up 340% from baseline.",
      },
    ],
  },
  {
    slug: "tranhchap-demo-seo-phap-ly",
    title: { vi: "TranhChap.com.vn — nền tảng SEO pháp lý chính thức demo", en: "TranhChap.com.vn — legal SEO platform demo" },
    excerpt: {
      vi: "Phân tích bản án, vụ việc tranh chấp và hỏi đáp luật sư — công cụ SEO pháp lý phục vụ VEA Law và thu hút người dùng tìm kiếm dịch vụ pháp lý.",
      en: "Case analysis, legal disputes and lawyer Q&A for VEA Law's legal SEO funnel.",
    },
    category: "tech",
    categoryLabel: "VEA Tech · VEA Law",
    date: "2026-08-08",
    gradient: gradients.legal,
    body: [
      {
        vi: "TranhChap.com.vn phân tích bản án, vụ việc tranh chấp và hỏi đáp luật sư — công cụ SEO pháp lý phục vụ VEA Law và thu hút người dùng tìm kiếm dịch vụ pháp lý.",
        en: "TranhChap.com.vn analyzes court rulings, disputes and lawyer Q&A — a legal SEO funnel for VEA Law and users searching for legal services.",
      },
    ],
  },
  {
    slug: "thiennguyen-minh-bach-0d-phi-trung-gian",
    title: { vi: "ThienNguyen.com.vn — thiện nguyện minh bạch, 0đ phí trung gian", en: "ThienNguyen.com.vn — transparent charity with zero intermediary fee" },
    excerpt: {
      vi: "Nền tảng kết nối nhà hảo tâm với 128+ tổ chức xác thực — tiền quyên góp đi thẳng đến tổ chức, VEA không giữ, không thu phí.",
      en: "A platform connecting donors with 128+ verified organizations without intermediary fees.",
    },
    category: "tech",
    categoryLabel: "VEA Tech",
    date: "2026-08-27",
    gradient: gradients.charity,
    body: [
      {
        vi: "ThienNguyen.com.vn kết nối nhà hảo tâm với 128+ tổ chức xác thực — tiền quyên góp đi thẳng đến tổ chức, VEA không giữ, không thu phí.",
        en: "ThienNguyen.com.vn connects donors with 128+ verified organizations. Donations go directly to organizations; VEA holds no funds and charges no fee.",
      },
    ],
  },
];

export function getArticle(slug: string): NewsArticle | undefined {
  return news.find((article) => article.slug === slug);
}
