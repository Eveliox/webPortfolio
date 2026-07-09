import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAFAF7",
          dark: "#0F0F0E",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#333333",
          dark: "#EDEDE8",
          "soft-dark": "#C4C4BF",
        },
        muted: {
          DEFAULT: "#6B6B6B",
          dark: "#888885",
        },
        sumi: {
          DEFAULT: "#8B2635",
          dark: "#C64A5C",
        },
        gold: {
          DEFAULT: "#B8860B",
          dark: "#D4A94A",
        },
        hairline: {
          DEFAULT: "#E5E5E0",
          dark: "#2A2A28",
        },
      },
      fontFamily: {
        serif: ["var(--font-shippori)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "48rem",
      },
    },
  },
  plugins: [],
};

export default config;
