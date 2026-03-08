import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10131A",
        panel: "#171C25",
        "panel-soft": "#151A23",
        warm: "#E8E1D4",
        ivory: "#EEE9DE",
        slate: "#A4ADBD",
        "accent-navy": "#2C3954",
        "accent-gold": "#A08862",
        "premium-line": "rgba(238, 233, 222, 0.16)"
      },
      fontFamily: {
        sans: ["Inter", "Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Iowan Old Style", "Baskerville", "Times New Roman", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
