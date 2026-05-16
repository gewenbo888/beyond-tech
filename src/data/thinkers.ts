import type { ThinkerNode } from "@/lib/types";

export const THINKERS: ThinkerNode[] = [
  {
    slug: "euclid", name: "Euclid", nameZh: "欧几里得",
    born: "fl. c. 300 BCE", layer: "mathematics",
    field: { en: "Geometry · the axiomatic method", zh: "几何 · 公理化方法" },
    kernel: {
      en: "Euclid is the figure in whom the deductive method becomes a portable institution. The Elements is the first canonical demonstration that a small set of postulates, rigorously applied, can generate an unbounded body of true statements.",
      zh: "欧几里得是\"演绎方法\"在他身上成为一项可移植制度的人物。《几何原本》是第一份范式演示：一小组公设若被严格运用，可生成无穷多的真命题。",
    },
    contribution: {
      en: "The Elements (13 books, c. 300 BCE) — axiomatic geometry. Number theory (Euclidean algorithm; the proof that the primes are infinite). The format of the modern mathematical text: definition, postulate, theorem, proof. The pedagogy survived for two millennia.",
      zh: "《几何原本》（13 卷，约公元前 300 年）——公理化几何。数论（欧几里得算法；素数无穷的证明）。现代数学文本的格式：定义、公设、定理、证明。其教学法持续了两千年。",
    },
    significance: {
      en: "Newton's Principia is structured \"more geometrico\" — in the manner of geometry — and is therefore an Euclidean text. Spinoza's Ethics likewise. The format that Euclid invented is the format civilization uses to think with certainty, where certainty is available.",
      zh: "牛顿《自然哲学的数学原理》以\"几何式\"结构写就——故而是一份欧几里得式的文本。斯宾诺莎《伦理学》同样。欧几里得发明的格式，是文明在\"确定性可得之处\"用以确定地思考的格式。",
    },
    related: ["newton", "godel", "turing"],
  },
  {
    slug: "newton", name: "Isaac Newton", nameZh: "牛顿",
    born: "1642–1727", layer: "science",
    field: { en: "Mathematics · Physics · Alchemy · Mint", zh: "数学 · 物理 · 炼金术 · 铸币" },
    kernel: {
      en: "Newton is the singular figure of the scientific layer's first opening. The Principia (1687) derives Kepler's laws from a single inverse-square gravitational principle, mathematizing both terrestrial and celestial motion under one structure for the first time in history.",
      zh: "牛顿是科学层第一次开启的奇点人物。《自然哲学的数学原理》（1687）从单一平方反比引力原理推出开普勒定律，史上首次把地面运动与天体运动统一于同一数学结构之下。",
    },
    contribution: {
      en: "Universal gravitation. The laws of motion. Calculus (independently with Leibniz). The reflecting telescope. Forty years of alchemy and chronology that he took at least as seriously as the physics. Royal Society president; Mint Master — responsible for British monetary policy during the silver-shortage period.",
      zh: "万有引力。运动定律。微积分（与莱布尼茨独立创立）。反射式望远镜。四十年炼金术与年代学研究——他对此至少与对物理同样认真。皇家学会会长；铸币厂主——在白银短缺时期主理英国货币政策。",
    },
    significance: {
      en: "The figure through whom mathematized natural law becomes a civilizational format. Eighteenth-century Europe, in finance and engineering as well as physics, runs on Newton's confidence that nature can be reduced to equations that predict.",
      zh: "在他身上，\"数学化的自然律\"变成一种文明格式。18 世纪欧洲——金融与工程，乃至物理——靠的是牛顿那种信心：自然可以被还原为能做预测的方程。",
    },
    related: ["euclid", "einstein", "godel"],
  },
  {
    slug: "einstein", name: "Albert Einstein", nameZh: "爱因斯坦",
    born: "1879–1955", layer: "science",
    field: { en: "Theoretical physics · the geometry of reality", zh: "理论物理 · 现实的几何" },
    kernel: {
      en: "Einstein is the figure who showed that Newton's framework is the low-velocity, low-energy approximation of a deeper geometry. The 1905 papers (special relativity, the photoelectric effect, Brownian motion) and the 1915 general relativity together constitute the second opening of the science layer.",
      zh: "爱因斯坦表明：牛顿的框架是一种更深几何的低速、低能近似。1905 年的几篇论文（狭义相对论、光电效应、布朗运动）与 1915 年的广义相对论一道，构成科学层的第二次开启。",
    },
    contribution: {
      en: "Special and general relativity. Photoelectric quantization (which fed quantum theory and won him the 1921 Nobel). The Einstein–Podolsky–Rosen argument (1935) that posed quantum entanglement as a foundational problem rather than a technicality. The cosmological constant — which he called his \"greatest blunder\" and which turned out to be approximately correct.",
      zh: "狭义与广义相对论。光电量子化（为量子理论铺路，并使他获得 1921 年诺贝尔奖）。爱因斯坦—波多尔斯基—罗森论证（1935）——将量子纠缠当作一个根本问题而非技术细节提出。宇宙学常数——他自称\"最大失误\"，后来被发现大体正确。",
    },
    significance: {
      en: "The figure in whom \"physics is geometry\" becomes a civilizational hypothesis. The 2025 cosmology that uses dark energy, the GPS that uses general-relativistic corrections, and the modern conception of spacetime as something that can be experimentally probed are all his.",
      zh: "在他身上，\"物理即几何\"变成一项文明级假设。2025 年使用暗能量的宇宙学、使用广义相对论改正的 GPS，以及把时空当作\"可被实验探测之物\"的现代观念——皆来自他。",
    },
    related: ["newton", "von-neumann", "wolfram"],
  },
  {
    slug: "godel", name: "Kurt Gödel", nameZh: "哥德尔",
    born: "1906–1978", layer: "mathematics",
    field: { en: "Mathematical logic · the limits of formal systems", zh: "数理逻辑 · 形式系统的边界" },
    kernel: {
      en: "Gödel's 1931 incompleteness theorems showed that any sufficiently expressive consistent mathematical system contains true statements it cannot prove. The result reset twentieth-century philosophy of mathematics and made the limits of formal reasoning a quantitative question rather than a metaphysical one.",
      zh: "哥德尔 1931 年的不完备定理表明：任何足够富表达力的、相容的数学系统，都包含\"它无法证明的真命题\"。这一结果重置了 20 世纪的数学哲学，把形式推理的边界从形而上学问题变为定量问题。",
    },
    contribution: {
      en: "The two incompleteness theorems. The completeness theorem for first-order logic (1929). The consistency-of-the-continuum-hypothesis result (1940). Late-career platonist work on the nature of mathematical truth. The cosmological model with rotating dust that admits closed timelike curves (1949).",
      zh: "两条不完备定理。一阶逻辑的完备性定理（1929）。连续统假设的一致性结果（1940）。晚期柏拉图主义关于数学真理本性的研究。1949 年的旋转尘埃宇宙学模型——允许闭合类时曲线。",
    },
    significance: {
      en: "The figure through whom the question \"what can be known?\" was sharpened from a philosophical question into a theorem. The post-1931 understanding of mathematics, of computer science, and of the foundations of physics is all post-Gödelian.",
      zh: "\"何者可知？\"这一问题在他身上被磨利——从一个哲学问题变为一项定理。1931 年之后对数学、计算机科学与物理学基础的理解，都是后哥德尔的。",
    },
    related: ["turing", "euclid", "newton"],
  },
  {
    slug: "turing", name: "Alan Turing", nameZh: "图灵",
    born: "1912–1954", layer: "computation",
    field: { en: "Logic · Computation · Cryptography", zh: "逻辑 · 计算 · 密码学" },
    kernel: {
      en: "Turing is the figure who turns mathematical logic into the substrate of an industrial civilization. The 1936 paper defines the universal Turing machine. The Bletchley Park work breaks Enigma. The 1950 paper poses the question \"can machines think?\" — still the question being argued in every AI lab in 2026.",
      zh: "图灵把数理逻辑变成一个工业文明的基底。1936 年的论文定义了通用图灵机。布莱切利园的工作破解了 Enigma。1950 年的论文提出\"机器能思考吗？\"——这仍是 2026 年每一个 AI 实验室在争论的问题。",
    },
    contribution: {
      en: "The universal computing machine — the abstract framework every modern processor instantiates. The decision-problem proof. The Bombe. The Turing Test. The morphogenesis paper (1952) that founded mathematical biology and presaged today's neural-pattern-formation work.",
      zh: "通用计算机——每一台现代处理器所实例化的抽象框架。判定问题的证明。Bombe。图灵测试。形态发生论文（1952）——奠定了数学生物学，并预示了今日的神经模式形成研究。",
    },
    significance: {
      en: "The civilizational figure of computation. Every artificial-intelligence project is, ultimately, a Turing project. His 1954 chemical castration and probable suicide became, half a century later, the moral test case the British government failed and formally apologized for.",
      zh: "计算的文明级人物。每一个人工智能项目最终都是一个图灵项目。1954 年的化学阉割与大概率自杀——半个世纪后，这成了英国政府未能通过、并最终正式道歉的那道道德试题。",
    },
    related: ["godel", "von-neumann", "shannon"],
  },
  {
    slug: "von-neumann", name: "John von Neumann", nameZh: "冯·诺依曼",
    born: "1903–1957", layer: "computation",
    field: { en: "Mathematics · Physics · Computing · Game theory", zh: "数学 · 物理 · 计算 · 博弈论" },
    kernel: {
      en: "Von Neumann is the figure who contributed first-rate work to seven distinct disciplines in three decades. Pure mathematics, quantum mechanics, game theory, computer architecture, nuclear weapons, weather modeling, and the theory of self-replicating automata each carry his foundational papers.",
      zh: "冯·诺依曼是三十年间在七个截然不同学科都做出顶级工作的那位。纯数学、量子力学、博弈论、计算机体系结构、核武器、天气模拟、自复制自动机理论——每一个都承载着他的奠基性论文。",
    },
    contribution: {
      en: "Stored-program computer architecture (1945 EDVAC report) — the basis of essentially every general-purpose computer since. Operator-theoretic foundations of quantum mechanics (1932). The 1944 Theory of Games with Morgenstern. The Manhattan Project implosion-lens design. Cellular automata as a substrate for self-replicating systems.",
      zh: "存储程序计算机体系结构（1945 年 EDVAC 报告）——之后几乎每一台通用计算机的基础。量子力学的算子论基础（1932）。1944 年与摩根斯坦合著的《博弈论》。曼哈顿计划的内爆透镜设计。把元胞自动机作为自复制系统的基底。",
    },
    significance: {
      en: "If a single figure's intellectual output explains postwar American technical supremacy, it is von Neumann. The architecture of every laptop, the framework of every game-theoretic policy debate, and the seed of every cellular-automaton-based simulation runs through him.",
      zh: "若有一位人物，其智识产出能解释战后美国的技术霸权，那就是冯·诺依曼。每一台笔电的体系结构、每一场博弈论政策辩论的框架、每一个基于元胞自动机的仿真之种——都经他而流。",
    },
    related: ["turing", "shannon", "wolfram"],
  },
  {
    slug: "shannon", name: "Claude Shannon", nameZh: "克劳德·香农",
    born: "1916–2001", layer: "information",
    field: { en: "Information theory · Cryptography", zh: "信息论 · 密码学" },
    kernel: {
      en: "Shannon is the figure who founded information theory in a single 1948 paper at Bell Labs. Every subsequent digital technology, from compact discs to the internet to wireless to deep learning, rests on his definition of the bit and his quantification of channel capacity.",
      zh: "香农是 1948 年在贝尔实验室以一篇论文奠定信息论的人。之后每一项数字技术——从光盘到互联网、从无线通讯到深度学习——都依赖他对比特的定义与对信道容量的量化。",
    },
    contribution: {
      en: "The bit as the unit of information. Channel capacity (Shannon–Hartley). The mathematical theory of secrecy systems (1949), the founding paper of modern cryptography. The Boolean-algebra-as-circuit-design move (his 1937 master's thesis) — the substrate of all digital logic.",
      zh: "作为信息单位的比特。信道容量（香农—哈特利）。1949 年的保密系统数学理论——现代密码学的奠基论文。把布尔代数当作电路设计的动作（他 1937 年的硕士论文）——是所有数字逻辑的基底。",
    },
    significance: {
      en: "Without Shannon, no digital civilization. The fact that he is much less famous than physicists of comparable importance is a fact about who gets to be famous, not about what he did.",
      zh: "没有香农，就没有数字文明。他远没有同等重要性的物理学家有名——这件事说的更多是\"谁配出名\"，而不是\"他做了什么\"。",
    },
    related: ["turing", "von-neumann"],
  },
  {
    slug: "wolfram", name: "Stephen Wolfram", nameZh: "Stephen Wolfram",
    born: "1959–", layer: "computation",
    field: { en: "Computation · Cellular automata · Hypergraph physics", zh: "计算 · 元胞自动机 · 超图物理" },
    kernel: {
      en: "Wolfram is the figure who has spent four decades arguing that computation is the substrate of physical reality. The 2002 A New Kind of Science classified simple computational systems and proposed that the universe at sufficient depth is one of them; the 2020 Wolfram Physics Project offers candidate rule-systems and shows that general relativity and quantum mechanics emerge as statistical limits.",
      zh: "Wolfram 是这样一位人物：四十年来一直主张\"计算是物理现实的基底\"。2002 年《一种新科学》将简单计算系统加以分类，并提出\"宇宙在足够深处是其中之一\"；2020 年 Wolfram 物理项目给出候选规则系统，并表明广义相对论与量子力学作为统计极限而涌现。",
    },
    contribution: {
      en: "Mathematica (1988) and Wolfram Alpha (2009) as working knowledge engines. The classification of 1-dimensional cellular automata. The 2020 hypergraph-rewriting model of fundamental physics. A research program that treats computation as the discipline most likely to contain physics' next opening.",
      zh: "Mathematica（1988）与 Wolfram Alpha（2009）作为可运作的知识引擎。一维元胞自动机的分类。2020 年基础物理的超图重写模型。一项把\"计算\"视作\"最有可能容纳物理下一次开启\"之学科的研究计划。",
    },
    significance: {
      en: "Whether Wolfram's specific hypergraph proposal turns out to be correct, the position that physics is fundamentally computational — heterodox in 2002 — is now defensible enough that the Wolfram Physics Project's papers appear in serious journals. The shift is partly his.",
      zh: "无论 Wolfram 具体的超图提议最终是否正确，\"物理在根本上是计算性的\"这一立场——2002 年是异端——如今已足够可辩护，使得 Wolfram 物理项目的论文出现在严肃期刊上。这一转变，部分归功于他。",
    },
    related: ["von-neumann", "turing", "einstein"],
  },
  {
    slug: "chalmers", name: "David Chalmers", nameZh: "大卫·查尔默斯",
    born: "1966–", layer: "consciousness",
    field: { en: "Philosophy of mind", zh: "心灵哲学" },
    kernel: {
      en: "Chalmers is the figure who named the Hard Problem of Consciousness in 1995 — the question of why physical processes are accompanied by subjective experience at all. The naming was an event. It made a millennium-old philosophical puzzle into a problem that subsequent neuroscience, AI research, and philosophy of mind have organized themselves around.",
      zh: "查尔默斯是 1995 年命名\"意识难题\"的那位人物——为何物理过程会伴随主观经验存在。命名本身就是一桩事件。它把一道千年之久的哲学谜题，变成了此后神经科学、AI 研究与心灵哲学围绕之组织起来的问题。",
    },
    contribution: {
      en: "The Hard Problem (1995). The Conscious Mind (1996), still the standard reference. Reality+ (2022), the systematic case that simulated realities are genuinely real. Two decades of work on the relationship between consciousness and information that bridges analytic philosophy and the IIT/Global Workspace empirical traditions.",
      zh: "意识难题（1995）。《有意识的心智》（1996）——至今仍是标准参考。《Reality+》（2022）——系统论证\"模拟现实是真实的\"。横跨分析哲学与 IIT / 全局工作空间经验传统、关于意识与信息关系的二十年工作。",
    },
    significance: {
      en: "The figure in whom the philosophy of mind regains the public-intellectual standing it lost in the mid-twentieth century. Chalmers is the most-cited contemporary philosopher in AI safety, AI ethics, and any room where the question \"could this system be conscious?\" is being argued seriously.",
      zh: "心灵哲学在他身上重获其在 20 世纪中叶失去的公共知识分子地位。在 AI 安全、AI 伦理，以及任何严肃讨论\"该系统会不会有意识？\"的房间里，查尔默斯都是被引用最多的当代哲学家。",
    },
    related: ["tononi"],
  },
  {
    slug: "tononi", name: "Giulio Tononi", nameZh: "Giulio Tononi",
    born: "1960–", layer: "consciousness",
    field: { en: "Neuroscience · mathematical theory of consciousness", zh: "神经科学 · 意识的数学理论" },
    kernel: {
      en: "Tononi is the figure who has tried to make consciousness a measurable quantity. Integrated Information Theory (IIT, 2004 onward) defines a single mathematical scalar Φ that measures how much a system's whole exceeds the sum of its parts in informational integration, and claims that this quantity is consciousness.",
      zh: "Tononi 是试图把意识变为一个可测量数量的人物。整合信息论（IIT，自 2004 年起）定义了一个数学标量 Φ，度量一个系统的整体在信息整合上超出部分之和多少，并主张这一数量就是意识。",
    },
    contribution: {
      en: "IIT 1.0, 2.0, 3.0, 4.0 — the successive refinements of the theory. The PCI (perturbational complexity index) as a clinically-useful proxy for consciousness, now used to assess vegetative-state patients. The claim that consciousness is identical to integrated information, not merely caused by it.",
      zh: "IIT 1.0、2.0、3.0、4.0——理论的逐次精炼。扰动复杂度指数（PCI）作为意识的临床代理——现在用于评估植物状态患者。\"意识等同于整合信息，而不仅仅是被它引起\"这一主张。",
    },
    significance: {
      en: "If IIT is correct, consciousness has a measurement. That is one of the largest possible structural shifts in our understanding of mind. If IIT is incorrect, it still demonstrates that consciousness can be approached mathematically — a possibility that pre-Tononi philosophy of mind largely denied.",
      zh: "如果 IIT 正确，意识就有了一个度量。这是我们对心灵的理解所可能发生的最大结构性转变之一。如果 IIT 不正确，它至少演示了意识可以以数学方式被处理——这是 Tononi 之前的心灵哲学大体否定的可能性。",
    },
    related: ["chalmers"],
  },
  {
    slug: "laozi", name: "Laozi (老子)", nameZh: "老子",
    born: "c. 6th century BCE", layer: "existence",
    field: { en: "Taoist cosmology · negative metaphysics", zh: "道家宇宙论 · 否定形而上学" },
    kernel: {
      en: "Laozi is the figure to whom the Dao De Jing is attributed — the founding text of Taoist cosmology. The text's opening line — \"the Dao that can be spoken is not the eternal Dao\" — is, in the vocabulary of this archive, an argument that the deepest layer of reality is not a thing among other things but the condition that allows there to be things at all.",
      zh: "老子是《道德经》被归名的人物——道家宇宙论的奠基文本。该文本的开篇句——\"道可道，非常道\"——以本档案的词汇说，就是一项论证：现实的最深层并非\"诸物中之一物\"，而是\"使诸物得以存在\"的那一条件。",
    },
    contribution: {
      en: "The Dao De Jing (c. 4th century BCE in its received form). The concept of wu-wei — action that does not strain against the substrate. The methodological commitment to negative metaphysics — describing what the deepest layer is not, rather than what it is.",
      zh: "《道德经》（其传世形式约成于公元前 4 世纪）。\"无为\"概念——不与基底相抗的行动。否定形而上学的方法承诺——描述最深之层不是什么，而非它是什么。",
    },
    significance: {
      en: "The Taoist position and the panpsychic / mathematical-universe / It-from-bit positions converge structurally: each holds that reality's deepest layer is not a description but a precondition. The convergence across two millennia and two civilizations is one of the strongest empirical signals available in this layer.",
      zh: "道家立场与泛心论 / 数学宇宙 / It-from-bit 立场在结构上汇合：每一种都主张现实的最深之层不是描述，而是前置条件。这一跨越两千年、两大文明的汇合，是这一层中可得的最强经验信号之一。",
    },
    related: ["chalmers"],
  },
  {
    slug: "zhuangzi", name: "Zhuangzi (庄子)", nameZh: "庄子",
    born: "c. 369–286 BCE", layer: "consciousness",
    field: { en: "Daoist philosophy of mind · the butterfly dream", zh: "道家心灵哲学 · 庄周梦蝶" },
    kernel: {
      en: "Zhuangzi is the philosopher whose butterfly-dream parable poses the simulation problem 2,300 years before Bostrom. \"I dreamt I was a butterfly; now I do not know whether I am Zhuangzi who dreamt he was a butterfly, or a butterfly dreaming he is Zhuangzi.\" The parable does not solve the problem of consciousness; it argues that the certainty of one's experience does not entail certainty about its substrate.",
      zh: "庄子是其\"庄周梦蝶\"寓言比 Bostrom 早 2300 年提出模拟问题的哲学家。\"昔者庄周梦为胡蝶，栩栩然胡蝶也；不知周之梦为胡蝶与，胡蝶之梦为周与？\"该寓言没有解决意识问题；它论证：自身经验之确定性，并不蕴含对其基底之确定性。",
    },
    contribution: {
      en: "The Zhuangzi (c. 3rd century BCE) — the most literary major Daoist text, structurally a series of philosophical parables. The systematic skepticism about the boundaries between dream and waking, observer and observed, self and other. The vocabulary of Daoist epistemology that later Buddhism inherits and reorganizes.",
      zh: "《庄子》（约公元前 3 世纪）——道家主要文本中最具文学性的一部，结构上是一系列哲学寓言。对梦与醒、观察者与被观察者、自我与他者之边界的系统怀疑。后来佛教所继承并重组的道家认识论词汇。",
    },
    significance: {
      en: "The figure through whom Chinese philosophy preempts much of 20th-century Western philosophy of mind. Zhuangzi's positions on perspectivism, the relativity of categorization, and the equivalence of dream and waking states are recognizable in Wittgenstein, Quine, and contemporary cognitive science.",
      zh: "在他身上，中国哲学先占了 20 世纪西方心灵哲学的许多立场。庄子关于视角主义、范畴相对性以及梦与醒等价的立场，在维特根斯坦、奎因与当代认知科学中皆可辨识。",
    },
    related: ["chalmers", "laozi"],
  },
  {
    slug: "aristotle", name: "Aristotle", nameZh: "亚里士多德",
    born: "384–322 BCE", layer: "science",
    field: { en: "Logic · natural philosophy · classification", zh: "逻辑 · 自然哲学 · 分类" },
    kernel: {
      en: "Aristotle is the figure in whom Western thought first treats reality as a structure that can be exhaustively categorized. The Lyceum's lectures cover physics, biology, ethics, politics, rhetoric, and the formal logic that becomes the operating syntax of Western reasoning for two thousand years.",
      zh: "亚里士多德是西方思想中第一位把现实当作\"可被穷尽分类之结构\"的人物。吕克昂的讲课覆盖物理、生物、伦理、政治、修辞，以及在之后两千年成为西方推理\"运行语法\"的形式逻辑。",
    },
    contribution: {
      en: "Formal logic (syllogism). The principle of non-contradiction. The empirical method in zoology. Four-cause analysis (material, formal, efficient, final). The Politics's classification of regimes. A corpus running to roughly a million words that frames every subsequent Western philosophical tradition either by extending it or rebelling against it.",
      zh: "形式逻辑（三段论）。矛盾律。动物学中的经验方法。四因分析（质料、形式、动力、目的）。《政治学》中的政体分类。一套约百万字的文集，构成此后每一种西方哲学传统的框架——要么延伸它、要么反叛它。",
    },
    significance: {
      en: "The figure whose vocabulary the West argues with for the longest time. Most undergraduate philosophy is still organized around \"things Aristotle said and things people said in response.\"",
      zh: "西方用最长时间与之争辩其词汇的那位唯一人物。多数本科哲学课程，仍按\"亚里士多德说过什么，以及别人针对它说过什么\"来组织。",
    },
    related: ["euclid", "newton"],
  },
  {
    slug: "leibniz", name: "Gottfried Wilhelm Leibniz", nameZh: "莱布尼茨",
    born: "1646–1716", layer: "existence",
    field: { en: "Mathematics · metaphysics · diplomacy", zh: "数学 · 形而上学 · 外交" },
    kernel: {
      en: "Leibniz is the figure who first formulates the question this archive ends on: \"why is there something rather than nothing?\" (1697). He is also one of two independent inventors of calculus, the inventor of binary arithmetic, the designer of mechanical calculators that anticipated modern computing by two centuries, and the author of a monadology that proposed mind-like atoms as the fundamental substance of reality.",
      zh: "莱布尼茨是首位表述本档案在结尾所抵达问题之人——\"为何是有而不是无？\"（1697）。他也是微积分的两位独立发明者之一、二进制算术的发明者、比现代计算早两个世纪的机械计算器设计者，以及一部\"单子论\"的作者——其中以心灵般的原子作为现实的根本实体。",
    },
    contribution: {
      en: "Calculus (concurrent with Newton). Binary arithmetic. The principle of sufficient reason. The Monadology (1714). Pre-established harmony. The mathematical infrastructure of early modern philosophy and the foundational vocabulary of every subsequent debate about possibility, necessity, and modality.",
      zh: "微积分（与牛顿同时）。二进制算术。充足理由原则。《单子论》（1714）。预定和谐。早期现代哲学的数学基础设施，以及此后每一场关于可能、必然与模态之辩论的奠基词汇。",
    },
    significance: {
      en: "If Newton is the figure of mathematized physics, Leibniz is the figure of mathematized metaphysics. The principle of sufficient reason — that everything has a reason for being the way it is — is the philosophical commitment that 18th-century Enlightenment rationalism runs on.",
      zh: "若牛顿是数学化物理的人物，那莱布尼茨就是数学化形而上学的人物。充足理由原则——一切之所以如此皆有其因——是 18 世纪启蒙理性主义所赖以运行的哲学承诺。",
    },
    related: ["newton", "godel"],
  },
];

export const THINKER_BY_SLUG: Record<string, ThinkerNode> = Object.fromEntries(
  THINKERS.map((t) => [t.slug, t])
);
