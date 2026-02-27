"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BookOpen, Calendar } from "lucide-react";
import SadqaBadge from "@/components/ui/SadqaBadge";

import { Quotes } from "@/lib/dailyQuotes";

const darkImg = "/landingDark.png";
const lightImg = "/landing.png";

const dailyQuotes = Quotes;

export default function HeroSection({ darkMode }: { darkMode: boolean }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const [data] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    const dayFormatter = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
      day: "numeric",
    });
    const hijriDay = dayFormatter.format(date);

    const fullFormatter = new Intl.DateTimeFormat(
      "ar-SA-u-ca-islamic-umalqura",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      },
    );

    return {
      hijriDate: fullFormatter.format(date),
      quote: dailyQuotes[hijriDay] || dailyQuotes["15"],
    };
  });

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center px-4 md:px-6 lg:px-20 py-8 md:py-12 gap-10 lg:gap-12 grow min-h-[calc(100vh-160px)]">
      {!darkMode && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-96 md:w-125 h-96 md:h-125 rounded-full bg-amber-200/20 blur-[80px] md:blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-72 md:w-100 h-72 md:h-100 rounded-full bg-orange-100/30 blur-[60px] md:blur-[80px]" />
        </div>
      )}

      <div className="flex-1 text-center lg:text-right z-10 space-y-6 md:space-y-8 animate-fade-in-up w-full max-w-2xl mx-auto lg:mx-0">
        <SadqaBadge
          name="وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ ۚ "
          check={false}
        />

        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-amiri leading-tight relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-600 to-orange-600 flex items-center justify-center lg:justify-start gap-2 md:gap-3 drop-shadow-sm">
              رفيقك في رحلة الصيام
            </span>
          </h1>

          {data.hijriDate && (
            <div
              className={`flex items-center justify-center lg:justify-start gap-2 text-base md:text-lg font-amiri ${
                darkMode ? "text-amber-400/80" : "text-amber-700/80"
              }`}
            >
              <Calendar size={18} />
              <span>{data.hijriDate}</span>
            </div>
          )}
        </div>

        <p
          className={`text-base md:text-lg lg:text-xl font-amiri leading-loose max-w-full lg:max-w-2xl mx-auto lg:mx-0 min-h-[3rem] ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {data.quote}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 md:pt-4">
          <Link
            href="/plan"
            className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 font-bold text-base md:text-lg w-full sm:w-auto"
          >
            <BookOpen size={20} className="md:w-6 md:h-6" />
            <span>البرنامج اليومي للصائم</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-xl z-10 mt-8 lg:mt-0">
        <div
          className={`relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-4 md:border-8 aspect-[4/3] md:aspect-auto md:h-100 lg:h-125 ${
            darkMode
              ? "border-slate-800 shadow-slate-900/50 bg-slate-800"
              : "border-white shadow-amber-900/10 ring-1 ring-slate-900/5 bg-amber-50"
          }`}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-1000 ${
              isImageLoaded
                ? "opacity-0 pointer-events-none"
                : "opacity-100 animate-pulse"
            }`}
          >
            <span
              className={`text-2xl md:text-4xl lg:text-5xl font-bold font-amiri text-center leading-loose md:leading-relaxed px-4 ${
                darkMode ? "text-amber-500/40" : "text-amber-700/40"
              }`}
            >
              لا إله إلا الله <br /> محمد رسول الله
            </span>
          </div>

          <Image
            src={darkMode ? darkImg : lightImg}
            alt="صورة منصة زاد"
            width={600}
            height={500}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority
            onLoad={() => setIsImageLoaded(true)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 md:p-8 z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
