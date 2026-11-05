import { caseStudies } from "@/lib/case-studies";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...caseStudies.map(study => ({ url: `https://eveliogonzalez.com/projects/${study.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    {
      url: "https://eveliogonzalez.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
