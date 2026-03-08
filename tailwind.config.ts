import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#13161D",
        charcoal: "#1A1E27",
        stone: "#E7E2D8",
        parchment: "#F7F4EE",
        smoke: "#E3E0D8",
        mist: "#A8AFBF",
        navy: "#2E3A52",
        gold: "#A78B60"
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        line: "0 0 0 1px rgba(227, 224, 216, 0.15)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(227,224,216,0.05) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
