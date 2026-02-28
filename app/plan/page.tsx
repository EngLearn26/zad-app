"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sunrise,
  Sun,
  Moon,
  BookOpen,
  CheckCircle2,
  Circle,
  Coffee,
  Quote,
  Heart,
  Activity,
  Shield,
} from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import SadqaBadge from "@/components/ui/SadqaBadge";
import { Quotes } from "@/lib/dailyQuotes";

type Task = {
  text: string;
  subtext?: string;
  link?: string;
};

type Station = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: "blue" | "amber" | "orange" | "rose" | "indigo";
  tasks: Task[];
};

const stations: Station[] = [
  {
    id: 1,
    title: "تزكية النفس",
    subtitle: "(التخلص من أمراض القلوب)",
    icon: <Heart size={32} />,
    color: "rose",
    tasks: [
      {
        text: "الخبيئة الصالحة:",
        subtext: "عمل صالح سري تماماً لا يعلم به أحد (صدقة، دعاء لغائب، مساعدة خفية).",
      },
      {
        text: "سلامة الصدر:",
        subtext: "قُل 'اللهم إني عفوت عمن ظلمني' قبل النوم، وادعُ بالخير لمن يضايقك.",
      },
    ],
  },
  {
    id: 2,
    title: "الورد والاتصال",
    subtitle: "(غذاء الروح وجودة العبادة)",
    icon: <Activity size={32} />,
    color: "indigo",
    tasks: [
      {
        text: "ورد التدبر:",
        subtext: "قراءة صفحة واحدة بتركيز وكتابة 'فائدة' أو 'أمر/نهي' منها.",
      },
      {
        text: "صلاة الخشوع:",
        subtext: "إغلاق الهاتف قبل الصلاة بـ 5 دقائق، والتنفس بهدوء قبل تكبيرة الإحرام.",
      },
    ],
  },
  {
    id: 3,
    title: "التخلي قبل التحلي",
    subtitle: "(صيام الجوارح وضبط النفس)",
    icon: <Shield size={32} />,
    color: "amber",
    tasks: [
      {
        text: "ضبط اللسان (قاعدة الـ 3 ثواني):",
        subtext: "فكر قبل الكلام (هل هذا خير؟). التزم بالصمت الاختياري عند الجدال.",
      },
      {
        text: "تقنين المشتتات:",
        subtext: "تحديد (ساعة واحدة فقط) للسوشيال ميديا، وحذف تطبيقات الترفيه الزائد.",
      },
    ],
  },
  {
    id: 4,
    title: "محطة الفجر وما قبلها",
    subtitle: "(التأسيس والطلب)",
    icon: <Sunrise size={32} />,
    color: "blue",
    tasks: [
      { text: "سنة الفجر: ركعتان هما خير من الدنيا وما فيها." },
      { text: "صلاة الفجر: مَن صلَّى الصُّبحَ في جماعةٍ فَهوَ في ذمَّةِ اللَّهِ." },
      {
        text: "مشروع الأربعين النووية: حفظ حديث واحد يومياً.",
        link: "/hadiths/arbaeen",
        subtext: "في العشر الأواخر: يُضاعف الجهد لحفظ حديثين.",
      },
      { text: "أذكار الصباح: حصن اليوم وبداية البركة." },
    ],
  },
  {
    id: 5,
    title: "محطة الشروق والضحى",
    subtitle: "(البركة والعمل)",
    icon: <Sun size={32} />,
    color: "amber",
    tasks: [
      { text: "صلاة الضحى: ركعتان فأكثر (صدقة عن مفاصلك)." },
      {
        text: "ورد التلاوة: قراءة جزء كامل لضمان الختمة الشهرية.",
        link: "/quran",
      },
      { text: "إتقان العمل: تحويل السعي الدنيوي إلى عبادة بالنية." },
    ],
  },
  {
    id: 6,
    title: "محطة الظهر والعصر",
    subtitle: "(الرواتب والتدبر)",
    icon: <Sun size={32} className="opacity-80" />,
    color: "orange",
    tasks: [
      {
        text: "السنن الرواتب (12 ركعة):",
        subtext: "4 قبل الظهر و2 بعده، 2 بعد المغرب، 2 بعد العشاء، 2 قبل الفجر.",
      },
      {
        text: "مجلس علم: قراءة في خلاصة تعظيم العلم.",
        link: "/books/ta3zeem-al3elm",
        subtext: "تزكية القلب بالعلم النافع.",
      },
      {
        text: "وقفة التفكر: تطبيق منهجية 'أول مرة أتدبر القرآن'.",
        link: "/books/Meditate-Quran",
        subtext: "التفكر العميق في سورة يومية لاستخراج كنوزها.",
      },
    ],
  },
  {
    id: 7,
    title: "محطة المغرب والإفطار",
    subtitle: "(الشكر والإجابة)",
    icon: <Coffee size={32} />,
    color: "rose",
    tasks: [
      { text: "دعاء الإفطار: استثمار لحظات الصدق قبل الغروب." },
      { text: "سنة المغرب: ركعتان (من الرواتب) بعد الفطر مباشرة." },
    ],
  },
  {
    id: 8,
    title: "محطة العشاء والقيام",
    subtitle: "(الختام والسكينة)",
    icon: <Moon size={32} />,
    color: "indigo",
    tasks: [
      { text: "سنة العشاء: ركعتان (من الرواتب)." },
      { text: "صلاة التراويح: القيام مع الجماعة أو ما يتيسر لك." },
      { text: "صلاة القيام: الختام بـ 3 ركعات." },
      { text: "مراجعة الحفظ: تثبيت الحديث الذي حفظته فجراً." },
    ],
  },
];

export default function RamadanPlan() {
  const { darkMode } = useTheme();

  const [completed, setCompleted] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("zad_plan_completed");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const dailyQuote = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    const dayFormatter = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
      day: "numeric",
    });
    const hijriDay = dayFormatter.format(date);

    return (
      (Quotes as Record<string, string>)[hijriDay] ||
      (Quotes as Record<string, string>)["1"]
    );
  }, []);

  const toggleTask = (id: string) => {
    const newCompleted = completed.includes(id)
      ? completed.filter((i) => i !== id)
      : [...completed, id];

    setCompleted(newCompleted);
    localStorage.setItem("zad_plan_completed", JSON.stringify(newCompleted));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        darkMode
          ? "bg-slate-900 text-slate-100"
          : "bg-gradient-to-br from-[#fdfbf7] via-[#fffefc] to-[#fefaf0] text-slate-800"
      }`}
    >
      <section className="relative pt-16 pb-8 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
          <SadqaBadge
            name="وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ ۚ "
            check={false}
            className="justify-center"
          />

          <h1 className="text-4xl md:text-5xl font-bold font-amiri leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-b from-amber-500 to-amber-700">
              خارطة اليوم الرمضاني
            </span>
          </h1>

          <div
            className={`relative p-6 rounded-2xl border mt-6 ${
              darkMode
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white/60 border-amber-100 shadow-sm"
            }`}
          >
            <Quote
              className={`absolute top-4 right-4 w-6 h-6 opacity-20 ${
                darkMode ? "text-amber-400" : "text-amber-600"
              }`}
            />
            <p
              className={`text-xl md:text-2xl font-amiri leading-loose ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {dailyQuote}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20 pb-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {stations.map((station) => (
            <StationCard
              key={station.id}
              station={station}
              darkMode={darkMode}
              completed={completed}
              onToggle={toggleTask}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

interface StationCardProps {
  station: Station;
  darkMode: boolean;
  completed: string[];
  onToggle: (id: string) => void;
}

const StationCard = ({
  station,
  darkMode,
  completed,
  onToggle,
}: StationCardProps) => {
  const colorStyles = {
    blue: darkMode
      ? "bg-blue-900/20 text-blue-400 border-blue-800/50"
      : "bg-blue-50 text-blue-600 border-blue-100",
    amber: darkMode
      ? "bg-amber-900/20 text-amber-400 border-amber-800/50"
      : "bg-amber-50 text-amber-600 border-amber-100",
    orange: darkMode
      ? "bg-orange-900/20 text-orange-400 border-orange-800/50"
      : "bg-orange-50 text-orange-600 border-orange-100",
    rose: darkMode
      ? "bg-rose-900/20 text-rose-400 border-rose-800/50"
      : "bg-rose-50 text-rose-600 border-rose-100",
    indigo: darkMode
      ? "bg-indigo-900/20 text-indigo-400 border-indigo-800/50"
      : "bg-indigo-50 text-indigo-600 border-indigo-100",
  };

  const currentStyle = colorStyles[station.color];

  return (
    <div
      className={`rounded-[2rem] p-6 md:p-8 border transition-all duration-300 hover:shadow-lg ${
        darkMode
          ? "bg-slate-800/50 border-slate-700"
          : "bg-white border-white shadow-sm"
      }`}
    >
      <div className="flex items-center gap-4 mb-6 border-b border-dashed border-gray-200 dark:border-gray-700 pb-4">
        <div className={`p-3 rounded-2xl border ${currentStyle}`}>
          {station.icon}
        </div>
        <div>
          <h2
            className={`text-2xl font-bold font-amiri ${
              darkMode ? "text-slate-100" : "text-slate-800"
            }`}
          >
            {station.title}
          </h2>
          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {station.subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {station.tasks.map((task, idx) => {
          const taskId = `${station.id}-${idx}`;
          const isDone = completed.includes(taskId);

          return (
            <div
              key={idx}
              onClick={() => onToggle(taskId)}
              className={`group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                darkMode
                  ? `hover:bg-slate-700/50 ${
                      isDone
                        ? "bg-slate-800/80 border-slate-700"
                        : "bg-slate-800/30 border-slate-700/50"
                    }`
                  : `hover:bg-slate-50 ${
                      isDone
                        ? "bg-gray-50 border-gray-200"
                        : "bg-white border-gray-100 shadow-sm"
                    }`
              }`}
            >
              <div
                className={`mt-1 shrink-0 transition-colors duration-300 ${
                  isDone
                    ? "text-green-500"
                    : darkMode
                    ? "text-slate-600 group-hover:text-slate-400"
                    : "text-gray-300 group-hover:text-amber-500"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 size={22} className="fill-current" />
                ) : (
                  <Circle size={22} />
                )}
              </div>

              <div className="flex-1">
                <p
                  className={`text-lg font-amiri leading-relaxed transition-all ${
                    isDone
                      ? "text-gray-400 line-through decoration-amber-500/50"
                      : darkMode
                      ? "text-slate-200"
                      : "text-slate-700"
                  }`}
                >
                  {task.text}
                </p>

                {task.subtext && (
                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {task.subtext}
                  </p>
                )}

                {task.link && !isDone && (
                  <Link
                    href={task.link}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      darkMode
                        ? "bg-amber-900/30 text-amber-400 hover:bg-amber-900/50"
                        : "bg-amber-50 text-amber-700 hover:bg-amber-100"
                    }`}
                  >
                    <BookOpen size={14} />
                    <span>الذهاب للمحتوى</span>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};