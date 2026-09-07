"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { usePartnership } from "@/components/partnership/partnership-modal";
import { tx } from "@/lib/i18n/tx";
import { cn } from "@/lib/utils";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale } from "@/components/i18n/locale-provider";
import { SiteLogo } from "./site-logo";

// Khớp `.ndm-item` của demo: 1 dòng phẳng, không icon riêng cột, hover đẩy chữ
// sang phải (padding-left) thay vì đổi nền thẻ như card.
const CHILD_ITEM =
  "flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[13px] font-medium text-muted transition-[background,color,padding] duration-150 hover:bg-sand-100 hover:pl-5 hover:text-brand";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { open: openPartnership } = usePartnership();
  const [toast, setToast] = useState(false);
  const { locale, toggleLocale } = useLocale();
  const messages = getMessages(locale);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(false), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/92 backdrop-blur-xl">
      <div className="header-container-px flex h-[62px] w-full items-center justify-between">
        <SiteLogo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label={messages.nav.mainNavigation}>
          {mainNav.map((item) =>
            item.children ? (
              <div key={tx(item.label, locale)} className="group relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-md px-3.5 py-1.5 text-[13px] font-medium text-muted transition hover:bg-sand-200 hover:text-ink"
                  >
                    {tx(item.label, locale)}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                ) : (
                  <span className="inline-flex cursor-default items-center gap-1 rounded-md px-3.5 py-1.5 text-[13px] font-medium text-muted transition group-hover:bg-sand-200 group-hover:text-ink">
                    {tx(item.label, locale)}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </span>
                )}
                <div className="invisible absolute left-0 top-full z-50 w-[230px] translate-y-1 rounded-b-[10px] border border-line border-t-2 border-t-brand bg-white py-1.5 opacity-0 shadow-lift transition-[opacity,visibility,transform] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <div key={child.href + tx(child.label, locale)}>
                      {child.divider ? <div className="my-1 h-px bg-line" aria-hidden /> : null}
                      <Link
                        href={child.href}
                        className={cn(
                          CHILD_ITEM,
                          child.emphasis && "font-bold text-brand hover:text-brand",
                          child.muted && "py-2 text-xs text-muted-light",
                        )}
                      >
                        {child.emoji ? (
                          <span className="text-[15px] leading-none" aria-hidden="true">
                            {child.emoji}
                          </span>
                        ) : null}
                        {tx(child.label, locale)}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href ?? "/"}
                className="rounded-md px-3.5 py-1.5 text-[13px] font-medium text-muted transition hover:bg-sand-200 hover:text-ink"
              >
                {tx(item.label, locale)}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => {
              toggleLocale();
              setToast(true);
            }}
            aria-label={messages.nav.toggleLangTo}
            className="rounded-[5px] border border-line px-[11px] py-[5px] text-[11px] font-semibold text-muted transition hover:border-brand hover:text-brand"
          >
            {locale === "vi" ? "EN" : "VI"}
          </button>
          <Link
            href="/admin"
            title={messages.nav.admin}
            className="rounded-[5px] px-[10px] py-[5px] text-[11px] text-muted opacity-50 transition hover:bg-sand-200 hover:text-ink hover:opacity-100"
          >
            ⚙ {messages.nav.admin}
          </Link>
          <button
            type="button"
            onClick={openPartnership}
            className="rounded-md bg-brand-gradient px-5 py-[9px] text-[13px] font-bold text-white shadow-brand transition-[filter,transform] hover:-translate-y-px hover:brightness-[1.05]"
          >
            {messages.nav.cta} →
          </button>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink lg:hidden"
          aria-label={open ? messages.nav.closeMenu : messages.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white shadow-lift lg:hidden">
          <Container className="py-3">
            <nav className="grid gap-1" aria-label={messages.nav.mobileNavigation}>
              {mainNav.map((item) => (
                <div key={tx(item.label, locale)} className="border-b border-line last:border-b-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-3 text-sm font-bold text-ink hover:bg-sand-100"
                      onClick={() => setOpen(false)}
                    >
                      {tx(item.label, locale)}
                    </Link>
                  ) : (
                    <span className="block px-3 pt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-light">
                      {tx(item.label, locale)}
                    </span>
                  )}
                  {item.children ? (
                    <div className="grid gap-0.5 pb-2 pl-3">
                      {item.children.map((child) => (
                        <div key={child.href + tx(child.label, locale)}>
                          {child.divider ? <div className="my-1 h-px bg-line" aria-hidden /> : null}
                          <Link
                            href={child.href}
                            className={cn(
                              "flex items-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium text-muted hover:bg-sand-100 hover:text-ink",
                              child.emphasis && "font-bold text-brand hover:text-brand",
                              child.muted && "py-1.5 text-xs text-muted-light",
                            )}
                            onClick={() => setOpen(false)}
                          >
                            {child.emoji ? (
                              <span aria-hidden="true">{child.emoji}</span>
                            ) : null}
                            {tx(child.label, locale)}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="flex items-center gap-2 px-3 pt-2">
                <Link
                  href="/admin"
                  className="rounded-md px-1 py-2 text-xs font-semibold text-muted-light opacity-70 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  ⚙ {messages.nav.admin}
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    toggleLocale();
                    setToast(true);
                  }}
                  className="ml-auto rounded-[5px] border border-line px-[11px] py-[5px] text-[11px] font-semibold text-muted"
                >
                  {locale === "vi" ? "EN" : "VI"}
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openPartnership();
                }}
                className="rounded-md px-3 py-3 text-left text-sm font-bold text-brand hover:bg-brand/5"
              >
                {messages.nav.cta} →
              </button>
            </nav>
          </Container>
        </div>
      ) : null}
      </header>
      {toast ? (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-lg bg-ink px-5 py-2.5 text-[13px] font-medium text-white shadow-lift">
          🌐 {messages.nav.languageChanged}
        </div>
      ) : null}
    </>
  );
}
