"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { THINKERS } from "@/data/thinkers";
import { LAYER_META } from "@/lib/types";

export default function ThinkersIndex() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-gold mb-2">{t({ en: "Index", zh: "目录" })}</div>
        <h1 className="display text-4xl md:text-6xl tracking-tightest leading-tight text-text">{t({ en: "The thinkers.", zh: "思考者。" })}</h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Fourteen figures, anchored across the eight layers. Each profile maps kernel · contribution · significance, and links forward and backward through the layer they carry.",
            zh: "十四位人物，分锚于八层之中。每一份档案勾画其内核 · 贡献 · 意义，并通过他们所背负的那一层向前后链接。",
          })}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {THINKERS.map((k) => {
          const m = LAYER_META[k.layer];
          return (
            <Link
              key={k.slug}
              href={`/thinker/${k.slug}`}
              className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-6"
              style={{ borderTop: `2px solid ${m.color}` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em]" style={{ color: m.color }}>
                  L{m.num} · {t({ en: m.en, zh: m.zh })}
                </span>
                <span className="font-mono text-[10.5px] text-dim">{k.born}</span>
              </div>
              <div className="display text-2xl text-text group-hover:text-gold transition-colors leading-tight mb-1">{k.name}</div>
              {k.nameZh && <div className="display lang-zh text-base text-muted leading-snug mb-2">{k.nameZh}</div>}
              <div className="text-muted text-[14px] leading-snug mb-3">{t(k.field)}</div>
              <p className="text-text-2 text-[13.5px] leading-relaxed line-clamp-3">{t(k.kernel)}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
