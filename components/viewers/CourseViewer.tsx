"use client";
import { useState, useEffect } from "react";
import { ScrollText } from "lucide-react"; // تأكد من استيراد الأيقونات المستخدمة
import IntroSection from "@/components/sections/IntroSection";
import { useTheme } from "@/providers/ThemeProvider";
import { CourseInfo, Section } from "@/lib/types"; // استيراد الواجهات

// تعريف الخصائص التي يستقبلها المكون
interface CourseViewerProps {
  info: CourseInfo;
  content: Section[];
}

export default function CourseViewer({ info, content }: CourseViewerProps) {
  const { darkMode, isSidebarOpen, setIsSidebarOpen } = useTheme();
  const [activeSection, setActiveSection] = useState("intro");

  // استخدام البيانات القادمة من الـ props بدلاً من الثوابت
  const bookData = content;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsSidebarOpen(false);
    }
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-[#fdfbf7] text-slate-800"
      }`}
    >
      <div className="container mx-auto px-4 py-8 flex gap-8 items-start relative">
        {/* Sidebar Navigation */}
        <aside
          className={`
          fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          ${
            darkMode
              ? "bg-slate-900/95 border-l border-slate-800"
              : "bg-white/95 border-l border-amber-100"
          }
          shadow-2xl backdrop-blur-lg overflow-y-auto no-scrollbar
        `}
        >
          <div className="p-4 pt-20 lg:pt-6">
            <div
              className={`flex items-center gap-2 mb-6 px-2 ${
                darkMode ? "text-amber-500" : "text-amber-700"
              }`}
            >
              <ScrollText size={18} />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                فهرس المحتوى
              </h3>
            </div>

            <nav className="space-y-1.5">
              {bookData.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-right px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 group
            ${
              activeSection === section.id
                ? darkMode
                  ? "bg-amber-900/20 text-amber-400 font-bold border-r-4 border-amber-500"
                  : "bg-amber-50 text-amber-900 font-bold border-r-4 border-amber-600 shadow-sm"
                : darkMode
                  ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  : "text-slate-600 hover:bg-white hover:text-amber-800 hover:shadow-sm"
            }
          `}
                >
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold
            ${
              activeSection === section.id
                ? darkMode
                  ? "bg-amber-500 text-slate-900"
                  : "bg-amber-600 text-white"
                : darkMode
                  ? "bg-slate-800 text-slate-500"
                  : "bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700"
            }
          `}
                  >
                    {section.id === "intro" || section.id === "1"
                      ? "م"
                      : section.id.replace("m", "").replace("h", "")}
                  </span>
                  <span className="truncate font-amiri text-base">
                    {section.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30  backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-16 lg:p-15">
          <div className="space-y-8">
            {/* هنا نمرر معلومات الكورس الحالية */}
            <IntroSection {...info} />

            {bookData.map((section, index) => (
              <section
                id={section.id}
                key={section.id}
                className={`scroll-mt-24 p-5 md:p-8 rounded-2xl transition-all duration-300
                  ${
                    darkMode
                      ? "bg-slate-800/50 hover:bg-slate-800 border border-slate-700"
                      : "bg-white hover:shadow-lg border border-transparent shadow-sm"
                  }
                `}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold mt-1
                    ${
                      darkMode
                        ? "bg-slate-700 text-amber-500"
                        : "bg-amber-100 text-amber-800"
                    }
                  `}
                  >
                    {index === 0 ? "م" : index}
                  </span>
                  <h3
                    className={`text-lg md:text-xl lg:text-2xl font-bold ${
                      darkMode ? "text-amber-400" : "text-amber-800"
                    }`}
                  >
                    {section.title}
                  </h3>
                </div>

                <div
                  className={`prose prose-lg max-w-none leading-loose whitespace-pre-line text-sm md:text-base lg:text-lg
                  ${darkMode ? "prose-invert text-slate-300" : "text-slate-700"}
                `}
                >
                  {section.content}
                </div>

                {index < bookData.length - 1 && (
                  <div
                    className={`h-px w-1/3 mx-auto mt-12 ${
                      darkMode ? "bg-slate-700" : "bg-amber-100"
                    }`}
                  />
                )}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
