import { ArrowRight } from "lucide-react";
import { partners as strategicPartners } from "@/content/vea-demo";
import { mediaCampaignPartners, partnerTracks } from "@/content/partners";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/hop-tac",
  "Hợp tác cùng VEA",
  "Từ đối tác chiến lược, nhà đầu tư đến các nhãn hàng đã tin tưởng VEA — chúng tôi tìm kiếm những người cùng chung tầm nhìn.",
);

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

      <Section tone="subtle" bordered>
        <SectionHeading eyebrow="Đối tác chiến lược" title="Đối tác & Khách hàng" highlight="tin tưởng VEA" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strategicPartners.map(([name, type, Icon]) => (
            <Card key={name} className="p-5">
              <Icon className="h-7 w-7 text-brand" />
              <h2 className="mt-5 text-base font-black text-ink">{name}</h2>
              <p className="mt-1 text-sm text-muted">{type}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Nhãn hàng đã hợp tác" title="Những thương hiệu đã" highlight="tin tưởng VEA Media" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mediaCampaignPartners.map((partner) => (
            <Card key={partner.name} interactive className="p-5">
              <div className="text-3xl" aria-hidden="true">{partner.emoji}</div>
              <h2 className="mt-4 text-base font-black text-ink">{partner.name}</h2>
              <p className="mt-1 text-sm text-muted">{tx(partner.type, "vi")}</p>
              <p className="mt-4 text-xs font-bold text-brand">Xem chi tiết →</p>
            </Card>
          ))}
          <Card className="flex items-center justify-center border-dashed border-brand/30 bg-brand-50 p-5 text-center">
            <div>
              <div className="text-2xl" aria-hidden="true">🤝</div>
              <p className="mt-2 text-sm font-bold text-brand">Trở thành đối tác</p>
              <p className="mt-1 text-xs text-muted">Liên hệ hợp tác ngay</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="subtle" bordered>
        <SectionHeading eyebrow="Hình thức hợp tác" title="Chúng tôi tìm kiếm" highlight="đối tác ở mọi cấp độ" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {partnerTracks.map((track) => (
            <Card key={tx(track.title, "vi")} className="flex h-full flex-col p-6">
              <span className="text-3xl" aria-hidden="true">{track.emoji}</span>
              <h2 className="mt-5 text-base font-black text-ink">{tx(track.title, "vi")}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted">{tx(track.description, "vi")}</p>
              <Button href="/lien-he" variant="outline" size="sm" className="mt-6 w-fit">
                {tx(track.cta, "vi")} <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
