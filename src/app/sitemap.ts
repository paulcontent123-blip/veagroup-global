import type { MetadataRoute } from "next";
import { jobs } from "@/content/jobs";
import { news } from "@/content/news";
import { site } from "@/content/site";

const publicPaths = [
  "/",
  "/ve-vea",
  "/ve-vea/cau-chuyen",
  "/ve-vea/cong-ty",
  "/ve-vea/mo-hinh",
  "/ve-vea/tam-nhin",
  "/he-sinh-thai",
  "/tin-tuc",
  "/thanh-tuu",
  "/tuyen-dung",
  "/hop-tac",
  "/doi-tac",
  "/lien-he",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url.replace(/\/$/, "");
  const staticEntries = publicPaths.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified: "2026-09-04",
    changeFrequency: index === 0 ? "weekly" as const : "monthly" as const,
    priority: index === 0 ? 1 : 0.7,
  }));
  const newsEntries = news.map((article) => ({
    url: `${baseUrl}/tin-tuc/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const jobEntries = jobs.map((job) => ({
    url: `${baseUrl}/tuyen-dung/${job.slug}`,
    lastModified: "2026-09-04",
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...newsEntries, ...jobEntries];
}
