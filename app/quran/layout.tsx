import { getAllSurahs } from "@/lib/services/quranApi";
import QuranLayoutContent from "./QuranLayoutContent";

export default async function QuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. جلب قائمة السور من الـ API (يتم هذا على السيرفر)
  const surahs = await getAllSurahs();

  return (
    // 2. تمرير البيانات للمكون العميل الذي يدير التخطيط والـ Sidebar
    <QuranLayoutContent surahs={surahs}>{children}</QuranLayoutContent>
  );
}
