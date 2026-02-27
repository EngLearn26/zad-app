
"use client";

import { useTheme } from "@/providers/ThemeProvider";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BooksSection from "@/components/home/BooksSection";

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col transition-colors duration-500 font-sans min-h-screen ${
        darkMode
          ? "bg-slate-900 text-slate-100"
          : "bg-linear-to-br from-[#fdfbf7] via-[#fffefc] to-[#fefaf0] text-slate-800"
      }`}
    >
      <HeroSection darkMode={darkMode} />
      <FeaturesSection darkMode={darkMode} />
      <BooksSection darkMode={darkMode} />
    </div>
  );
}