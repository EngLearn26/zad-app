"use client";
import { useEffect } from "react";
import QuranSidebar from "@/components/quran/QuranSidebar";
import { Chapter } from "@/lib/services/quranApi";
import { useTheme } from "@/providers/ThemeProvider";

export default function QuranLayoutContent({
  surahs,
  children,
}: {
  surahs: Chapter[];
  children: React.ReactNode;
}) {
  // استدعاء دالة تغيير حالة القائمة من الـ Provider
  const { setIsSidebarOpen } = useTheme();

  // هذا التأثير يعمل مرة واحدة عند دخول الصفحة ليقوم بفتح القائمة تلقائياً
  useEffect(() => {
    setIsSidebarOpen(true);
  }, [setIsSidebarOpen]);

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar */}
      <QuranSidebar surahs={surahs} />

      {/* Main Content */}
      <div className="flex-1 w-full transition-all duration-300">
        {/* تم حذف الزر العائم (الأصفر) من هنا بناءً على طلبك */}

        {children}
      </div>
    </div>
  );
}
