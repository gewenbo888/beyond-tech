"use client";
import { useLang } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center border border-line/70 rounded-sm overflow-hidden font-mono text-[11px] tracking-[0.12em] uppercase">
      <button onClick={() => setLang("en")} className={`px-2.5 py-1 transition-colors ${lang === "en" ? "bg-gold text-bg" : "text-muted hover:text-text"}`}>EN</button>
      <button onClick={() => setLang("zh")} className={`px-2.5 py-1 transition-colors ${lang === "zh" ? "bg-gold text-bg" : "text-muted hover:text-text"}`}>中文</button>
    </div>
  );
}
