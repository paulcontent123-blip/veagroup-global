"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav } from "@/content/navigation";
import { site } from "@/content/site";
import { tx } from "@/lib/i18n/tx";
import { useLocale } from "@/components/i18n/locale-provider";
import { Container } from "@/components/ui/container";
import { SiteLogo } from "./site-logo";

/** Glyph mạng xã hội (bám demo: 𝕏 / in / f / ▶ / ✉). */
const SOCIAL_GLYPH: Record<string, string> = {
  x: "𝕏",
  linkedin: "in",
  facebook: "f",
  youtube: "▶",
};

const SOCIAL_CLS =
  "grid h-8 w-8 place-items-center rounded-[7px] border border-white/10 text-[13px] text-white/40 transition-colors hover:border-brand/25 hover:bg-brand/10 hover:text-brand-400";

export function SiteFooter() {
  const pathname = usePathname();
  const { locale } = useLocale();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-ink-800 text-white">
      {/* .ft-vn-bar — sọc cờ 2px */}
      <div aria-hidden className="h-0.5 bg-flag-strip" />

      <Container className="pb-7 pt-[60px]">
        {/* .ft-top — 280px | 1fr */}
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-[60px]">
          <div>
            <SiteLogo inverted />
            <p className="mt-4 text-[12.5px] leading-[1.75] text-white/45">
              {tx(site.description, locale)}
            </p>
            <div className="mt-4 flex gap-1.5">
              {site.socials.map((social) => (
                <a key={social.key} href={social.href} aria-label={social.label} className={SOCIAL_CLS}>
                  {SOCIAL_GLYPH[social.key] ?? social.label[0]}
                </a>
              ))}
              <a href={`mailto:${site.contact.email}`} aria-label="Email" className={SOCIAL_CLS}>
                ✉
              </a>
            </div>
          </div>

          {/* .ft-links — 5 cột */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-[22px]">
            {footerNav.map((group) => (
              <div key={tx(group.title, locale)}>
                <h3 className="text-[10.5px] font-bold uppercase tracking-[1px] text-white/35">{tx(group.title, locale)}</h3>
                <ul className="mt-3.5 flex flex-col gap-[7px]">
                  {group.links.map((link) => (
                    <li key={link.href + tx(link.label, locale)}>
                      <Link href={link.href} className="text-xs text-white/35 transition-colors hover:text-white/80">
                        {tx(link.label, locale)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* .ft-div */}
        <div aria-hidden className="mb-5 mt-11 h-px bg-white/[0.06]" />

        {/* .ft-bot */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11.5px] text-white/30">
          <span>
            © 2026 VEA Group · veagroup.global · Vietnam Era Group · {locale === "en" ? "Registered in Vietnam" : "Đăng ký kinh doanh tại Việt Nam"} 🇻🇳
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {site.legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white/70">
                {tx(item.label, locale)}
              </Link>
            ))}
            <Link href="/sitemap.xml" className="transition-colors hover:text-white/70">
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
