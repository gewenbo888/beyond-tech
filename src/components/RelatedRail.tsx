"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { LAYER_BY_SLUG } from "@/data/layers";
import { THINKER_BY_SLUG } from "@/data/thinkers";
import { CONCEPT_BY_SLUG } from "@/data/concepts";
import { LAYER_META } from "@/lib/types";

export default function RelatedRail({
  layers = [], thinkers = [], concepts = [],
}: { layers?: string[]; thinkers?: string[]; concepts?: string[] }) {
  const { t } = useLang();
  return (
    <aside className="space-y-6 border-l border-line pl-6">
      {layers.length > 0 && (
        <div>
          <h5 className="label mb-2">{t({ en: "Layers it invokes", zh: "它召唤的层" })}</h5>
          <ul className="space-y-1.5">
            {layers.map((s) => {
              const l = LAYER_BY_SLUG[s];
              if (!l) return null;
              const meta = LAYER_META[l.slug];
              return (
                <li key={s}>
                  <Link href={`/layer/${s}`} className="group flex items-baseline gap-2 hover:text-gold transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: meta.color }} />
                    <span className="text-[14px] text-text group-hover:text-gold">{t({ en: meta.en, zh: meta.zh })}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {thinkers.length > 0 && (
        <div>
          <h5 className="label mb-2">{t({ en: "Thinkers", zh: "思考者" })}</h5>
          <ul className="space-y-1.5">
            {thinkers.map((s) => {
              const k = THINKER_BY_SLUG[s];
              if (!k) return null;
              const meta = LAYER_META[k.layer];
              return (
                <li key={s}>
                  <Link href={`/thinker/${s}`} className="group flex items-baseline gap-2 hover:text-gold transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: meta.color }} />
                    <span className="text-[14px] text-text group-hover:text-gold">{k.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {concepts.length > 0 && (
        <div>
          <h5 className="label mb-2">{t({ en: "Concepts", zh: "概念" })}</h5>
          <ul className="space-y-1.5">
            {concepts.map((s) => {
              const c = CONCEPT_BY_SLUG[s];
              if (!c) return null;
              const meta = LAYER_META[c.layer];
              return (
                <li key={s}>
                  <Link href={`/concept/${s}`} className="group flex items-baseline gap-2 hover:text-gold transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: meta.color }} />
                    <span className="text-[14px] text-text group-hover:text-gold">{t(c.title)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
}
