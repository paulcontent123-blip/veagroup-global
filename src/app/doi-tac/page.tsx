import Link from "next/link";
import { brandPartners, institutionalPartners } from "@/content/partners";
import { tx } from "@/lib/i18n/tx";
import { getLocale } from "@/lib/i18n/locale";
import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/doi-tac",
  "Đối tác của VEA",
  "200+ brand và đối tác chiến lược tin tưởng hợp tác với VEA Group — từ các tập đoàn đa quốc gia đến startup công nghệ Việt Nam.",
);

export default async function PartnersPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={locale === "en" ? "Partner network" : "Mạng lưới đối tác"}
        title={locale === "en" ? "VEA Group's" : "Đối tác của"}
        highlight="VEA Group"
        description={
          locale === "en"
            ? "200+ brands and strategic partners trust VEA Group — from multinational companies to Vietnamese technology startups."
            : "200+ brand và đối tác chiến lược tin tưởng hợp tác với VEA Group — từ các tập đoàn đa quốc gia đến startup công nghệ Việt Nam."
        }
        backLabel={locale === "en" ? "Home" : "Trang chủ"}
      />

      <Section>
        {/* Brand đối tác — VEA Media */}
        <h2 className="mb-5 text-lg font-bold text-ink">{locale === "en" ? "Partner brands — VEA Media" : "Brand đối tác — VEA Media"}</h2>
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
                <div className="mt-0.5 text-[11px] text-muted">{tx(partner.type, locale)}</div>
              </div>
            </div>
          ))}
          <Link
            href="/lien-he"
            className="flex flex-col items-center justify-center rounded-[10px] border border-dashed border-brand/30 bg-brand/[0.06] p-[18px] text-center transition-colors hover:border-brand/50"
          >
            <div className="text-xl font-black text-brand">+193</div>
            <div className="mt-0.5 text-xs font-semibold text-brand">{locale === "en" ? "Become a partner →" : "Trở thành đối tác →"}</div>
          </Link>
        </div>

        {/* Đối tác công nghệ & hệ sinh thái */}
        <h2 className="mb-4 mt-10 text-lg font-bold text-ink">
          {locale === "en" ? "Technology & ecosystem partners" : "Đối tác công nghệ & hệ sinh thái"}
        </h2>
        <div className="grid gap-3 md:grid-cols-3">
          {institutionalPartners.map((partner) => (
            <div key={partner.name} className="rounded-[10px] border border-line bg-white p-5">
              <div className="text-2xl" aria-hidden>
                {partner.emoji}
              </div>
              <div className="mt-2 font-bold text-ink">{partner.name}</div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{tx(partner.type, locale)}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
