import { companies } from "@/content/companies";
import { companyAccent } from "@/lib/company-accent";
import type { CompanyAccent } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea/cong-ty",
  "Năm công ty thành viên",
  "5 mảng kinh doanh được thiết kế để bổ trợ lẫn nhau trong engine tổng hợp VEA Group.",
);

/** Trạng thái hiển thị đúng theo từng công ty trong demo (page-cong-ty). */
const STATUS: Record<CompanyAccent, { text: string; tone: "green" | "amber" }> = {
  media: { text: "Đang hoạt động", tone: "green" },
  tech: { text: "Phát triển tích cực", tone: "green" },
  law: { text: "Sắp ra mắt Q3/2026", tone: "amber" },
  retail: { text: "Đang phát triển", tone: "green" },
  academy: { text: "Đang xây dựng", tone: "amber" },
};

export default function CompaniesPage() {
  return (
    <main>
      <SubHero
        eyebrow="Cấu trúc tổ chức"
        title={
          <>
            5 Công ty thành viên —<br />
          </>
        }
        highlight="mỗi thế mạnh riêng biệt"
        description="5 mảng kinh doanh được thiết kế để bổ trợ lẫn nhau. Doanh thu của công ty này là pipeline của công ty khác — đó là engine tổng hợp VEA Group."
        backHref="/ve-vea"
        backLabel="Về VEA Group"
      />

      <Section>
        <div className="flex flex-col gap-5">
          {companies.map((company) => {
            const accent = companyAccent[company.accent];
            const status = STATUS[company.accent];
            return (
              <Card
                as="article"
                key={company.slug}
                id={company.slug}
                className="scroll-mt-24 overflow-hidden rounded-[14px] transition-colors hover:border-brand/30"
              >
                <div
                  className={cn(
                    "grid gap-5 bg-gradient-to-br to-transparent p-6 sm:p-8 lg:grid-cols-[52px_1fr_auto] lg:items-start",
                    accent.wash,
                  )}
                >
                  {/* Icon */}
                  <span
                    className={cn(
                      "grid h-[52px] w-[52px] shrink-0 place-items-center rounded-xl border text-[22px]",
                      accent.icon,
                    )}
                    aria-hidden
                  >
                    {company.emoji}
                  </span>

                  {/* Nội dung chính */}
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-light">
                      Thành viên 0{company.index}
                    </div>
                    <h2 className="mt-1.5 text-[22px] font-black leading-tight text-ink">{company.name}</h2>
                    <p className="mt-1 text-[13px] text-muted">{tx(company.kicker, "vi")}</p>
                    <p className="mt-2.5 max-w-[680px] text-sm leading-[1.75] text-muted">
                      {tx(company.description, "vi")}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {company.services.map((service) => (
                        <span
                          key={tx(service, "vi")}
                          className={cn("rounded border px-2.5 py-0.5 text-[10px] font-semibold", accent.chip)}
                        >
                          {tx(service, "vi")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta phải: trạng thái + nền tảng liên quan */}
                  <div className="border-t border-line pt-4 text-[11px] text-muted lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 lg:text-right">
                    <div className="flex items-center gap-1.5 lg:justify-end">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          status.tone === "green" ? "bg-emerald-500" : "bg-amber-500",
                        )}
                      />
                      {status.text}
                    </div>
                    <p className="mt-1.5">
                      {company.platformNote ? tx(company.platformNote, "vi") : company.platforms.join(" · ")}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
