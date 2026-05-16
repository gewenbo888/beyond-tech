import type { Bi } from "./i18n";

export type LayerKey =
  | "technology" | "science" | "mathematics" | "information"
  | "computation" | "consciousness" | "laws" | "existence";

export const LAYER_ORDER: LayerKey[] = [
  "technology", "science", "mathematics", "information",
  "computation", "consciousness", "laws", "existence",
];

export const LAYER_META: Record<LayerKey, {
  num: number;
  en: string; zh: string;
  glyph: string;
  color: string;
  shortEn: string; shortZh: string;
}> = {
  technology:    { num: 1, en: "Technology",         zh: "技术",       glyph: "⚙", color: "#e2a572", shortEn: "Interface layer",        shortZh: "接口层" },
  science:       { num: 2, en: "Science",            zh: "科学",       glyph: "⌬", color: "#88c8e0", shortEn: "Discovery layer",        shortZh: "发现层" },
  mathematics:   { num: 3, en: "Mathematics",        zh: "数学",       glyph: "∮", color: "#9bc8a8", shortEn: "Language of reality",    shortZh: "现实的语言" },
  information:   { num: 4, en: "Information",        zh: "信息",       glyph: "Ψ", color: "#9b7fd6", shortEn: "Beneath matter",         shortZh: "物质之下" },
  computation:   { num: 5, en: "Computation",        zh: "计算",       glyph: "Λ", color: "#7eb5da", shortEn: "Universe as process",    shortZh: "宇宙即过程" },
  consciousness: { num: 6, en: "Consciousness",      zh: "意识",       glyph: "◉", color: "#d99aa5", shortEn: "The observer",           shortZh: "观察者" },
  laws:          { num: 7, en: "Laws of Reality",    zh: "现实的律法", glyph: "Ω", color: "#d4af6f", shortEn: "What permits anything",  shortZh: "允许一切之物" },
  existence:     { num: 8, en: "Existence",          zh: "存在",       glyph: "∅", color: "#ede4d0", shortEn: "That there is anything", shortZh: "竟然有东西" },
};

export type Section = { heading: Bi; body: Bi };

export type LayerNode = {
  slug: LayerKey;
  title: Bi;          // long-form title for the page
  subtitle: Bi;
  kernel: Bi;         // 80-120 word core paragraph
  sections: Section[]; // long-form body sections
  questions: Bi[];    // key questions this layer asks
  figures: string[];  // thinker slugs anchored here
  concepts: string[]; // concept slugs anchored here
  invokes: LayerKey[]; // layers this one invokes (downstream)
};

export type ThinkerNode = {
  slug: string;
  name: string;
  nameZh?: string;
  born: string;
  field: Bi;
  layer: LayerKey;       // primary layer
  kernel: Bi;
  contribution: Bi;
  significance: Bi;
  related: string[];     // thinker slugs
};

export type ConceptNode = {
  slug: string;
  title: Bi;
  subtitle: Bi;
  layer: LayerKey;
  kernel: Bi;
  body: Bi;            // long-form paragraphs separated by \n\n
  related: string[];   // concept slugs
};

export type TimelineEvent = {
  year: number;        // negative = BCE
  title: Bi;
  layer: LayerKey;
  note: Bi;
};
