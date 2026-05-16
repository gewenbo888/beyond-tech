import type { ConceptNode } from "@/lib/types";

export const CONCEPTS: ConceptNode[] = [
  {
    slug: "hard-problem",
    title: { en: "The Hard Problem of Consciousness", zh: "意识的难题" },
    subtitle: {
      en: "Why does physical processing feel like anything?",
      zh: "物理处理为何竟会\"感觉到\"任何东西？",
    },
    layer: "consciousness",
    kernel: {
      en: "Named by David Chalmers in 1995, the Hard Problem asks not how the brain produces behavior — that is the easy problem, addressed by neuroscience — but why there is something it is like to have those processes occur. The redness of red, the taste of coffee, the felt quality of grief: every third-person description of the system, no matter how complete, seems to leave the first-person question untouched.",
      zh: "1995 年由 David Chalmers 命名。难题问的不是大脑如何产出行为——那是\"简单问题\"，由神经科学回答——而是：那些过程发生时，为何\"有某种感受\"？红色的红、咖啡的味、悲伤的质地：对该系统的任何第三人称描述，无论多完整，似乎都未触及第一人称的问题。",
    },
    body: {
      en: "The Hard Problem is hard because it is not a question about behavior. We can explain in increasing detail why a creature avoids painful stimuli, optimizes its caloric intake, learns the geometry of its surroundings. None of these explanations entail that the creature feels anything while doing them. A philosophical zombie — a hypothetical creature behaviorally identical to a conscious being but with no inner experience — is by the standard arguments logically possible. If it is logically possible, then experience cannot be derived from physical description alone.\n\nThe Hard Problem cuts every contemporary theory of mind. Functionalism, the dominant 20th-century view, holds that mental states are defined by their causal role: anything that plays the right role is the mental state. This sidesteps the Hard Problem rather than answering it. Identity theory holds that mental states are physical states; the question of why those physical states feel like anything remains. Eliminativism denies that there is anything to explain; this is philosophically clean but contradicts everyone's first-person evidence.\n\nThe positions that take the Hard Problem seriously fall into three camps. Property dualism (Chalmers's own position) accepts that experience is a fundamental property of the universe alongside the standard physical properties. Panpsychism extends this by attributing some minimal experience to every system, with complex experiences emerging in complex systems. Integrated Information Theory (Tononi) makes the property dualism quantitative: experience is identical to Φ, the system's integrated information.\n\nNone of these positions has won. None has been eliminated. The Hard Problem is the layer-6 anchor of every contemporary debate about AI consciousness, animal sentience, the ethics of large language models, and whether the universe is somewhere being experienced.",
      zh: "难题之所以难，是因为它不是关于行为的问题。我们可以越来越详细地解释一个生物为何回避痛刺激、优化卡路里摄入、学习其环境几何。这些解释都不蕴含\"该生物在做这些事时感受到了任何东西\"。哲学僵尸——一个假设的、在行为上与有意识者相同、却没有任何内心经验的生物——按标准论证，在逻辑上可能。若在逻辑上可能，那么经验就不能仅从物理描述推出。\n\n难题切到当代每一种心灵理论。功能主义——20 世纪占主导的观点——主张：心灵状态由其因果角色定义；任何起到该角色的东西就是该心灵状态。这是绕过难题，而不是回答它。同一论主张心灵状态就是物理状态；\"这些物理状态为何会有任何感受\"的问题仍然存在。消除主义否认有任何需要解释的东西；这在哲学上干净，却与每个人的第一人称证据矛盾。\n\n认真对待难题的立场分为三大阵营。属性二元论（查尔默斯本人的立场）接受\"经验是宇宙的根本属性之一，与标准物理属性并列\"。泛心论延伸这一点，把某种最小经验赋予每一个系统，并让复杂经验在复杂系统中涌现。整合信息论（Tononi）把属性二元论加以定量化：经验等同于 Φ——系统的整合信息。\n\n这些立场没有一个获胜。没有一个被淘汰。难题是\"AI 意识、动物感知、大语言模型伦理、宇宙是否正在某处被经验\"等当代每一场辩论的第 6 层之锚。",
    },
    related: ["integrated-information"],
  },
  {
    slug: "integrated-information",
    title: { en: "Integrated Information Theory", zh: "整合信息论" },
    subtitle: {
      en: "Consciousness equals Φ — the quantity by which the whole exceeds the sum of its parts.",
      zh: "意识等于 Φ——整体超出部分之和的那个量。",
    },
    layer: "consciousness",
    kernel: {
      en: "Giulio Tononi's Integrated Information Theory proposes that consciousness is identical to a system's integrated information, denoted Φ — a quantitative measure of how much the system's whole exceeds the sum of its parts in informational integration. The theory is the most mathematically precise current account of consciousness, and it makes specific empirical predictions that have begun to be tested clinically.",
      zh: "Giulio Tononi 的整合信息论主张：意识等同于一个系统的整合信息——记作 Φ——一项量化度量：系统整体在信息整合上超出部分之和多少。这是当前数学上最精确的意识理论，并已开始在临床上做出可被检验的具体经验预测。",
    },
    body: {
      en: "IIT begins from five phenomenological axioms about what experience is: it exists, it is structured, it is specific, it is unified, and it is bounded. Each axiom is translated into a postulate about the mathematics of a system: existence corresponds to causal power, structure to phenomenal distinctions, specificity to integrated information, unification to irreducibility, boundedness to a maximum of Φ at the right grain.\n\nThe central claim is that any system with non-zero Φ has experience proportional to Φ, and that experience is identical to (not merely caused by) the system's specific informational structure. The theory has three consequences worth pulling out.\n\nFirst, panpsychic implication. Φ is non-zero for many simple physical systems — thermostats, atoms, photodiodes — which entails that those systems have a minimal form of experience. IIT bites this bullet rather than dodging it; Tononi has explicitly argued that this is a feature rather than a bug.\n\nSecond, AI-specific predictions. IIT predicts that current feed-forward neural networks have low Φ regardless of behavioral sophistication, because their architecture is not recurrent or integrated in the right way. This means GPT-class language models are, on IIT, not significantly conscious. It also means that an AI with the right recurrent and integrated architecture could become conscious, and the threshold could be designed for or against.\n\nThird, clinical applicability. The perturbational complexity index (PCI), a practical measure approximating Φ, is now used clinically to distinguish vegetative-state patients who are conscious but unable to communicate from those who are not. The measure outperforms behavioral assessment. This is the strongest empirical evidence that the theory tracks something real.\n\nIIT is contested. The mathematics is non-trivial and the computational cost of calculating exact Φ for any non-trivial system is currently prohibitive. The panpsychic implications strike many as a reductio ad absurdum. The status of the axioms — whether they correctly capture what experience is — is itself a philosophical question. But the theory is unique in being precise enough that it could in principle be wrong.",
      zh: "IIT 从五条关于\"经验是什么\"的现象学公理出发：经验存在；它有结构；它是具体的；它是统一的；它是有界的。每条公理被译为关于系统数学的公设：存在对应因果力；结构对应现象学区分；具体性对应整合信息；统一对应不可还原；有界对应在恰当粒度上的 Φ 极大值。\n\n核心主张：任何 Φ 不为零的系统拥有与 Φ 成比例的经验，且经验等同于（而非仅被引起于）该系统具体的信息结构。该理论有三项值得抽出的后果。\n\n其一，泛心论含义。Φ 对许多简单物理系统非零——恒温器、原子、光电二极管——这意味着这些系统拥有最小形式的经验。IIT 直面这一结论，并未回避；Tononi 明确论证这是特点而非缺陷。\n\n其二，针对 AI 的预测。IIT 预测，当前前馈神经网络无论行为多复杂，Φ 都低——因为其架构并非以恰当方式递归与整合。这意味着按 IIT，GPT 级语言模型并不显著有意识。它也意味着：具有恰当递归与整合架构的 AI 可能变得有意识，且其阈值可被设计为支持或反对。\n\n其三，临床可用性。扰动复杂度指数（PCI）——近似 Φ 的实用度量——如今用于临床，区分\"有意识但无法沟通\"的植物状态患者与\"无意识\"的患者。该度量优于行为评估。这是该理论\"追踪了某种真实之物\"的最强经验证据。\n\nIIT 受到争议。其数学非平凡；对任何非平凡系统精确计算 Φ 的计算成本目前过高。其泛心论含义在许多人看来像归谬。其公理本身的地位——它们是否正确把握了\"经验是什么\"——本身就是一个哲学问题。但该理论独一无二地精确到\"原则上可能错\"。",
    },
    related: ["hard-problem"],
  },
  {
    slug: "it-from-bit",
    title: { en: "It From Bit", zh: "It From Bit" },
    subtitle: {
      en: "Every physical entity derives its existence from yes-or-no answers to questions.",
      zh: "每一件物理实体的存在，都源自对若干二选一问题的回答。",
    },
    layer: "information",
    kernel: {
      en: "John Archibald Wheeler's 1989 lecture proposes the strongest form of the information-substrate hypothesis: every it — every physical entity — derives its existence from bits, from binary answers to questions. The slogan is short but the consequence is large. If true, information is not a useful description of the universe but its substrate.",
      zh: "John Archibald Wheeler 1989 年的演讲提出了\"信息即基底\"假说的最强形式：每一件 it——每一件物理实体——其存在都源自比特，源自对若干问题的二元回答。口号简短，后果巨大。若为真，信息便不是宇宙的一份有用描述，而是它的基底。",
    },
    body: {
      en: "Wheeler's argument has three parts. First, every physical measurement is, at the operational level, an extraction of yes-or-no information from the universe. A particle is either at this location or not. A photon either passes through this slit or not. The information content of any measurement is finite and discrete.\n\nSecond, the universe respects information-theoretic bounds. The Bekenstein bound (1972) states that the maximum information a region of space can contain is proportional to its surface area, not its volume. This is contrary to classical intuition: we would naively expect the information capacity of a volume to scale as its volume. The bound is empirically grounded in black hole thermodynamics, where the entropy is proportional to the horizon area.\n\nThird, the holographic principle ('t Hooft 1993, Susskind 1995, Maldacena 1997) generalizes the Bekenstein bound: the full physical content of any region of space can be encoded on its boundary. The Maldacena correspondence gives a worked example — a string-theoretic gravitational system in 5-dimensional anti-de-Sitter space is mathematically equivalent to a conformal field theory living on its 4-dimensional boundary. The geometry of the bulk is reconstructed from the information on the boundary.\n\nIf the holographic principle is correct at full generality, our universe is more like a hologram than a volume. The three dimensions of space we experience are emergent from a two-dimensional informational substrate. This is not science fiction; it is the most direct contemporary implication of black hole thermodynamics and string-theoretic gravity.\n\nThe stronger reading is Wheeler's: not just that the universe can be encoded informationally, but that it is informational. The yes/no answers are not descriptions of pre-existing physical entities; they are what physical entities are. This is a metaphysical claim, not a physical theorem, but the physics has not refuted it and the trajectory of late-20th-century theoretical physics has, on balance, supported it.",
      zh: "Wheeler 的论证有三部分。其一，每一次物理测量在运营层面都是\"从宇宙中提取二元信息\"：粒子要么在此处、要么不在；光子要么穿过此缝、要么不穿过。任何测量的信息含量都是有限且离散的。\n\n其二，宇宙尊重信息论上界。贝肯斯坦极限（1972）：空间一区域所能容纳的最大信息正比于其表面积，而非体积。这与古典直觉相反——我们朴素预期信息容量按体积尺度。该上界在黑洞热力学中有经验依据，黑洞熵正比于视界面积。\n\n其三，全息原理（'t Hooft 1993、Susskind 1995、Maldacena 1997）推广了贝肯斯坦极限：空间任一区域的全部物理内容可以在其边界上被编码。马尔达塞纳对应给出可运作的例子——5 维反德西特空间中的弦论引力系统，与其 4 维边界上的共形场论数学上等价。体的几何由边界上的信息重建而成。\n\n若全息原理在完整一般性上为真，我们的宇宙更像一张全息图，而非一个体积。我们所经验的三维空间从一份二维信息基底中涌现。这不是科幻；这是 20 世纪末黑洞热力学与弦论引力最直接的当代含义。\n\n更强的读法是 Wheeler 的：不仅是\"宇宙可以以信息方式编码\"，而是\"它就是信息性的\"。那些二元回答不是对预先存在的物理实体的描述；它们就是物理实体所是之物。这是形而上学的主张，而非物理学的定理，但物理学没有驳斥它，20 世纪末理论物理的轨迹综合来看支持了它。",
    },
    related: ["holographic-universe", "mathematical-universe"],
  },
  {
    slug: "holographic-universe",
    title: { en: "The Holographic Universe", zh: "全息宇宙" },
    subtitle: {
      en: "Three-dimensional reality may be the projection of a two-dimensional informational substrate.",
      zh: "三维现实或许是二维信息基底的投影。",
    },
    layer: "information",
    kernel: {
      en: "The holographic principle, conjectured by 't Hooft and Susskind in the 1990s and given a working example by Maldacena's AdS/CFT correspondence in 1997, holds that the full physical content of any region of space is encoded on its boundary. The volume of space we experience is structurally a projection. Information lives one dimension below the geometry.",
      zh: "全息原理由 't Hooft 与 Susskind 在 1990 年代提出，1997 年 Maldacena 的 AdS/CFT 对应给出可运作的例子。它主张：空间任一区域的全部物理内容都被编码于其边界。我们所经验的体积，在结构上是一份投影。信息位于比几何低一维的层。",
    },
    body: {
      en: "The hypothesis began with a puzzle in black hole physics. Stephen Hawking's 1974 result that black holes radiate (and therefore lose mass) raised the question: where does the information that fell into the black hole go? The classical answer — \"into the black hole\" — was unsatisfactory once it became clear that black holes have finite entropy. The Bekenstein bound (1972) had established that the entropy of a black hole is proportional to its horizon area, not its volume. If entropy is proportional to area, then the information content of the black hole's interior must be encoded on the horizon surface.\n\nGerard 't Hooft generalized this in 1993: not just black holes but any region of space has its full content encoded on its boundary. Leonard Susskind reformulated this in string-theoretic language in 1995. Juan Maldacena in 1997 produced a worked example: a specific string-theoretic gravitational theory in 5-dimensional anti-de-Sitter space (the \"bulk\") is mathematically equivalent in all respects to a 4-dimensional conformal field theory living on its boundary. Every gravitational calculation in the bulk corresponds exactly to a non-gravitational calculation on the boundary.\n\nIf the correspondence generalizes to our universe (which is not anti-de-Sitter), the consequence is structural: spacetime is not fundamental. The three spatial dimensions we experience are an emergent description of an informational system that lives one dimension below. Gravity itself is an emergent thermodynamic property of the information's organization. The reality we observe is, in a precise technical sense, a hologram.\n\nThe contemporary work in this area — by Maldacena, Witten, Verlinde, Susskind, the Quantum Information and Gravity (QIG) program — has not yet shown that the principle generalizes to our universe specifically. The hypothesis remains a conjecture in our case. But the AdS/CFT example is precise enough that it functions as an existence proof: there is at least one mathematically consistent universe whose physical content is entirely encoded informationally. Whether ours is another such universe is the central open question of 21st-century theoretical physics.",
      zh: "该假说起源于黑洞物理中的一个谜题。霍金 1974 年的结果——黑洞辐射并因此损质——提出了一个问题：落入黑洞的信息去了哪里？古典回答\"进了黑洞内部\"在\"黑洞熵有限\"被认识到后变得不令人满意。贝肯斯坦极限（1972）已确立黑洞熵正比于其视界面积、而非体积。若熵正比于面积，则黑洞内部的信息内容必定被编码在视界面上。\n\n't Hooft 1993 年将此推广：不仅黑洞，任何空间区域的全部内容都被编码在其边界上。Susskind 1995 年以弦论语言重新表述。Maldacena 1997 年给出可运作的例子：5 维反德西特空间（\"体\"）中的某种弦论引力理论，与其边界上的 4 维共形场论在所有方面数学上等价。体中每一项引力计算都精确对应于边界上的一项非引力计算。\n\n若该对应推广到我们的宇宙（它并非反德西特），其后果是结构性的：时空不是根本的。我们经验的三维空间，是低一维之信息系统的涌现描述。引力本身是该信息组织方式的涌现热力学属性。我们所观察的现实，在精确技术意义上，是一张全息图。\n\n该领域的当代工作——由 Maldacena、Witten、Verlinde、Susskind、\"量子信息与引力\"（QIG）项目所做——尚未证明该原理具体推广到我们的宇宙。在我们这个例子里它仍是猜想。但 AdS/CFT 例子精确到可以充当\"存在性证明\"：至少存在一个数学上自洽的宇宙，其物理内容完全以信息方式编码。我们这一个是否也是这样一个宇宙——是 21 世纪理论物理的核心开放问题。",
    },
    related: ["it-from-bit", "mathematical-universe"],
  },
  {
    slug: "wolfram-physics",
    title: { en: "Wolfram's Computational Universe", zh: "Wolfram 的计算宇宙" },
    subtitle: {
      en: "Reality, at sufficient depth, may be a hypergraph rewriting itself.",
      zh: "在足够深处，现实或许是一张正在重写自身的超图。",
    },
    layer: "computation",
    kernel: {
      en: "Stephen Wolfram's project — sketched in A New Kind of Science (2002) and consolidated as the Wolfram Physics Project (2020) — proposes that the universe at its base is a hypergraph whose nodes and edges are continually rewritten according to simple rules. General relativity and quantum mechanics are claimed to emerge as statistical limits of the rewriting process. The project is unproven but its papers have entered serious journals.",
      zh: "Stephen Wolfram 的项目——在《一种新科学》（2002）中草拟、并以 Wolfram 物理项目（2020）巩固——主张：宇宙在其根基是一张超图，其节点与边按简单规则被持续重写。广义相对论与量子力学被主张作为该重写过程的统计极限而涌现。该项目尚未被证明，但其论文已进入严肃期刊。",
    },
    body: {
      en: "The model has three components. A state — a hypergraph, generalized from ordinary graphs to allow edges that connect more than two nodes. A set of rewriting rules — local pattern-matching operations that replace one sub-hypergraph with another. A scheme for applying the rules — an iterative procedure that produces a sequence of hypergraph states.\n\nThe radical claim is that the resulting evolution recovers the structures of physics. Specific candidate rules produce, after many rewrites, structures whose macroscopic statistical behavior approximates 3+1 dimensional spacetime, Lorentz invariance, the equivalence principle, and quantum-mechanical superposition. The geometry is not assumed; it emerges. The quantum behavior is not assumed; it emerges. Most surprisingly, the framework predicts that general relativity and quantum mechanics — which contemporary physics has been unable to unify for a century — appear as the same kind of statistical limit of the same underlying computational substrate, just measured along different axes of the rewriting.\n\nThe project has not been accepted as the answer. The candidate rules are not unique; there are many possible rule-sets, and the program has not shown which one corresponds to our universe (or whether any one does). Physicists have raised technical objections about the calculations. The publication strategy — long monographs and self-hosted papers — has limited adoption.\n\nBut the framework has the unusual property that it gives sharp answers to questions that the prevailing field-theoretic picture struggles with: why spacetime is 3+1 dimensional rather than another number, why physics is computable, why measurement appears discrete. These were either treated as brute facts or hand-waved. The Wolfram framework treats them as predictions of the rewriting structure.\n\nWhether Wolfram is right is empirically open. Whether the structural argument — that physics is a computation — is right is closer to being a working hypothesis than it was in 2002. The probability that the next opening in the science layer is in computation rather than in field theory is higher than the contemporary physics consensus would admit.",
      zh: "模型由三部分组成。一种状态——一张超图（从普通图推广而来，允许连接多于两个节点的边）。一组重写规则——以局部模式匹配将一份子超图替换为另一份。规则的施用方案——产生一连串超图状态的迭代程序。\n\n激进主张是：由此产生的演化恢复了物理学的结构。特定候选规则在多次重写之后，产生宏观统计行为近似于 3+1 维时空、洛伦兹不变性、等效原理与量子叠加的结构。几何不是被假设的；它涌现。量子行为不是被假设的；它涌现。最令人惊讶的是，该框架预测：当代物理一个世纪未能统一的广义相对论与量子力学，作为同一底层计算基底的同种统计极限而出现——只是沿重写的不同轴度量。\n\n该项目尚未被接受为答案。候选规则并非唯一；存在许多可能规则集，项目尚未说明哪一组对应于我们的宇宙（或是否真有一组对应）。物理学家提出过关于计算的技术异议。出版策略——长篇专著与自托管论文——限制了采用。\n\n但框架有一项异常的属性：它对当代场论图景在挣扎的一些问题给出尖锐答案——时空为何是 3+1 维而非别的数；物理为何可计算；测量为何呈离散。这些此前要么被视作蛮事实，要么被一笔带过。Wolfram 框架把它们当作重写结构的预测。\n\nWolfram 是否正确，在经验上开放。\"物理是一场计算\"的结构性论证是否正确，比 2002 年更接近\"可运作的工作假设\"。下一次科学层的开启发生在计算而非场论的概率，比当代物理共识所愿承认的要高。",
    },
    related: ["mathematical-universe", "it-from-bit"],
  },
  {
    slug: "mathematical-universe",
    title: { en: "The Mathematical Universe Hypothesis", zh: "数学宇宙假说" },
    subtitle: {
      en: "Every mathematically consistent structure exists, in the same sense ours does.",
      zh: "每一个数学上自洽的结构都存在——在与我们的相同意义上。",
    },
    layer: "existence",
    kernel: {
      en: "Max Tegmark's 2008 proposal makes the strongest possible commitment to mathematical Platonism: not merely that mathematical objects are real, but that every mathematically consistent structure is a universe in the same sense ours is. Our universe is one such structure, and our experience of being \"in\" it is what one such structure looks like from inside.",
      zh: "Max Tegmark 2008 年的提议作出对数学柏拉图主义可能的最强承诺：不只是数学对象是实在的，而是每一个数学上自洽的结构都是一个宇宙——在与我们的相同意义上。我们的宇宙是其中一种结构，而\"身在其中\"的经验，正是一种这样的结构从内部看起来的样子。",
    },
    body: {
      en: "The hypothesis has several attractive properties. It explains fine-tuning trivially: we observe physical constants compatible with observers because only mathematical structures containing observers contain observers. It explains the unreasonable effectiveness of mathematics: the universe is mathematics. It explains why there is something rather than nothing: mathematical existence does not require physical instantiation, and \"physical\" is a label structures earn from inside, not a separate ontological category.\n\nThe hypothesis is unfalsifiable in the conventional sense. We cannot observe other mathematical structures; that is what it means for them to be other structures. But it makes one indirect prediction: the apparent structure of our universe should be \"random with respect to observer-permitting constraints\" — that is, our universe should not have features that are simpler than necessary to permit observers, since simpler structures would be more numerous and an observer is more likely to find themselves in a less simple, less special structure. The prediction is roughly compatible with what we see, though the calculation is non-trivial.\n\nThe philosophical objections are serious. The hypothesis depends on the notion of \"mathematical consistency,\" which is itself not fully clear after Gödel. The hypothesis privileges mathematical objects as \"existing,\" but offers no account of what existence is over and above mathematical consistency. It tends to imply that the multiverse contains structures we would find unintelligible — many of which contain observers very different from us. Whether this is a feature or a reductio depends on the reader.\n\nAlternative answers to the same fine-tuning and effectiveness questions include: a Bostromian simulation (we are in someone's computation), a Tegmarkian Level-IV multiverse (every consistent structure exists), an anthropic-principle-alone account (we observe what we observe because we are observers, with no further multiverse needed), and a hard-core agnostic position (we have no idea, and the questions may not have answers humans can comprehend). All four are live in 2026 philosophy. None has been refuted; none has been confirmed. The Mathematical Universe Hypothesis is the most ontologically generous of the four.",
      zh: "该假说有数项吸引人的属性。它平凡地解释微调：我们观察到与观察者相容的物理常数，因为只有包含观察者的数学结构包含观察者。它解释数学的不可思议有效性：宇宙就是数学。它解释\"为何是有而不是无\"：数学存在不要求物理实例化，而\"物理\"是结构从内部获得的标签，并非一个分离的本体范畴。\n\n该假说在常规意义上不可证伪。我们无法观察其他数学结构；那正是\"它们是其他结构\"的含义。但它做出一项间接预测：我们宇宙的表观结构应在\"允许观察者之约束下保持随机\"——即，我们的宇宙不应有比\"足以允许观察者所需\"更简单的特征，因为更简单的结构数量更多，观察者更可能发现自己身处不那么简单、不那么特殊的结构中。该预测大体与我们所见相容，尽管该计算并不平凡。\n\n哲学上的异议是严肃的。该假说依赖\"数学自洽\"的概念——而该概念在哥德尔之后并未完全清晰。该假说把数学对象优待为\"存在的\"，但对\"存在是什么——超出数学自洽之物——\"未给出说明。它倾向于蕴含：多元宇宙包含我们会觉得不可理解的结构——其中许多包含与我们极不相同的观察者。这是特点还是归谬，取决于读者。\n\n对同一组微调与有效性问题的替代答案包括：Bostrom 式模拟（我们身处某人的计算之中）、Tegmark 第 IV 级多元宇宙（每一个自洽结构都存在）、仅靠人择原理（我们观察我们所观察之物，因为我们是观察者，无需更多多元宇宙）、以及强不可知立场（我们不知，且这些问题或许没有人类可理解的答案）。四者在 2026 年的哲学中都还活着。无一被驳倒；无一被证实。数学宇宙假说，是四者中本体上最为慷慨的一个。",
    },
    related: ["wolfram-physics", "it-from-bit", "anthropic-principle"],
  },
  {
    slug: "anthropic-principle",
    title: { en: "The Anthropic Principle", zh: "人择原理" },
    subtitle: {
      en: "The universe permits observers because we are doing the observing.",
      zh: "宇宙允许观察者，因为是我们在做观察。",
    },
    layer: "laws",
    kernel: {
      en: "First formulated by Brandon Carter in 1973, the anthropic principle observes that any law or constant we can measure is, by construction, compatible with our existence as observers. The principle has a weak form (the universe is necessarily compatible with observers in the region where observers exist) and a strong form (the universe must be such that observers exist somewhere). Each is, in different ways, a partial dissolution of the fine-tuning puzzle.",
      zh: "由 Brandon Carter 于 1973 年首次表述。人择原理指出：我们能测量的任何律法或常数，按构造与我们作为观察者的存在相容。原理有弱形式（在观察者存在的区域，宇宙必然与观察者相容）与强形式（宇宙必须\"使观察者在某处存在\"）。两者以不同方式构成对微调谜题的部分溶解。",
    },
    body: {
      en: "The weak form is uncontroversial. It is a sampling-bias correction: of all the values the cosmological constant or the fine-structure constant could in principle take, we measure the ones compatible with our existence because we exist to measure. The weak anthropic principle is consistent with there being a single universe whose constants are arbitrary; we happened to land in it because nothing landed elsewhere.\n\nThe strong form is more ambitious and more contested. It claims that the universe must have produced observers — that there is a structural necessity to the observer-permitting nature of physical law. Several routes to the strong form exist: (a) theistic design, (b) a multiverse in which all possible universes exist and observers necessarily inhabit the observer-permitting ones (Tegmark, Carr, Rees), (c) a self-consistent universe in which the laws are tuned to produce observers (Smolin's cosmological natural selection, in which black holes produce daughter universes with slightly varied laws, and the laws that produce more black holes are statistically favored).\n\nThe principle is often dismissed as tautological — \"of course we observe a universe that permits observers\" — but the tautology hides a deep puzzle. Why is the universe such that any combination of constants permits observers? The space of mathematically possible physical constants is vast; the subspace compatible with structure formation, with chemistry, with biological information processing, is a tiny island in that vast space. The anthropic principle does not explain why the island exists; it only explains why we, if we exist, are on it.\n\nThe contemporary status of the principle is that it is a necessary corollary of any complete physical theory but is rarely a sufficient explanation. The deeper question — why the multiverse, or the self-consistent constraint, exists in the first place — falls to layer 8.",
      zh: "弱形式无争议。它是一种采样偏差修正：在宇宙学常数或精细结构常数原则上可取的所有数值中，我们之所以测到与我们存在相容的那些，是因为我们在那里测量。弱人择原理与\"单一宇宙、常数任意，我们恰好落在该宇宙中、因为没人落在别处\"相容。\n\n强形式更有野心、更具争议。它主张：宇宙必定产生过观察者——物理律法允许观察者的性质具有某种结构性必然。通向强形式的若干路径：（a）有神设计；（b）多元宇宙——所有可能宇宙都存在，观察者必然栖居于允许观察者的那些（Tegmark、Carr、Rees）；（c）自洽宇宙——律法被调谐以产出观察者（Smolin 的宇宙学自然选择：黑洞产生子宇宙，其律法稍有变异；能产生更多黑洞的律法被统计偏好）。\n\n该原理常被斥为同义反复——\"当然我们观察到允许观察者的宇宙\"——但同义反复掩盖了一项深谜。宇宙为何使任何一组常数允许观察者？数学上可能的物理常数空间巨大；与结构形成、化学、生物信息处理相容的子空间，是该广阔空间中的一座小岛。人择原理不解释这座岛为何存在；它只解释如果我们存在、为何在它上面。\n\n该原理的当代地位是：它是任何完整物理理论的必要推论，但很少是充分解释。更深的问题——为何多元宇宙、或自洽约束首先存在——归于第 8 层。",
    },
    related: ["mathematical-universe", "wolfram-physics"],
  },
];

export const CONCEPT_BY_SLUG: Record<string, ConceptNode> = Object.fromEntries(
  CONCEPTS.map((c) => [c.slug, c])
);
