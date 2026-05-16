"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { CONCEPT_BY_SLUG } from "@/data/concepts";
import { LAYER_META } from "@/lib/types";
import RelatedRail from "@/components/RelatedRail";
import Reveal from "@/components/Reveal";

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const { t } = useLang();
  const c = CONCEPT_BY_SLUG[params.slug];
  if (!c) notFound();
  const m = LAYER_META[c.layer];

  const paragraphs = t(c.body).split(/\n\n+/);

  return (
    <article>
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 pt-12 pb-10 md:pt-16">
          <Link href="/concepts" className="inline-block micro text-dim hover:text-violet transition-colors mb-6">
            ← {t({ en: "all concepts", zh: "全部概念" })}
          </Link>
          <Reveal>
            <Link href={`/layer/${c.layer}`} className="inline-block font-mono text-[10.5px] uppercase tracking-[0.18em] px-2 py-0.5 border hover:opacity-80 mb-4"
              style={{ color: m.color, borderColor: m.color + "55" }}>
              L{m.num} · {t({ en: m.en, zh: m.zh })}
            </Link>
            <h1 className="display text-[clamp(36px,6vw,80px)] leading-[0.97] tracking-tightest text-text mb-3 text-balance max-w-4xl">{t(c.title)}</h1>
            <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl text-pretty">{t(c.subtitle)}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-12 md:py-16 grid md:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-7 max-w-3xl">
            <Reveal>
              <p className="font-display italic text-[20px] md:text-[22px] leading-snug text-text border-l-2 pl-5" style={{ borderColor: m.color }}>
                {t(c.kernel)}
              </p>
            </Reveal>
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.4)}>
                <p className="text-[16.5px] leading-[1.9] text-text-2">{p}</p>
              </Reveal>
            ))}
          </div>
          <RelatedRail layers={[c.layer]} concepts={c.related} />
        </div>
      </section>
    </article>
  );
}
