"use client";

import Link from "next/link";
// أضفنا Menu و X للأيقونات
import { BookOpen, Moon, Sun, Menu, X } from "lucide-react"; 
import { useTheme } from "@/providers/ThemeProvider";
import HangingLantern from "../ui/HangingLantern ";

export default function Header() {
  // استدعاء دوال القائمة من الـ Provider
  const { darkMode, toggleTheme, toggleSidebar, isSidebarOpen } = useTheme();

  return (
    <header
      className={`sticky top-0 z-50 shadow-sm backdrop-blur-md transition-colors relative  ${
        darkMode ? "bg-slate-900/95 border-b border-slate-700" : "bg-white/95 border-b border-amber-200"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-600 rounded-xl text-white shadow-lg">
            <BookOpen size={24} />
          </div>
          <h1 className="text-xl md:text-2xl font-bold font-amiri bg-clip-text text-transparent bg-gradient-to-l from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-200">
            Zad
          </h1>
        </Link>

        {/* الحاوية للأزرار (الثيم + القائمة) */}
        <div className="flex items-center gap-3">
          {/* زر تبديل الثيم */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all border ${
              darkMode
                ? "bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700"
                : "bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* زر القائمة الجانبية (Menu Toggle) */}
          <button
            onClick={toggleSidebar}
            className={`p-2.5 rounded-lg transition-all border ${
              darkMode
                ? "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
            aria-label="Toggle Menu"
          >
            {/* تغيير الأيقونة حسب حالة القائمة */}
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* <HangingLantern
          className="right-4 lg:right-12"
          style={{ animationDelay: "0s" }}/>
      <HangingLantern
          className="left-4 lg:left-12"
          style={{ animationDelay: "1.5s" }}/> */}
    </header>
  );
}