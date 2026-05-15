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
          dark: "#EDEDE8",
        },
        muted: {
          DEFAULT: "#6B6B6B",
          dark: "#888885",
        },
        sumi: "#8B2635",
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
