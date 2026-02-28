"use client";

import { useState, useEffect } from "react";
import { ScrollText, ChevronDown, ChevronUp } from "lucide-react";
import ReactMarkdown from "react-markdown";
import IntroSection from "@/components/sections/IntroSection";
import { useTheme } from "@/providers/ThemeProvider";
import { CourseInfo, Section } from "@/lib/types/types";

interface CourseViewerProps {
  info: CourseInfo;
  content: Section[];
}

export default function CourseViewer({ info, content }: CourseViewerProps) {
  const { darkMode, isSidebarOpen, setIsSidebarOpen } = useTheme();
  const [activeSection, setActiveSection] = useState("intro");
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const bookData = content;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleCard = (id: string) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const scrollToSection = (id: string) => {
    setExpandedCards((prev) => (!prev.includes(id) ? [...prev, id] : prev));

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
      <div className="container mx-auto px-4 py-8 flex gap-8 items-start relative ">
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

        <main className="flex-1 min-w-0 pb-16 lg:p-15">
          <div className="space-y-8">
            <IntroSection {...info} />

            <div className="grid grid-cols-1 gap-6">
              {bookData.map((section, index) => {
                const isExpanded = expandedCards.includes(section.id);

                return (
                  <article
                    id={section.id}
                    key={section.id}
                    className={`scroll-mt-24 rounded-2xl transition-all duration-300 border
                    ${
                      darkMode
                        ? "bg-slate-800/40 border-slate-700 hover:border-slate-600"
                        : "bg-white border-amber-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div
                      className="p-5 flex items-center justify-between gap-4 cursor-pointer"
                      onClick={() => toggleCard(section.id)}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <span
                          className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold mt-1
                          ${
                            darkMode
                              ? "bg-slate-700 text-amber-500"
                              : "bg-amber-100 text-amber-800"
                          }
                        `}
                        >
                          {index === 0 ? "م" : index}
                        </span>
                        <div>
                          <h3
                            className={`text-lg md:text-xl lg:text-2xl font-bold ${
                              darkMode ? "text-amber-400" : "text-amber-800"
                            }`}
                          >
                            {section.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          className={`p-2 rounded-full transition-colors
                          ${
                            darkMode
                              ? "hover:bg-slate-700 text-slate-400"
                              : "hover:bg-amber-50 text-slate-500"
                          }`}
                        >
                          {isExpanded ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-[max-height] duration-700 ease-in-out
                      ${
                        isExpanded
                          ? "max-h-[5000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`p-6 md:p-8 pt-2 border-t ${
                          darkMode ? "border-slate-700" : "border-amber-50"
                        }`}
                      >
                        <ReactMarkdown
                          components={{
                            h3: ({ ...props }) => (
                              <h3
                                className={`text-xl md:text-2xl font-bold font-amiri mt-10 mb-4 pb-2 border-b
                                ${
                                  darkMode
                                    ? "text-amber-400 border-slate-700"
                                    : "text-amber-800 border-amber-100"
                                }`}
                                {...props}
                              />
                            ),
                            p: ({ ...props }) => (
                              <p
                                className={`text-base md:text-lg leading-loose mb-6 font-amiri text-justify
                                ${
                                  darkMode ? "text-slate-300" : "text-slate-700"
                                }`}
                                {...props}
                              />
                            ),
                            ul: ({ ...props }) => (
                              <ul
                                className="space-y-4 my-6 list-none pr-0"
                                {...props}
                              />
                            ),
                            li: ({ ...props }) => (
                              <li
                                className={`relative pr-6 text-base md:text-lg leading-relaxed
                                ${
                                  darkMode ? "text-slate-300" : "text-slate-700"
                                }`}
                              >
                                <span
                                  className={`absolute top-2.5 right-0 w-2 h-2 rounded-full 
                                  ${darkMode ? "bg-amber-500" : "bg-amber-600"}`}
                                />
                                <span {...props} />
                              </li>
                            ),
                            strong: ({ ...props }) => (
                              <strong
                                className={`font-bold mx-1 px-1 rounded
                                ${
                                  darkMode
                                    ? "text-amber-300 bg-amber-900/20"
                                    : "text-amber-900 bg-amber-50"
                                }`}
                                {...props}
                              />
                            ),
                          }}
                        >
                          {section.content || ""}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
