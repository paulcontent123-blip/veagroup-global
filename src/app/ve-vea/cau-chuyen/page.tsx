import { Quote } from "lucide-react";
import { storyBlocks } from "@/content/about";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea/cau-chuyen",
  "Câu chuyện VEA",
  "Câu chuyện khởi đầu từ tình yêu và khát vọng cống hiến cho đất nước của Vietnam Era Group.",
);

export default function StoryPage() {
  return (
    <main>
      <SubHero
        tone="dark"
        eyebrow="Câu chuyện khởi đầu"
        title="Vietnam Era Group —"
        highlight="Kỷ nguyên Việt Nam"
        description={'"Chúng tôi bắt đầu hành trình này không chỉ vì kinh doanh — mà vì muốn góp một phần gì đó cho đất nước."'}
        backHref="/ve-vea"
        backLabel="Về VEA Group"
      />
      <Section tone="subtle">
        <Card className="mx-auto max-w-4xl border-brand/20 bg-brand-50 p-7 sm:p-10">
          <Quote className="h-8 w-8 text-brand" />
          <blockquote className="mt-5 text-xl font-black leading-tight text-ink sm:text-2xl">&quot;VEA là viết tắt của <em>Vietnam Era</em> — Kỷ nguyên Việt Nam. Cái tên này không phải ngẫu nhiên. Chúng tôi tin rằng Việt Nam đang đứng trước một kỷ nguyên bứt phá trong lịch sử phát triển kinh tế số.&quot;</blockquote>
        </Card>
      </Section>
      <Section>
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {storyBlocks.map((block, index) => (
            <article key={tx(block.title, "vi")} className="relative border-t border-line pt-6">
              <span className="text-3xl" aria-hidden="true">{block.emoji}</span>
              <span className="ml-3 text-xs font-black uppercase tracking-[0.16em] text-brand">0{index + 1}</span>
              <h2 className="mt-4 text-xl font-black text-ink">{tx(block.title, "vi")}</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{tx(block.body, "vi")}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
