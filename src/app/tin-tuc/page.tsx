import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";
import { NewsDirectory } from "@/components/pages/news-directory";
import { getLocale } from "@/lib/i18n/locale";

export const metadata = createPageMetadata(
  "/tin-tuc",
  "Tin tức VEA Group",
  "Theo dõi hành trình xây dựng hệ sinh thái — ra mắt nền tảng, cột mốc quan trọng và góc nhìn từ đội ngũ VEA.",
);

export default async function NewsPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={locale === "en" ? "News & Updates" : "Tin tức & Cập nhật"}
        title={locale === "en" ? "Latest from" : "Mới nhất từ"}
        highlight="VEA Group"
        description={
          locale === "en"
            ? "Follow the ecosystem journey — platform launches, important milestones and perspectives from the VEA team."
            : "Theo dõi hành trình xây dựng hệ sinh thái — ra mắt nền tảng, cột mốc quan trọng và góc nhìn từ đội ngũ VEA."
        }
        backLabel={locale === "en" ? "Back to home" : "Quay về trang chủ"}
      />
      <Section>
        <NewsDirectory />
      </Section>
    </main>
  );
}
