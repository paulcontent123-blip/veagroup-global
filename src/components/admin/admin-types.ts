export type AdminTab = "posts" | "jobs" | "leads" | "settings";

export type AdminPostStatus = "pub" | "draft";

export type AdminPost = {
  id: number;
  title: string;
  summary: string;
  body: string;
  cat: string;
  catVal: string;
  color: string;
  status: AdminPostStatus;
  date: string;
};

export type AdminPostDraft = Omit<AdminPost, "id" | "date" | "status">;

export type AdminLead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  desc?: string;
  time?: string;
};

export const ADMIN_CATEGORIES = [
  { value: "tech", label: "VEA Tech" },
  { value: "media", label: "VEA Media" },
  { value: "law", label: "VEA Law" },
  { value: "group", label: "VEA Group" },
  { value: "event", label: "Sự kiện" },
] as const;

export const ADMIN_COLORS = [
  { value: "linear-gradient(135deg,#0c4a6e,#0369a1,#38BDF8)", label: "Xanh dương" },
  { value: "linear-gradient(135deg,#C8541A,#E8610A,#F97316)", label: "Cam VEA" },
  { value: "linear-gradient(135deg,#1B2444,#2B3A67,#4F46E5)", label: "Xanh tím" },
  { value: "linear-gradient(135deg,#831843,#DB2777,#F472B6)", label: "Hồng" },
  { value: "linear-gradient(135deg,#1B2444,#2B3A67,#5D7A4B)", label: "Xanh lá" },
  { value: "linear-gradient(135deg,#1c1917,#44403c,#78716c)", label: "Xám đậm" },
] as const;

