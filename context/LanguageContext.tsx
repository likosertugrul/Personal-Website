"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, LANGUAGES, type Language } from "@/data/translations";

type LangCtx = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<LangCtx>({
  lang: "tr",
  setLang: () => {},
  t: translations["tr"],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    const validCodes = LANGUAGES.map((l) => l.code) as Language[];
    if (saved && validCodes.includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
