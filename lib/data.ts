import { CourseData } from "./types/types";

import {
  infoAbnothemen,
  Abnothemen,
} from "./content/transcripts/hadiths/othemen";
// ----------------
import {
  infoMeditateQuran,
  MeditateQuran,
} from "./content/transcripts/quran/meditateQuran";
import {
  inforamadanCouncils,
  ramadanCouncils,
} from "./content/transcripts/ramadan/ramadanCouncils";
import {
  infoRamadanEvent,
  RamadanEvent,
} from "./content/transcripts/ramadan/ramadanEvent";
import {
  infoQuranStages,
  QuranStages,
} from "./content/transcripts/quran/quranStages";
import { infota3zeem, ta3zeem } from "./content/transcripts/ramadan/ta3zeem";
import { infoTafsir, Tafsir } from "./content/transcripts/quran/Tafsir";
// --------------------
import { infodrNaif, drNaif } from "./content/transcripts/podcasts/1/drNaif";
import { infodrOsman, drOsman } from "./content/transcripts/podcasts/2/osman";
import { infoother, other } from "./content/transcripts/podcasts/3/other";


export const allCourses: Record<string, CourseData> = {
  abnothemen: {
    info: infoAbnothemen,
    content: Abnothemen,
  },
  "ta3zeem-al3elm": {
    info: infota3zeem,
    content: ta3zeem,
  },
  tafsir: {
    info: infoTafsir,
    content: Tafsir,
  },
  "Meditate-Quran": {
    info: infoMeditateQuran,
    content: MeditateQuran,
  },
  "Ramadan-Councils": {
    info: inforamadanCouncils,
    content: ramadanCouncils,
  },
  "Ramadan-Event": {
    info: infoRamadanEvent,
    content: RamadanEvent,
  },
  "Quran-Stages": {
    info: infoQuranStages,
    content: QuranStages,
  },
};

export const allHadithBooks: Record<string, CourseData> = {
  arbaeen: {
    info: infoAbnothemen || { title: "الأربعين النووية", desc: "" },
    content: Abnothemen || [],
  },
};

export const allPodcasts: Record<string, CourseData> = {
  drNaif: {
    info: infodrNaif,
    content: drNaif,
  },
  drOsman: {
    info: infodrOsman,
    content: drOsman,
  },
  other: {
    info: infoother,
    content: other,
  },
  // يمكنك إضافة بودكاست آخر هنا: "quran-stories": { ... }
};
