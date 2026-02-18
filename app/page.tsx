"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Zap,
  Coffee,
  GraduationCap,
  Library,
} from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import SadqaBadge from "@/components/ui/SadqaBadge";

const darkImg = "/landingDark.png";
const lightImg = "/landing.png";

// 1. مصفوفة الكتب المشروحة
const books = [
  {
    id: 0,
    title: "القرآن الكريم",
    author: "وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ",
    link: "/quran",
  },
  {
    id: 1,
    title: "شرح الأربعين النووية",
    author: "الشيخ محمد بن صالح العثيمين",
    link: "/hadiths/arbaeen",
  },
  {
    id: 2,
    title: "أول مرة أتدبر القرآن",
    author: "الشيخ عادل محمد خليل",
    link: "/books/Meditate-Quran",
  },
  {
    id: 3,
    title: "كتاب خلاصة تعظيم العلم",
    author: "الشيخ صالح العصيمي",
    link: "/books/ta3zeem-al3elm",
  },
  {
    id: 4,
    title: "مقدمة في أصول التفسير",
    author: "الشيخ  صالح العصيمي",
    link: "/books/tafsir",
  },
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
    id: 7,
    title: "المراحل الثمان لطالب فهم القرآن",
    author: "الشيخ  عصام بن صالح العويد",
    link: "/books/Quran-Stages",
  },
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
];

export default function Home() {
  const { darkMode } = useTheme();

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
        {/* Decorative Elements for Light Mode */}
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

          <h1 className="text-4xl lg:text-6xl font-bold font-amiri leading-tight relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-600 to-orange-600 flex items-center justify-center lg:justify-start gap-3 drop-shadow-sm">
              رفيقك في رحلة الصيام
            </span>
          </h1>

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
            <Link
              href="/plan"
              className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 font-bold text-lg"
            >
              <BookOpen size={24} />
              <span>خطة إستعداد رمضان</span>
            </Link>

            <Link
              href="/test"
              className={`px-8 py-4 rounded-2xl border transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 font-bold ${
                darkMode
                  ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                  : "bg-white border-slate-100 text-slate-600 shadow-sm hover:shadow-md hover:text-amber-700"
              }`}
            >
              <span>صفحة تجريبية</span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
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
            title="خلاصات مُنقّاة"
            desc="لا نكتفي بسرد المتون، بل نستخلص لك 'جوامع الخير' ودرر الفوائد الفقهية والتربوية، لتكون زاداً لك في رحلتك إلى الله."
            darkMode={darkMode}
          />
          <FeatureCard
            icon={<GraduationCap size={32} className="text-blue-500" />}
            title="منهجية علمية"
            desc="نعتمد منهجية 'تعظيم العلم'؛ فالعلم لا يُنال إلا بتطهير وعائه (القلب)، وإخلاص النية، وسلوك الجادة الموصلة إليه."
            darkMode={darkMode}
          />
          <FeatureCard
            icon={<Coffee size={32} className="text-emerald-500" />}
            title="واجهة مريحة"
            desc="صممنا لك تجربة بصريّة تجمع همّة النفس على الطلب، بتصميم هادئ يمزج بين جمال الخط العربي وراحة العين وصفاء الذهن."
            darkMode={darkMode}
          />
        </div>
      </section>

      {/* 2. Books Section (القسم الجديد المضاف) */}
      <section className="px-6 lg:px-20 py-12 relative z-10">
        <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
          <Library className="text-amber-500" size={28} />
          <h2 className="text-3xl font-bold font-amiri">المتون المشروحة</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} darkMode={darkMode} />
          ))}
        </div>
      </section>

      {/* Features Section */}
    </div>
  );
}

// 3. مكون كارت الكتاب الجديد (Book Card Component)
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
    className={`relative flex flex-col items-center text-center p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 ${
      darkMode
        ? "bg-slate-800 border-slate-700 hover:border-slate-600 shadow-xl"
        : "bg-white border-slate-100 hover:border-amber-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(251,191,36,0.15)]"
    }`}
  >
    {/* أيقونة الكتاب */}
    <div
      className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-sm rotate-3 group-hover:rotate-6 transition-transform ${
        darkMode
          ? "bg-emerald-900/30 text-emerald-400"
          : "bg-emerald-50 text-emerald-700"
      }`}
    >
      <BookOpen size={36} strokeWidth={1.5} />
    </div>

    {/* العنوان والمؤلف */}
    <h3
      className={`text-2xl font-bold font-amiri mb-2 leading-relaxed ${
        darkMode ? "text-slate-100" : "text-slate-800"
      }`}
    >
      {book.title}
    </h3>
    <p
      className={`text-sm mb-8 font-medium ${
        darkMode ? "text-slate-400" : "text-slate-500"
      }`}
    >
      {book.author}
    </p>

    {/* الفاصل والزر */}
    <div
      className={`w-full pt-6 border-t mt-auto ${darkMode ? "border-slate-700" : "border-slate-100"}`}
    >
      <Link
        href={book.link}
        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-colors ${
          darkMode
            ? "hover:bg-slate-700 text-slate-300 hover:text-white"
            : "hover:bg-amber-50 text-slate-600 hover:text-amber-700"
        }`}
      >
        <BookOpen size={18} />
        <span>فتح الكتاب</span>
      </Link>
    </div>
  </div>
);

// مكون بطاقة المميزات (Features Card) - كما هو
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
