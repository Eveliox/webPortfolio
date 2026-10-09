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
          DEFAULT: "#FAF9F6",
          dark: "#191919",
        },
        ink: {
          DEFAULT: "#242323",
          soft: "#333333",
          dark: "#EEECE7",
          "soft-dark": "#C4C4BF",
        },
        muted: {
          DEFAULT: "#74716C",
          dark: "#AAA69F",
        },
        sumi: {
          DEFAULT: "#A64236",
          dark: "#DA8273",
        },
        gold: {
          DEFAULT: "#B8860B",
          dark: "#D4A94A",
        },
        hairline: {
          DEFAULT: "#DFDDD7",
          dark: "#373635",
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
