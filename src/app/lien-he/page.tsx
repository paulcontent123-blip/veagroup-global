import { createPageMetadata } from "@/lib/seo";
import { ContactSection } from "@/components/sections/contact-section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/lien-he",
  "Liên hệ VEA Group",
  "Chúng tôi tìm kiếm đối tác chiến lược, nhà đầu tư và chuyên gia muốn tham gia vào hành trình kiến tạo hệ sinh thái số hàng đầu Việt Nam.",
);

export default function ContactPage() {
  return (
    <main>
      <SubHero
        eyebrow="Hợp tác với VEA Group"
        title="Cùng xây dựng"
        highlight="kỷ nguyên Việt Nam"
        description="Chúng tôi tìm kiếm đối tác chiến lược, nhà đầu tư và chuyên gia muốn tham gia vào hành trình kiến tạo hệ sinh thái số hàng đầu Việt Nam."
        backLabel="Quay về trang chủ"
      />
      <ContactSection />
    </main>
  );
}
