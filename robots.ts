import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // السماح لجميع محركات البحث بالدخول
      allow: "/", // السماح بفهرسة جميع صفحات الموقع
    },
    // إخبار جوجل بمكان خريطة الموقع
    sitemap: "https://zad-app.vercel.app/sitemap.xml", 
  };
}