"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; // أضفنا useEffect
import {
  BookOpen,
  Zap,
  Coffee,
  GraduationCap,
  Library,
  ScrollText,
  Moon,
  Mic,
  ChevronDown,
  ChevronUp,
  Calendar, // أيقونة للتاريخ
} from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import SadqaBadge from "@/components/ui/SadqaBadge";

const darkImg = "/landingDark.png";
const lightImg = "/landing.png";

// ... (بقي كود تعريف الأقسام sections كما هو بدون تغيير، يمكنك تركه كما هو في ملفك) ...
// سأعيد كتابة sections هنا للاختصار، لكن تأكد من وجودها في ملفك
type SectionData = {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: {
    id: number;
    title: string;
    author: string;
    link: string;
  }[];
};

const sections: SectionData[] = [
  {
    id: "sec1",
    title: "القرآن الكريم وعلومه",
    icon: <BookOpen size={24} />,
    items: [
      {
        id: 0,
        title: "القرآن الكريم",
        author: "وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ",
        link: "/quran",
      },
      {
        id: 2,
        title: "أول مرة أتدبر القرآن",
        author: "الشيخ عادل محمد خليل",
        link: "/books/Meditate-Quran",
      },
      {
        id: 7,
        title: "المراحل الثمان لطالب فهم القرآن",
        author: "الشيخ عصام بن صالح العويد",
        link: "/books/Quran-Stages",
      },
    ],
  },
  {
    id: "sec2",
    title: "السنة النبوية",
    icon: <ScrollText size={24} />,
    items: [
      {
        id: 1,
        title: "شرح الأربعين النووية",
        author: "الشيخ محمد بن صالح العثيمين",
        link: "/hadiths/arbaeen",
      },
    ],
  },
  {
    id: "sec3",
    title: "مجالس رمضان وتزكية النفس",
    icon: <Moon size={24} />,
    items: [
      {
        id: 5,
        title: "مجالس شهر رمضان",
        author: "الشيخ محمد بن صالح العثيمين",
        link: "/books/Ramadan-Councils",
      },
      {
        id: 6,
        title: "حدث في رمضان",
        author: "الشيخ عبدالرحمن رأفت الباشا",
        link: "/books/Ramadan-Event",
      },
      {
        id: 3,
        title: "كتاب خلاصة تعظيم العلم",
        author: "الشيخ صالح العصيمي",
        link: "/books/ta3zeem-al3elm",
      },
    ],
  },
  {
    id: "sec4",
    title: "صوتيات وبودكاست",
    icon: <Mic size={24} />,
    items: [
      {
        id: 8,
        title: "بودكاست فهمك للقرآن",
        author: "دكتور نايف بن نهار",
        link: "/podcast/drNaif",
      },
      {
        id: 9,
        title: "بودكاست حياة الطالب",
        author: "دكتور عثمان الخميس",
        link: "/podcast/drOsman",
      },
      {
        id: 10,
        title: "وعي وبناء",
        author: "نخبة من العظماء",
        link: "/podcast/other",
      },
    ],
  },
];

export default function Home() {
  const { darkMode } = useTheme();
  const [openSections, setOpenSections] = useState<string[]>([]);

  // 1. حالة لتخزين التاريخ الهجري مع lazy initialization
  const [hijriDate] = useState(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
      calendar: "islamic-umalqura", // استخدام تقويم أم القرى
    };
    // قد يختلف التاريخ يوماً واحداً حسب الرؤية، لكنه تقريب ممتاز
    return new Intl.DateTimeFormat(
      "ar-SA-u-ca-islamic",
      options,
    ).format(date);
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((sec) => sec !== id) : [...prev, id],
    );
  };

  return (
    <div
      className={`flex flex-col transition-colors duration-500 font-sans min-h-screen ${
        darkMode
          ? "bg-slate-900 text-slate-100"
          : "bg-gradient-to-br from-[#fdfbf7] via-[#fffefc] to-[#fefaf0] text-slate-800"
      }`}
    >
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 gap-12 flex-grow min-h-[calc(100vh-160px)]">
        {!darkMode && (
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-200/20 blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-orange-100/30 blur-[80px]" />
          </div>
        )}

        <div className="flex-1 text-center lg:text-right z-10 space-y-8 animate-fade-in-up">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-sm backdrop-blur-sm transition-all ${
              darkMode
                ? "bg-amber-900/30 text-amber-400 border border-amber-700/50"
                : "bg-white/80 text-amber-800 border border-amber-100 shadow-amber-100"
            }`}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَى
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl lg:text-6xl font-bold font-amiri leading-tight relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-600 to-orange-600 flex items-center justify-center lg:justify-start gap-3 drop-shadow-sm">
                رفيقك في رحلة الصيام
              </span>
            </h1>

            {/* 2. عرض التاريخ الهجري هنا */}
            {hijriDate && (
              <div
                className={`flex items-center justify-center lg:justify-start gap-2 text-lg font-amiri ${darkMode ? "text-amber-400/80" : "text-amber-700/80"}`}
              >
                <Calendar size={18} />
                <span>{hijriDate}</span>
              </div>
            )}
          </div>

          <p
            className={`text-lg lg:text-xl font-amiri leading-loose max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            لأن وعاء العلم هو القلب.. نجمع لك زبدة الفوائد لتنير بصيرتك وتُحيي
            أثر السنة في حياتك.
          </p>

          <SadqaBadge name="محمد زكريا عبدالرحمن" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            {/* 3. تعديل نص الزر الأول */}
            <Link
              href="/plan"
              className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 font-bold text-lg"
            >
              <BookOpen size={24} />
              <span>البرنامج اليومي للصائم</span>
            </Link>

            {/* 4. حذف الزر الثاني (صفحة تجريبية) تماماً */}
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg lg:max-w-xl z-10">
          <div
            className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-[8px] ${
              darkMode
                ? "border-slate-800 shadow-slate-900/50"
                : "border-white shadow-amber-900/10 ring-1 ring-slate-900/5"
            }`}
          >
            <Image
              src={darkMode ? darkImg : lightImg}
              alt="Quran"
              width={600}
              height={500}
              className="w-full h-[400px] md:h-[500px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`py-20 px-6 lg:px-20 relative z-10 ${
          darkMode
            ? "bg-slate-800/30"
            : "bg-white/40 backdrop-blur-md border-t border-amber-50"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Zap size={32} className="text-amber-500" />}
            title="همم رمضانية عالية"
            desc="رمضان مضمار السابقين؛ نساعدك على شحذ همتك وتجديد عزيمتك لاغتنام ساعاته، لتجعل من الشهر الفضيل نقطة انطلاق نحو معالي الأمور."
            darkMode={darkMode}
          />

          {/* البطاقة الثانية: العلم والتزكية */}
          <FeatureCard
            icon={<GraduationCap size={32} className="text-blue-500" />}
            title="علم يُحيي القلوب"
            desc="لا نكتفي بسرد المعلومات، بل ننتقي لك ما يجمع بين صحة الدليل ورقة الموعظة، ليكون علماً نافعاً يورث الخشية ويزكي النفس ويهذب السلوك."
            darkMode={darkMode}
          />

          {/* البطاقة الثالثة: التنوع والراحة */}
          <FeatureCard
            icon={<Coffee size={32} className="text-emerald-500" />}
            title="زادٌ معرفي متنوع"
            desc="بين متون الكتب وخلاصات البودكاست، نقدم لك وجبة معرفية متكاملة (مقروءة ومسموعة) في واجهة هادئة تعينك على التركيز والتدبر."
            darkMode={darkMode}
          />
        </div>
      </section>

      {/* 2. الأقسام الجديدة (Collapsible Sections) */}
      <section className="px-6 lg:px-20 py-12 relative z-10 space-y-8">
        <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
          <Library className="text-amber-500" size={28} />
          <h2 className="text-3xl font-bold font-amiri">المتون المشروحة</h2>
        </div>

        <div className="space-y-6 max-w-7xl mx-auto">
          {sections.map((section) => {
            const isOpen = openSections.includes(section.id);
            return (
              <div
                key={section.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/80 border-amber-100 shadow-sm"
                }`}
              >
                {/* Header (Click to toggle) */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full flex items-center justify-between p-6 text-right transition-colors ${
                    darkMode ? "hover:bg-slate-700/50" : "hover:bg-amber-50/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        darkMode
                          ? "bg-slate-700 text-amber-400"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-amiri">
                      {section.title}
                    </h3>
                  </div>
                  <div
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[2000px] opacity-100 p-6 pt-0"
                      : "max-h-0 opacity-0 p-0 overflow-hidden"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((book) => (
                      <BookCard key={book.id} book={book} darkMode={darkMode} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// مكون كارت الكتاب (Book Card Component)
interface BookProps {
  id: number;
  title: string;
  author: string;
  link: string;
}

const BookCard = ({
  book,
  darkMode,
}: {
  book: BookProps;
  darkMode: boolean;
}) => (
  <div
    className={`relative flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
      darkMode
        ? "bg-slate-800 border-slate-700 hover:border-slate-600 shadow-lg"
        : "bg-white border-slate-100 hover:border-amber-200 shadow-sm hover:shadow-md"
    }`}
  >
    {/* أيقونة الكتاب */}
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:rotate-6 transition-transform ${
        darkMode
          ? "bg-emerald-900/30 text-emerald-400"
          : "bg-emerald-50 text-emerald-700"
      }`}
    >
      <BookOpen size={28} strokeWidth={1.5} />
    </div>

    {/* العنوان والمؤلف */}
    <h3
      className={`text-xl font-bold font-amiri mb-1 leading-relaxed ${
        darkMode ? "text-slate-100" : "text-slate-800"
      }`}
    >
      {book.title}
    </h3>
    <p
      className={`text-xs mb-6 font-medium ${
        darkMode ? "text-slate-400" : "text-slate-500"
      }`}
    >
      {book.author}
    </p>

    {/* الفاصل والزر */}
    <div
      className={`w-full pt-4 border-t mt-auto ${
        darkMode ? "border-slate-700" : "border-slate-100"
      }`}
    >
      <Link
        href={book.link}
        className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-bold text-sm transition-colors ${
          darkMode
            ? "hover:bg-slate-700 text-slate-300 hover:text-white"
            : "hover:bg-amber-50 text-slate-600 hover:text-amber-700"
        }`}
      >
        <BookOpen size={16} />
        <span>فتح</span>
      </Link>
    </div>
  </div>
);

// مكون بطاقة المميزات (Features Card)
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  darkMode: boolean;
}

const FeatureCard = ({ icon, title, desc, darkMode }: FeatureCardProps) => (
  <div
    className={`p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 group ${
      darkMode
        ? "bg-slate-800 border border-slate-700 hover:bg-slate-750"
        : "bg-white border border-slate-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(251,191,36,0.1)] hover:border-amber-100"
    }`}
  >
    <div
      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
        darkMode
          ? "bg-slate-900 group-hover:bg-slate-800"
          : "bg-slate-50 group-hover:bg-amber-50/50"
      }`}
    >
      {icon}
    </div>
    <h3
      className={`text-xl font-bold font-amiri mb-3 ${
        darkMode ? "text-slate-100" : "text-slate-800"
      }`}
    >
      {title}
    </h3>
    <p
      className={`leading-relaxed text-sm lg:text-base ${
        darkMode ? "text-slate-400" : "text-slate-500"
      }`}
    >
      {desc}
    </p>
  </div>
);
