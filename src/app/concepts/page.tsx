"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { CONCEPTS } from "@/data/concepts";
import { LAYER_META } from "@/lib/types";

export default function ConceptsIndex() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-violet mb-2">{t({ en: "Index", zh: "目录" })}</div>
        <h1 className="display text-4xl md:text-6xl tracking-tightest leading-tight text-text">{t({ en: "Deep concepts.", zh: "深层概念。" })}</h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Seven concepts that each layer keeps pointing back at: the Hard Problem of Consciousness, Integrated Information Theory, It from Bit, the Holographic Universe, Wolfram's Computational Universe, the Mathematical Universe Hypothesis, the Anthropic Principle.",
            zh: "每一层都不断回指的七个概念：意识难题、整合信息论、It from Bit、全息宇宙、Wolfram 的计算宇宙、数学宇宙假说、人择原理。",
          })}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {CONCEPTS.map((c) => {
          const m = LAYER_META[c.layer];
          return (
            <Link
              key={c.slug}
              href={`/concept/${c.slug}`}
              className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-6"
              style={{ borderLeft: `2px solid ${m.color}` }}
            >
              <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] mb-2" style={{ color: m.color }}>
                L{m.num} · {t({ en: m.en, zh: m.zh })}
              </div>
              <div className="display text-2xl md:text-3xl text-text group-hover:text-gold transition-colors leading-tight mb-2">{t(c.title)}</div>
              <div className="font-display italic text-muted text-[15px] leading-snug mb-3">{t(c.subtitle)}</div>
              <p className="text-text-2 text-[13.5px] leading-relaxed line-clamp-3">{t(c.kernel)}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
