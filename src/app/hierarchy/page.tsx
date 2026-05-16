"use client";
import { useLang } from "@/lib/i18n";
import Hierarchy from "@/components/Hierarchy";

export default function HierarchyPage() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-gold mb-2">{t({ en: "The eight layers", zh: "八层" })}</div>
        <h1 className="display text-4xl md:text-6xl tracking-tightest leading-tight text-text">
          {t({ en: "The hierarchy of reality.", zh: "现实的层级。" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Hover any of the eight layers to read its kernel; click to enter its long-form essay. The lower-numbered layers are the more familiar; the higher-numbered ones are progressively deeper.",
            zh: "悬停八层中的任一层以阅读其内核；点击则进入其长文。编号较低的层更熟悉；编号较高的层依次更深。",
          })}
        </p>
      </div>
      <Hierarchy />
    </section>
  );
}
