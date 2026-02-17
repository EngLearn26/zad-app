import type { Metadata } from "next";
import { Amiri, Noto_Sans_Arabic, Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

// تعريف الخطوط
const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref-ruqaa", // هذا المتغير سنستخدمه في Tailwind
  display: "swap",
});

const notoSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "زاد - Zad",
  description: "خلاصات كتب السلف - رفيقك في رحلة العلم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>

      <body className={`${notoSans.variable} ${amiri.variable} ${arefRuqaa.variable}  font-sans antialiased `}>
        <ThemeProvider>
          {/* هنا يتم وضع الهيدر ليظهر في كل الصفحات */}
          <Header />
          
          {/* محتوى الصفحة المتغير */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* هنا يتم وضع الفوتر ليظهر في كل الصفحات */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}