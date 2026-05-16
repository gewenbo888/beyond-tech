"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line/60 mt-20 relative">
      <div className="mx-auto max-w-[1500px] px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 md:col-span-2 space-y-3">
          <div className="monumental text-xl text-text">{t({ en: "BEYOND TECHNOLOGY", zh: "技术之上" })}</div>
          <p className="text-muted leading-relaxed max-w-md text-[14px]">
            {t({
              en: "Eight layers of reality, mapped as one bilingual archive. Technology is not the top layer. Independent · research-oriented · still writing.",
              zh: "现实的八层，绘成一份双语档案。技术不是顶层。独立 · 研究取向 · 持续书写中。",
            })}
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="micro text-dim">{t({ en: "Maps", zh: "图" })}</h5>
          <ul className="space-y-1">
            <li><Link href="/hierarchy" className="text-text hover:text-gold transition-colors">{t({ en: "Hierarchy diagram", zh: "层级图" })}</Link></li>
            <li><Link href="/timeline"  className="text-text hover:text-gold transition-colors">{t({ en: "Civilization timeline", zh: "文明时间线" })}</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h5 className="micro text-dim">{t({ en: "Archive", zh: "档案" })}</h5>
          <ul className="space-y-1">
            <li><Link href="/layers"   className="text-text hover:text-gold transition-colors">{t({ en: "Layers", zh: "诸层" })}</Link></li>
            <li><Link href="/thinkers" className="text-text hover:text-gold transition-colors">{t({ en: "Thinkers", zh: "思考者" })}</Link></li>
            <li><Link href="/concepts" className="text-text hover:text-gold transition-colors">{t({ en: "Concepts", zh: "概念" })}</Link></li>
            <li><Link href="/future"   className="text-text hover:text-gold transition-colors">{t({ en: "Futures", zh: "未来" })}</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h5 className="micro text-dim">{t({ en: "Series", zh: "系列" })}</h5>
          <ul className="space-y-1">
            <li><a href="https://psyverse.fun" className="text-text hover:text-gold transition-colors">psyverse.fun</a></li>
            <li><a href="https://psyverse.fun/atlas.html" className="text-text hover:text-gold transition-colors">{t({ en: "Atlas", zh: "图册" })}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-dim">
          <span>{t({ en: "v01 · 2026", zh: "v01 · 2026" })}</span>
          <span>{t({ en: "8 layers · 14 thinkers · 7 concepts", zh: "8 层 · 14 思考者 · 7 概念" })}</span>
          <span>{t({ en: "Bilingual EN · 中文", zh: "双语 EN · 中文" })}</span>
        </div>
      </div>
    </footer>
  );
}
