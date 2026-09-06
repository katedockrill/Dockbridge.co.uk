import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1F1F1F",
        darkCopper: "#8B5E3C",
        softCopper: "#B9845F",
        gold: "#D4AF7C",
        stone: "#C9C1B6",
        ivory: "#FAF8F3",
      },
      fontFamily: {
        serif: ["var(--font-db-serif)", "Georgia", "serif"],
        sans: ["var(--font-db-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
