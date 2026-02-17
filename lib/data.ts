
import { CourseData } from "./types";
import { infoAbnothemen, Abnothemen } from "./content/othemen";
import { infoMeditateQuran, MeditateQuran } from "./content/meditateQuran";
import { inforamadanCouncils, ramadanCouncils } from "./content/ramadanCouncils";
import { infoRamadanEvent, RamadanEvent } from "./content/RamadanEvent";
import { infoQuranStages, QuranStages } from "./content/QuranStages";
import { infota3zeem, ta3zeem } from "./content/ta3zeem";
import { infoTafsir, Tafsir } from "./content/Tafsir";

export const allCourses: Record<string, CourseData> = {
  "abnothemen": {
    info: infoAbnothemen,
    content: Abnothemen,
  },
  "ta3zeem-al3elm": {
    info: infota3zeem,
    content: ta3zeem,
  },
  "tafsir": {
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
