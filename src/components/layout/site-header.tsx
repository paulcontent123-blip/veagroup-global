"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/content/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { tx } from "@/lib/i18n/tx";
import { SiteLogo } from "./site-logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/92 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <SiteLogo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) =>
            item.children ? (
              <div key={tx(item.label, "vi")} className="group relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[13px] font-semibold text-muted transition hover:bg-sand-200 hover:text-ink"
                  >
                    {tx(item.label, "vi")}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[13px] font-semibold text-muted">
                    {tx(item.label, "vi")}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </span>
                )}
                <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 rounded-lg border border-line bg-white p-2 opacity-0 shadow-lift transition-[opacity,visibility,transform] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-start gap-3 rounded-md px-3 py-3 transition hover:bg-sand-100"
                    >
                      {child.emoji ? <span className="mt-0.5 text-base" aria-hidden="true">{child.emoji}</span> : null}
                      <span>
                        <span className="block text-sm font-bold text-ink">{tx(child.label, "vi")}</span>
                        {child.description ? <span className="mt-1 block text-xs leading-5 text-muted">{tx(child.description, "vi")}</span> : null}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href ?? "/"}
                className="rounded-md px-3 py-2 text-[13px] font-semibold text-muted transition hover:bg-sand-200 hover:text-ink"
              >
                {tx(item.label, "vi")}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/admin" variant="ghost" size="sm">
            Admin demo
          </Button>
          <Button href="/#contact" size="sm">
            Hợp tác
          </Button>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink lg:hidden"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-line bg-white shadow-lift lg:hidden">
          <Container className="py-3">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {mainNav.map((item) => (
                <div key={tx(item.label, "vi")} className="border-b border-line last:border-b-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-3 text-sm font-bold text-ink hover:bg-sand-100"
                      onClick={() => setOpen(false)}
                    >
                      {tx(item.label, "vi")}
                    </Link>
                  ) : (
                    <span className="block px-3 pt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-light">
                      {tx(item.label, "vi")}
                    </span>
                  )}
                  {item.children ? (
                    <div className="grid gap-1 pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-md px-3 py-2.5 text-sm font-semibold text-muted hover:bg-sand-100 hover:text-ink"
                          onClick={() => setOpen(false)}
                        >
                          {child.emoji ? <span className="mr-2" aria-hidden="true">{child.emoji}</span> : null}
                          {tx(child.label, "vi")}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <Link
                href="/admin"
                className="rounded-md px-3 py-3 text-sm font-semibold text-muted hover:bg-sand-200 hover:text-ink"
                onClick={() => setOpen(false)}
              >
                Admin demo
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
