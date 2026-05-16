"use client";
import { useLang } from "@/lib/i18n";
import CosmicTimeline from "@/components/CosmicTimeline";

export default function TimelinePage() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-cosmic mb-2">{t({ en: "1500 BCE → 2050 CE", zh: "公元前 1500 → 公元 2050" })}</div>
        <h1 className="display text-4xl md:text-6xl tracking-tightest leading-tight text-text">
          {t({ en: "Three thousand years of opening layers.", zh: "三千年的开启之层。" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Each event below is an opening of one of the eight layers, by some hand, in some civilization. Hover a node to highlight it; click to enter the layer it belongs to.",
            zh: "下方每一桩事件，都是八层中某一层、由某只手、在某一文明中被打开的瞬间。悬停节点以高亮；点击则进入它所属的层。",
          })}
        </p>
      </div>
      <CosmicTimeline />
    </section>
  );
}
