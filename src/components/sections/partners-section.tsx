"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brandPartners } from "@/content/partners";
import { tx } from "@/lib/i18n/tx";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/i18n/locale-provider";

const CHIP =
  "flex items-center gap-2.5 rounded-[10px] border bg-white px-5 py-3.5 shadow-[0_2px_10px_rgba(15,15,15,0.05)] transition-colors hover:border-brand/30";

export function PartnersSection() {
  const { locale } = useLocale();

  return (
    <section id="partners" className="border-t border-line bg-sand-200 py-[72px]">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">{locale === "en" ? "Partners & Brands" : "Đối tác & Nhãn hàng"}</span>
            <h2 className="mt-3 font-black leading-[1.15] tracking-[-0.3px] text-ink text-[24px] sm:text-[28px] lg:text-[32px]">
              {locale === "en" ? "Trusted by partners at " : "Tin tưởng hợp tác với "}
              <span className="text-gradient italic">VEA Group</span>
            </h2>
          </div>
          <Button href="/hop-tac" variant="outline" size="sm">
            {locale === "en" ? "View all partners" : "Xem tất cả đối tác"} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {brandPartners.slice(0, 3).map((partner) => (
            <Link key={partner.name} href="/hop-tac" className={cn(CHIP, "border-line")}>
              <span className="text-2xl leading-none" aria-hidden>
                {partner.emoji}
              </span>
              <span>
                <span className="block text-[13px] font-bold text-ink">{partner.name}</span>
                <span className="mt-0.5 block text-[10px] text-muted">{tx(partner.type, locale)}</span>
              </span>
            </Link>
          ))}
          <Link href="/hop-tac" className={cn(CHIP, "border-dashed border-brand/30 bg-brand/[0.04]")}>
            <span className="text-xl font-black leading-none text-brand" aria-hidden>
              +200
            </span>
            <span>
              <span className="block text-[13px] font-bold text-brand">{locale === "en" ? "View all" : "Xem tất cả"}</span>
              <span className="mt-0.5 block text-[10px] text-muted">{locale === "en" ? "Brands served" : "Brands đã hợp tác"}</span>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
