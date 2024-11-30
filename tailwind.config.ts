import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        OxfordBlue: "#0A0F29",
        Aureolin: "#EBDF00",
        PrussianBlue: "#243751",
        GoldenGate: "#F0531F",
        AliceBlue: "#E0E5F0",
      },
      colors: {
        OxfordBlue: "#0A0F29",
        Aureolin: "#EBDF00",
        PrussianBlue: "#243751",
        GoldenGate: "#F0531F",
        AliceBlue: "#E0E5F0",
      },
      keyframes: {
        revealRight: {
          '0%': { clipPath: 'circle(0% at 70% 50%)' },
          '100%': { clipPath: 'circle(100% at 70% 50%)' },
        },
        revealLeft: {
          '0%': { clipPath: 'circle(0% at 0% 50%)' },
          '100%': { clipPath: 'circle(100% at 0% 50%)' },
        },
      },
      animation: {
        revealRight: 'revealRight 1s ease-out 1 forwards',
        revealLeft: 'revealLeft 1s ease-out 1 forwards',
      },
    },
  
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
