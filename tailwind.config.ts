import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "Avenir Next", "Avenir", "Helvetica Neue", "Arial", "sans-serif"] },
      colors: {
        night: "#10182B",
        deep: "#253047",
        sandstone: "#D8C3A5",
        gold: "#C98632",
        signal: "#7297FF",
        ivory: "#F4F0E7",
      },
    },
  },
  plugins: [],
};
export default config;
