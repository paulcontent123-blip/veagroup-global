import { createPageMetadata } from "@/lib/seo";
import { ContactSection } from "@/components/sections/contact-section";
import { SubHero } from "@/components/layout/sub-hero";
import { getLocale } from "@/lib/i18n/locale";

export const metadata = createPageMetadata(
  "/lien-he",
  "Liên hệ VEA Group",
  "Chúng tôi tìm kiếm đối tác chiến lược, nhà đầu tư và chuyên gia muốn tham gia vào hành trình kiến tạo hệ sinh thái số hàng đầu Việt Nam.",
);

export default async function ContactPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={locale === "en" ? "Partner with VEA Group" : "Hợp tác với VEA Group"}
        title={locale === "en" ? "Build the" : "Cùng xây dựng"}
        highlight={locale === "en" ? "Vietnam Era" : "kỷ nguyên Việt Nam"}
        description={
          locale === "en"
            ? "We are looking for strategic partners, investors and specialists who want to help build Vietnam's leading digital ecosystem."
            : "Chúng tôi tìm kiếm đối tác chiến lược, nhà đầu tư và chuyên gia muốn tham gia vào hành trình kiến tạo hệ sinh thái số hàng đầu Việt Nam."
        }
        backLabel={locale === "en" ? "Back to home" : "Quay về trang chủ"}
      />
      <ContactSection />
    </main>
  );
}
