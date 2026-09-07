import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { partners as strategicPartners } from "@/content/vea-demo";
import { mediaCampaignPartners, partnerTracks } from "@/content/partners";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/hop-tac",
  "Hợp tác cùng VEA",
  "Từ đối tác chiến lược, nhà đầu tư đến các nhãn hàng đã tin tưởng VEA — chúng tôi tìm kiếm những người cùng chung tầm nhìn.",
);

/** Tiêu đề section 32px (bám .sec-h font-size:32px của page-hop-tac). */
function SectionHead({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-black leading-[1.15] tracking-tight text-ink text-[clamp(1.5rem,1.1rem+1.6vw,2rem)]">
        {children}
      </h2>
    </>
  );
}

const PARTNER_CARD =
  "rounded-[14px] border border-line bg-white p-6 text-center shadow-soft transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[3px] hover:border-brand/30 hover:shadow-lift";

export default function PartnershipPage() {
  return (
    <main>
      <SubHero
        eyebrow="Hợp tác & Đối tác"
        title="Cùng xây dựng"
        highlight="kỷ nguyên Việt Nam"
        description="Từ đối tác chiến lược, nhà đầu tư đến các nhãn hàng đã tin tưởng VEA — chúng tôi tìm kiếm những người cùng chung tầm nhìn."
        backLabel="Quay về trang chủ"
      />

      {/* Đối tác chiến lược */}
      <Section tone="subtle" bordered>
        <SectionHead eyebrow="Đối tác chiến lược">
          Đối tác &amp; Khách hàng <span className="text-gradient italic">tin tưởng VEA</span>
        </SectionHead>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strategicPartners.map((partner) => (
            <div key={partner.name} className={PARTNER_CARD}>
              <div className="text-[32px] leading-none" aria-hidden>
                {partner.emoji}
              </div>
              <h3 className="mt-2.5 text-sm font-bold text-ink">{partner.name}</h3>
              <p className="mt-1 text-[11px] text-muted">{partner.type}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Nhãn hàng đã hợp tác */}
      <Section>
        <SectionHead eyebrow="Nhãn hàng đã hợp tác">
          Những thương hiệu đã <span className="text-gradient italic">tin tưởng VEA Media</span>
        </SectionHead>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mediaCampaignPartners.map((partner) => (
            <div key={partner.name} className={PARTNER_CARD}>
              <div className="text-[32px] leading-none" aria-hidden>
                {partner.emoji}
              </div>
              <h3 className="mt-2.5 text-sm font-bold text-ink">{partner.name}</h3>
              <p className="mt-1 text-[11px] text-muted">{tx(partner.type, "vi")}</p>
              <p className="mt-3 text-[11px] font-semibold text-brand">Xem chi tiết →</p>
            </div>
          ))}
          <Link
            href="/lien-he"
            className="flex flex-col items-center justify-center rounded-[14px] border border-dashed border-brand/30 bg-brand/[0.06] p-6 text-center transition-colors hover:border-brand/50"
          >
            <div className="text-[28px] leading-none text-brand" aria-hidden>
              🤝
            </div>
            <p className="mt-2.5 text-sm font-bold text-brand">Trở thành đối tác</p>
            <p className="mt-1 text-[11px] text-muted">Liên hệ hợp tác ngay</p>
          </Link>
        </div>
      </Section>

      {/* Hình thức hợp tác */}
      <Section tone="subtle" bordered>
        <SectionHead eyebrow="Hình thức hợp tác">
          Chúng tôi tìm kiếm <span className="text-gradient italic">đối tác ở mọi cấp độ</span>
        </SectionHead>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {partnerTracks.map((track) => (
            <Card key={tx(track.title, "vi")} className="flex h-full flex-col rounded-[14px] p-7">
              <span className="text-[28px] leading-none" aria-hidden>
                {track.emoji}
              </span>
              <h3 className="mt-3.5 text-base font-bold text-ink">{tx(track.title, "vi")}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-[1.7] text-muted">{tx(track.description, "vi")}</p>
              <Button href="/lien-he" variant="outline" size="sm" className="mt-4 w-fit">
                {tx(track.cta, "vi")} <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
