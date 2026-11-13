import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#050508",
        panel: "#0d0d16",
        line: "#25253a",
        neon: "#ff2a45",
        cyan: "#2ee6ff",
        dim: "#8f8ea6",
      },
      fontFamily: {
        serif: ["var(--font-dela)", "sans-serif"],
        display: ["var(--font-dela)", "sans-serif"],
        sans: ["var(--font-chakra)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
