"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { TIMELINE } from "@/data/timeline";
import { LAYER_META } from "@/lib/types";

export default function CosmicTimeline() {
  const { t } = useLang();
  const [hover, setHover] = useState<number | null>(null);

  const eras = useMemo(() => {
    const bins: Record<string, typeof TIMELINE> = {};
    TIMELINE.forEach((ev) => {
      const era = ev.year < 0 ? "BCE" :
        ev.year < 1000 ? "0–1000 CE" :
        ev.year < 1700 ? "1000–1700" :
        ev.year < 1900 ? "1700–1900" :
        ev.year < 2000 ? "20th c." :
        ev.year < 2030 ? "21st c." : "Futures";
      (bins[era] ||= []).push(ev);
    });
    const order = ["BCE", "0–1000 CE", "1000–1700", "1700–1900", "20th c.", "21st c.", "Futures"];
    return order
      .filter((e) => bins[e])
      .map((e) => ({ era: e, items: [...bins[e]].sort((a, b) => a.year - b.year) }));
  }, []);

  return (
    <div className="space-y-12">
      {eras.map(({ era, items }) => (
        <section key={era} className="grid md:grid-cols-[150px_1fr] gap-8">
          <div className="md:sticky md:top-24 md:self-start">
            <div className="display text-3xl md:text-4xl text-gold leading-none">{era}</div>
          </div>
          <ol className="border-l border-line pl-6 space-y-4">
            {items.map((ev, i) => {
              const meta = LAYER_META[ev.layer];
              const ix = TIMELINE.indexOf(ev);
              const isHover = hover === ix;
              return (
                <li
                  key={`${ev.year}-${i}`}
                  className="relative"
                  onMouseEnter={() => setHover(ix)}
                  onMouseLeave={() => setHover(null)}
                >
                  <span
                    className="absolute -left-[31px] top-2 inline-block w-2.5 h-2.5 rounded-full ring-2 ring-bg transition-transform"
                    style={{
                      background: meta.color,
                      transform: isHover ? "scale(1.4)" : "scale(1)",
                    }}
                  />
                  <Link
                    href={`/layer/${ev.layer}`}
                    className="block py-1 -ml-3 pl-3 rounded-sm hover:bg-surface/60 transition-colors group"
                  >
                    <div className="flex flex-wrap items-baseline gap-3 mb-0.5">
                      <span className="font-mono text-[11px]" style={{ color: meta.color }}>
                        {ev.year < 0 ? `${Math.abs(ev.year)} BCE` : ev.year}
                      </span>
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
                        L{meta.num} · {t({ en: meta.en, zh: meta.zh })}
                      </span>
                    </div>
                    <div className="display text-lg md:text-xl text-text group-hover:text-gold transition-colors leading-snug">
                      {t(ev.title)}
                    </div>
                    <div className="text-muted text-[13.5px] mt-0.5">{t(ev.note)}</div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
