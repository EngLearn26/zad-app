import { MetadataRoute } from "next";
import { sectionsData } from "@/lib/contentData"; // استيراد بيانات الكتب والبودكاست

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zad-app.vercel.app";

  // 1. الروابط الثابتة في الموقع
  const staticRoutes = ["", "/plan", "/feedback", "/quran"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const, // نخبر جوجل أن هذه الصفحات تتحدث يومياً
    priority: route === "" ? 1 : 0.8, // الصفحة الرئيسية لها الأولوية القصوى (1)
  }));

  // 2. الروابط الديناميكية (نجلبها من البيانات مباشرة)
  const dynamicRoutes = sectionsData.flatMap((section) =>
    section.items.map((item) => ({
      url: `${baseUrl}${item.link}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const, // محتوى الكتب لا يتغير كثيراً
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...dynamicRoutes];
}