import type { Config } from "tailwindcss";

import { BREAKPOINTS, Z_INDEX } from "./lib/constants";
import { DURATION, EASE } from "./lib/motion";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper: "#FAF9F7",
      ink: "#111111",
      "ink-soft": "#55524D",
      rule: "#E2DFDA",
      accent: "#C1121F",
    },
    fontFamily: {
      display: ["var(--font-display)", "serif"],
      sans: ["var(--font-sans)", "sans-serif"],
    },
    fontVariationSettings: {
      display: '"opsz" 96',
      "display-hover": '"opsz" 24',
    },
    fontSize: {
      display: [
        "clamp(3.5rem, 11vw, 11rem)",
        { lineHeight: "0.88", letterSpacing: "-0.02em", fontWeight: "400" },
      ],
      section: [
        "clamp(2rem, 4vw, 3.5rem)",
        { lineHeight: "1.05", letterSpacing: "-0.015em", fontWeight: "400" },
      ],
      body: ["1rem", { lineHeight: "1.65", letterSpacing: "0", fontWeight: "400" }],
      label: ["0.7rem", { lineHeight: "1.6", letterSpacing: "0.16em", fontWeight: "500" }],
      number: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "500" }],
      timecode: ["0.7rem", { lineHeight: "1.5", letterSpacing: "0.08em", fontWeight: "450" }],
    },
    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
      4: "1.5rem",
      5: "2rem",
      6: "3rem",
      7: "4rem",
      8: "6rem",
      9: "8rem",
      10: "10rem",
      section: "clamp(6rem, 12vh, 10rem)",
      gutter: "clamp(1rem, 2vw, 2rem)",
      frame: "clamp(1.5rem, 5vw, 6rem)",
      optical: "-0.06em",
      "optical-italic": "-0.04em",
      misregister: "0.125rem",
      cursor: "4rem",
      "cursor-preview": "10rem",
      "video-player": "18.75rem",
    },
    maxWidth: {
      copy: "62ch",
      content: "1600px",
    },
    minWidth: {
      viewport: "320px",
    },
    minHeight: {
      screen: "100vh",
      hero: "calc(100svh - 10rem)",
    },
    width: {
      full: "100%",
      hairline: "0.5px",
    },
    borderWidth: {
      0: "0",
      hairline: "0.5px",
      DEFAULT: "1px",
      2: "2px",
    },
    aspectRatio: {
      portrait: "4 / 5",
      film: "16 / 9",
      detail: "1 / 1",
    },
    gridTemplateColumns: {
      1: "minmax(0, 1fr)",
      2: "repeat(2, minmax(0, 1fr))",
      editorial: "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      "work-overlay": "repeat(5, minmax(0, 1fr))",
    },
    backgroundImage: {
      ambient: "radial-gradient(circle at 52% 54%, var(--ambient-color), transparent 70%)",
      "paper-vignette":
        "radial-gradient(circle at center, transparent 58%, rgb(17 17 17 / 3%) 100%)",
      grain:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='.65'/%3E%3C/svg%3E\")",
    },
    backgroundSize: {
      "grain-tile": "8rem 8rem",
    },
    strokeWidth: {
      hairline: "0.5",
    },
    screens: {
      sm: `${BREAKPOINTS.small}px`,
      md: `${BREAKPOINTS.medium}px`,
      rails: `${BREAKPOINTS.rails}px`,
      lg: `${BREAKPOINTS.large}px`,
      xl: `${BREAKPOINTS.extraLarge}px`,
    },
    zIndex: {
      vignette: String(Z_INDEX.vignette),
      ambient: String(Z_INDEX.ambient),
      base: String(Z_INDEX.base),
      content: String(Z_INDEX.content),
      header: String(Z_INDEX.header),
      rails: String(Z_INDEX.rails),
      cursor: String(Z_INDEX.cursor),
      grain: String(Z_INDEX.grain),
      skip: String(Z_INDEX.skip),
    },
    extend: {
      grayscale: {
        focus: "35%",
      },
      opacity: {
        focus: "0.4",
        grain: "0.035",
      },
      outlineOffset: {
        4: "4px",
      },
      transitionDuration: {
        reduced: `${DURATION.reduced}s`,
        fast: `${DURATION.fast}s`,
      },
      transitionTimingFunction: {
        editorial: EASE.outCss,
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
