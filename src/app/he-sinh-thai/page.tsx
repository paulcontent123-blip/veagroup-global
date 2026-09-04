import { Check } from "lucide-react";
import { platformGroups, platformsByGroup } from "@/content/platforms";
import { roadmap } from "@/content/roadmap";
import { synergies } from "@/content/synergies";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubHero } from "@/components/layout/sub-hero";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata(
  "/he-sinh-thai",
  "Hệ sinh thái VEA Group",
  "VEA Tech xây dựng 14 nền tảng phủ sóng các ngành nhu cầu cao nhất tại Việt Nam — tất cả kết nối chéo qua VEA Data Platform.",
);

export default function EcosystemPage() {
  return (
    <main>
      <SubHero
        eyebrow="Hệ sinh thái"
        title="14 nền tảng số —"
        highlight="một hệ sinh thái"
        description="VEA Tech xây dựng 14 nền tảng phủ sóng các ngành nhu cầu cao nhất tại Việt Nam — tất cả kết nối chéo qua VEA Data Platform."
        backLabel="Quay về trang chủ"
      />

      <Section id="platforms" tone="subtle" bordered>
        <SectionHeading eyebrow="14 Nền tảng số" title="Hạ tầng số của" highlight="hệ sinh thái VEA" />
        <div className="mt-10 grid gap-10">
          {platformGroups.map((group) => {
            const groupPlatforms = platformsByGroup(group.key);
            return (
              <div key={group.key}>
                <div className="mb-5 flex items-center gap-3">
                  <span className={cn("h-2.5 w-2.5 rounded-full", group.dotClass)} />
                  <h2 className="text-sm font-black uppercase tracking-[0.16em] text-ink">{tx(group.label, "vi")}</h2>
                </div>
                <div className={cn("grid gap-4 sm:grid-cols-2", group.key === "content-finance" ? "lg:grid-cols-5" : "lg:grid-cols-3")}>
                  {groupPlatforms.map((platform) => (
                    <Card as="article" key={platform.slug} interactive className="p-5">
                      <div className="text-2xl" aria-hidden="true">{platform.emoji}</div>
                      <h3 className="mt-4 text-base font-black text-ink">{platform.name}</h3>
                      <p className="mt-1 break-all font-mono text-xs text-muted-light">{platform.domain}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {platform.owners.map((owner) => <Badge key={owner} tone="brand">{owner}</Badge>)}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Card className="mt-6 flex items-start gap-4 bg-brand-50 p-5">
          <span className="text-2xl" aria-hidden="true">🌐</span>
          <div>
            <h2 className="font-black text-ink">VEA Data Platform — Hub kết nối 14 nền tảng</h2>
            <p className="mt-1 text-sm leading-6 text-muted">Shared auth · Cross-sell engine · Analytics tổng hợp · AI recommendation</p>
          </div>
        </Card>
      </Section>

      <Section id="synergy">
        <SectionHeading
          eyebrow="Sức mạnh hệ sinh thái"
          title="Khi 5 công ty hoạt động"
          highlight="như một cơ thể"
          description="Mỗi khách hàng đến với bất kỳ nền tảng nào của VEA đều được phục vụ toàn diện."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {synergies.map((flow) => (
            <Card key={tx(flow.title, "vi")} className="p-5">
              <div className="text-xl" aria-hidden="true">{flow.emoji}</div>
              <p className="mt-4 text-xs font-bold text-brand">{flow.from}</p>
              <h2 className="mt-3 text-lg font-black leading-snug text-ink">{tx(flow.title, "vi")}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{tx(flow.description, "vi")}</p>
              <div className="mt-5 border-t border-line pt-4 text-xs font-bold text-muted">{flow.chain}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="roadmap" tone="subtle" bordered>
        <SectionHeading eyebrow="Lộ trình phát triển" title="Từ foundation đến" highlight="kỷ nguyên ĐNA" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((phase) => (
            <Card key={phase.period} className={cn("p-5", phase.active && "border-brand/40 bg-brand-50")}>
              <span className="font-mono text-xs font-bold text-brand">{phase.period}</span>
              <h2 className="mt-4 text-xl font-black text-ink">{tx(phase.title, "vi")}</h2>
              <ul className="mt-5 grid gap-3">
                {phase.items.map((item) => (
                  <li key={tx(item, "vi")} className="flex gap-2 text-sm leading-6 text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    {tx(item, "vi")}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
