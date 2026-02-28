"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setIsSidebarOpen: (value: boolean) => void;
  closeSidebar: () => void;
  sidebarContent: ReactNode | null;
  setSidebarContent: (content: ReactNode | null) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<ReactNode | null>(null);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      toggleTheme, 
      isSidebarOpen, 
      toggleSidebar, 
      setIsSidebarOpen,
      closeSidebar,
      sidebarContent,
      setSidebarContent
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};