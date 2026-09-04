import { AboutSection } from "@/components/sections/about-section";
import { CompanySection } from "@/components/sections/company-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsCareersSection } from "@/components/sections/news-careers-section";
import { PartnersSection } from "@/components/sections/partners-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CompanySection />
      <EcosystemSection />
      <PartnersSection />
      <NewsCareersSection />
      <ContactSection />
    </main>
  );
}
