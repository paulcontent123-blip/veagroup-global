import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { news, getArticle } from "@/content/news";
import { formatDate } from "@/lib/format";
import { tx } from "@/lib/i18n/tx";
import { getLocale } from "@/lib/i18n/locale";
import { createPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const locale = await getLocale();
  return createPageMetadata(`/tin-tuc/${article.slug}`, tx(article.title, locale), tx(article.excerpt, locale));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={article.categoryLabel + " · " + formatDate(article.date, locale)}
        title={tx(article.title, locale)}
        description={tx(article.excerpt, locale)}
        backHref="/tin-tuc"
        backLabel={locale === "en" ? "Back to newsroom" : "Về newsroom"}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="h-48 rounded-lg" style={{ background: article.gradient }} aria-hidden="true" />
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted"><CalendarDays className="h-4 w-4 text-brand" />{formatDate(article.date, locale)}</div>
            <p className="mt-2 text-sm font-bold text-brand">{article.categoryLabel}</p>
          </div>
          <article className="max-w-2xl">
            <div className="grid gap-6 text-base leading-8 text-muted">
              {article.body.map((paragraph) => <p key={tx(paragraph, locale)}>{tx(paragraph, locale)}</p>)}
            </div>
            <Button href="/tin-tuc" variant="secondary" className="mt-10">
              <ArrowLeft className="h-4 w-4" />{locale === "en" ? "Back to all news" : "Về danh sách tin"}
            </Button>
          </article>
        </div>
      </Section>
    </main>
  );
}
