import { achievements, milestones } from "@/content/milestones";
import { tx } from "@/lib/i18n/tx";
import { getLocale } from "@/lib/i18n/locale";
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

function periodLabel(period: string, locale: "vi" | "en") {
  if (locale === "vi") return period;
  return period
    .replace("Khởi đầu", "Beginning")
    .replace("Năm bứt phá", "Breakout year")
    .replace("Đang triển khai", "In progress");
}

export default async function MilestonesPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={locale === "en" ? "Milestones & Achievements" : "Cột mốc & Thành tựu"}
        title={locale === "en" ? "The building journey" : "Hành trình xây dựng"}
        highlight="VEA Group"
        description={
          locale === "en"
            ? "Numbers, milestones and achievements from the journey to build the Vietnam Era."
            : "Những con số, cột mốc và thành tựu trên hành trình kiến tạo kỷ nguyên Việt Nam."
        }
        backLabel={locale === "en" ? "Back to home" : "Quay về trang chủ"}
      />

      <Section tone="subtle">
        {/* Số liệu — .tt-grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <Card key={tx(item.label, locale)} interactive className="rounded-[14px] p-[26px]">
              <div className="text-gradient text-[36px] font-black leading-none">{item.value}</div>
              <h2 className="mt-1.5 text-[15px] font-bold text-ink">{tx(item.label, locale)}</h2>
              <p className="mt-1.5 text-[13px] leading-[1.65] text-muted">{tx(item.description, locale)}</p>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="mb-8 mt-16 text-balance font-black tracking-[-0.5px] text-ink text-[32px] sm:text-[36px] lg:text-[40px]">
          {locale === "en" ? "Timeline " : "Timeline "} <span className="text-gradient italic">{locale === "en" ? "VEA journey" : "hành trình VEA"}</span>
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
                  {periodLabel(milestone.period, locale)}
                </div>
                <h3 className="mt-1.5 text-[15px] font-bold text-ink">{tx(milestone.title, locale)}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{tx(milestone.description, locale)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
