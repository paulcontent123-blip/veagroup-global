import { CheckCircle2, Trophy } from "lucide-react";
import { achievements, milestones } from "@/content/milestones";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
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
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <Card key={tx(item.label, "vi")} className="p-6">
              <Trophy className="h-6 w-6 text-brand" />
              <div className="mt-5 text-4xl font-black text-ink">{item.value}</div>
              <h2 className="mt-2 text-base font-black text-ink">{tx(item.label, "vi")}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{tx(item.description, "vi")}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="subtle" bordered>
        <div className="max-w-2xl">
          <SectionHeading eyebrow="Timeline" title="Timeline" highlight="hành trình VEA" />
        </div>
        <div className="mt-10 grid gap-0">
          {milestones.map((milestone, index) => (
            <article key={milestone.period} className="grid gap-4 border-t border-line py-6 md:grid-cols-[150px_1fr_auto] md:items-start">
              <div className="font-mono text-sm font-bold text-brand">{milestone.period}</div>
              <div>
                <h3 className="text-lg font-black text-ink">{tx(milestone.title, "vi")}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{tx(milestone.description, "vi")}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-light"><span>0{index + 1}</span><CheckCircle2 className="h-4 w-4 text-brand" /></div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
