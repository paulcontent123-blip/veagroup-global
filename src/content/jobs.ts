import type { Job } from "@/lib/types";

export const jobDepartments: { key: string; label: string }[] = [
  { key: "tech", label: "VEA Tech" },
  { key: "media", label: "VEA Media" },
  { key: "law", label: "VEA Law" },
  { key: "academy", label: "VEA Academy" },
];

export const jobs: Job[] = [
  {
    slug: "fullstack-developer-nextjs",
    title: { vi: "Full-stack Developer (Next.js)", en: "Full-stack Developer (Next.js)" },
    company: "VEA Tech",
    department: "tech",
    location: { vi: "Remote / HCM", en: "Remote / HCMC" },
    level: { vi: "Senior", en: "Senior" },
    status: "open",
    summary: {
      vi: "Xây dựng và phát triển 14 nền tảng số. Stack: Next.js 15, Supabase, TypeScript.",
      en: "Build and run VEA ecosystem platforms on Next.js 15, TypeScript and shared infrastructure.",
    },
    responsibilities: [
      { vi: "Phát triển tính năng end-to-end (UI, API route, database).", en: "Ship features end-to-end (UI, API routes, database)." },
      { vi: "Đóng góp vào design system và thư viện dùng chung.", en: "Contribute to the design system and shared libraries." },
      { vi: "Tối ưu hiệu năng, SEO kỹ thuật và Core Web Vitals.", en: "Optimize performance, technical SEO and Core Web Vitals." },
    ],
    requirements: [
      { vi: "3+ năm Next.js/React", en: "3+ years Next.js/React" },
      { vi: "TypeScript Node.js thành thạo", en: "Strong TypeScript and Node.js" },
      { vi: "PostgreSQL Supabase", en: "PostgreSQL and Supabase" },
      { vi: "SEO technical là lợi thế", en: "Technical SEO is a plus" },
    ],
    benefits: [
      { vi: "Lương cạnh tranh - Remote - Equity option", en: "Competitive salary - Remote - Equity option" },
    ],
  },
  {
    slug: "ui-ux-designer",
    title: { vi: "UI/UX Designer", en: "UI/UX Designer" },
    company: "VEA Tech",
    department: "tech",
    location: { vi: "HCM / Remote", en: "HCMC / Remote" },
    level: { vi: "Mid-Senior", en: "Mid-Senior" },
    status: "open",
    summary: {
      vi: "Thiết kế UI/UX cho 14 nền tảng số và sản phẩm VEA Group.",
      en: "Design experiences across multiple platforms sharing one design system.",
    },
    responsibilities: [
      { vi: "Thiết kế luồng và giao diện cho web & mobile web.", en: "Design flows and interfaces for web & mobile web." },
      { vi: "Xây dựng và bảo trì component library trong Figma.", en: "Build and maintain the Figma component library." },
    ],
    requirements: [
      { vi: "3+ năm UI/UX", en: "3+ years UI/UX" },
      { vi: "Thành thạo Figma", en: "Strong Figma skills" },
      { vi: "Portfolio thực tế", en: "Real-world portfolio" },
      { vi: "Hiểu design system", en: "Design-system literacy" },
    ],
    benefits: [{ vi: "Lương cạnh tranh - Môi trường creative", en: "Competitive salary - Creative environment" }],
  },
  {
    slug: "seo-content-strategist",
    title: { vi: "SEO & Content Strategist", en: "SEO & Content Strategist" },
    company: "VEA Tech · Media",
    department: "tech",
    location: { vi: "TP.HCM", en: "HCMC" },
    level: { vi: "Mid-level", en: "Mid-level" },
    status: "open",
    summary: {
      vi: "Xây dựng chiến lược SEO và content cho 14 nền tảng.",
      en: "Lead content & SEO strategy for the vertical and civic-tech platforms.",
    },
    responsibilities: [
      { vi: "Nghiên cứu từ khoá, xây dựng cụm nội dung.", en: "Keyword research, topic-cluster planning." },
      { vi: "Phối hợp với dev để triển khai SEO kỹ thuật.", en: "Work with engineering on technical SEO." },
    ],
    requirements: [
      { vi: "2+ năm SEO thực chiến", en: "2+ years hands-on SEO" },
      { vi: "GSC Ahrefs", en: "GSC and Ahrefs" },
      { vi: "Content SEO", en: "SEO content" },
      { vi: "Technical SEO là lợi thế", en: "Technical SEO is a plus" },
    ],
    benefits: [{ vi: "Build SEO từ đầu cho 14 domains", en: "Build SEO from scratch for 14 domains" }],
  },
  {
    slug: "influencer-marketing-manager",
    title: { vi: "Influencer Marketing Manager", en: "Influencer Marketing Manager" },
    company: "VEA Media",
    department: "media",
    location: { vi: "HCM", en: "HCMC" },
    level: { vi: "Mid-Senior", en: "Mid-Senior" },
    status: "open",
    summary: {
      vi: "Quản lý chiến dịch influencer marketing cho brand lớn qua BookingKOLs.",
      en: "Manage the influencer-campaign portfolio for major brands.",
    },
    responsibilities: [
      { vi: "Đã manage brand lớn", en: "Managed major brands" },
      { vi: "Mạng lưới KOL", en: "KOL network" },
      { vi: "Kỹ năng PM", en: "Project-management skills" },
    ],
    requirements: [
      { vi: "3+ năm influencer marketing", en: "3+ years influencer marketing" },
      { vi: "Đã manage brand lớn", en: "Managed major brands" },
      { vi: "Mạng lưới KOL", en: "KOL network" },
      { vi: "Kỹ năng PM", en: "Project-management skills" },
    ],
    benefits: [{ vi: "Làm việc với brand lớn - Commission theo performance", en: "Work with major brands - Performance commission" }],
  },
  {
    slug: "luat-su-tranh-tung",
    title: { vi: "Luật sư Tranh tụng", en: "Litigation Lawyer" },
    company: "VEA Law",
    department: "law",
    location: { vi: "HCM", en: "HCMC" },
    level: { vi: "2+ năm kinh nghiệm", en: "2+ years experience" },
    status: "soon",
    summary: {
      vi: "Đại diện tố tụng, tư vấn doanh nghiệp và soạn thảo hợp đồng.",
      en: "Join the founding VEA Law team, handling civil and commercial litigation.",
    },
    responsibilities: [
      { vi: "Trực tiếp tham gia tố tụng tại toà.", en: "Represent clients in court proceedings." },
      { vi: "Tư vấn tiền tố tụng và soạn thảo hồ sơ.", en: "Pre-litigation advisory and case drafting." },
    ],
    requirements: [
      { vi: "Bằng Luật, Chứng chỉ hành nghề", en: "Law degree and practising certificate" },
      { vi: "2+ năm tranh tụng", en: "2+ years litigation" },
      { vi: "Tư vấn doanh nghiệp", en: "Corporate advisory" },
      { vi: "Tiếng Anh pháp lý", en: "Legal English" },
    ],
    benefits: [{ vi: "Vị trí sắp mở - Đăng ký sớm", en: "Opening soon - Register early" }],
  },
  {
    slug: "giang-vien-tieng-anh-phap-ly",
    title: { vi: "Giảng viên Tiếng Anh Pháp Lý", en: "Legal-English Instructor" },
    company: "VEA Academy",
    department: "academy",
    location: { vi: "Online / HCM", en: "Online / HCMC" },
    level: { vi: "Part-time · Full-time", en: "Part-time · Full-time" },
    status: "open",
    summary: {
      vi: "Giảng dạy khoá học Tiếng Anh chuyên ngành Pháp lý trên VEA Academy.",
      en: "Build and teach a legal-English curriculum for lawyers and law students.",
    },
    responsibilities: [
      { vi: "Thiết kế giáo trình theo cấp độ.", en: "Design a levelled curriculum." },
      { vi: "Giảng dạy trực tuyến và biên soạn bài kiểm tra.", en: "Teach online and write assessments." },
    ],
    requirements: [
      { vi: "Bằng Luật hoặc Ngữ văn Anh", en: "Law or English degree" },
      { vi: "IELTS 7.0+", en: "IELTS 7.0+" },
      { vi: "Kinh nghiệm giảng dạy", en: "Teaching experience" },
      { vi: "Kỹ năng trình bày", en: "Presentation skills" },
    ],
    benefits: [{ vi: "Linh hoạt thời gian - Thu nhập theo giờ dạy", en: "Flexible schedule - Paid by teaching hours" }],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
