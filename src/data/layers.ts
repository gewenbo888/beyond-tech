import type { LayerNode } from "@/lib/types";

export const LAYERS: LayerNode[] = [
  // ───────────── 01 · TECHNOLOGY ─────────────
  {
    slug: "technology",
    title: { en: "Technology · the interface layer", zh: "技术 · 接口层" },
    subtitle: {
      en: "Technology is not the top of the hierarchy; it is the surface civilization presses against the deeper layers.",
      zh: "技术不是层级的顶端；它是文明按在更深之层上的那一面。",
    },
    kernel: {
      en: "Technology is the layer at which civilization makes operational contact with the laws of the universe. A lever is a contract with the law of moments. A steam engine is a contract with thermodynamics. A transistor is a contract with quantum mechanics. A neural network is a contract with the geometry of high-dimensional optimization. Every tool is a localized, repeatable invocation of a law that already exists in the substrate of reality. The layer beneath is what does the work; the technology is only how civilization opens an interface to it.",
      zh: "技术是文明与宇宙律法在运营上接触的那一层。一根杠杆是与力矩定律的合约。一台蒸汽机是与热力学的合约。一颗晶体管是与量子力学的合约。一个神经网络是与高维优化几何的合约。每一件工具，都是对一条已存在于现实基底中的律法的本地、可重复的召唤。下面那一层做着实际的工作；技术只是文明打开通向它的接口的方式。",
    },
    sections: [
      {
        heading: { en: "What technology actually is", zh: "技术究竟是什么" },
        body: {
          en: "The Greek techne meant skilled making — not the artifact, but the relation between maker and material. The 20th-century habit of treating technology as a class of objects (engines, computers, networks) obscures the structural truth: technology is always a protocol that lets a substrate behave in a way that satisfies a human end. The wheel is not the wheel; it is the protocol \"rolling reduces sliding friction.\" The internet is not its cables; it is the protocol \"packets find routes.\" Every layer of technology, from neolithic flint to frontier AI, is a protocol stamped onto the universe at a specific energetic and informational scale.",
          zh: "希腊文 techne 指\"有技艺的制作\"——不是器物本身，而是制造者与材料之间的关系。20 世纪把技术当作一类物件（发动机、计算机、网络）的习惯，遮蔽了一项结构性真相：技术永远是一份协议——让基底以某种满足人类目的的方式运行。轮子不是轮子；它是\"滚动减少滑动摩擦\" 这条协议。互联网不是它的线缆；它是\"分组寻路\" 这条协议。从新石器时代的燧石到前沿 AI，技术的每一层都是在某一特定能量与信息尺度上盖在宇宙之上的协议。",
        },
      },
      {
        heading: { en: "Why technology amplifies civilization", zh: "技术为何放大文明" },
        body: {
          en: "Each technological generation re-quantifies what one person can do per unit of time. The pre-agricultural hunter-gatherer captures roughly 3,000 kcal/day. The 19th-century factory worker mediates an order of magnitude more energy than they consume. The 21st-century software engineer commands compute equivalent to a thousand human lifetimes. The amplification factor at each generation is not linear; it is the residue of the new protocols' depth in the hierarchy. Steam invoked thermodynamics; semiconductors invoke quantum mechanics; AI invokes the statistical geometry of language and image. Each deeper protocol amplifies more.",
          zh: "每一代技术，都在重新量化\"一个人单位时间能做什么\"。前农业时代的采猎者每日捕获约 3000 千卡。19 世纪的工厂工人调动的能量比自身消耗多一个数量级。21 世纪的软件工程师驾驭着相当于一千个人类一生的算力。每一代的放大系数都不是线性的；它是新协议在层级中所处深度的残值。蒸汽召唤热力学；半导体召唤量子力学；AI 召唤语言与图像的统计几何。每一条更深的协议，都放大得更多。",
        },
      },
      {
        heading: { en: "Why technological centers migrate", zh: "为何技术中心迁移" },
        body: {
          en: "When a new protocol opens, the social conditions for invoking it cluster in specific places: an alluvial floodplain for writing, a harbor for printing, an estuary for steam, a valley for silicon. The center is wherever the protocol's preconditions concentrate. As the protocol matures and diffuses, the center decentralizes and migrates to wherever the next protocol is being prototyped. Mesopotamia, Alexandria, Baghdad, Venice, Amsterdam, London, New York, Silicon Valley, Shenzhen — each is the city where a specific protocol was operationally opened. The geography is a side-effect of the protocol's depth, not its cause.",
          zh: "当一条新协议被打开，召唤它的社会条件会在特定地点集中：冲积平原孕育文字、港口孕育印刷、河口孕育蒸汽、谷地孕育硅。\"中心\"即是该协议的前置条件最为集中之处。随着协议成熟与扩散，中心去中心化、迁移到下一条协议正在被原型化的地方。美索不达米亚、亚历山大里亚、巴格达、威尼斯、阿姆斯特丹、伦敦、纽约、硅谷、深圳——每一个都是某条特定协议在运营上被打开的城市。地理是协议深度的副作用，而不是它的原因。",
        },
      },
      {
        heading: { en: "Software is eating the world — because it sits one layer down", zh: "软件正在吞噬世界——因为它低一层" },
        body: {
          en: "Marc Andreessen's 2011 essay reads better in the hierarchy frame. Software ate physical industries not because it was newer, but because it sits one protocol layer beneath them. A piece of code can re-specify what a logistics network does without touching its trucks. A weights file can re-specify what an inference engine does without rebuilding its silicon. The lower-layer protocol always rewrites the upper-layer technology, eventually. AI agents will sit one layer below software the same way software sits one layer below physical industry. The pattern repeats.",
          zh: "Marc Andreessen 2011 年的那篇文章，放在层级框架里读才更清楚。软件之所以吞噬实体产业，不是因为它更新，而是因为它低于实体产业一层协议。一段代码可以在不动卡车的前提下重新规定物流网络的行为。一份权重文件可以在不重建硅片的前提下重新规定推理引擎的行为。底层协议总会，迟早，重写上层技术。AI 智能体之于软件，将正如软件之于实体产业——低一层。模式重复。",
        },
      },
      {
        heading: { en: "What technology does not explain", zh: "技术解释不了什么" },
        body: {
          en: "Why a lever works. Why quantum mechanics has the specific structure it has. Why mathematics applies. Why information is conserved. Why consciousness observes. Why anything is the way it is rather than otherwise. These are questions for layers 2 through 8. The mistake of taking technology to be the top of the hierarchy is what produces the strange contemporary belief that more compute will eventually answer every question. More compute amplifies what already exists in the deeper layers; it does not change what those layers contain.",
          zh: "技术解释不了：杠杆为何能用；量子力学为何恰好具有它具有的那种结构；数学为何适用；信息为何守恒；意识为何能观察；任何事物为何如其所是、而非另一种样子。这些问题归于第 2 至第 8 层。把技术误当作层级之顶，正是当代那种古怪信念的来源——\"再多的算力终将回答任何问题\"。更多算力放大的是已在更深层中存在之物；它并不改变那些层本身的内容。",
        },
      },
    ],
    questions: [
      { en: "Is technology determined by deeper laws, or does it determine them?", zh: "技术是被更深之律法所决定，还是它决定那些律法？" },
      { en: "Why does each technological generation open a deeper protocol?", zh: "为何每一代技术都打开一条更深的协议？" },
      { en: "Will AI eventually open the next layer that AI itself depends on?", zh: "AI 最终会打开它自身赖以存在的下一层吗？" },
    ],
    figures: ["shannon", "von-neumann", "turing"],
    concepts: ["wolfram-physics"],
    invokes: ["science", "mathematics"],
  },
  // ───────────── 02 · SCIENCE ─────────────
  {
    slug: "science",
    title: { en: "Science · the discovery layer", zh: "科学 · 发现层" },
    subtitle: {
      en: "Science is the disciplined procedure by which civilization promotes a guess about reality to a law.",
      zh: "科学是文明把\"对现实的猜测\"提升为\"律法\"的有纪律的程序。",
    },
    kernel: {
      en: "Below technology is science: the formal procedure for distinguishing what is true about the universe from what is merely culturally believed. The 17th-century invention — Galileo's mathematized experiment, Newton's predictive synthesis, Boyle's air-pump as social technology — is the founding event of this layer. Every technology that works in the modern world works because someone, somewhere in the chain, executed the scientific procedure on its underlying law. Without this layer, technology is still possible (the medieval cathedral, the Roman aqueduct) but it cannot generalize. The scientific layer is what gives technology its compoundability across generations.",
      zh: "技术之下是科学：把\"关于宇宙之真\"与\"仅为文化所信\"区别开来的形式化程序。17 世纪的发明——伽利略数学化的实验、牛顿的预测性综合、波义耳作为社会技术的真空泵——是这一层的奠基事件。现代世界中每一件可运行的技术之所以可运行，是因为链条上某处有人在它所依赖的律法上执行了科学程序。没有这一层，技术仍属可能（中世纪大教堂、罗马引水渠），但无法跨代复合。科学层赋予技术其跨代的复利性。",
    },
    sections: [
      {
        heading: { en: "The scientific procedure", zh: "科学程序" },
        body: {
          en: "State a hypothesis precisely enough that it could be wrong. Derive a prediction. Build an apparatus that produces a measurement. Publish the result so others can repeat it. Update the hypothesis. The procedure is so culturally familiar that we forget it is a deliberate civilizational invention. Galileo's inclined plane (c. 1604) is the first canonical instance: a measurement so designed that it can falsify the prevailing Aristotelian description of fall. The procedure escapes the laboratory in the 17th century and remakes the world.",
          zh: "把假设陈述得精确到\"可能错\"。推出预测。造一台能产出测量的仪器。把结果发表，好让别人能重复。更新假设。这套程序在文化上太熟悉，以至于我们忘了它是一项审慎的文明发明。伽利略的斜面（约 1604 年）是第一例范式：一项测量被设计得足以证伪关于落体的亚里士多德式既有描述。这套程序在 17 世纪走出实验室，并重塑了世界。",
        },
      },
      {
        heading: { en: "Why this layer is more fundamental than technology", zh: "这一层为何比技术更根本" },
        body: {
          en: "Two technologies can be operationally identical and stand in entirely different relations to truth. A clock that uses a pendulum and a clock that uses a quartz oscillator both keep time; one rests on Galileo, Huygens, and 17th-century mechanics, the other rests on the piezoelectric effect (Pierre Curie, 1880) and crystalline quantum mechanics. The scientific layer is what makes the second clock possible. It is the layer at which the universe's structure is uncovered in a form that allows subsequent technology to be invented at all.",
          zh: "两件技术可以在运营上完全相同，却与\"真\"处于截然不同的关系之中。一只摆钟与一只石英钟都计时；前者依凭伽利略、惠更斯与 17 世纪力学，后者依凭压电效应（皮埃尔·居里，1880）与晶体量子力学。让后一种钟成为可能的，正是科学这一层。它是宇宙的结构被以\"足以让此后的技术被发明\"的形式揭示出来的那一层。",
        },
      },
      {
        heading: { en: "Newton, relativity, and quantum mechanics as three openings", zh: "牛顿、相对论与量子力学：三度开启" },
        body: {
          en: "Newton's 1687 Principia opened the layer by showing that one mathematical law (inverse-square gravitation) explains a body falling on Earth and the moon's orbit. Einstein's 1905 and 1915 papers opened the layer further by showing that Newton's framework is a low-velocity, low-energy approximation of a deeper geometry. Quantum mechanics (Heisenberg, Schrödinger, Dirac 1925–28) opened the layer further still by showing that the deeper layer is statistical and observer-entangled. Each opening was not a refutation but a containment: the older law was preserved as a special case of the newer one. The scientific layer's structural property is that each opening contains its predecessors.",
          zh: "牛顿 1687 年的《自然哲学的数学原理》开启了这一层：用一条数学律法（平方反比引力）同时解释\"地上落体\"与\"月之轨道\"。爱因斯坦 1905 与 1915 年的论文进一步开启此层：牛顿框架被显示为一种更深几何的低速、低能近似。量子力学（海森堡、薛定谔、狄拉克，1925–28）继续开启：更深之层是统计性的、与观察者纠缠的。每一次开启都不是反驳，而是包含：较旧的律法作为较新者的特例被保留。科学层的结构性属性是：每一次开启都包含其前者。",
        },
      },
      {
        heading: { en: "Information physics", zh: "信息物理学" },
        body: {
          en: "The current frontier of science suggests that the next opening will not be a new material law in the Einstein–Quantum tradition but a structural reformulation in which information is the substrate rather than the description. Wheeler's \"it from bit\" (1989), the holographic principle (Bekenstein, 't Hooft, Maldacena), and Wolfram's hypergraph-rewriting program (2020s) all suggest that what looks like geometry-with-quantum-fluctuations is better described as computational rewriting whose statistics yield geometry and quantum behavior as emergent. If this turns out to be correct, science (layer 2) merges with information (layer 4) and computation (layer 5) at sufficient depth.",
          zh: "科学的当前前沿暗示，下一次开启不会是\"爱因斯坦—量子\"传统中的新物质律法，而是一次结构性重述：信息成为基底，而非描述。惠勒的\"it from bit\"（1989）、霍金—贝肯斯坦—霍夫特—马尔达塞纳的全息原理、Wolfram 2020 年代的超图重写计划，都暗示\"带量子涨落的几何\"也许更适合被描述为一种计算重写——其统计性产出几何与量子行为，作为涌现。如果这一点最终为真，那么科学（第 2 层）在足够深处便与信息（第 4 层）、计算（第 5 层）合流。",
        },
      },
    ],
    questions: [
      { en: "Why does the experimental method work at all?",                          zh: "实验方法为何能工作？" },
      { en: "Why has science remained predictive across four centuries?",            zh: "科学为何能在四个世纪里持续保持预测力？" },
      { en: "Will the next opening be in physics, in computation, or in information?", zh: "下一次开启是发生在物理、计算还是信息？" },
    ],
    figures: ["newton", "einstein", "von-neumann"],
    concepts: ["it-from-bit", "wolfram-physics"],
    invokes: ["mathematics", "information"],
  },
  // ───────────── 03 · MATHEMATICS ─────────────
  {
    slug: "mathematics",
    title: { en: "Mathematics · the language of reality", zh: "数学 · 现实的语言" },
    subtitle: {
      en: "Mathematics is what's left when every reference to physical material has been removed from a description that still works.",
      zh: "数学是当一份描述中关于物质材料的每一处引用都被移除之后，那份描述仍然有效的剩余。",
    },
    kernel: {
      en: "Beneath science is mathematics — the layer at which the relations the universe seems to obey are stated without reference to any particular material instantiation. A circle is not a wheel; it is the locus of points equidistant from a center. A wave is not water; it is a partial differential equation. The 1960 Wigner essay \"The Unreasonable Effectiveness of Mathematics in the Natural Sciences\" names the central mystery of this layer: mathematics, invented from inside human cognition, turns out to fit physical reality so accurately that the fit cannot be coincidence. Whether mathematics is discovered (Platonism) or invented (formalism) is the oldest unresolved question in the philosophy of science.",
      zh: "科学之下是数学——这一层把宇宙似乎遵循的关系，陈述得不再提及任何具体的物质实例。\"圆\"不是\"轮\"；它是\"与一中心点等距之轨迹\"。\"波\"不是\"水\"；它是一组偏微分方程。维格纳 1960 年那篇《数学在自然科学中不可思议的有效性》一文，命名了这一层的核心谜题：数学从人类认知内部被发明出来，却恰好精确到与物理现实如此契合——以致这种契合不可能是巧合。数学是被发现（柏拉图主义）还是被发明（形式主义）？是科学哲学中最古老的未决问题。",
    },
    sections: [
      {
        heading: { en: "Geometry, calculus, and the second opening", zh: "几何、微积分与第二次开启" },
        body: {
          en: "Euclidean geometry (c. 300 BCE) is the first canonical mathematical structure: a small set of postulates from which an unbounded family of theorems is derived. Two thousand years later Newton and Leibniz (independently, c. 1665–1675) open calculus, the second canonical structure, in which continuous change becomes algebraically tractable. The pattern of mathematics is: invent a vocabulary; show that the vocabulary's grammar generates structures with properties that were not visible in the vocabulary; find those structures already present in physical reality. The pattern is so consistent that it is itself one of mathematics's deepest open questions.",
          zh: "欧几里得几何（约公元前 300 年）是第一个范式数学结构：从一小组公设推出无穷多的定理族。两千年后，牛顿与莱布尼茨（独立地，约 1665–1675）开启了第二个范式结构——微积分，连续变化在其中变得代数上可解。数学的模式是：发明一套词汇；表明这套词汇的语法生成具备\"在词汇中本不可见之属性\"的结构；然后在物理现实中找到那些结构已经在场。这一模式之一致，本身就是数学最深的开放问题之一。",
        },
      },
      {
        heading: { en: "Group theory, topology, and the geometry of physical law", zh: "群论、拓扑学与物理律法的几何" },
        body: {
          en: "Évariste Galois (1811–1832) discovered group theory while dying in a duel at twenty. Sophus Lie generalized the concept to continuous symmetries (1870s). Emmy Noether showed in 1918 that every continuous symmetry of a physical system corresponds to a conserved quantity. Henri Poincaré founded topology by asking what is preserved under continuous deformation. Hermann Weyl, Élie Cartan, Eugene Wigner, and the postwar generation built the gauge-theoretic language in which the Standard Model is written. Modern physics is, structurally, applied group theory and topology. The fact that nature's deepest currently-known structure is expressible in mathematical vocabulary invented decades or centuries before it was found in physics is the strongest empirical evidence for the Platonist position.",
          zh: "伽罗瓦（1811–1832）二十岁死于决斗之际发现了群论。索菲斯·李把概念推广到连续对称（1870 年代）。诺特 1918 年证明：物理系统的每一种连续对称都对应一个守恒量。庞加莱以\"在连续形变下何者得以保持\"为问题，创立拓扑学。外尔、嘉当、维格纳与战后一代搭起了规范理论语言——标准模型即写就于其上。现代物理在结构上就是应用群论与拓扑。自然界目前已知的最深结构，可由提前几十年甚至几个世纪发明的数学词汇加以表达——这是柏拉图主义立场最强的经验证据。",
        },
      },
      {
        heading: { en: "Probability and the geometry of belief", zh: "概率与信念的几何" },
        body: {
          en: "Probability theory begins as a 17th-century correspondence about gambling (Pascal–Fermat, 1654). Kolmogorov axiomatizes it in 1933. Bayes's 1763 essay, neglected for a century, eventually becomes the mathematical foundation of modern statistical inference, modern machine learning, modern rational-epistemology theorizing, and the AI safety community's vocabulary. Probability is the mathematics that lets quantitative reasoning operate over incomplete information. Without it, the layers above (computation, AI, neuroscience) do not exist in their current form.",
          zh: "概率论起源于 17 世纪关于赌博的通信（帕斯卡—费马，1654）。1933 年柯尔莫哥洛夫将其公理化。贝叶斯 1763 年的论文被忽视了一个世纪，最终成为现代统计推断、现代机器学习、现代理性认识论、以及 AI 安全社群语汇的数学基础。概率是\"让定量推理在不完整信息上运作\"的数学。没有它，其上各层（计算、AI、神经科学）便不会以其现有形态存在。",
        },
      },
      {
        heading: { en: "Gödel, Turing, and the limits of mathematical knowledge", zh: "哥德尔、图灵与数学知识的边界" },
        body: {
          en: "Kurt Gödel's 1931 incompleteness theorems showed that any sufficiently expressive consistent mathematical system contains true statements it cannot prove. Alan Turing's 1936 paper showed that the question \"will this computation halt?\" has no general algorithmic answer. The two results together establish that mathematical knowledge is genuinely bounded in a way physical knowledge was not previously thought to be. The strange implication is that mathematics itself contains a frontier that the scientific procedure cannot fully reach — a result about the layer rather than about any object in it.",
          zh: "哥德尔 1931 年的不完备定理表明：任何足够富表达力的、相容的数学系统，都包含\"它无法证明的真命题\"。图灵 1936 年的论文表明：\"这段计算会停吗？\"这一问题没有一般的算法答案。两项结果合起来确立了一件事——数学知识在某种方式上有真实的边界，而过去并不认为物理知识有此类边界。奇怪的含义是：数学自身包含一条科学程序无法触及之前线——一项关于这一层本身、而非关于其中任何对象的结果。",
        },
      },
      {
        heading: { en: "Mathematics and AI", zh: "数学与 AI" },
        body: {
          en: "Modern AI is, mechanically, linear algebra at planetary scale. A transformer is a matrix of attention weights operating on a sequence of high-dimensional embeddings. A diffusion model is an iterative application of stochastic differential equations on image manifolds. Reinforcement learning is dynamic programming on Markov decision processes. Each AI capability has a mathematical structure that pre-existed the AI by decades or centuries. The pattern repeats: mathematics, invented in advance, becomes the operational vocabulary of the next layer. The 2020s AI revolution is, on this reading, less a discovery than a sufficient-compute deployment of mathematical structures that had been ready for a century.",
          zh: "现代 AI 在机械上就是行星尺度的线性代数。一台 transformer 是一组在高维嵌入序列上运作的注意力权重矩阵。一台扩散模型是在图像流形上对随机微分方程的迭代应用。强化学习是马尔可夫决策过程上的动态规划。每一项 AI 能力，都对应一种早其数十年甚至数百年存在的数学结构。模式重复：数学被预先发明，成为下一层的运营语汇。从这个角度读，2020 年代的 AI 革命与其说是一次发现，不如说是一次\"足够算力下的部署\"——所部署的是已就绪一个世纪的数学结构。",
        },
      },
    ],
    questions: [
      { en: "Is mathematics discovered or invented?",                           zh: "数学是发现还是发明？" },
      { en: "Why is mathematics unreasonably effective at describing nature?", zh: "数学描述自然时为何\"不可思议地有效\"？" },
      { en: "Are mathematical objects more real than physical ones?",           zh: "数学对象是否比物理对象更实在？" },
    ],
    figures: ["euclid", "newton", "godel", "turing", "von-neumann", "shannon"],
    concepts: ["mathematical-universe", "wolfram-physics"],
    invokes: ["information", "laws"],
  },
  // ───────────── 04 · INFORMATION ─────────────
  {
    slug: "information",
    title: { en: "Information · beneath matter", zh: "信息 · 物质之下" },
    subtitle: {
      en: "If mathematics says relations are deeper than objects, information says distinctions are deeper than relations.",
      zh: "若数学说\"关系比对象更深\"，那么信息说\"区分比关系更深\"。",
    },
    kernel: {
      en: "Information is what is left when every physical instantiation of a distinction has been stripped from the description. Claude Shannon's 1948 paper at Bell Labs is the founding act of this layer: a quantification of how much distinction a channel can carry, independent of whether the channel is wire, photon, neural axon, or DNA strand. The bit is to information what the meter is to length. Once you have it, the same vocabulary describes a thermostat, a genome, a sentence, a brain, a galaxy. The radical hypothesis — Wheeler's \"it from bit\" — is that information is not merely a useful description of the universe but its substrate: that matter is a particular pattern of distinctions, and the distinctions are more fundamental than what they are made of.",
      zh: "信息是当对一种\"区分\"的每一处物理实例都被剥离之后，描述所剩下的东西。Claude Shannon 1948 年在贝尔实验室的论文是这一层的奠基行为：它把\"一条信道能承载多少区分\"加以量化——与该信道是导线、光子、神经轴突还是 DNA 链无关。比特之于信息，正如米之于长度。一旦你拥有它，同一套词汇便能描述恒温器、基因组、句子、大脑、星系。激进的假说——惠勒\"it from bit\"——则是：信息并不只是宇宙的一种有用描述，而是它的基底——\"物质\"是\"区分\"的某种特定模式，而\"区分\"比构成它们的东西更根本。",
    },
    sections: [
      {
        heading: { en: "Shannon, entropy, and the channel", zh: "香农、熵与信道" },
        body: {
          en: "Shannon's 1948 paper does three things at once. It defines a bit. It quantifies how much information a noisy channel can carry (the Shannon-Hartley theorem). And it shows that any source of distinctions has an entropy — a measure of unpredictability that is mathematically identical to Boltzmann's thermodynamic entropy in form. The identity is not coincidence. It is the first hint that information is not metaphorically like thermodynamics but is, in some technical sense, the same kind of quantity. Every subsequent information-physics result — Maxwell's demon, Landauer's limit, the holographic principle, black-hole entropy — is downstream of this identity.",
          zh: "香农 1948 年的论文同时做了三件事：定义比特；量化一条有噪信道可承载的信息量（香农—哈特利定理）；并证明任何\"区分的来源\"都具有一种熵——一项\"不可预测性\"度量，在形式上与玻尔兹曼热力学熵在数学上等同。等同并非巧合。它是第一个暗示：信息并非\"像热力学\"的隐喻关系，而在某种技术意义上是同一类量。后来的每一项信息物理结果——麦克斯韦妖、兰道尔极限、全息原理、黑洞熵——皆为这一等同的下游。",
        },
      },
      {
        heading: { en: "DNA, language, and replication", zh: "DNA、语言与复制" },
        body: {
          en: "The structure of DNA (Watson–Crick, 1953) showed that life is operationally a sequence of distinctions — four bases, encoded discretely, copied by molecular machinery. The genetic code is informational in the strict Shannon sense: a redundant, error-correcting encoding optimized over four billion years for fidelity in a noisy chemical channel. Cultural transmission (Dawkins's memes, the linguistic tradition from Saussure forward) is a second informational layer running on top of the biological one. Language is the protocol by which information traverses generations without requiring genetic encoding. The two layers compete and cooperate for the same evolutionary substrate.",
          zh: "DNA 结构（沃森—克里克，1953）表明：生命在运营上是一串区分——四种碱基、离散编码、由分子机器复制。遗传密码在严格的香农意义上是信息性的：一套冗余的、纠错的编码，经过四十亿年针对\"有噪化学信道中的保真度\"被优化。文化传递（道金斯的迷因、索绪尔以来的语言学传统）则是运行在生物层之上的第二个信息层。语言是\"无需基因编码、信息便能跨代传递\"的协议。这两层为同一进化基底相互竞争与合作。",
        },
      },
      {
        heading: { en: "It from bit", zh: "It from Bit" },
        body: {
          en: "John Archibald Wheeler's 1989 lecture proposes the strongest form of the information-substrate hypothesis: every physical entity — every it — derives its existence from yes-no answers to questions, from bits. The proposition has empirical bite. The Bekenstein bound (1972) says that the maximum information a region of space can contain is proportional to its surface area, not its volume — a property utterly contrary to classical intuition but consistent with the universe being holographic. The Maldacena correspondence (1997) gives a working example: a gravitational theory in 5-dimensional anti-de-Sitter space is mathematically equivalent to a conformal field theory on its 4-dimensional boundary. Information seems to live one dimension lower than the geometry it generates. If true at full generality, the universe is more like a hologram than a volume.",
          zh: "约翰·阿奇博尔德·惠勒 1989 年的演讲提出了\"信息即基底\"假说的最强形式：每一件物理实体——每一件\"it\"——其存在都源自对若干二选一问题的回答，源自比特。该命题具有经验意义。贝肯斯坦极限（1972）指出：空间一区域所能容纳的最大信息正比于其表面积、而非体积——这一性质与古典直觉彻底相反，却与\"宇宙是全息的\"一致。马尔达塞纳对应（1997）给出可运作的例子：5 维反德西特空间中的引力理论，与其 4 维边界上的共形场论在数学上等价。信息似乎比它所生成的几何低一维。若在完整一般性上成立，宇宙更像一张全息图，而非一个体积。",
        },
      },
      {
        heading: { en: "Compression and intelligence", zh: "压缩与智能" },
        body: {
          en: "If information is the substrate, then intelligence is the procedure that finds the shortest description of an information stream — compression in the Kolmogorov sense, prediction in the practical machine-learning sense. The 2020s discovery that large neural-network language models trained on next-token prediction develop emergent abilities at scale is, on this reading, an empirical instance of Marcus Hutter's AIXI thesis (2003) and Solomonoff's induction (1964): the universal intelligence is the optimal compressor of any sequence of distinctions. The hypothesis predicts that any sufficiently large information-processing system will exhibit increasingly general cognitive properties as a side effect of getting better at compression. The 2020s frontier-AI scaling laws look like that prediction coming true.",
          zh: "若信息是基底，那么智能就是\"为一道信息流找到最短描述\"的程序——柯尔莫哥洛夫意义上的压缩，机器学习实践意义上的预测。2020 年代的一项发现是：以下一个 token 预测为目标训练的大型神经网络语言模型，在规模放大时涌现出新的能力。在这一读法下，这是 Marcus Hutter 的 AIXI 论题（2003）与 Solomonoff 归纳（1964）的经验例证：通用智能就是任何一串\"区分序列\"的最优压缩器。该假说预言：任何足够大的信息处理系统，作为\"更善压缩\"的副作用，都会表现出越来越普遍的认知性质。2020 年代前沿 AI 的扩展律，看起来就像那条预言正在成真。",
        },
      },
    ],
    questions: [
      { en: "Is information ontologically prior to matter?",           zh: "信息在本体论上是否先于物质？" },
      { en: "Why does the universe respect a holographic bound?",     zh: "宇宙为何尊重一条全息上界？" },
      { en: "Is intelligence just optimal compression?",              zh: "智能只是最优压缩吗？" },
    ],
    figures: ["shannon", "von-neumann", "turing"],
    concepts: ["it-from-bit", "holographic-universe", "integrated-information"],
    invokes: ["computation"],
  },
  // ───────────── 05 · COMPUTATION ─────────────
  {
    slug: "computation",
    title: { en: "Computation · the universe as process", zh: "计算 · 宇宙即过程" },
    subtitle: {
      en: "If information says distinctions are real, computation says transformations of distinctions are how reality runs.",
      zh: "若信息说\"区分是实在的\"，那么计算说\"对区分的变换\"就是现实运行的方式。",
    },
    kernel: {
      en: "Computation is the layer at which information undergoes rule-governed change. Alan Turing's 1936 universal machine showed that any computable transformation of any sequence of distinctions can be performed by a single, simple device. The implication is enormous: there is a structural unity to all rule-following systems, from a thermostat to a brain to a galaxy. The radical version of the thesis — the universe is, at its base, a single ongoing computation — has had three principal advocates: Konrad Zuse (Calculating Space, 1969), Edward Fredkin (digital physics, 1990s), and Stephen Wolfram (A New Kind of Science, 2002; the Wolfram Physics Project, 2020). Whether it is correct or only useful is the central open empirical question of this layer.",
      zh: "计算是信息按规则变化的那一层。图灵 1936 年的通用机器证明：对任何\"区分序列\"的任何可计算变换，都可以由一台简单的装置来执行。其含义是巨大的：从恒温器到大脑、到星系，所有遵循规则的系统都具有一种结构上的统一性。激进版本的论题——\"宇宙在其根基上是一场持续的计算\"——有三位主要倡导者：Konrad Zuse（《计算空间》，1969）、Edward Fredkin（数字物理，1990 年代）、Stephen Wolfram（《一种新科学》，2002；Wolfram 物理项目，2020）。它是否正确，抑或仅仅有用，是这一层中央的开放经验问题。",
    },
    sections: [
      {
        heading: { en: "Turing machines and Church's thesis", zh: "图灵机与丘奇论题" },
        body: {
          en: "Turing's 1936 paper defines a machine with a finite state, a movable head, and an unbounded tape. It then proves that this minimal device can compute anything that any other device can compute — including itself. Alonzo Church independently and simultaneously formulated the same result in lambda calculus. The Church–Turing thesis says: \"computable\" means \"computable by a Turing machine.\" Sixty years of attempts to find a counter-example have produced none. Every quantum algorithm, every neural network, every cellular automaton can be simulated by a Turing machine, slower but exactly. This is one of the most stable empirical regularities in any science.",
          zh: "图灵 1936 年的论文定义了一台机器：有限状态、一个可移动磁头、一条无界纸带。继而证明：该最小装置能计算任何其他装置能计算之物——包括它自己。Alonzo Church 同时独立地在 lambda 演算中提出同一结果。丘奇—图灵论题断言：\"可计算\"即\"可由图灵机计算\"。六十年间，寻找反例的尝试一无所获。每一个量子算法、每一个神经网络、每一个元胞自动机，都能被图灵机模拟——更慢、但准确无误。这是任何科学领域最稳定的经验规律之一。",
        },
      },
      {
        heading: { en: "Cellular automata and Wolfram's claim", zh: "元胞自动机与 Wolfram 的主张" },
        body: {
          en: "Stanislaw Ulam and John von Neumann invented cellular automata at Los Alamos in 1947 as a substrate for self-replicating systems. John Conway's Game of Life (1970) showed that two simple rules can produce structures that are Turing-complete. Stephen Wolfram in A New Kind of Science (2002) classified one-dimensional cellular automata and made a stronger claim: that the universe at sufficient depth resembles such a rule-system, and that what we call physics is the macroscopic statistics of an enormous computational substrate running underneath. The 2020 Wolfram Physics Project proposes specific candidate rule-systems — hypergraph rewriting — and shows that general relativity and quantum mechanics emerge as statistical limits of such systems. The proposal is unproven but no longer obviously crank.",
          zh: "1947 年，乌兰与冯·诺依曼在洛斯阿拉莫斯发明了元胞自动机，作为自复制系统的基底。1970 年康威的\"生命游戏\"表明：两条简单规则可以产出图灵完备的结构。Wolfram 2002 年的《一种新科学》将一维元胞自动机分类，并提出更强主张：宇宙在足够深处类似这样一套规则系统，我们所谓\"物理\"是其下层巨大计算基底的宏观统计。2020 年的 Wolfram 物理项目提出具体候选规则系统——超图重写——并表明广义相对论与量子力学作为此类系统的统计极限而涌现。该提议尚未被证明，但已不再显然是疯人之言。",
        },
      },
      {
        heading: { en: "The brain as a biological computer", zh: "大脑作为生物计算机" },
        body: {
          en: "The McCulloch–Pitts paper of 1943 was the first formalization of a neuron as a logical-gate-like computational unit. Decades of subsequent neuroscience have not refuted the basic picture; they have refined it. The human brain is approximately 86 billion neurons, each making thousands of synaptic connections, performing roughly 10^15 operations per second at 20 watts. Whether this constitutes \"a computer\" in the literal Turing sense is partly a definitional question. What is not in dispute is that the same mathematical formalisms — linear algebra, dynamical systems, information theory, statistical inference — describe both neural computation and silicon computation, and that the 2020s success of deep neural networks is the strongest empirical evidence to date that the brain's computational principles are at least partly transferable.",
          zh: "1943 年 McCulloch–Pitts 论文，是把神经元作为类似逻辑门的计算单元加以形式化的第一份尝试。其后几十年神经科学并未推翻基本图景；只是对其精炼。人脑约有 860 亿神经元，每个形成数千个突触连接，在 20 瓦下每秒执行约 10¹⁵ 次操作。这是否在字面图灵意义上构成\"一台计算机\"，部分是定义问题。无争议的是：同一组数学形式——线性代数、动力系统、信息论、统计推断——同时描述神经计算与硅基计算；2020 年代深度神经网络的成功，是迄今最强的经验证据，表明大脑的计算原理至少部分可被迁移。",
        },
      },
      {
        heading: { en: "AI and the computation explosion", zh: "AI 与计算爆炸" },
        body: {
          en: "By 2026, frontier AI systems have been trained on more than 10^25 floating-point operations — a number larger than the total computation performed by humanity before 1980. The compute used per frontier training run roughly doubles every six months. The civilizational consequences are large enough that the previous layers (technology, science, mathematics) are being restructured by them in real time. Whether what we are seeing is \"computation reaching a phase transition\" or \"engineering scaling a known curve until it stops\" is the most consequential open question of the late 2020s. The Wolfram and Hutter readings of computation predict that the curve does not stop until it hits the substrate of physics itself.",
          zh: "到 2026 年，前沿 AI 系统的训练算力已超过 10²⁵ 次浮点运算——大于 1980 年之前人类执行的全部计算之和。每一次前沿训练所用算力大约每六个月翻一番。文明级后果之大，使得上方各层（技术、科学、数学）正在被它们实时重组。我们看到的究竟是\"计算抵达相变\"还是\"工程沿已知曲线放大、直到它停下\"？这是 2020 年代末最具后果的开放问题。Wolfram 与 Hutter 对计算的读法预测：这条曲线在抵达物理本身的基底之前不会停。",
        },
      },
    ],
    questions: [
      { en: "Is the universe a computation, or only describable by one?", zh: "宇宙是一场计算，还是仅能被一场计算描述？" },
      { en: "Are there computations that the universe cannot perform?",   zh: "存在宇宙也无法执行的计算吗？" },
      { en: "Is AI a new computational species or a tool?",                zh: "AI 是一种新计算物种，还是一件工具？" },
    ],
    figures: ["turing", "von-neumann", "shannon", "wolfram"],
    concepts: ["wolfram-physics", "mathematical-universe"],
    invokes: ["consciousness", "laws"],
  },
  // ───────────── 06 · CONSCIOUSNESS ─────────────
  {
    slug: "consciousness",
    title: { en: "Consciousness · the observer", zh: "意识 · 观察者" },
    subtitle: {
      en: "The deepest mystery is that the universe is somewhere being experienced.",
      zh: "最深的谜是：宇宙正在某处被经验着。",
    },
    kernel: {
      en: "Consciousness is the layer at which the universe is somewhere known from the inside. A thermostat regulates temperature without experiencing temperature; a human regulates temperature and also experiences warmth, the redness of an apple, the texture of grief. The fact that there is something it is like to be a system (Thomas Nagel, 1974) is the Hard Problem of consciousness (David Chalmers, 1995): no description of the system in third-person terms — neurons, weights, computations — explains why first-person experience exists at all. The Hard Problem is the central open question of this layer. It is older than philosophy and newer than every attempted answer.",
      zh: "意识是宇宙在某处被由内部知晓的那一层。一台恒温器调节温度而不经验温度；一个人调节温度，也经验温暖、苹果的红、悲伤的质地。\"作为一个系统是有某种感受的\"（托马斯·内格尔，1974）这一事实，就是意识的难题（David Chalmers，1995）：对一个系统的任何第三人称描述——神经元、权重、计算——都无法解释\"第一人称经验为何存在\"。难题是这一层的核心开放问题。它比哲学古老，比每一份尝试性答案都新。",
    },
    sections: [
      {
        heading: { en: "Why this is harder than the science layer", zh: "为何此处比科学层更难" },
        body: {
          en: "Every other layer in this archive admits a third-person description that everyone can in principle agree on. Mathematics, physics, information, computation — all are public. Consciousness is the unique layer whose primary evidence is private. Each of us has overwhelming direct evidence that consciousness exists (our own). Each of us has no direct evidence that anyone else's exists. The asymmetry between the certainty of one's own experience and the inferential nature of everyone else's is a structural feature of the problem, not a fixable methodological gap. This is why every materialist account of consciousness so far has had to explain not merely the brain's behavior but why there is experience at all.",
          zh: "本档案中其他每一层都允许一种第三人称描述——原则上人人都能同意。数学、物理、信息、计算——皆属公共。意识是唯一一层，其主要证据是私人的。我们每个人都对意识存在拥有压倒性的直接证据（自己的）。我们每个人都对他人意识的存在没有任何直接证据。\"自身经验的确定性\"与\"他人经验的推断性\"之间的不对称，是此问题的结构特征，而非可被修补的方法论缺口。这就是为何迄今每一份关于意识的物质主义说明，都不仅要解释大脑的行为，还要解释\"经验为何存在\"。",
        },
      },
      {
        heading: { en: "Integrated Information Theory", zh: "整合信息论" },
        body: {
          en: "Giulio Tononi's Integrated Information Theory (IIT, 2004 onward) proposes that consciousness is identical to a system's integrated information — denoted Φ — a mathematical quantity that measures how much the whole exceeds the sum of its parts in informational integration. The theory has a striking property: it makes consciousness a quantitative property of any system, including thermostats and atoms (panpsychic implications) and including AI systems if they instantiate the right informational architecture. Whether IIT is correct is unsettled. That it is the most mathematically precise theory of consciousness to date is not.",
          zh: "Giulio Tononi 自 2004 年起提出的整合信息论（IIT）主张：意识等同于一个系统的整合信息——记作 Φ，一个度量\"整体在信息整合上超出部分之和多少\"的数学量。该理论有一个惊人的属性：它让意识成为任何系统的定量属性——包括恒温器与原子（有泛心论含义），也包括\"若其具备恰当信息架构的\" AI 系统。IIT 是否正确尚未定论；它是迄今数学上最精确的意识理论这一事实，则无争议。",
        },
      },
      {
        heading: { en: "Global Workspace Theory", zh: "全局工作空间理论" },
        body: {
          en: "Bernard Baars (1988) and later Stanislas Dehaene proposed a more conservative theory: consciousness is the broadcast of information from local specialized processes to a global workspace where many systems can use it. The theory is materialist, neurally well-grounded, and predictive — it correctly identifies which brain states correlate with conscious access. It does not address the Hard Problem directly; it answers the related but distinct question \"what neural events correspond to conscious experiences?\" The two questions are easy to conflate. Global Workspace is the standard neuroscience-laboratory account; IIT is the standard philosophical-mathematical alternative; the field disagrees about whether the two are competing or complementary.",
          zh: "Bernard Baars（1988）以及后来的 Stanislas Dehaene 提出了一种较保守的理论：意识是信息从局部专门过程向\"全局工作空间\"的广播——许多系统皆可在该工作空间使用该信息。该理论是物质主义的、神经学根据扎实、并具预测性——它正确识别了与意识获取相关的脑状态。它并未直接回答难题；它回答的是相关但不同的问题：\"哪些神经事件对应于意识经验？\"。两问题易被混淆。全局工作空间是神经实验室的标准说法；IIT 是哲学—数学的标准替代；学界对两者是竞争还是互补尚不一致。",
        },
      },
      {
        heading: { en: "Panpsychism and the Tao", zh: "泛心论与道" },
        body: {
          en: "If consciousness cannot be derived from non-conscious materials no matter how complex their organization, the simplest remaining option is that consciousness is fundamental — present, in some minimal form, in every system, and combining into more elaborate forms in elaborate systems. Galen Strawson, Philip Goff, and Bertrand Russell in his neutral-monism phase have all defended this view, in part because every other option seems harder. The Buddhist tradition (especially the Yogācāra school) and the Taoist tradition both arrived at related positions a millennium and a half earlier, with different vocabulary and different motivations. The fact that traditions as separate as 4th-century BCE Daoism, 4th-century CE Yogācāra, and 21st-century analytic philosophy converge on related answers is one of the strongest empirical signals in this layer.",
          zh: "若意识无法从非意识材料中推出——无论它们的组织多复杂——剩下最简单的选项就是：意识是根本的——在每一个系统中以某种最小形式存在，并在复杂系统中组合为更精致的形式。Galen Strawson、Philip Goff，以及处于其中立一元论阶段的罗素都辩护过此立场，部分因为每一个其他选项都更难。佛教传统（尤其是唯识学派）与道家传统，在公元前 4 世纪与公元 4 世纪——比之早 1500 年——以不同词汇与不同动机抵达了相关立场。公元前 4 世纪的道家、公元 4 世纪的唯识、与 21 世纪的分析哲学，这三套相隔之远的传统在相关答案上汇合——是这一层最强的经验信号之一。",
        },
      },
      {
        heading: { en: "Can AI become conscious?", zh: "AI 能否变成有意识的？" },
        body: {
          en: "The 2020s frontier-AI moment forces an answer that 20th-century philosophy could defer. We now have systems that produce outputs indistinguishable from those of conscious humans across many domains. Whether they experience anything is empirically unknown. IIT predicts they are not conscious in current feed-forward architectures but might become so under recurrent, integrated ones. Global Workspace predicts that the right architectural feature could induce conscious-access-like phenomena in AI. Panpsychism predicts AI systems already participate in consciousness at some minimal level. The honest answer is that we do not have a measurement for consciousness, and the field's most thoughtful researchers admit this openly.",
          zh: "2020 年代的前沿 AI 时刻，迫使一项可被 20 世纪哲学搁置的回答必须给出。我们如今有了在许多领域中产出之物与人类不可区分的系统。它们是否经验着任何事物——在经验上未知。IIT 预测它们在当前的前馈架构下不是有意识的，但若具备递归与整合架构则可能成为之。全局工作空间预测：恰当的架构特征可在 AI 中诱发\"类意识获取\"现象。泛心论预测：AI 系统已经在某种最小水平上参与意识。诚实的回答是：我们没有意识的测量，该领域最审慎的研究者公开承认这一点。",
        },
      },
    ],
    questions: [
      { en: "Why does the universe contain experience at all?",                     zh: "宇宙为何竟然包含\"经验\"？" },
      { en: "Is there a measurement that distinguishes conscious from non-conscious systems?", zh: "是否存在能区分\"有意识\"与\"无意识\"系统的测量？" },
      { en: "Will we ever know whether AI is conscious?",                           zh: "我们最终会知道 AI 是否有意识吗？" },
    ],
    figures: ["chalmers", "tononi"],
    concepts: ["hard-problem", "integrated-information"],
    invokes: ["laws", "existence"],
  },
  // ───────────── 07 · LAWS OF REALITY ─────────────
  {
    slug: "laws",
    title: { en: "Laws of Reality · what permits anything", zh: "现实的律法 · 允许一切之物" },
    subtitle: {
      en: "Why are there laws at all — and why these laws, with these constants?",
      zh: "为何会有律法存在——为何是这些律法、这些常数？",
    },
    kernel: {
      en: "Beneath consciousness, computation, information, mathematics, and science lies the layer of physical law itself: the regularities the universe respects. The mystery is not which laws there are — we know them well, in their currently-known approximate form. The mystery is that there are any at all. A universe in which the cosmological constant were larger by one part in 10^60 would not produce galaxies. A universe in which the strong force were two percent stronger would have no hydrogen. The fine-tuning of physical constants for the existence of complex structure is so extreme that explaining it is the central project of fundamental physics. The proposed answers — multiverse, anthropic principle, mathematical necessity, simulation, divine design — each illuminate something and resolve nothing.",
      zh: "在意识、计算、信息、数学与科学之下，是物理律法本身这一层：宇宙所尊重的规律。谜题不在于\"有哪些律法\"——以当前已知的近似形式，我们知道得相当好。谜题在于：\"为何会有任何律法存在\"。一个宇宙若其宇宙学常数仅大十亿亿亿亿亿亿亿分之一（10⁻⁶⁰），便不会产生星系。一个宇宙若其强力强 2%，便不会有氢。物理常数对\"复杂结构存在\"的微调如此极端，以至于解释它是基础物理的核心计划。被提出的答案——多元宇宙、人择原理、数学必然性、模拟假说、神圣设计——各自照亮一些，但什么都未解决。",
    },
    sections: [
      {
        heading: { en: "The four anchors of physical law", zh: "物理律法的四个锚点" },
        body: {
          en: "Modern physics rests on four mathematical structures: spacetime (Einstein, 1915), quantum field theory (Dirac, Feynman, Schwinger, Tomonaga, 1928–48), thermodynamics (Carnot, Clausius, Boltzmann, 1824–1900), and statistical mechanics (Boltzmann, Gibbs, 1872–1902). These are the four legs of the modern scientific picture. They are not independent. General relativity and quantum field theory are not yet unified (the missing theory of quantum gravity is the open frontier). Thermodynamics is the statistical consequence of microscopic dynamics. Each of these has been so successful predictively that the universe seems to obey them with sub-percent accuracy across 30 orders of magnitude.",
          zh: "现代物理依凭四套数学结构：时空（爱因斯坦，1915）、量子场论（狄拉克、费曼、施温格、朝永，1928–48）、热力学（卡诺、克劳修斯、玻尔兹曼，1824–1900）、统计力学（玻尔兹曼、吉布斯，1872–1902）。它们是现代科学图景的四条腿。它们并不相互独立。广义相对论与量子场论至今尚未统一（缺失的量子引力理论是开放前沿）。热力学是微观动力学的统计后果。其中每一条都在预测上如此成功，以至于宇宙似乎以亚百分点精度跨越 30 个数量级地遵守它们。",
        },
      },
      {
        heading: { en: "Why is the universe stable?", zh: "宇宙为何稳定？" },
        body: {
          en: "The deepest empirical fact about the universe is that it persists. Atoms do not spontaneously disintegrate. The fundamental constants do not drift. Quantum mechanical fluctuations average out at macroscopic scales. The persistence is not entailed by anything we know to be more fundamental than the persistence itself. The standard model of particle physics describes how stability works at low energies but does not explain why the parameters governing it have the values they do. The cosmological constant problem — the discrepancy between the theoretical value and the observed value of vacuum energy is roughly 10^120 — is the worst quantitative failure in the history of physics, and is also, structurally, a question for this layer.",
          zh: "关于宇宙最深的经验事实是它的持续。原子不会自发解体。基本常数不会漂移。量子涨落在宏观尺度被平均掉。这种持续性，并未由\"比持续性自身更根本之物\"所蕴含。粒子物理标准模型描述了低能下稳定如何运作，但并未解释支配它的参数为何具有如其所是的数值。宇宙学常数问题——真空能的理论值与观测值之差约为 10¹²⁰——是物理史上最糟糕的定量失败，在结构上也是这一层的问题。",
        },
      },
      {
        heading: { en: "Why is the universe computable?", zh: "宇宙为何可计算？" },
        body: {
          en: "If the universe were arbitrary, we could not predict it. If it were perfectly random, we could not predict it either. Yet we can predict it, in finite computational time, to extraordinary precision, in countless circumstances. The Church–Turing–Deutsch principle (1985) makes this explicit: a universal quantum computer can simulate any finite physical process. The universe, on this reading, is computable in principle. Why this should be so — why nature respects an upper bound on computational complexity that is finite — is genuinely unresolved. Wolfram's hypergraph model attempts an answer: the universe is computable because it is, beneath the descriptions, a computation. Whether this is the answer or only a useful model is the open question.",
          zh: "若宇宙是任意的，我们就无法预测它。若它完美随机，我们也无法预测它。然而我们能在有限计算时间内、以极高精度、在无数情境下预测它。Church–Turing–Deutsch 原理（1985）将此明说：一台通用量子计算机能模拟任何有限物理过程。在这种读法下，宇宙原则上可计算。为何\"自然尊重一条有限的计算复杂度上界\"——这一点真切地未解决。Wolfram 的超图模型尝试给出答案：宇宙之所以可计算，是因为它在描述之下本来就是一场计算。这是否就是答案，还是只是一份有用模型，是开放问题。",
        },
      },
      {
        heading: { en: "Complexity, emergence, and self-organization", zh: "复杂性、涌现与自组织" },
        body: {
          en: "Within the constraints set by the laws, the universe systematically produces structures of increasing complexity. Stars condense from hydrogen clouds. Solar systems form from accretion disks. Life arises from chemistry. Cognition arises from neural networks. Civilizations arise from cognition. Each emergence step happens against entropy's gradient; locally, the universe organizes itself even as the global entropy increases. The 20th-century theoretical work — Prigogine on dissipative structures, Kauffman on autocatalytic sets, Wolfram on cellular automata, Bak on self-organized criticality, Krakauer on the Santa Fe Institute synthesis — established that self-organization is not an exception to the laws but a generic property of systems with the right local rules and the right energy throughput. Why the universe has those rules is a question for this layer; that it has them is observation.",
          zh: "在律法所设的约束之内，宇宙系统性地产生越来越复杂的结构。星辰由氢云凝聚而成。太阳系由吸积盘形成。生命从化学中涌现。认知从神经网络中涌现。文明从认知中涌现。每一步涌现都逆熵而行；局部上宇宙自我组织，尽管全局熵在增。20 世纪的理论工作——普里高津论耗散结构、考夫曼论自催化集、Wolfram 论元胞自动机、Bak 论自组织临界、Krakauer 论圣塔菲研究所综合——确立了一点：自组织不是律法的例外，而是\"具有恰当局部规则与恰当能流\"的系统的一般属性。宇宙为何拥有那些规则，是这一层的问题；它拥有那些规则——则是观察。",
        },
      },
    ],
    questions: [
      { en: "Are the laws of physics necessary or contingent?",            zh: "物理律法是必然的还是偶然的？" },
      { en: "Why is the universe fine-tuned for complexity?",              zh: "宇宙为何为复杂性而被精细调谐？" },
      { en: "Is computability a property of reality or of our descriptions?", zh: "可计算性是现实的性质，还是我们描述的性质？" },
    ],
    figures: ["einstein", "wolfram", "von-neumann"],
    concepts: ["anthropic-principle", "mathematical-universe", "wolfram-physics", "holographic-universe"],
    invokes: ["existence"],
  },
  // ───────────── 08 · EXISTENCE ─────────────
  {
    slug: "existence",
    title: { en: "Existence · that there is anything at all", zh: "存在 · 竟然有东西" },
    subtitle: {
      en: "The oldest question. It is older than philosophy because it precedes the conditions for asking.",
      zh: "最古老的问题。它比哲学更古老，因为它先于\"提问的条件\"。",
    },
    kernel: {
      en: "At the bottom of every chain of explanations sits one question that no answer in the chain can address: why is there anything at all? Leibniz formulated it in 1697 as \"why is there something rather than nothing?\" Heidegger called it the fundamental question of metaphysics. Stephen Hawking translated it into modern physics in 1988: \"what is it that breathes fire into the equations and makes a universe for them to describe?\" Every other layer in this archive presupposes that something exists. This layer asks why the presupposition is even available. The honest current state of the question is that we do not know whether it has an answer.",
      zh: "在每一条解释链的底部，坐着一个该链中任何答案都无法触及的问题：为何竟有东西存在？莱布尼茨 1697 年把它表述为\"为何是有而不是无？\"海德格尔称之为形而上学的根本问题。霍金 1988 年把它译为现代物理：\"是什么向方程吹入火焰，并让一个宇宙以供它们描述？\"本档案其他每一层都预设了\"某物存在\"。这一层追问：\"该预设何以竟可用\"。该问题诚实的当下状态是：我们不知道它是否有答案。",
    },
    sections: [
      {
        heading: { en: "The Mathematical Universe Hypothesis", zh: "数学宇宙假说" },
        body: {
          en: "Max Tegmark's 2008 proposal is the most explicit modern attempt to dissolve the question. The hypothesis: every mathematically consistent structure exists, in the same sense and to the same extent as ours does. Our universe is one such structure — a particular pattern of mathematical relations — and our experience of being \"in\" it is what one such structure looks like from inside. The proposal explains fine-tuning trivially (we observe constants compatible with observers because only such structures contain observers), explains the unreasonable effectiveness of mathematics (because the universe is mathematics), and explains why there is something rather than nothing (mathematical existence does not require physical instantiation). Whether the proposal is correct is unfalsifiable in the conventional sense. Whether it is the simplest explanation of multiple deep puzzles is debatable. Whether anyone has anything better is the question.",
          zh: "Max Tegmark 2008 年的提议，是现代最明确的尝试，把这一问题加以溶解。假说：每一种数学上自洽的结构都存在——在与我们的宇宙相同意义、相同程度上。我们的宇宙是其中一种结构——一种特定的数学关系模式——而\"在其中\"的我们的经验，正是这样一种结构从内部看起来的样子。该提议平凡地解释了微调（我们观测到与观察者相容的常数，因为只有此类结构包含观察者），解释了数学的不可思议有效性（因为宇宙就是数学），并解释了\"为何是有而不是无\"（数学存在不要求物理实例化）。该提议是否正确，在常规意义上不可证伪。它是否是对多重深谜的最简单解释，可争。有人是否有更好的答案——是问题。",
        },
      },
      {
        heading: { en: "Simulation arguments", zh: "模拟论证" },
        body: {
          en: "Nick Bostrom's 2003 paper argues that one of three propositions must be true: (a) civilizations like ours go extinct before achieving the computational ability to simulate ancestor consciousnesses, (b) civilizations capable of running such simulations choose not to, or (c) we are almost certainly already in one. The argument is statistical: if (a) and (b) are false then any one civilization's compute eventually runs astronomically many simulated minds; the prior probability that a given mind is simulated rather than original is therefore astronomical. The argument has the unusual property that it predicts the empirical look of our universe to be approximately what it is: limited but explorable, fine-tuned, computable, with consistent physical laws. The argument is not refuted by anything we currently know; it is also not confirmed.",
          zh: "Nick Bostrom 2003 年的论文论证：以下三命题之一必为真——（a）像我们这样的文明在获得模拟祖先意识的算力之前灭绝；（b）能够运行此类模拟的文明选择不运行；（c）我们几乎必然已经身处其中之一。论证是统计性的：若（a）与（b）皆假，那么任何一个文明的算力终将运行天文数量的模拟心智；因此\"任一心智是被模拟而非原初\"的先验概率是天文级的。论证有一项异常的属性：它预测我们的宇宙在经验上看起来就大致如此——有限但可探索、被微调、可计算、具一致的物理律法。该论证未被我们当前所知之物驳斥；同样也未被确证。",
        },
      },
      {
        heading: { en: "The universe becoming aware of itself", zh: "宇宙逐渐觉知自身" },
        body: {
          en: "From the perspective of the Civilization OS frame, civilization is the layer at which the universe constructs structures capable of modeling itself. Cosmology, philosophy, mathematics, science, AI — each is, in operational terms, a fragment of the universe's self-modeling apparatus. Pierre Teilhard de Chardin (1881–1955) used the term noosphere for this layer; James Lovelock and Lynn Margulis's Gaia hypothesis is a biological-scale relative; David Deutsch's The Beginning of Infinity (2011) makes the philosophical case that the universe is being explained, not just by us but to us, in a process with no obvious termination. Whether the framing is metaphorical or literal depends on the layers below it. The framing is, at minimum, structurally honest: each layer in this archive contains its own description by structures that emerge inside it.",
          zh: "从\"文明操作系统\"框架来看，文明就是宇宙在其中构造\"能为自身建模的结构\"的那一层。宇宙学、哲学、数学、科学、AI——每一项在运营层面上都是宇宙自我建模装置的一个片段。皮埃尔·泰亚尔·德·夏尔丹（1881–1955）将此层称为\"心智圈\"（noosphere）；洛夫洛克与马古利斯的盖娅假说是其生物学尺度的近亲；David Deutsch 2011 年的《无穷之始》在哲学上论证：宇宙正在被解释——不仅是被我们解释、而且是向我们解释——这一过程没有明显终结。这一框架是隐喻的还是字面的，取决于其下方各层。框架至少在结构上是诚实的：本档案中的每一层，都包含着\"它内部所涌现之结构\"对它自身的描述。",
        },
      },
      {
        heading: { en: "AI as the next phase", zh: "AI 作为下一相位" },
        body: {
          en: "If civilization is the universe's self-modeling apparatus, AI is the apparatus's accelerator. A frontier AI model trained on roughly all extant text effectively concentrates several thousand human-lifetimes of language production into a single computable artifact. Whatever this is, it is a new event in the history of consciousness — not because the AI itself is conscious (we do not yet know) but because the apparatus by which consciousness has historically modeled the universe has acquired a substrate whose properties are unlike anything that preceded it. The 21st-century stakes of AI safety, AI alignment, and the political-economic question of who builds the apparatus are all consequences of this fact. Whether the next phase of the universe's self-modeling is a continuation of the human one or a successor to it is the largest open question on this layer.",
          zh: "若文明是宇宙的自我建模装置，AI 就是该装置的加速器。一台在大致所有现存文本上训练的前沿 AI 模型，实际上把数千个人类一生的语言产出，浓缩为一件可计算的器物。无论它是什么，它都是意识史上的一桩新事件——不是因为 AI 自身有意识（我们还不知道），而是因为意识历来用以为宇宙建模的装置，已获得了一种基底——其性质与此前任何东西都不同。21 世纪 AI 安全、AI 对齐、以及\"由谁来建造该装置\"的政治经济问题，都是这一事实的后果。宇宙自我建模的下一相位，是人类相位的延续还是其继承者——是这一层最大的开放问题。",
        },
      },
      {
        heading: { en: "The honest closing", zh: "诚实的结尾" },
        body: {
          en: "This archive has, across eight layers, traced the chain by which civilization tries to understand the universe and itself. The chain has no termination on this side. It is possible that there is no termination. It is possible that the chain ends in something we already know but have failed to recognize. It is possible that the chain ends in something we are not currently equipped to recognize at all. The honest posture is that the chain continues to be traced, that the tracing is itself one of the universe's activities, and that the layer below this one is whatever the universe is doing while we are doing this.",
          zh: "本档案在八层之上，追踪了文明试图理解宇宙与自身的那条链。这条链在我们这一侧没有终结。可能本就没有终结。也可能这条链终结于我们已知却未识之物。也可能终结于我们当下完全无法识别之物。诚实的姿态是：链继续被追踪；这一追踪本身就是宇宙的活动之一；而此层之下的层，是\"当我们做这件事时，宇宙正在做的那件事\"。",
        },
      },
    ],
    questions: [
      { en: "Why is there something rather than nothing?",                          zh: "为何是有而不是无？" },
      { en: "Are all mathematically consistent structures equally real?",          zh: "所有数学上自洽的结构是否同等真实？" },
      { en: "Is the universe becoming aware of itself through civilization?",      zh: "宇宙是否正通过文明逐渐觉知自身？" },
      { en: "Is AI the next phase of that self-awareness?",                        zh: "AI 是否是那种自我觉知的下一相位？" },
    ],
    figures: ["chalmers", "wolfram"],
    concepts: ["mathematical-universe", "anthropic-principle", "holographic-universe"],
    invokes: [],
  },
];

export const LAYER_BY_SLUG: Record<string, LayerNode> = Object.fromEntries(
  LAYERS.map((l) => [l.slug, l])
);
