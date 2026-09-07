import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://veagroup.global"),
  title: {
    default: "VEA Group | Vietnam Era Group",
    template: "%s | VEA Group",
  },
  description:
    "Vietnam Era Group — Kỷ nguyên Việt Nam. Tập đoàn xây dựng hệ sinh thái kinh doanh đa ngành, kết nối 5 công ty thành viên và 14 nền tảng số tại Việt Nam và Đông Nam Á.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VEA Group | Vietnam Era Group",
    description:
      "Vietnam Era Group — Kỷ nguyên Việt Nam. Hệ sinh thái 5 công ty thành viên và 14 nền tảng số tại Việt Nam và Đông Nam Á.",
    url: "https://veagroup.global",
    siteName: "VEA Group",
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C8541A",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
