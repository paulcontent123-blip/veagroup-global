import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";
import { NewsDirectory } from "@/components/pages/news-directory";

export const metadata = createPageMetadata(
  "/tin-tuc",
  "Tin tức VEA Group",
  "Theo dõi hành trình xây dựng hệ sinh thái — ra mắt nền tảng, cột mốc quan trọng và góc nhìn từ đội ngũ VEA.",
);

export default function NewsPage() {
  return (
    <main>
      <SubHero
        eyebrow="Tin tức & Cập nhật"
        title="Mới nhất từ"
        highlight="VEA Group"
        description="Theo dõi hành trình xây dựng hệ sinh thái — ra mắt nền tảng, cột mốc quan trọng và góc nhìn từ đội ngũ VEA."
        backLabel="Quay về trang chủ"
      />
      <Section>
        <NewsDirectory />
      </Section>
    </main>
  );
}
