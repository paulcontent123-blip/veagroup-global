/* ==========================================================================
 * Kiểu dữ liệu miền (domain types).
 * Toàn bộ nội dung site đi qua các type này -> khi có backend/CMS chỉ cần
 * thay lớp `src/content/*` bằng fetch, UI không đổi.
 * ======================================================================== */

export type Locale = "vi" | "en";

/** Chuỗi song ngữ. Cho phép thiếu `en` -> tx() fallback về `vi`. */
export type Localized = string | { vi: string; en?: string };

/* ---------- Điều hướng ---------- */

export interface NavChild {
  label: Localized;
  href: string;
  emoji?: string;
  description?: Localized;
  /** Tô đậm + màu brand — dùng cho item nổi bật kiểu "Xem toàn bộ 25 nền tảng →". */
  emphasis?: boolean;
  /** Chữ nhỏ, mờ — dùng cho item phụ kiểu "Tin mới nhất". */
  muted?: boolean;
  /** Vẽ đường phân cách phía trên item này (khớp `.ndm-sep` trong demo). */
  divider?: boolean;
}

export interface NavItem {
  label: Localized;
  href?: string;
  children?: NavChild[];
}

/* ---------- Công ty thành viên ---------- */

export type CompanyAccent = "media" | "tech" | "law" | "retail" | "academy";

export type CompanyStatus = "active" | "active-dev" | "coming-soon" | "building";

export interface CompanyStat {
  value: string;
  label: Localized;
}

export interface Company {
  slug: string;
  index: number;
  name: string;
  kicker: Localized;
  tagline: Localized;
  description: Localized;
  emoji: string;
  accent: CompanyAccent;
  services: Localized[];
  stats: CompanyStat[];
  platforms: string[];
  platformNote?: Localized;
  status: CompanyStatus;
}

/* ---------- Hệ sinh thái nền tảng ---------- */

export type PlatformStatus = "live" | "demo" | "building";

export interface PlatformGroup {
  key: string;
  label: Localized;
  dotClass: string;
}

export interface Platform {
  slug: string;
  name: string;
  domain: string;
  emoji: string;
  description: Localized;
  status: PlatformStatus;
  owners: string[];
  group: string;
  url?: string;
  featured?: boolean;
}

export interface Synergy {
  emoji: string;
  from: string;
  title: Localized;
  description: Localized;
  chain: string;
}

export interface RoadmapPhase {
  period: string;
  title: Localized;
  items: Localized[];
  active?: boolean;
}

/* ---------- Tin tức ---------- */

export interface NewsArticle {
  slug: string;
  title: Localized;
  excerpt: Localized;
  category: string;
  categoryLabel: string;
  date: string; // ISO yyyy-mm-dd
  gradient: string;
  body: Localized[];
}

/* ---------- Tuyển dụng ---------- */

export interface Job {
  slug: string;
  title: Localized;
  company: string;
  department: string;
  location: Localized;
  level: Localized;
  status: "open" | "soon";
  summary: Localized;
  responsibilities: Localized[];
  requirements: Localized[];
  benefits: Localized[];
}

/* ---------- Khác ---------- */

export interface Partner {
  name: string;
  emoji: string;
  type: Localized;
  note?: Localized;
}

export interface Milestone {
  period: string;
  title: Localized;
  description: Localized;
  highlight?: boolean;
}

export interface ValueItem {
  emoji: string;
  title: Localized;
  description: Localized;
}

export interface Achievement {
  value: string;
  label: Localized;
  description: Localized;
}

export interface Pillar {
  emoji: string;
  title: Localized;
  description: Localized;
}
