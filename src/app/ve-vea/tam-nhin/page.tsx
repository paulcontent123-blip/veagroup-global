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
        title="Kiến tạo"
        highlight={<><em>kỷ nguyên mới</em> cho Việt Nam</>}
        description="VEA Group không chỉ xây dựng công ty — mà đang xây dựng hạ tầng số cho một Việt Nam thông minh hơn, công bằng hơn và kết nối hơn."
        backHref="/ve-vea"
        backLabel="Về VEA Group"
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {visionBlocks.map((item) => (
            <Card key={tx(item.title, "vi")} className="p-6 sm:p-7">
              <span className="text-3xl" aria-hidden="true">{item.emoji}</span>
              <h2 className="mt-5 text-xl font-black text-ink">{tx(item.title, "vi")}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{tx(item.description, "vi")}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
