"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LAYERS } from "@/data/layers";
import { LAYER_META } from "@/lib/types";

export default function LayersIndex() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-gold mb-2">{t({ en: "Index", zh: "目录" })}</div>
        <h1 className="display text-4xl md:text-6xl tracking-tightest leading-tight text-text">
          {t({ en: "The eight layers.", zh: "八层。" })}
        </h1>
      </div>
      <div className="space-y-3">
        {LAYERS.map((layer) => {
          const m = LAYER_META[layer.slug];
          return (
            <Link
              key={layer.slug}
              href={`/layer/${layer.slug}`}
              className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-6"
              style={{ borderLeft: `2px solid ${m.color}` }}
            >
              <div className="grid md:grid-cols-[80px_1fr_auto] gap-5 items-baseline">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] mb-1" style={{ color: m.color }}>
                    L{String(m.num).padStart(2, "0")}
                  </div>
                  <div className="font-display text-3xl leading-none" style={{ color: m.color }}>{m.glyph}</div>
                </div>
                <div>
                  <div className="display text-2xl md:text-3xl text-text group-hover:text-gold transition-colors leading-tight mb-1">{t(layer.title)}</div>
                  <div className="font-display italic text-muted text-[16px] leading-snug mb-2">{t(layer.subtitle)}</div>
                  <p className="text-[14.5px] leading-relaxed text-text-2 line-clamp-3">{t(layer.kernel)}</p>
                </div>
                <span className="hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-dim group-hover:text-gold transition-colors">
                  {t({ en: "Read →", zh: "阅读 →" })}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
