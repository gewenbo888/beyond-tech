"use client";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LAYERS } from "@/data/layers";
import { LAYER_META, LAYER_ORDER } from "@/lib/types";
import type { LayerKey } from "@/lib/types";

export default function Hierarchy({ orientation = "vertical" }: { orientation?: "vertical" | "compact" }) {
  const { t } = useLang();
  const [hover, setHover] = useState<LayerKey | null>(null);

  const isCompact = orientation === "compact";

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
      {/* The eight layers as nested ascending cells */}
      <div className="space-y-2 relative">
        {/* center axis */}
        {!isCompact && (
          <div
            aria-hidden
            className="absolute left-[28px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(180deg, transparent, rgba(212,175,111,0.45), transparent)" }}
          />
        )}
        {LAYER_ORDER.map((key, i) => {
          const meta = LAYER_META[key];
          const layer = LAYERS.find((l) => l.slug === key)!;
          const isHover = hover === key;
          return (
            <Link
              key={key}
              href={`/layer/${key}`}
              onMouseEnter={() => setHover(key)}
              onMouseLeave={() => setHover(null)}
              className="block relative pl-[56px] pr-4 py-3 layer-cell group"
              style={{
                borderColor: isHover ? meta.color : undefined,
                background: isHover ? `linear-gradient(90deg, ${meta.color}12, transparent 80%)` : undefined,
              }}
            >
              {/* glyph */}
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full border"
                style={{
                  color: meta.color,
                  borderColor: meta.color + "66",
                  background: isHover ? `${meta.color}1a` : "rgba(13,16,24,0.6)",
                  fontFamily: '"Spectral", "Noto Serif SC", serif',
                  fontSize: 18,
                }}
              >
                {meta.glyph}
              </span>
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-dim tracking-[0.18em]">
                    {String(meta.num).padStart(2, "0")}
                  </span>
                  <span
                    className="display text-xl md:text-2xl transition-colors"
                    style={{ color: isHover ? meta.color : "#ede4d0" }}
                  >
                    {t({ en: meta.en, zh: meta.zh })}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {t({ en: meta.shortEn, zh: meta.shortZh })}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* side dossier */}
      <div className="border border-line bg-bg-2/60 rounded-sm p-5 sticky top-24 self-start">
        {hover ? (
          (() => {
            const meta = LAYER_META[hover];
            const layer = LAYERS.find((l) => l.slug === hover)!;
            return (
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: meta.color }}>
                    Layer {String(meta.num).padStart(2, "0")}
                  </span>
                </div>
                <div className="display text-2xl text-text leading-tight" style={{ color: meta.color }}>
                  {t({ en: meta.en, zh: meta.zh })}
                </div>
                <div className="font-display italic text-[15px] text-muted leading-snug">
                  {t(layer.subtitle)}
                </div>
                <p className="text-[13.5px] leading-relaxed text-text-2">{t(layer.kernel)}</p>
                <Link
                  href={`/layer/${hover}`}
                  className="inline-block font-mono text-[11px] uppercase tracking-[0.16em] hover:opacity-80 transition-opacity"
                  style={{ color: meta.color }}
                >
                  {t({ en: "Open layer →", zh: "打开此层 →" })}
                </Link>
              </div>
            );
          })()
        ) : (
          <div className="space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-dim">{t({ en: "Hover a layer", zh: "悬停某层" })}</div>
            <div className="display text-xl text-text leading-tight">
              {t({
                en: "Eight layers. The top is the most familiar; the bottom is the deepest.",
                zh: "八层。顶部最熟悉；底部最深。",
              })}
            </div>
            <p className="text-[13.5px] leading-relaxed text-muted">
              {t({
                en: "Each layer below the current one is what permits the one above to exist. Technology is permitted by science. Science is permitted by mathematics. Mathematics, information, computation, consciousness, the laws of reality, and existence itself sit progressively beneath.",
                zh: "下方每一层，都是上方那一层得以存在的前提。技术因科学而被允许。科学因数学而被允许。数学、信息、计算、意识、现实律法以及存在本身依次更深。",
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
