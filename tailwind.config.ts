import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        noto: ["Noto Serif JP", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
        winky: ["Winky Sans", "sans-serif"],
        
      },
      clipPath: {
        'triangle': 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
        'shift': 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
      },
    },
  },
  plugins: [require("daisyui")],
};

export default tailwindConfig;
