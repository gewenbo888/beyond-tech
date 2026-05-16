"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LAYER_BY_SLUG, LAYERS } from "@/data/layers";
import { LAYER_META } from "@/lib/types";
import type { LayerKey } from "@/lib/types";
import RelatedRail from "@/components/RelatedRail";
import Reveal from "@/components/Reveal";

export default function LayerPage({ params }: { params: { slug: string } }) {
  const { t } = useLang();
  const l = LAYER_BY_SLUG[params.slug];
  if (!l) notFound();
  const m = LAYER_META[l.slug];

  const idx = LAYERS.findIndex((x) => x.slug === l.slug);
  const prev = LAYERS[idx - 1];
  const next = LAYERS[idx + 1];

  return (
    <article>
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 pt-12 pb-10 md:pt-16">
          <Link href="/layers" className="inline-block micro text-dim hover:text-gold transition-colors mb-6">
            ← {t({ en: "all layers", zh: "全部层" })}
          </Link>
          <Reveal>
            <div className="grid md:grid-cols-[1fr_320px] gap-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border"
                    style={{ color: m.color, borderColor: m.color + "66", fontFamily: '"Spectral", serif', fontSize: 26 }}
                  >
                    {m.glyph}
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: m.color }}>Layer {String(m.num).padStart(2, "0")}</div>
                    <div className="micro text-dim">{t({ en: m.shortEn, zh: m.shortZh })}</div>
                  </div>
                </div>
                <h1 className="display text-[clamp(36px,6vw,80px)] leading-[0.98] tracking-tightest text-text mb-3 text-balance">
                  {t(l.title)}
                </h1>
                <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl text-pretty">
                  {t(l.subtitle)}
                </p>
              </div>
              <div className="border border-line p-5 bg-bg-2/60 self-start">
                <h5 className="label mb-2" style={{ color: m.color }}>{t({ en: "Kernel", zh: "内核" })}</h5>
                <p className="text-[14px] leading-relaxed text-text">{t(l.kernel)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-12 md:py-16 grid md:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-10 max-w-3xl">
            {l.sections.map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div>
                  <div className="micro text-dim mb-2">§ {String(i + 1).padStart(2, "0")}</div>
                  <h2 className="display text-2xl md:text-3xl text-text leading-tight mb-3">{t(s.heading)}</h2>
                  <p className="text-[16.5px] leading-[1.85] text-text-2">{t(s.body)}</p>
                </div>
              </Reveal>
            ))}

            {l.questions.length > 0 && (
              <Reveal>
                <div className="border-t border-line/60 pt-6">
                  <h3 className="label mb-3" style={{ color: m.color }}>{t({ en: "Open questions on this layer", zh: "本层的开放问题" })}</h3>
                  <ul className="space-y-2">
                    {l.questions.map((q, i) => (
                      <li key={i} className="font-display italic text-[17px] text-muted leading-relaxed">— {t(q)}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
          <RelatedRail layers={l.invokes} thinkers={l.figures} concepts={l.concepts} />
        </div>
      </section>

      {/* prev / next */}
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-10 grid grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/layer/${prev.slug}`} className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-5">
              <div className="micro text-dim mb-1">← {t({ en: "Previous", zh: "上一层" })}</div>
              <div className="display text-xl text-text group-hover:text-gold transition-colors">{t(prev.title)}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/layer/${next.slug}`} className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-5 text-right">
              <div className="micro text-dim mb-1">{t({ en: "Next", zh: "下一层" })} →</div>
              <div className="display text-xl text-text group-hover:text-gold transition-colors">{t(next.title)}</div>
            </Link>
          ) : <div />}
        </div>
      </section>
    </article>
  );
}
