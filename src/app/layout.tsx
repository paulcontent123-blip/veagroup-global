import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "./providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { IntroPreloader } from "@/components/layout/intro-preloader";
import { getLocale } from "@/lib/i18n/locale";

// Điền 2 biến này vào .env.local là tự bật, không cần sửa code (xem .env.example).
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

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
    verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
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
      {/*
        suppressHydrationWarning: script đồng bộ của <IntroPreloader /> khoá scroll bằng
        cách set `body.style.overflow = "hidden"` TRƯỚC khi React hydrate (xem comment
        trong intro-preloader.tsx) — cùng lý do phải thêm suppressHydrationWarning ở đây,
        chỉ khác node bị mutate lần này là <body> thay vì #vea-intro.
      */}
      <body className="font-sans" suppressHydrationWarning>
        <IntroPreloader />
        <Providers initialLocale={locale}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
        {GA_MEASUREMENT_ID ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> : null}
      </body>
    </html>
  );
}
