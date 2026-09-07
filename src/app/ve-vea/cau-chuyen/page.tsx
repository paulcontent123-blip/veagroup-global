import { storyBlocks, storyQuote } from "@/content/about";
import { tx } from "@/lib/i18n/tx";
import { getLocale } from "@/lib/i18n/locale";
import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea/cau-chuyen",
  "Câu chuyện VEA",
  "Câu chuyện khởi đầu từ tình yêu và khát vọng cống hiến cho đất nước của Vietnam Era Group.",
);

export default async function StoryPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        tone="dark"
        eyebrow={locale === "en" ? "Origin story" : "Câu chuyện khởi đầu"}
        title={
          <>
            Vietnam Era Group —<br />
          </>
        }
        highlight={locale === "en" ? "Vietnam Era" : "Kỷ nguyên Việt Nam"}
        description={tx(storyQuote.text, locale)}
        backHref="/ve-vea"
        backLabel={locale === "en" ? "About VEA Group" : "Về VEA Group"}
      />

      <Section>
        <div className="mx-auto max-w-[960px]">
          {/* Callout mở đầu — viền trái cam (demo: border-left 4px, orgl3, radius 0 12 12 0) */}
          <blockquote className="mb-10 rounded-r-xl border-l-4 border-brand bg-brand/[0.04] px-7 py-6">
            <p className="text-lg italic leading-[1.8] text-ink">
              {locale === "en" ? (
                <>
                  &quot;VEA stands for <strong className="font-bold">Vietnam Era</strong>. The name is intentional. Vietnam
                  is entering a breakthrough era in its digital economy.&quot;
                </>
              ) : (
                <>
                  &quot;VEA là viết tắt của <strong className="font-bold">Vietnam Era</strong> — Kỷ nguyên Việt Nam. Cái tên
                  này không phải ngẫu nhiên. Chúng tôi tin rằng Việt Nam đang đứng trước một kỷ nguyên bứt phá trong lịch sử
                  phát triển kinh tế số.&quot;
                </>
              )}
            </p>
          </blockquote>

          {/* 4 khối câu chuyện — hàng emoji + nội dung */}
          <div className="flex flex-col gap-7">
            {storyBlocks.map((block) => (
              <article key={tx(block.title, locale)} className="flex gap-5">
                <span className="mt-1 shrink-0 text-[28px] leading-none" aria-hidden>
                  {block.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{tx(block.title, locale)}</h3>
                  <p className="mt-2 text-[15px] leading-[1.8] text-muted">{tx(block.body, locale)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
