"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { news, newsCategories } from "@/content/news";
import type { NewsArticle } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { tx } from "@/lib/i18n/tx";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function NewsDirectory() {
  const [category, setCategory] = useState("all");
  const visible = useMemo(
    () => (category === "all" ? news : news.filter((article) => article.category === category)),
    [category],
  );

  return (
    <div>
      {/* Bộ lọc — pill tối khi active (bám .chip của demo) */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc bài viết">
        <Chip active={category === "all"} onClick={() => setCategory("all")}>
          Tất cả
        </Chip>
        {newsCategories.map((item) => (
          <Chip key={item.key} active={category === item.key} onClick={() => setCategory(item.key)}>
            {item.label}
          </Chip>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "whitespace-nowrap rounded-full border-[1.5px] px-3.5 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-ink bg-ink text-white"
          : "border-line-strong bg-transparent text-muted hover:border-ink hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

function NewsCard({ article }: { article: NewsArticle }) {
  const chipColor = article.gradient.match(/#[0-9a-fA-F]{6}/g)?.[1] ?? "#0F0F0F";

  return (
    <Link href={`/tin-tuc/${article.slug}`} className="group block">
      <Card as="article" interactive className="h-full overflow-hidden rounded-2xl">
        <div className="relative h-[200px]" style={{ background: article.gradient }} aria-hidden>
          <span
            className="absolute left-3.5 top-3.5 rounded bg-white/90 px-2.5 py-0.5 text-[10px] font-bold"
            style={{ color: chipColor }}
          >
            {article.categoryLabel}
          </span>
        </div>
        <div className="p-5">
          <time dateTime={article.date} className="text-[11px] text-muted">
            {formatDate(article.date, "vi")}
          </time>
          <h3 className="mt-1.5 text-[17px] font-bold leading-[1.3] text-ink">{tx(article.title, "vi")}</h3>
          <p className="mt-2 text-[13px] leading-[1.65] text-muted">{tx(article.excerpt, "vi")}</p>
          <span className="mt-3 inline-block text-xs font-semibold text-brand">Đọc thêm →</span>
        </div>
      </Card>
    </Link>
  );
}
