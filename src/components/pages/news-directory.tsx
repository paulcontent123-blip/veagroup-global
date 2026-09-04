"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { news, newsCategories } from "@/content/news";
import type { NewsArticle } from "@/lib/types";
import { formatDate } from "@/lib/format";
import { tx } from "@/lib/i18n/tx";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function NewsDirectory() {
  const [category, setCategory] = useState("all");
  const visibleNews = useMemo(
    () => (category === "all" ? news : news.filter((article) => article.category === category)),
    [category],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Lọc bài viết">
        <FilterButton active={category === "all"} onClick={() => setCategory("all")}>
          Tất cả
        </FilterButton>
        {newsCategories.map((item) => (
          <FilterButton key={item.key} active={category === item.key} onClick={() => setCategory(item.key)}>
            {item.label}
          </FilterButton>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleNews.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Card as="article" interactive className="overflow-hidden">
      <div className="h-48" style={{ background: article.gradient }} aria-hidden="true" />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="brand">{article.categoryLabel}</Badge>
          <time dateTime={article.date} className="inline-flex items-center gap-1 text-xs text-muted">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(article.date, "vi")}
          </time>
        </div>
        <h3 className="mt-4 text-lg font-black leading-snug text-ink">{tx(article.title, "vi")}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{tx(article.excerpt, "vi")}</p>
        <Link href={`/tin-tuc/${article.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand hover:text-brand-700">
          Đọc thêm <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-md border px-3.5 py-2 text-sm font-bold transition-colors",
        active ? "border-brand bg-brand text-white" : "border-line bg-white text-muted hover:border-brand/40 hover:text-brand",
      )}
    >
      {children}
    </button>
  );
}
