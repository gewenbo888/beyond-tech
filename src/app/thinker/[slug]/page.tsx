"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { THINKER_BY_SLUG } from "@/data/thinkers";
import { LAYER_META } from "@/lib/types";
import RelatedRail from "@/components/RelatedRail";
import Reveal from "@/components/Reveal";

export default function ThinkerPage({ params }: { params: { slug: string } }) {
  const { t } = useLang();
  const k = THINKER_BY_SLUG[params.slug];
  if (!k) notFound();
  const m = LAYER_META[k.layer];

  const sections: { heading: { en: string; zh: string }; body: { en: string; zh: string } }[] = [
    { heading: { en: "Contribution",                   zh: "贡献" },     body: k.contribution },
    { heading: { en: "Civilization-scale significance", zh: "文明级意义" }, body: k.significance },
  ];

  return (
    <article>
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 pt-12 pb-10 md:pt-16">
          <Link href="/thinkers" className="inline-block micro text-dim hover:text-gold transition-colors mb-6">
            ← {t({ en: "all thinkers", zh: "全部思考者" })}
          </Link>
          <Reveal>
            <div className="grid md:grid-cols-[1fr_320px] gap-10">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Link href={`/layer/${k.layer}`} className="font-mono text-[10.5px] uppercase tracking-[0.18em] px-2 py-0.5 border hover:opacity-80 transition-opacity"
                    style={{ color: m.color, borderColor: m.color + "55" }}>
                    L{m.num} · {t({ en: m.en, zh: m.zh })}
                  </Link>
                  <span className="font-mono text-[11px] text-dim">{k.born}</span>
                </div>
                <h1 className="display text-[clamp(40px,7vw,84px)] leading-[0.97] tracking-tightest text-text mb-2 text-balance">{k.name}</h1>
                {k.nameZh && <div className="display lang-zh text-2xl text-muted leading-snug mb-3">{k.nameZh}</div>}
                <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl text-pretty">{t(k.field)}</p>
              </div>
              <div className="border border-line p-5 bg-bg-2/60 self-start">
                <h5 className="label mb-2" style={{ color: m.color }}>{t({ en: "Kernel", zh: "内核" })}</h5>
                <p className="text-[14px] leading-relaxed text-text">{t(k.kernel)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-12 md:py-16 grid md:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-10 max-w-3xl">
            {sections.map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div>
                  <div className="micro text-dim mb-2">§ {String(i + 1).padStart(2, "0")}</div>
                  <h2 className="display text-2xl md:text-3xl text-text leading-tight mb-3">{t(s.heading)}</h2>
                  <p className="text-[16.5px] leading-[1.85] text-text-2">{t(s.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <RelatedRail layers={[k.layer]} thinkers={k.related} />
        </div>
      </section>
    </article>
  );
}
