import { ArrowUpRight } from "lucide-react";
import { companies } from "@/content/companies";
import type { CompanyAccent } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea/cong-ty",
  "Năm công ty thành viên",
  "5 mảng kinh doanh được thiết kế để bổ trợ lẫn nhau trong engine tổng hợp VEA Group.",
);

const accentBar: Record<CompanyAccent, string> = {
  media: "bg-fuchsia-500",
  tech: "bg-emerald-500",
  law: "bg-indigo-500",
  retail: "bg-amber-500",
  academy: "bg-lime-600",
};

export default function CompaniesPage() {
  return (
    <main>
      <SubHero
        eyebrow="Cấu trúc tổ chức"
        title="5 Công ty thành viên —"
        highlight="mỗi thế mạnh riêng biệt"
        description="5 mảng kinh doanh được thiết kế để bổ trợ lẫn nhau. Doanh thu của công ty này là pipeline của công ty khác — đó là engine tổng hợp VEA Group."
        backHref="/ve-vea"
        backLabel="Về VEA Group"
      />
      <Section tone="subtle">
        <div className="grid gap-6">
          {companies.map((company) => (
            <Card as="article" key={company.slug} id={company.slug} className="scroll-mt-24 overflow-hidden">
              <div className={`h-1.5 ${accentBar[company.accent]}`} />
              <div className="grid gap-8 p-6 lg:grid-cols-[0.9fr_1.35fr_0.75fr] lg:p-8">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-brand">0{company.index}</span>
                    {company.slug === "law" ? <Badge tone="warning">Sắp ra mắt Q3/2026</Badge> : <StatusBadge status={company.status} locale="vi" />}
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <span className="text-3xl" aria-hidden="true">{company.emoji}</span>
                    <div>
                      <h2 className="text-2xl font-black text-ink">{company.name}</h2>
                      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">{tx(company.kicker, "vi")}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm leading-7 text-muted">{tx(company.description, "vi")}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {company.services.map((service) => <Badge key={tx(service, "vi")} tone="neutral">{tx(service, "vi")}</Badge>)}
                  </div>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="text-sm leading-6 text-muted">{company.platformNote ? tx(company.platformNote, "vi") : company.platforms.join(" · ")}</p>
                  </div>
                </div>
                <div className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {company.stats.map((stat) => (
                    <div key={stat.value} className="rounded-lg bg-sand-100 p-4">
                      <div className="text-2xl font-black text-ink">{stat.value}</div>
                      <div className="mt-1 text-xs font-semibold leading-5 text-muted">{tx(stat.label, "vi")}</div>
                    </div>
                  ))}
                  <Button href="/#contact" variant="outline" size="sm" className="mt-1">{company.slug === "media" ? "Tìm hiểu →" : company.slug === "tech" ? "Tech stack →" : company.slug === "law" ? "Đăng ký tư vấn →" : company.slug === "retail" ? "Trở thành đại lý →" : "Đăng ký học →"} <ArrowUpRight className="h-4 w-4" /></Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
