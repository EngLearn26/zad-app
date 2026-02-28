"use client";

import { useState } from "react";
import {
  PlayCircle,
  ChevronDown,
  ChevronUp,
  ScrollText,
  Podcast,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@/providers/ThemeProvider";
import IntroSection from "@/components/sections/IntroSection";
import { CourseData } from "@/lib/types/types";

interface PodcastViewerProps {
  data: CourseData;
}

export default function PodcastViewer({ data }: PodcastViewerProps) {
  const { info, content: episodes } = data;
  const { darkMode, isSidebarOpen, setIsSidebarOpen } = useTheme();

  const [currentVideo, setCurrentVideo] = useState<string | undefined>(
    info.videoLink,
  );
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handlePlayVideo = (link?: string) => {
    if (link) {
      setCurrentVideo(link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
        <aside
          className={`
          fixed top-0 right-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out pt-24 lg:pt-24
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          ${darkMode ? "bg-slate-900/95 border-l border-slate-800" : "bg-[#FFFDF6]/95 border-l border-amber-100"}
          shadow-2xl backdrop-blur-lg overflow-y-auto no-scrollbar
        `}
        >
          <div className="p-4">
            <div
              className={`flex items-center gap-2 mb-6 px-2 ${darkMode ? "text-amber-500" : "text-amber-700"}`}
            >
              <ScrollText size={18} />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                قائمة الحلقات
              </h3>
            </div>
            <nav className="space-y-1.5">
              {episodes.map((episode, index) => (
                <button
                  key={episode.id}
                  onClick={() => scrollToSection(episode.id)}
                  className={`w-full text-right px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 group
                  ${
                    darkMode
                      ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                      : "text-slate-600 hover:bg-white hover:text-amber-800 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold
                    ${darkMode ? "bg-slate-800 text-slate-500" : "bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700"}`}
                  >
                    {index + 1}
                  </span>
                  <span className="truncate font-amiri text-base">
                    {episode.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 min-w-0 pb-20 lg:p-12">
          <div className="space-y-12">
            <IntroSection
              title={info.title}
              desc={info.desc}
              videoLink={currentVideo}
              bookLink={info.bookLink}
            />

            <div className="grid grid-cols-1 gap-6">
              {episodes.map((item, index) => {
                const isExpanded = expandedCards.includes(item.id);

                return (
                  <article
                    id={item.id}
                    key={item.id}
                    className={`rounded-2xl transition-all duration-300 border
                    ${
                      darkMode
                        ? "bg-slate-800/40 border-slate-700 hover:border-slate-600"
                        : "bg-white border-amber-100 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`p-5 flex items-center justify-between gap-4 cursor-pointer`}
                      onClick={() => toggleCard(item.id)}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0
                          ${darkMode ? "bg-slate-700 text-amber-500" : "bg-amber-50 text-amber-600"}`}
                        >
                          <Podcast size={24} />
                        </div>
                        <div>
                          <h3
                            className={`text-sm md:text-xl font-bold font-amiri ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`text-xs mt-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}
                          >
                            الحلقة رقم {index + 1}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayVideo(item.videoLink);
                          }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all
                          ${
                            darkMode
                              ? "bg-amber-600 hover:bg-amber-500 text-white"
                              : "bg-amber-500 hover:bg-amber-600 text-white shadow-sm"
                          }`}
                        >
                          <PlayCircle size={18} />
                          <span className="hidden sm:inline">تشغيل</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(item.id);
                          }}
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
                      ${isExpanded ? "max-h-2500 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div
                        className={`p-6 md:p-8 pt-2 border-t ${darkMode ? "border-slate-700" : "border-amber-50"}`}
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
                                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
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
                                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
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
                          {item.content || ""}
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