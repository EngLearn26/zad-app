import type { Metadata } from "next";
import { Amiri, Noto_Sans_Arabic, Aref_Ruqaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-aref-ruqaa", 
  display: "swap",
});

const notoSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zad",
  description:
    "منصة زاد التعليمية: رفيقك الأمثل في شهر رمضان المبارك لتدبر القرآن الكريم، ودراسة المتون المشروحة، والاستماع لأفضل البودكاست الإسلامي بوعي وبناء.",
  icons: {
    icon: "/logo.svg", 
    apple: "/logo.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${notoSans.variable} ${amiri.variable} ${arefRuqaa.variable}  font-sans antialiased `}
      >
        <ThemeProvider>
          <Header />

          <main className="min-h-screen">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
