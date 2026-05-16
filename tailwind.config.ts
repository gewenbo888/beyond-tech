import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:        "#050608",
        "bg-2":    "#080a10",
        surface:   "#0d1018",
        "surface-2": "#141826",
        line:      "#1c2032",
        "line-2":  "#2b3048",
        text:      "#ede4d0",
        "text-2":  "#d4ccb8",
        muted:     "#9a93a6",
        dim:       "#5a5266",
        gold:      "#d4af6f",
        "gold-2":  "#eccb95",
        violet:    "#9b7fd6",
        "violet-2":"#b9a3e8",
        cosmic:    "#88c8e0",
        "cosmic-2":"#b6dceb",
        sage:      "#9bc8a8",
        rose:      "#d99aa5",
        amber:     "#e2a572",
        // Per-layer accent colors
        "layer-technology":   "#e2a572",
        "layer-science":      "#88c8e0",
        "layer-mathematics":  "#9bc8a8",
        "layer-information":  "#9b7fd6",
        "layer-computation":  "#7eb5da",
        "layer-consciousness":"#d99aa5",
        "layer-laws":         "#d4af6f",
        "layer-existence":    "#ede4d0",
      },
      fontFamily: {
        monumental: ['"Cinzel"', '"Trajan Pro"', "Georgia", "serif"],
        display: ['"Spectral"', '"Noto Serif SC"', "Georgia", "serif"],
        body:    ['"Manrope"', '"Noto Sans SC"', "system-ui", "sans-serif"],
        mono:    ['"JetBrains Mono"', '"SF Mono"', "Menlo", "monospace"],
        zhDisplay: ['"Noto Serif SC"', "Georgia", "serif"],
        zh:        ['"Noto Sans SC"', '"Noto Serif SC"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.022em",
        monumental: "0.06em",
      },
      animation: {
        "pulse-soft": "pulseSoft 3.5s ease-in-out infinite",
        "twinkle":    "twinkle 4s ease-in-out infinite",
        "orbit":      "orbit 60s linear infinite",
        "drift-slow": "drift 50s linear infinite",
      },
      keyframes: {
        pulseSoft: { "0%, 100%": { opacity: ".5" }, "50%": { opacity: "1" } },
        twinkle:   { "0%, 100%": { opacity: ".55", transform: "scale(1)" }, "50%": { opacity: "1", transform: "scale(1.1)" } },
        orbit:     { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        drift:     { "0%": { transform: "translate(0,0)" }, "100%": { transform: "translate(-50px,-50px)" } },
      },
    },
  },
  plugins: [],
};
export default config;
