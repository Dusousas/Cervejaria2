import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textGreen: "#017d53",
        textGray: "#777777"

      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        delius: ["Delius", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
