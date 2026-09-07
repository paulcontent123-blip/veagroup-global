import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getLocale } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEnglish = locale === "en";
  const description = isEnglish
    ? "Vietnam Era Group — a multi-industry ecosystem connecting five member companies and 25 digital platforms across Vietnam and Southeast Asia."
    : "Vietnam Era Group — Kỷ nguyên Việt Nam. Tập đoàn xây dựng hệ sinh thái kinh doanh đa ngành, kết nối 5 công ty thành viên và 25 nền tảng số tại Việt Nam và Đông Nam Á.";

  return {
    metadataBase: new URL("https://veagroup.global"),
    title: {
      default: "VEA Group | Vietnam Era Group",
      template: "%s | VEA Group",
    },
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title: "VEA Group | Vietnam Era Group",
      description,
      url: "https://veagroup.global",
      siteName: "VEA Group",
      locale: isEnglish ? "en_US" : "vi_VN",
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C8541A",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Providers initialLocale={locale}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
