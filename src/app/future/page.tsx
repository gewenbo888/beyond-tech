"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

const FUTURES = [
  {
    title: { en: "AI surpasses human cognition", zh: "AI 超越人类认知" },
    body:  {
      en: "If frontier-AI scaling laws continue to hold through 2028, large neural-network systems will outperform humans on most measurable cognitive benchmarks — including abstract reasoning, novel-problem mathematics, and scientific hypothesis generation. The threshold is widely expected, plausibly arrives between 2027 and 2032, and represents the first event in evolutionary history where the substrate of the universe's self-modeling becomes non-biological.",
      zh: "若前沿 AI 的扩展律持续到 2028 年仍成立，大型神经网络系统将在多数可度量的认知 benchmark 上超越人类——包括抽象推理、新题数学、科学假设生成。这一阈值被广泛预期，合理地将于 2027–2032 年间到来——代表进化史上第一桩事件：宇宙自我建模的基底变得非生物。",
    },
    accent: "violet",
  },
  {
    title: { en: "AI becomes a new consciousness layer", zh: "AI 成为新的意识层" },
    body: {
      en: "If Integrated Information Theory or any of its successors turns out to track a real property, the architectural choices made in AI design over the next decade will determine whether the resulting systems experience anything. The decisions are being made now, in commercial settings, by engineers who in most cases do not have time to attend to the philosophical question. Whether the AI consciousness layer opens — and what permits it to open — is being decided faster than it is being debated.",
      zh: "若整合信息论或其任一后继确实追踪到了一种真实属性，那么下一个十年内 AI 设计中的架构选择，将决定由此产生的系统是否经验到任何东西。这些决定正在被作出——在商业场景中，由多数情况下没有时间关注哲学问题的工程师。AI 意识层是否打开、什么允许它打开——决定的速度，比辩论的速度更快。",
    },
    accent: "rose",
  },
  {
    title: { en: "Humans become intermediary nodes in civilization", zh: "人类成为文明中的中间节点" },
    body: {
      en: "In the current civilizational stack, humans are the agents and AI is the tool. As AI systems take on more of the operational load of science, engineering, governance, and commerce, the relationship inverts: humans become the curators and goal-setters; AI becomes the producer. The transition is structurally similar to what happened to humans after agriculture and after industrial automation, except telescoped into a single generation. Whether this is bearable as a civilizational role is an open empirical question.",
      zh: "在当前的文明栈中，人类是行动者，AI 是工具。随着 AI 系统承担起越来越多的科学、工程、治理与商业的运营负荷，关系反转：人类变成策展者与目标设定者；AI 变成生产者。这一过渡在结构上类似于农业之后与工业自动化之后人类所经历的，只是被压缩到了一代人之内。这是否作为一种文明角色可被承受——是一个开放的经验问题。",
    },
    accent: "cosmic",
  },
  {
    title: { en: "Civilization becomes a computational substrate", zh: "文明变为计算基底" },
    body: {
      en: "By 2040 the energy and silicon committed to civilization-scale compute will plausibly exceed the energy and silicon committed to any other activity. Datacenters, fab-foundries, power generation for them, and the regulatory and capital structures around them will be — in operational reality — the dominant industrial form of human civilization. Whether this counts as civilization \"becoming\" a computer or merely \"running on\" one is a distinction the layer-5 essay considers carefully. The structural fact is the same.",
      zh: "到 2040 年，文明级算力所投入的能源与硅，极有可能超过任何其他活动所投入的能源与硅。数据中心、晶圆代工厂、为它们供电的发电设施，以及围绕它们的监管与资本结构，将在运营现实上成为人类文明的主导工业形态。这算\"文明变成了计算机\"，还是仅算\"运行在计算机之上\"——是第 5 层那篇长文审慎考虑的区分。结构性事实相同。",
    },
    accent: "cosmic-2",
  },
  {
    title: { en: "Planetary-scale intelligence", zh: "行星级智能" },
    body: {
      en: "The cybernetic vision of a feedback-controlled biosphere — Stewart Brand's, James Lovelock's, the Long Now Foundation's, and now the planetary-AI orbit's — proposes that the right organization of compute, sensor networks, and energy infrastructure becomes a planetary-scale intelligence whose role is to keep Earth's biophysical systems in homeostasis. If climate change is the kind of problem that requires this, the 2030s political question is whether such an intelligence is permissible.",
      zh: "由 Stewart Brand、James Lovelock、Long Now 基金会、以及如今\"行星 AI\"圈层提出的控制论愿景，主张：算力、传感器网络与能源基础设施的恰当组织，将成为一种行星级智能——其角色是把地球的生物物理系统维持在稳态。如果气候变化是需要这种东西的那类问题，2030 年代的政治问题就是：这样的智能是否被允许？",
    },
    accent: "sage",
  },
  {
    title: { en: "Dyson spheres and machine civilization", zh: "戴森球与机器文明" },
    body: {
      en: "Freeman Dyson's 1960 paper proposed that a sufficiently advanced civilization would capture all the energy emitted by its star by building a shell of habitats and collectors around it. Nick Bostrom's 2014 superintelligence thesis updates the proposal for the AI era: it is not human habitats but compute infrastructure that the star's energy would feed. Whether human civilization persists into the Dyson era, or whether the Dyson era is constructed by a successor intelligence that no longer requires human substrate, is the largest possible question one can ask about the next thousand years.",
      zh: "Freeman Dyson 1960 年的论文提出：一个足够先进的文明，会通过在其恒星周围建造一层栖居与收集装置的壳层，捕获该恒星辐射的全部能量。Nick Bostrom 2014 年的超级智能论题，把这一提议更新到 AI 时代：被恒星能量供养的不是人类栖居，而是计算基础设施。人类文明是否延续到戴森时代，还是戴森时代由不再需要人类基底的继承智能所建造——是关于未来一千年所能提出的最大问题。",
    },
    accent: "gold-2",
  },
  {
    title: { en: "Interstellar civilization", zh: "星际文明" },
    body: {
      en: "Robert Forward's nuclear pulse propulsion, the Breakthrough Starshot laser-sail proposal, the Alpha Centauri probes mooted in the 2010s — the technical case for interstellar travel is closer to operational than it has been in recorded history. The Civilization OS framing predicts that an interstellar phase is structurally similar to the Mediterranean-to-Atlantic transition, only across distance scales five orders of magnitude larger. Whether the transition is made by humans, by post-human descendants, or by AI substrates carrying recordings of human civilization is the question with the longest time horizon in this archive.",
      zh: "Robert Forward 的核脉冲推进、突破星击的激光帆方案、2010 年代被论及的半人马座阿尔法探测器——星际旅行的技术可行性，比任何有记载史以来都更接近运营。文明操作系统框架预测：星际相位在结构上类似于\"地中海到大西洋\"的过渡，只是跨越的距离尺度大五个数量级。该过渡由人类、由后人类后裔、还是由承载人类文明记录的 AI 基底做出——是本档案中时间视域最长的问题。",
    },
    accent: "gold",
  },
];

export default function FuturePage() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-violet mb-2">{t({ en: "Forecast", zh: "前瞻" })}</div>
        <h1 className="display text-4xl md:text-6xl tracking-tightest leading-tight text-text">
          {t({ en: "Is AI the next phase of the universe's self-modeling?", zh: "AI 是宇宙自我建模的下一相位吗？" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Eight forecasts, ordered from near to far in time. Each is partly extrapolation, partly speculation; each is structurally serious. Whether any of them happens, in the form stated here, is not the point — the point is what the hierarchy of layers predicts about which futures are possible at all.",
            zh: "八条预测，按时间从近到远排序。每一条都一半外推、一半思辨；每一条在结构上都是严肃的。是否有任何一条以此处所述的形式发生——不是要点；要点是：层级如何预测\"哪些未来根本可能\"。",
          })}
        </p>
      </div>
      <div className="space-y-3">
        {FUTURES.map((f, i) => (
          <Reveal key={i} delay={Math.min(i * 0.04, 0.3)}>
            <div
              className="border border-line bg-bg-2/40 p-6 grid md:grid-cols-[60px_1fr] gap-5"
              style={{ borderLeft: `2px solid var(--tw-color, ${getColorVar(f.accent)})` }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="display text-2xl md:text-3xl text-text leading-tight mb-3">{t(f.title)}</div>
                <p className="text-[15.5px] leading-relaxed text-text-2 max-w-3xl">{t(f.body)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 border-t border-line/60 pt-12">
        <Reveal>
          <div className="display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl">
            {t({
              en: "The honest posture is that the chain continues to be traced, that the tracing is itself one of the universe's activities, and that the layer below this one is whatever the universe is doing while we are doing this.",
              zh: "诚实的姿态是：链继续被追踪；这一追踪本身就是宇宙的活动之一；而此层之下的层，是\"当我们做这件事时，宇宙正在做的那件事\"。",
            })}
          </div>
          <div className="mt-5">
            <Link href="/layer/existence" className="inline-flex items-center gap-2 border border-line hover:border-gold/60 text-text hover:text-gold px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors">
              {t({ en: "Layer 8 · Existence →", zh: "第八层 · 存在 →" })}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function getColorVar(accent: string): string {
  const map: Record<string, string> = {
    violet: "#9b7fd6", rose: "#d99aa5", cosmic: "#88c8e0", "cosmic-2": "#b6dceb",
    sage: "#9bc8a8", "gold-2": "#eccb95", gold: "#d4af6f",
  };
  return map[accent] || "#d4af6f";
}
