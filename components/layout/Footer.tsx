"use client";

import { useTheme } from "@/providers/ThemeProvider";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-8 text-center border-t transition-colors ${
        darkMode
          ? "bg-slate-900 border-slate-800 text-amber-400 "
          : "bg-amber-50 text-amber-600 border-amber-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-2xl md:text-3xl mb-8 font-bold ${
            darkMode ? "text-amber-400" : "text-amber-700"
          }`}
          style={{ fontFamily: "'Aref Ruqaa', serif" }}
        >
          " يا باغيَ الخيرِ أقبل، ويا باغيَ الشَّرِّ أقصِر "
        </div>

        <div
          dir="ltr"
          className={`font-mono text-sm md:text-base flex items-center justify-center gap-2 flex-wrap ${
            darkMode ? "text-[#a3b18a]" : "text-slate-600"
          }`}
        >
          <span>{"< Developed By >"}</span>

          <a
            href="https://www.facebook.com/twshkndy.qlashy"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3 py-1 rounded-md font-bold transition-all hover:scale-105 ${
              darkMode
                ? "bg-[#1f5f68] text-teal-50 hover:bg-[#2a7a85]"
                : "bg-amber-200 text-amber-900 hover:bg-amber-300"
            }`}
          >
            Osman
          </a>

          <span>{"< All Copy Rights Reserved @2026 >"}</span>
        </div>
      </div>
    </footer>
  );
}
