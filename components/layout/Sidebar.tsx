"use client";

import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import { Home, ScrollText, BookOpen } from "lucide-react";

export default function Sidebar() {
  const { darkMode, isSidebarOpen, closeSidebar, sidebarContent } = useTheme();

  return (
    <>
      {/* الخلفية المعتمة عند فتح القائمة في الموبايل */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 backdrop-blur-sm transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* الشريط الجانبي نفسه */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-80 z-40 transform transition-transform duration-300 ease-in-out pt-24 pb-8 px-4
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          ${darkMode ? "bg-slate-900/95 border-l border-slate-800" : "bg-white/95 border-l border-amber-100"}
          shadow-2xl backdrop-blur-lg overflow-y-auto no-scrollbar
        `}
      >
        {/* إذا كان هناك محتوى مخصص (مثل الفهرس) نعرضه، وإلا نعرض القائمة الرئيسية */}
        {sidebarContent ? (
          sidebarContent
        ) : (
          <div className="space-y-4">
             <div className={`flex items-center gap-2 mb-6 px-2 ${darkMode ? "text-amber-500" : "text-amber-700"}`}>
               <h3 className="font-bold text-sm uppercase tracking-wider">القائمة الرئيسية</h3>
             </div>
            
            <Link
              href="/"
              onClick={closeSidebar}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all ${
                darkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-amber-50"
              }`}
            >
              <Home size={20} />
              الرئيسية
            </Link>

            <Link
              href="/abnothemen"
              onClick={closeSidebar}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all ${
                darkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-amber-50"
              }`}
            >
              <ScrollText size={20} />
              شرح الأربعين النووية
            </Link>
            
             <Link
              href="/plan"
              onClick={closeSidebar}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all ${
                darkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-amber-50"
              }`}
            >
              <BookOpen size={20} />
              خطة رمضان
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}