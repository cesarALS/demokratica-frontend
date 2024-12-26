import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimBlue: "#5676f1",
        SecBlue: "#a4bbfe",
        PrimGray: "#b1b2b5",
        SecGray: "#ecedff",
        AccentRed: "#f57260",
        AccentYellow: "#ffe79f",
      },
    },
  },
  plugins: [],
} satisfies Config;
