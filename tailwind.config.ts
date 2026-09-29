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
          DEFAULT: "#F4F1E9",
          dark: "#171A19",
        },
        ink: {
          DEFAULT: "#252B28",
          soft: "#333333",
          dark: "#EDEDE8",
          "soft-dark": "#C4C4BF",
        },
        muted: {
          DEFAULT: "#686C64",
          dark: "#A2A69C",
        },
        sumi: {
          DEFAULT: "#B44232",
          dark: "#E8826E",
        },
        gold: {
          DEFAULT: "#B8860B",
          dark: "#D4A94A",
        },
        hairline: {
          DEFAULT: "#DCDACF",
          dark: "#343A35",
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
