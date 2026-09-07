import { platformGroups, platformsByGroup } from "@/content/platforms";
import { roadmap } from "@/content/roadmap";
import { synergies } from "@/content/synergies";
import { tx } from "@/lib/i18n/tx";
import { cn } from "@/lib/utils";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusBadge } from "@/components/ui/status-badge";
import { SubHero } from "@/components/layout/sub-hero";
import { Check } from "lucide-react";

export const metadata = createPageMetadata(
  "/he-sinh-thai",
  "Hệ sinh thái VEA Group",
  "5 công ty thành viên vận hành 25 nền tảng phục vụ mọi nhu cầu thiết yếu của người Việt — từ tuyển dụng, pháp lý, thiện nguyện đến giải trí đêm và chăm sóc mẹ bé.",
);

export default function EcosystemPage() {
  return (
    <main>
      <SubHero
        eyebrow="Hệ sinh thái số — VEA Group"
        title={
          <>
            25 nền tảng —<br />
          </>
        }
        highlight="mỗi nhu cầu một giải pháp"
        description="5 công ty thành viên vận hành 25 nền tảng phục vụ mọi nhu cầu thiết yếu của người Việt — từ tuyển dụng, pháp lý, thiện nguyện đến giải trí đêm và chăm sóc mẹ bé."
        backLabel="Trang chủ"
      />

      {/* ── Nền tảng theo nhóm ── */}
      <Section id="platforms" tone="subtle" bordered>
        <SectionHeading eyebrow="25 Nền tảng số" title="Hạ tầng số của" highlight="hệ sinh thái VEA" />

        <div className="mt-10 grid gap-10">
          {platformGroups.map((group) => (
            <div key={group.key}>
              <div className="mb-4 flex items-center gap-3">
                <span className={cn("h-2 w-2 shrink-0 rounded-full", group.dotClass)} aria-hidden />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{tx(group.label, "vi")}</h3>
                <span className="h-px flex-1 bg-line" aria-hidden />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {platformsByGroup(group.key).map((platform) => (
                  <Card as="article" key={platform.slug} interactive className="flex flex-col p-4">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[22px] leading-none" aria-hidden>
                        {platform.emoji}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-[13.5px] font-bold leading-tight text-ink">{platform.name}</h4>
                          <StatusBadge status={platform.status} locale="vi" />
                        </div>
                        <p className="mt-0.5 break-all font-mono text-[9.5px] text-muted-light">{platform.domain}</p>
                      </div>
                    </div>
                    <p className="mt-2.5 flex-1 text-xs leading-relaxed text-muted">{tx(platform.description, "vi")}</p>
                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-light">
                      {platform.owners.join(" · ")}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-brand/20 bg-brand/[0.04] p-5">
          <span className="text-2xl" aria-hidden>
            🌐
          </span>
          <div>
            <h3 className="font-black text-ink">VEA Data Platform — Hub kết nối 25 nền tảng</h3>
            <p className="mt-1 text-sm leading-6 text-muted">
              Shared auth · Cross-sell engine · Analytics tổng hợp · AI recommendation
            </p>
          </div>
        </div>
      </Section>

      {/* ── Synergy ── */}
      <Section id="synergy">
        <SectionHeading
          eyebrow="Sức mạnh hệ sinh thái"
          title="Khi 5 công ty hoạt động"
          highlight="như một cơ thể"
          description="Mỗi khách hàng đến với bất kỳ nền tảng nào của VEA đều được phục vụ toàn diện."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {synergies.map((flow) => (
            <Card as="article" key={tx(flow.title, "vi")} className="flex flex-col p-5">
              <div className="text-xl" aria-hidden>
                {flow.emoji}
              </div>
              <p className="mt-4 text-xs font-bold text-brand">{flow.from}</p>
              <h3 className="mt-2 text-base font-black leading-snug text-ink">{tx(flow.title, "vi")}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{tx(flow.description, "vi")}</p>
              <p className="mt-4 border-t border-line pt-3 text-[11px] font-semibold text-brand">{flow.chain}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── Roadmap ── */}
      <Section id="roadmap" tone="subtle" bordered>
        <SectionHeading eyebrow="Lộ trình phát triển" title="Từ foundation đến" highlight="kỷ nguyên ĐNA" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((phase) => (
            <Card
              as="article"
              key={phase.period}
              className={cn("p-5", phase.active && "border-brand/40 bg-brand/[0.04]")}
            >
              <span className="font-mono text-xs font-bold text-brand">{phase.period}</span>
              <h3 className="mt-3 text-lg font-black text-ink">{tx(phase.title, "vi")}</h3>
              <ul className="mt-4 grid gap-2.5">
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
