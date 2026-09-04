import { Globe2 } from "lucide-react";
import { brandPartners, institutionalPartners } from "@/content/partners";
import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";
import { PartnerCard } from "@/components/pages/partner-card";

export const metadata = createPageMetadata(
  "/doi-tac",
  "Đối tác của VEA",
  "200+ brand và đối tác chiến lược tin tưởng hợp tác với VEA Group — từ các tập đoàn đa quốc gia đến startup công nghệ Việt Nam.",
);

export default function PartnersPage() {
  return (
    <main>
      <SubHero
        eyebrow="Mạng lưới đối tác"
        title="Đối tác của"
        highlight="VEA Group"
        description="200+ brand và đối tác chiến lược tin tưởng hợp tác với VEA Group — từ các tập đoàn đa quốc gia đến startup công nghệ Việt Nam."
        backLabel="Trang chủ"
      />
      <Section>
        <div className="flex items-end justify-between gap-4"><div><h2 className="text-2xl font-black text-ink">Brand đối tác — VEA Media</h2></div><Globe2 className="hidden h-8 w-8 text-brand sm:block" /></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{brandPartners.map((partner) => <PartnerCard key={partner.name} partner={partner} />)}</div>
        <div className="mt-8 flex items-center gap-4 border border-dashed border-brand/30 bg-brand-50 p-5"><div className="text-3xl font-black text-brand">+193</div><p className="text-sm font-bold text-brand">Trở thành đối tác →</p></div>
      </Section>
      <Section tone="subtle" bordered>
        <div><h2 className="text-2xl font-black text-ink">Đối tác công nghệ & hệ sinh thái</h2></div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{institutionalPartners.map((partner) => <PartnerCard key={partner.name} partner={partner} />)}</div>
      </Section>
    </main>
  );
}
