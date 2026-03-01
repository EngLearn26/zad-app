"use client";

import { ScrollText, ClipboardList, BookOpen } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import { Section } from "@/lib/types/types";

interface ExamSidebarProps {
  sections: Section[];
  bookSlug: string;
  currentHadithId: string;
  examSlugs: Record<string, string>;
}

export default function ExamSidebar({
  sections,
  bookSlug,
  currentHadithId,
  examSlugs,
}: ExamSidebarProps) {
  const { darkMode, closeSidebar } = useTheme();

  return (
    <div className="p-4">
      <div
        className={`flex items-center gap-2 mb-6 px-2 ${darkMode ? "text-amber-500" : "text-amber-700"}`}
      >
        <ScrollText size={18} />
        <h3 className="font-bold text-sm uppercase tracking-wider">
          فهرس الأحاديث
        </h3>
      </div>

      <nav className="space-y-1.5">
        {sections.map((section) => {
          if (section.id === "0" || section.type === "intro") return null;

          const examSlug = examSlugs[section.id];
          const isCurrent = section.id === currentHadithId;

          return (
            <div key={section.id} className="space-y-0.5">
              <Link
                href={`/hadiths/${bookSlug}#${section.id}`}
                onClick={closeSidebar}
                className={`w-full text-right px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 group
                  ${
                    isCurrent
                      ? darkMode
                        ? "bg-amber-900/20 text-amber-400 font-bold border-r-4 border-amber-500"
                        : "bg-amber-50 text-amber-900 font-bold border-r-4 border-amber-600 shadow-sm"
                      : darkMode
                        ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                        : "text-slate-600 hover:bg-white hover:text-amber-800 hover:shadow-sm"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="opacity-60" />
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold
                      ${
                        isCurrent
                          ? darkMode
                            ? "bg-amber-500 text-slate-900"
                            : "bg-amber-600 text-white"
                          : darkMode
                            ? "bg-slate-800 text-slate-500"
                            : "bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700"
                      }`}
                  >
                    {section.id.replace(/h|m/, "")}
                  </span>
                </div>
                <span className="truncate font-amiri text-base">
                  {section.title}
                </span>
              </Link>

              {examSlug && (
                <Link
                  href={`/exam/${examSlug}`}
                  onClick={closeSidebar}
                  className={`flex items-center gap-2 px-8 py-2 rounded-lg text-xs transition-all duration-200
                    ${
                      isCurrent
                        ? darkMode
                          ? "bg-teal-900/30 text-teal-400 font-bold"
                          : "bg-teal-50 text-teal-700 font-bold"
                        : darkMode
                          ? "text-slate-500 hover:bg-slate-800 hover:text-teal-400"
                          : "text-slate-400 hover:bg-teal-50 hover:text-teal-600"
                    }`}
                >
                  <ClipboardList size={13} />
                  <span className="font-amiri">اختبار</span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
