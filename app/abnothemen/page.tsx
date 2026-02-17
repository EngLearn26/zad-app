"use client";
import { useState, useEffect } from "react";
import {
  BookOpen,
  ScrollText,
  Bookmark,
  CheckCircle2, // 1. أيقونة الدائرة المكتملة
  Circle, // 1. أيقونة الدائرة الفارغة
} from "lucide-react";

import { useTheme } from "@/providers/ThemeProvider";
import { allCourses } from "@/lib/data";
import IntroSection from "@/components/ui/IntroSection";

export default function SharhAlArbaeen() {
  
  const currentCourse = allCourses["abnothemen"];
  const info = currentCourse?.info || { title: "", desc: "" };
  const bookContent = currentCourse?.content || [];

  const { darkMode, isSidebarOpen, setIsSidebarOpen } = useTheme();
  const [activeSection, setActiveSection] = useState("intro");

  const [readHadiths, setReadHadiths] = useState<string[]>([]);

  useEffect(() => {
    const savedReads = localStorage.getItem("readHadiths_arbaeen");
    if (savedReads) {
      setReadHadiths(JSON.parse(savedReads));
    }
  }, []);

  const toggleRead = (id: string) => {
    let newReads;
    if (readHadiths.includes(id)) {
      newReads = readHadiths.filter((item) => item !== id);
    } else {
      newReads = [...readHadiths, id];
    }
    setReadHadiths(newReads);
    localStorage.setItem("readHadiths_arbaeen", JSON.stringify(newReads));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("intro");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
      setIsSidebarOpen(false);
    }
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-amber-200 selection:text-amber-900 ${
        darkMode ? "bg-slate-900 text-slate-100" : "bg-[#FFF7EA] text-slate-800"
      }`}
    >
      <div className="container mx-auto px-4 py-8 flex gap-8 items-start relative">
        {/* القائمة الجانبية */}
        <aside
          className={`
          fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out pt-24 lg:pt-24
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          ${
            darkMode
              ? "bg-slate-900/95 border-l border-slate-800"
              : "bg-[#FFFDF6]/95 border-l border-amber-100"
          }
          shadow-2xl backdrop-blur-lg overflow-y-auto no-scrollbar
        `}
        >
          <div className="p-4">
            <div
              className={`flex items-center gap-2 mb-6 px-2 ${
                darkMode ? "text-amber-500" : "text-amber-700"
              }`}
            >
              <ScrollText size={18} />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                فهرس الأحاديث
              </h3>
            </div>

            <nav className="space-y-1.5">
              {bookContent.map((section) => {
                const isRead = readHadiths.includes(section.id);
                return (
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
                    <div className="relative">
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
                        {section.id === "intro"
                          ? "م"
                          : section.id.replace("h", "")}
                      </span>
                      {isRead && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                      )}
                    </div>

                    <span
                      className={`truncate font-amiri text-base ${
                        isRead
                          ? "opacity-50 line-through decoration-amber-500/50"
                          : ""
                      }`}
                    >
                      {section.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* المحتوى الرئيسي */}
        <main className="flex-1 min-w-0 pb-20 lg:p-12">
          <div className="space-y-12">
            <IntroSection {...info} />

            {bookContent.map((item, index) => {
              if (item.id === "0") return null;
              const isRead = readHadiths.includes(item.id);

              return (
                <article
                  id={item.id}
                  key={item.id}
                  className={`scroll-mt-32 rounded-2xl overflow-hidden transition-all duration-500
                  ${
                    darkMode
                      ? "bg-slate-800/40 border border-slate-700 hover:border-slate-600"
                      : "bg-[#FFFDF6] border border-amber-100 shadow-sm hover:shadow-md"
                  }
                  ${isRead ? "opacity-75 grayscale-[0.5]" : ""} 
                `}
                >
                  <div
                    className={`p-6 md:p-8 border-b flex flex-wrap items-center justify-between gap-4 
                  ${
                    darkMode
                      ? "bg-slate-800/80 border-slate-700"
                      : "bg-gradient-to-r from-amber-50/50 to-white border-amber-100"
                  }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold
                          ${
                            darkMode
                              ? "bg-amber-900/30 text-amber-400"
                              : "bg-amber-100 text-amber-800"
                          }
                        `}
                        >
                          {item.type === "intro"
                            ? "مقدمة"
                            : `الحديث رقم ${index}`}
                        </span>
                      </div>
                      <h2
                        className={`text-2xl md:text-3xl lg:text-4xl font-bold font-amiri leading-normal
                        ${darkMode ? "text-slate-100" : "text-slate-800"}
                      `}
                      >
                        {item.title}
                      </h2>
                    </div>

                    {/* 2. زر التعليم كمقروء الجديد */}
                    <button
                      onClick={() => toggleRead(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border
                      ${
                        isRead
                          ? "bg-green-50 border-green-200 text-green-700 shadow-sm"
                          : darkMode
                            ? "bg-slate-700 border-slate-600 text-slate-400 hover:bg-slate-600 hover:text-white"
                            : "bg-white border-slate-200 text-slate-500 hover:border-green-400 hover:text-green-600 hover:shadow-sm"
                      }
                    `}
                      title={isRead ? "إلغاء القراءة" : "تحديد كمقروء"}
                    >
                      {isRead ? (
                        <>
                          <CheckCircle2
                            size={20}
                            className="fill-green-600 text-white"
                          />
                          <span className="font-bold text-sm">مكتمل</span>
                        </>
                      ) : (
                        <>
                          <Circle size={20} strokeWidth={1.5} />
                          <span className="font-medium text-sm">
                            تحديد كمقروء
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-6 md:p-8 space-y-10">
                    {item.type === "intro" ? (
                      <div
                        className={`prose prose-lg max-w-none leading-loose font-amiri text-lg md:text-xl
                        ${darkMode ? "text-slate-300" : "text-slate-700"}
                      `}
                      >
                        {item.content.split("\n").map((paragraph, idx) => (
                          <p key={idx} className="mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <>
                        {/* 3. صندوق الحديث (المتن) المحسن */}
                        <section className="relative">
                          <div
                            className={`relative hadith-text p-2 md:p-8 rounded-xl text-center overflow-hidden transition-colors
                            ${
                              darkMode
                                ? "bg-slate-900/50 border border-slate-700"
                                : "bg-amber-50/60 border-2 border-amber-200/70 shadow-inner"
                            }`}
                          >
                            <p
                              className={`text-[18px] md:text-2xl font-amiri leading-loose font-bold ${
                                darkMode ? "text-amber-200" : "text-amber-900"
                              }`}
                            >
                              {item.matn}
                            </p>
                          </div>
                        </section>

                        <section>
                          <h3
                            className={`flex items-center gap-2 text-xl font-bold mb-4 font-amiri ${
                              darkMode ? "text-green-400" : "text-green-700"
                            }`}
                          >
                            <Bookmark className="w-5 h-5" />
                            الفوائد المستنبطة
                          </h3>
                          <ul className="space-y-3 pr-2">
                            {item.fawaid.map((fayda, idx) => (
                              <li
                                key={idx}
                                className={`flex items-start gap-3 text-base md:text-lg leading-relaxed ${
                                  darkMode ? "text-slate-300" : "text-slate-700"
                                }`}
                              >
                                <span
                                  className={`mt-2 w-2 h-2 rounded-full shrink-0 ${
                                    darkMode ? "bg-green-500" : "bg-green-600"
                                  }`}
                                />
                                <span>{fayda}</span>
                              </li>
                            ))}
                          </ul>
                        </section>

                        <section>
                          <h3
                            className={`flex items-center gap-2 text-xl font-bold mb-4 font-amiri ${
                              darkMode ? "text-blue-400" : "text-blue-800"
                            }`}
                          >
                            <BookOpen className="w-5 h-5" />
                            شرح الشيخ ابن عثيمين
                          </h3>
                          <div
                            className={`prose prose-lg max-w-none text-base md:text-lg leading-loose text-justify ${
                              darkMode ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            {item.sharh.split("\n").map((line, idx) => (
                              <p key={idx} className="mb-4">
                                {line}
                              </p>
                            ))}
                          </div>
                        </section>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
