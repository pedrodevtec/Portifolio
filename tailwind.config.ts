import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#141B20",
        surface: "#222B31",
        primary: "#646E86",
        primarySoft: "#8798AA",
        textMain: "#DDE1DC",
        textMuted: "#AAB1B0",
        warm: "#A77965",
        borderSubtle: "rgba(221, 225, 220, 0.12)",
      },
      boxShadow: {
        subtle: "0 20px 70px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
