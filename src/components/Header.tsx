"use client";
import Link from "next/link";
import LangToggle from "./LangToggle";
import { useLang } from "@/lib/i18n";

export default function Header() {
  const { t } = useLang();
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="0.8" className="text-gold">
                <circle cx="16" cy="16" r="11" opacity=".35"/>
                <circle cx="16" cy="16" r="7" opacity=".55"/>
                <circle cx="16" cy="16" r="3" opacity=".85"/>
              </g>
              <circle cx="16" cy="16" r="1.3" fill="currentColor" className="text-gold animate-pulse-soft"/>
              <g fill="currentColor" className="text-cosmic" opacity=".7">
                <circle cx="6"  cy="6"  r="0.7"/>
                <circle cx="26" cy="6"  r="0.7"/>
                <circle cx="6"  cy="26" r="0.7"/>
                <circle cx="26" cy="26" r="0.7"/>
              </g>
            </svg>
          </span>
          <div className="leading-tight">
            <div className="monumental text-[17px] md:text-[19px] text-text">
              {t({ en: "BEYOND TECHNOLOGY", zh: "技术之上" })}
            </div>
            <div className="micro text-dim">
              {t({ en: "Eight layers · One temple · Bilingual archive", zh: "八层 · 一座神庙 · 双语档案" })}
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <Link href="/hierarchy" className="hover:text-gold transition-colors">{t({ en: "Hierarchy", zh: "层级" })}</Link>
          <Link href="/layers"    className="hover:text-gold transition-colors">{t({ en: "Layers", zh: "诸层" })}</Link>
          <Link href="/thinkers"  className="hover:text-gold transition-colors">{t({ en: "Thinkers", zh: "思考者" })}</Link>
          <Link href="/concepts"  className="hover:text-gold transition-colors">{t({ en: "Concepts", zh: "概念" })}</Link>
          <Link href="/timeline"  className="hover:text-gold transition-colors">{t({ en: "Timeline", zh: "时间线" })}</Link>
          <Link href="/future"    className="hover:text-gold transition-colors">{t({ en: "Futures", zh: "未来" })}</Link>
        </nav>
        <LangToggle />
      </div>
    </header>
  );
}
