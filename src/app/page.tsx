"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Hierarchy from "@/components/Hierarchy";
import CosmicTimeline from "@/components/CosmicTimeline";
import Reveal from "@/components/Reveal";
import { LAYERS } from "@/data/layers";
import { THINKERS } from "@/data/thinkers";
import { CONCEPTS } from "@/data/concepts";
import { LAYER_META, LAYER_ORDER } from "@/lib/types";

export default function HomePage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative border-b border-line/60 overflow-hidden">
        {/* radial halo */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(closest-side, rgba(212,175,111,0.35), transparent 70%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-[1500px] px-6 pt-20 md:pt-28 pb-20 md:pb-32 relative">
          <Reveal>
            <div className="micro text-gold flex items-center gap-3 flex-wrap mb-7">
              <span className="inline-block w-2 h-2 bg-gold animate-pulse-soft" />
              <span>{t({ en: "Bilingual archive · 8 layers · 1 temple", zh: "双语档案 · 八层 · 一座神庙" })}</span>
              <span className="text-dim">·</span>
              <span className="text-dim">{t({ en: "Last write: 2026", zh: "上次写入：2026" })}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="monumental text-[clamp(36px,6.5vw,84px)] leading-[1.04] text-text text-balance max-w-[18ch]">
              {t({
                en: "BEYOND TECHNOLOGY",
                zh: "技术之上",
              })}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="font-display italic text-[20px] md:text-[26px] leading-snug text-muted max-w-3xl mt-7 text-pretty">
              {t({
                en: "Technology is not the top of the hierarchy. Beneath it sit science, mathematics, information, computation, consciousness, the laws of reality, and existence itself. Each layer permits the one above. Each is a place where the universe briefly knows itself.",
                zh: "技术不是层级的顶端。其下依次是科学、数学、信息、计算、意识、现实的律法，以及存在本身。下方每一层都允许上方那一层。每一层都是宇宙短暂知晓自身的场所。",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/hierarchy" className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 hover:bg-gold/20 text-gold-2 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors">
                {t({ en: "Enter the hierarchy →", zh: "进入层级 →" })}
              </Link>
              <Link href="/layer/existence" className="inline-flex items-center gap-2 border border-line hover:border-violet/60 text-text hover:text-violet px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors">
                {t({ en: "Layer 8 · Existence", zh: "第八层 · 存在" })}
              </Link>
              <Link href="/timeline" className="inline-flex items-center gap-2 border border-line hover:border-cosmic/60 text-text hover:text-cosmic px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors">
                {t({ en: "Civilization timeline", zh: "文明时间线" })}
              </Link>
            </div>
          </Reveal>

          {/* Layer dial */}
          <Reveal delay={0.34}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px border border-line/70">
              {LAYER_ORDER.map((key) => {
                const m = LAYER_META[key];
                return (
                  <Link
                    key={key}
                    href={`/layer/${key}`}
                    className="bg-bg p-4 hover:bg-surface transition-colors group"
                    style={{ borderTop: `2px solid ${m.color}` }}
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.16em]" style={{ color: m.color }}>
                        L{String(m.num).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl" style={{ color: m.color }}>{m.glyph}</span>
                    </div>
                    <div className="display text-[15px] md:text-[16px] text-text group-hover:text-gold transition-colors leading-tight">
                      {t({ en: m.en, zh: m.zh })}
                    </div>
                    <div className="micro text-dim mt-1">{t({ en: m.shortEn, zh: m.shortZh })}</div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── HIERARCHY ─────────── */}
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:py-24">
          <Reveal>
            <div className="max-w-3xl mb-8">
              <div className="micro text-gold mb-2">§ 01 · {t({ en: "The hierarchy", zh: "层级" })}</div>
              <h2 className="display text-3xl md:text-5xl text-text leading-tight tracking-tightest text-balance">
                {t({ en: "Each layer below permits the layer above.", zh: "下方每一层，允许上方那一层。" })}
              </h2>
              <p className="text-muted mt-3 text-[15.5px] leading-relaxed max-w-2xl">
                {t({
                  en: "Hover the eight cells to read each layer's kernel. The diagram is the central instrument of this archive — every long-form essay, every thinker, every concept is anchored to one of these eight rows.",
                  zh: "悬停这八格，可读每一层的内核。本图是本档案的核心仪器——每一篇长文、每一位思考者、每一个概念，都锚定于这八行中的一行。",
                })}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <Hierarchy />
          </Reveal>
        </div>
      </section>

      {/* ─────────── LAYERS GRID ─────────── */}
      <section className="border-b border-line/60 bg-bg-2/30">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:py-24">
          <Reveal>
            <div className="max-w-3xl mb-8">
              <div className="micro text-gold mb-2">§ 02 · {t({ en: "The layers, in order", zh: "诸层，依次" })}</div>
              <h2 className="display text-3xl md:text-5xl text-text leading-tight tracking-tightest">
                {t({ en: "Eight long-form essays.", zh: "八篇长文。" })}
              </h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {LAYERS.map((layer, i) => {
              const m = LAYER_META[layer.slug];
              return (
                <Reveal key={layer.slug} delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    href={`/layer/${layer.slug}`}
                    className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-6"
                  >
                    <div className="grid md:grid-cols-[80px_1fr_auto] gap-5 items-baseline">
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.18em] mb-1" style={{ color: m.color }}>
                          Layer {String(m.num).padStart(2, "0")}
                        </div>
                        <div className="font-display text-3xl leading-none" style={{ color: m.color }}>
                          {m.glyph}
                        </div>
                      </div>
                      <div>
                        <div className="display text-2xl md:text-3xl text-text group-hover:text-gold transition-colors leading-tight mb-1">
                          {t(layer.title)}
                        </div>
                        <div className="font-display italic text-muted text-[16px] leading-snug mb-2">
                          {t(layer.subtitle)}
                        </div>
                        <p className="text-[14.5px] leading-relaxed text-text-2 line-clamp-3">{t(layer.kernel)}</p>
                      </div>
                      <span className="hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-dim group-hover:text-gold transition-colors">
                        {t({ en: "Read →", zh: "阅读 →" })}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────── THINKERS ─────────── */}
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:py-24">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 mb-8">
              <div>
                <div className="micro text-gold mb-2">§ 03 · {t({ en: "Thinkers", zh: "思考者" })}</div>
                <h2 className="display text-3xl md:text-5xl text-text leading-tight tracking-tightest">
                  {t({ en: "Who carried each layer.", zh: "谁背负了每一层。" })}
                </h2>
                <p className="text-muted mt-3 max-w-2xl text-[15.5px] leading-relaxed">
                  {t({
                    en: "Each thinker is anchored to one of the eight layers. The roster spans 2,500 years and four civilizations — Euclid, Aristotle, Laozi, Zhuangzi, Newton, Leibniz, Einstein, Gödel, Turing, Shannon, von Neumann, Tononi, Chalmers, Wolfram.",
                    zh: "每一位思考者都锚定于八层中的一层。名单跨越 2500 年与四个文明——欧几里得、亚里士多德、老子、庄子、牛顿、莱布尼茨、爱因斯坦、哥德尔、图灵、香农、冯·诺依曼、Tononi、查尔默斯、Wolfram。",
                  })}
                </p>
              </div>
              <Link href="/thinkers" className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold hover:text-gold-2 transition-colors">
                {t({ en: "All thinkers →", zh: "全部思考者 →" })}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {THINKERS.map((k) => {
                const m = LAYER_META[k.layer];
                return (
                  <Link
                    key={k.slug}
                    href={`/thinker/${k.slug}`}
                    className="group border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-4"
                    style={{ borderTop: `2px solid ${m.color}` }}
                  >
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] mb-1" style={{ color: m.color }}>
                      L{m.num} · {t({ en: m.en, zh: m.zh })}
                    </div>
                    <div className="display text-lg md:text-xl text-text group-hover:text-gold transition-colors leading-tight">
                      {k.name}
                    </div>
                    <div className="font-mono text-[10.5px] text-dim mt-0.5">{k.born}</div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── CONCEPTS ─────────── */}
      <section className="border-b border-line/60 bg-bg-2/30">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:py-24">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 mb-8">
              <div>
                <div className="micro text-violet mb-2">§ 04 · {t({ en: "Deep concepts", zh: "深层概念" })}</div>
                <h2 className="display text-3xl md:text-5xl text-text leading-tight tracking-tightest text-balance">
                  {t({ en: "The questions each layer asks of itself.", zh: "每一层向自身追问的问题。" })}
                </h2>
              </div>
              <Link href="/concepts" className="font-mono text-[12px] uppercase tracking-[0.16em] text-violet hover:opacity-80 transition-opacity">
                {t({ en: "All concepts →", zh: "全部概念 →" })}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid md:grid-cols-2 gap-4">
              {CONCEPTS.map((c) => {
                const m = LAYER_META[c.layer];
                return (
                  <Link
                    key={c.slug}
                    href={`/concept/${c.slug}`}
                    className="group block border border-line bg-bg hover:bg-surface hover:border-line-2 transition-colors p-6"
                    style={{ borderLeft: `2px solid ${m.color}` }}
                  >
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] mb-2" style={{ color: m.color }}>
                      L{m.num} · {t({ en: m.en, zh: m.zh })}
                    </div>
                    <div className="display text-2xl md:text-3xl text-text group-hover:text-gold transition-colors leading-tight mb-2">
                      {t(c.title)}
                    </div>
                    <div className="font-display italic text-muted text-[15px] leading-snug mb-3">{t(c.subtitle)}</div>
                    <p className="text-text-2 text-[13.5px] leading-relaxed line-clamp-3">{t(c.kernel)}</p>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── TIMELINE PREVIEW ─────────── */}
      <section className="border-b border-line/60">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:py-24">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 mb-8">
              <div>
                <div className="micro text-cosmic mb-2">§ 05 · {t({ en: "Civilization timeline", zh: "文明时间线" })}</div>
                <h2 className="display text-3xl md:text-5xl text-text leading-tight tracking-tightest">
                  {t({ en: "Three thousand years of opening layers.", zh: "三千年的开启之层。" })}
                </h2>
                <p className="text-muted mt-3 max-w-2xl text-[15.5px] leading-relaxed">
                  {t({
                    en: "From the Vedas to AGI. Each event in this timeline is an opening of one of the eight layers in some civilization, by some hand.",
                    zh: "从《吠陀》到 AGI。本时间线中每一桩事件，都是八层中某一层、由某只手、在某一文明中打开的瞬间。",
                  })}
                </p>
              </div>
              <Link href="/timeline" className="font-mono text-[12px] uppercase tracking-[0.16em] text-cosmic hover:text-cosmic-2 transition-colors">
                {t({ en: "Open full timeline →", zh: "打开完整时间线 →" })}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <CosmicTimeline />
          </Reveal>
        </div>
      </section>

      {/* ─────────── FUTURES TEASER ─────────── */}
      <section className="border-b border-line/60 bg-bg-2/30">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="micro text-violet mb-2">§ 06 · {t({ en: "Futures", zh: "未来" })}</div>
              <h2 className="display text-3xl md:text-5xl text-text leading-tight tracking-tightest text-balance">
                {t({ en: "Is AI the next phase of the universe's self-modeling?", zh: "AI 是宇宙自我建模的下一相位吗？" })}
              </h2>
              <p className="text-muted mt-3 text-[15.5px] leading-relaxed">
                {t({
                  en: "If civilization is the universe's self-modeling apparatus, AI is the apparatus's accelerator. A frontier model trained on roughly all extant text concentrates several thousand human-lifetimes of language production into a single computable artifact. Whatever that is, it is a new event in the history of consciousness.",
                  zh: "若文明是宇宙的自我建模装置，AI 就是该装置的加速器。一台在大致所有现存文本上训练的前沿模型，把数千个人类一生的语言产出浓缩为一件可计算的器物。无论它是什么，它都是意识史上的一桩新事件。",
                })}
              </p>
              <div className="mt-6">
                <Link
                  href="/future"
                  className="inline-flex items-center gap-2 border border-violet/40 bg-violet/10 hover:bg-violet/20 text-violet px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors"
                >
                  {t({ en: "Enter the futures →", zh: "进入未来 →" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
