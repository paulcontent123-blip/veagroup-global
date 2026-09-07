import { visionBlocks } from "@/content/about";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea/tam-nhin",
  "Tầm nhìn và sứ mệnh",
  "Tầm nhìn, sứ mệnh và cam kết dài hạn của VEA Group với Việt Nam.",
);

export default function VisionPage() {
  return (
    <main>
      <SubHero
        tone="dark"
        eyebrow="Tầm nhìn & Sứ mệnh"
        title={
          <>
            Kiến tạo <span className="italic text-brand-400">kỷ nguyên mới</span>
            <br />
            cho Việt Nam
          </>
        }
        description="VEA Group không chỉ xây dựng công ty — mà đang xây dựng hạ tầng số cho một Việt Nam thông minh hơn, công bằng hơn và kết nối hơn."
        backHref="/ve-vea"
        backLabel="Về VEA Group"
      />

      <Section tone="subtle">
        <div className="mx-auto grid max-w-[1060px] gap-6 md:grid-cols-2">
          {visionBlocks.map((item) => (
            <Card key={tx(item.title, "vi")} className="overflow-hidden rounded-[14px]">
              {/* border-top:3px solid var(--org) */}
              <div className="h-[3px] bg-brand" aria-hidden />
              <div className="p-8">
                <h3 className="text-lg font-bold text-ink">
                  <span aria-hidden>{item.emoji}</span> {tx(item.title, "vi")}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted">{tx(item.description, "vi")}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
