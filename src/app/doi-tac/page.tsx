import Link from "next/link";
import { brandPartners, institutionalPartners } from "@/content/partners";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

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
        {/* Brand đối tác — VEA Media */}
        <h2 className="mb-5 text-lg font-bold text-ink">Brand đối tác — VEA Media</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brandPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-3 rounded-[10px] border border-line bg-white p-[18px]"
            >
              <span className="shrink-0 text-[26px] leading-none" aria-hidden>
                {partner.emoji}
              </span>
              <div className="min-w-0">
                <div className="text-[13.5px] font-bold text-ink">{partner.name}</div>
                <div className="mt-0.5 text-[11px] text-muted">{tx(partner.type, "vi")}</div>
              </div>
            </div>
          ))}
          <Link
            href="/lien-he"
            className="flex flex-col items-center justify-center rounded-[10px] border border-dashed border-brand/30 bg-brand/[0.06] p-[18px] text-center transition-colors hover:border-brand/50"
          >
            <div className="text-xl font-black text-brand">+193</div>
            <div className="mt-0.5 text-xs font-semibold text-brand">Trở thành đối tác →</div>
          </Link>
        </div>

        {/* Đối tác công nghệ & hệ sinh thái */}
        <h2 className="mb-4 mt-10 text-lg font-bold text-ink">Đối tác công nghệ &amp; hệ sinh thái</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {institutionalPartners.map((partner) => (
            <div key={partner.name} className="rounded-[10px] border border-line bg-white p-5">
              <div className="text-2xl" aria-hidden>
                {partner.emoji}
              </div>
              <div className="mt-2 font-bold text-ink">{partner.name}</div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{tx(partner.type, "vi")}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
