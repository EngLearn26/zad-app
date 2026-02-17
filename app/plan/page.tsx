"use client";

import { useState } from "react";
import { 
  Moon, 
  BookOpen, 
  Heart, 
  CheckCircle2, 
  CalendarDays, 
  Sunrise, 
  Utensils 
} from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

export default function RamadanPlan() {
  const { darkMode } = useTheme();
  
  // حالة لتتبع المهام المنجزة (تفاعلية بسيطة)
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleTask = (index: number) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans ${
        darkMode
          ? "bg-slate-900 text-slate-100"
          : "bg-gradient-to-br from-[#fdfbf7] via-[#fffefc] to-[#fefaf0] text-slate-800"
      }`}
    >
      {/* --- Hero Section: المقدمة --- */}
      <section className="relative pt-20 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mx-auto mb-4 ${
              darkMode
                ? "bg-amber-900/30 text-amber-400 border border-amber-700/50"
                : "bg-amber-50 text-amber-800 border border-amber-200"
            }`}
          >
            <Moon size={14} className={darkMode ? "text-amber-400" : "text-amber-600"} />
            <span>اللهم بلغنا رمضان ونحن في أحسن حال</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-amiri leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-amber-700">
              خطة الاستعداد القلبي
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl font-amiri leading-loose max-w-2xl mx-auto ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            رمضان ليس مجرد امتناع عن الطعام، بل هو دورة تدريبية للروح.
            إليك برنامج مقترح لتهيئة قلبك وجوارحك لاستقبال الشهر الكريم.
          </p>
        </div>
      </section>

      {/* --- Cards Grid: مجالات الاستعداد --- */}
      <section className="px-6 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <PlanCard 
            icon={<Heart size={28} />}
            title="تهيئة القلب"
            desc="كثرة الاستغفار وتجديد النية، وتنقية القلب من الشحناء."
            color="rose"
            darkMode={darkMode}
          />
          <PlanCard 
            icon={<BookOpen size={28} />}
            title="علاقة القرآن"
            desc="البدء بورد ثابت يومي (ولو صفحة) لتعويد النفس على التلاوة."
            color="amber"
            darkMode={darkMode}
          />
          <PlanCard 
            icon={<Sunrise size={28} />}
            title="قيام الليل"
            desc="صلاة ركعتين قبل الفجر بنية التدرب على التراويح."
            color="blue"
            darkMode={darkMode}
          />
          <PlanCard 
            icon={<Utensils size={28} />}
            title="الصيام التطوعي"
            desc="صيام الاثنين والخميس أو الأيام البيض في شعبان."
            color="emerald"
            darkMode={darkMode}
          />
        </div>
      </section>

      {/* --- Checklist Section: القائمة التفاعلية --- */}
      <section className="px-6 md:px-20 py-12 mb-20">
        <div className={`max-w-4xl mx-auto rounded-3xl p-8 md:p-12 shadow-xl ${
            darkMode 
             ? "bg-slate-800/50 border border-slate-700" 
             : "bg-white border border-amber-100 shadow-amber-900/5"
        }`}>
          <div className="flex items-center gap-3 mb-8">
            <CalendarDays className={darkMode ? "text-amber-400" : "text-amber-600"} size={32} />
            <h2 className="text-2xl md:text-3xl font-bold font-amiri">
              قائمة المهام اليومية المقترحة
            </h2>
          </div>

          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div 
                key={index}
                onClick={() => toggleTask(index)}
                className={`group flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                  darkMode 
                    ? `hover:bg-slate-700 ${completed.includes(index) ? "bg-amber-900/20 border-amber-700/50" : "bg-slate-800 border-slate-700"}`
                    : `hover:bg-amber-50 ${completed.includes(index) ? "bg-amber-50 border-amber-200" : "bg-slate-50 border-slate-100"}`
                }`}
              >
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                  ${completed.includes(index) 
                    ? "bg-amber-500 border-amber-500" 
                    : darkMode ? "border-slate-500 group-hover:border-amber-400" : "border-slate-300 group-hover:border-amber-400"}
                `}>
                  {completed.includes(index) && <CheckCircle2 size={14} className="text-white" />}
                </div>
                
                <span className={`text-lg font-amiri ${
                  completed.includes(index) 
                    ? darkMode ? "text-slate-400 line-through" : "text-slate-400 line-through"
                    : darkMode ? "text-slate-200" : "text-slate-700"
                }`}>
                  {task}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
             <div className="flex justify-between text-sm font-bold mb-2 font-amiri">
                <span>مستوى الإنجاز</span>
                <span>{Math.round((completed.length / tasks.length) * 100)}%</span>
             </div>
             <div className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? "bg-slate-700" : "bg-slate-100"}`}>
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out"
                  style={{ width: `${(completed.length / tasks.length) * 100}%` }}
                />
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// --- Data & Sub-components ---

const tasks = [
  "قراءة ورد يومي من القرآن (نصف جزء)",
  "المحافظة على أذكار الصباح والمساء",
  "الاستغفار 100 مرة بنية تطهير القلب",
  "صلاة ركعتين في جوف الليل",
  "الصدقة ولو بمبلغ يسير (أو إطعام طعام)",
  "الابتعاد عن مجالس اللغو والغيبة",
  "سماع درس إيماني قصير عن أحكام الصيام"
];

interface PlanCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: "amber" | "rose" | "blue" | "emerald";
  darkMode: boolean;
}

const PlanCard = ({ icon, title, desc, color, darkMode }: PlanCardProps) => {
  // تحديد الألوان بناءً على الـ Prop الممرر
  const colors = {
    amber: darkMode ? "text-amber-400 bg-amber-900/20" : "text-amber-600 bg-amber-50",
    rose: darkMode ? "text-rose-400 bg-rose-900/20" : "text-rose-600 bg-rose-50",
    blue: darkMode ? "text-blue-400 bg-blue-900/20" : "text-blue-600 bg-blue-50",
    emerald: darkMode ? "text-emerald-400 bg-emerald-900/20" : "text-emerald-600 bg-emerald-50",
  };

  return (
    <div className={`p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
      darkMode 
        ? "bg-slate-800 border border-slate-700 hover:border-slate-600" 
        : "bg-white border border-slate-100 shadow-sm hover:shadow-md"
    }`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colors[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold font-amiri mb-2">{title}</h3>
      <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
        {desc}
      </p>
    </div>
  );
};