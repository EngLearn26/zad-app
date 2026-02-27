"use client";

import { useState, useEffect } from "react"; 
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react"; 
import { useTheme } from "@/providers/ThemeProvider";
import QuickAccessSidebar from "@/components/layout/QuickAccessSidebar";

export default function Header() {
  const { darkMode, toggleTheme, toggleSidebar, isSidebarOpen } = useTheme();
  const pathname = usePathname();
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isQuickAccessOpen, setIsQuickAccessOpen] = useState(false);

  
  const isQuickAccessPage = pathname === "/" || pathname === "/plan" || pathname === "/feedback";
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    if (isQuickAccessPage) {
      setIsQuickAccessOpen(!isQuickAccessOpen);
    } else {
      toggleSidebar();
    }
  };

  
  const isMenuCurrentlyOpen = isQuickAccessPage ? isQuickAccessOpen : isSidebarOpen;

  return (
    <>
      <header className={`sticky top-0 z-40 shadow-sm backdrop-blur-md transition-colors relative ${darkMode ? "bg-slate-900/95 border-b border-slate-700" : "bg-white/95 border-b border-amber-200"}`}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image src="/logo.svg" alt="Logo" fill priority className="object-contain" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold font-amiri bg-clip-text text-transparent bg-gradient-to-l from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-200">
              زاد
            </h1>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all border ${darkMode ? "bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700" : "bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100"}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            
            <button
              onClick={handleMenuClick}
              className={`p-2.5 rounded-lg transition-all border ${darkMode ? "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`}
              aria-label="Toggle Menu"
            >
              {isMenuCurrentlyOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent z-30">
          <div
            className="h-full transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%`, backgroundColor: darkMode ? "#2DD4BF" : "#E17100" }}
          />
        </div>
      </header>

      
      <QuickAccessSidebar isOpen={isQuickAccessOpen} onClose={() => setIsQuickAccessOpen(false)} />
    </>
  );
}