import { achievements, milestones } from "@/content/milestones";
import { tx } from "@/lib/i18n/tx";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/thanh-tuu",
  "Thành tựu và cột mốc",
  "Các thành tựu, cột mốc sản phẩm và bước phát triển đáng chú ý của VEA Group.",
);

export default function MilestonesPage() {
  return (
    <main>
      <SubHero
        eyebrow="Cột mốc & Thành tựu"
        title="Hành trình xây dựng"
        highlight="VEA Group"
        description="Những con số, cột mốc và thành tựu trên hành trình kiến tạo kỷ nguyên Việt Nam."
        backLabel="Quay về trang chủ"
      />

      <Section tone="subtle">
        {/* Số liệu — .tt-grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <Card key={tx(item.label, "vi")} interactive className="rounded-[14px] p-[26px]">
              <div className="text-gradient text-[36px] font-black leading-none">{item.value}</div>
              <h2 className="mt-1.5 text-[15px] font-bold text-ink">{tx(item.label, "vi")}</h2>
              <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">{tx(item.description, "vi")}</p>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="mb-8 mt-16 text-balance font-black tracking-tight text-ink text-[clamp(1.9rem,1.2rem+2.6vw,2.6rem)]">
          Timeline <span className="text-gradient italic">hành trình VEA</span>
        </h2>

        <div className="relative pl-8">
          <div className="absolute bottom-1 left-[10px] top-1 w-0.5 bg-line" aria-hidden />
          {milestones.map((milestone) => (
            <div key={milestone.period} className="relative mb-7 last:mb-0">
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[26px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white ring-[3px] ring-brand/25",
                  milestone.highlight ? "bg-brand-500" : "bg-brand",
                )}
              />
              <div
                className={cn(
                  "rounded-[10px] border px-[22px] py-[18px]",
                  milestone.highlight ? "border-brand/25 bg-brand/[0.04]" : "border-line bg-white",
                )}
              >
                <div
                  className={cn(
                    "font-mono text-[11px]",
                    milestone.highlight ? "text-brand" : "text-muted",
                  )}
                >
                  {milestone.period}
                </div>
                <h3 className="mt-1.5 text-[15px] font-bold text-ink">{tx(milestone.title, "vi")}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{tx(milestone.description, "vi")}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
