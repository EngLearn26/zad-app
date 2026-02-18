// app/hadiths/[slug]/page.tsx

import { allHadithBooks } from "@/lib/data";
import { notFound } from "next/navigation";
import HadithViewer from "@/components/viewers/HadithViewer";

// إنشاء الصفحات بشكل ثابت لزيادة السرعة (SSG)
export async function generateStaticParams() {
  return Object.keys(allHadithBooks).map((slug) => ({
    slug: slug,
  }));
}

// دالة الصفحة الرئيسية
export default async function HadithPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. انتظار البارامترات (ضروري في Next.js 15)
  const { slug } = await params;

  // 2. البحث عن البيانات
  const courseData = allHadithBooks[slug];

  // 3. إذا لم يوجد كتاب بهذا الاسم، اعرض صفحة 404
  if (!courseData) {
    return notFound();
  }

  // 4. تخصيص عنوان الشرح حسب الكتاب (اختياري)
  // يمكنك إضافة منطق هنا لتغيير العنوان بناءً على الكتاب
  let sharhTitle = "الشرح والتعليق";
  if (slug === "arbaeen") {
    sharhTitle = "شرح الشيخ ابن عثيمين";
  }

  // 5. عرض المكون
  return (
    <HadithViewer
      data={courseData}
      storageKey={`hadith_progress_${slug}`} // مفتاح حفظ ديناميكي
      sharhLabel={sharhTitle}
    />
  );
}
