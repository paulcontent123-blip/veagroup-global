import { Activity, Database, FileText, LockKeyhole, MessageSquare, Plus, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { jobs, news } from "@/content/vea-demo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const queue = [
  ["Lead hợp tác", "VEA Tech · Platform build", "Mới nhận"],
  ["Media kit", "Brand advertising · BookingKOLs", "Đang xử lý"],
  ["Ứng viên", "Full-stack Developer", "Cần review"],
] as const;

export const metadata: Metadata = {
  title: "Admin demo",
  robots: { index: false, follow: false },
};

export default function AdminDemoPage() {
  return (
    <main className="min-h-screen bg-sand-100 pt-16">
      <Container className="py-8 lg:py-10">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
              <LockKeyhole className="h-3.5 w-3.5" />
              Admin demo only
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-normal text-ink lg:text-5xl">
              VEA internal console
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Trang này mô phỏng CMS/dashboard để techlead duyệt layout. Chưa có auth, database hoặc
              quyền truy cập thật. Backend sau này nên dùng Next.js Route Handlers, Server Actions và RBAC.
            </p>
          </div>
          <Button href="/#contact" variant="secondary">
            Quay lại website
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          <Metric icon={FileText} label="Tin đã publish" value={String(news.length)} />
          <Metric icon={MessageSquare} label="Lead demo" value="3" />
          <Metric icon={Activity} label="Vị trí tuyển dụng" value={String(jobs.length)} />
          <Metric icon={Database} label="Data source" value="Static" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
          <Card className="p-3">
            <SidebarItem active icon={FileText} label="Bài viết & tin tức" />
            <SidebarItem icon={MessageSquare} label="Form hợp tác" />
            <SidebarItem icon={Activity} label="Tuyển dụng" />
            <SidebarItem icon={Database} label="Platforms" />
            <SidebarItem icon={Settings} label="Cài đặt" />
          </Card>

          <div className="grid gap-6">
            <Card className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-black text-ink">Bài viết & cập nhật</h2>
                  <p className="mt-1 text-sm text-muted">
                    Sau khi có backend, bảng này sẽ đọc từ CMS collection `posts`.
                  </p>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4" />
                  Tạo bài demo
                </Button>
              </div>
              <div className="mt-5 grid gap-3">
                {news.map((item) => (
                  <div key={item.title} className="grid gap-3 rounded-lg border border-line bg-sand-100 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge tone="brand">{item.tag}</Badge>
                        <span className="text-xs font-semibold text-muted">{item.date}</span>
                      </div>
                      <h3 className="mt-2 font-black text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.excerpt}</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Sửa
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="p-5">
                <h2 className="text-lg font-black text-ink">Lead queue</h2>
                <div className="mt-4 grid gap-3">
                  {queue.map(([title, detail, status]) => (
                    <div key={title} className="rounded-lg border border-line bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-bold text-ink">{title}</h3>
                        <Badge tone="neutral">{status}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted">{detail}</p>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-5">
                <h2 className="text-lg font-black text-ink">Backend handoff checklist</h2>
                <div className="mt-4 grid gap-3 text-sm text-muted">
                  <Check text="Thay static content bằng repository/service layer." />
                  <Check text="Auth thật: NextAuth/Auth.js hoặc IdP nội bộ, không hardcode password." />
                  <Check text="Lead form: Server Action + validation + email/CRM sync." />
                  <Check text="CMS: draft/publish, audit log, role-based permissions." />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <Card className="p-5">
      <Icon className="h-5 w-5 text-brand" />
      <div className="mt-4 text-3xl font-black text-ink">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-muted">{label}</div>
    </Card>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-bold transition ${
        active ? "bg-brand/10 text-brand" : "text-muted hover:bg-sand-200 hover:text-ink"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function Check({ text }: { text: string }) {
  return (
    <div className="flex gap-3 rounded-lg bg-sand-100 p-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
      <span>{text}</span>
    </div>
  );
}
