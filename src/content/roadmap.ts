import type { RoadmapPhase } from "@/lib/types";

export const roadmap: RoadmapPhase[] = [
  {
    period: "T1–2 · 2026",
    title: { vi: "Foundation", en: "Foundation" },
    items: [
      { vi: "Deploy 4 site civic tech", en: "Deploy 4 civic-tech sites" },
      { vi: "Monorepo + CI/CD", en: "Monorepo + CI/CD" },
      { vi: "VEA Law chuẩn bị", en: "Prepare VEA Law" },
    ],
    active: true,
  },
  {
    period: "T3–4",
    title: { vi: "Scale", en: "Scale" },
    items: [
      { vi: "Deploy 4 site tiếp", en: "Deploy 4 more sites" },
      { vi: "VEA Media campaigns", en: "VEA Media campaigns" },
      { vi: "VEA Retail pilot", en: "VEA Retail pilot" },
    ],
  },
  {
    period: "T5–9",
    title: { vi: "Ecosystem", en: "Ecosystem" },
    items: [
      { vi: "14 sites đều live", en: "All 14 sites live" },
      { vi: "Cross-sell engine on", en: "Cross-sell engine on" },
      { vi: "VEA Academy beta", en: "VEA Academy beta" },
    ],
  },
  {
    period: "2027+",
    title: { vi: "SEA Era", en: "SEA Era" },
    items: [
      { vi: "Scale sang ĐNA", en: "Scale into Southeast Asia" },
      { vi: "Academy offline campus", en: "Academy offline campus" },
      { vi: "Series A raise", en: "Series A raise" },
    ],
  },
];
