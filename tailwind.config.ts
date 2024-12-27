import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Es bueno poner las nuevas clases aquí, en extend. Si se ponen fuera, hacen que se 
      // deshabiliten clases nativas de tw
      fontFamily: {        
        // Aquí especificamos las fuentes que deseamos. Usar font-<nombre_variable> Ej. font-ptsans
        // Las fuentes deben estar importadas en el layout.tsx principal
        ptsans: ["var(--font-ptsans)", ],
        ptserif: ["var(--font-ptserif)", ],
        funnelsans: ["var(--font-funnelsans)"],        
        funneldisplay: ["var(--font-funneldisplay)"],
        encodesans: ["var(--font-encodesans)"],
        faustina: ["var(--font-faustina)"]
      },
      colors: {
        // Esta es nuestra paleta de Colores! Se puede usar con libertad en el proyecto
        PrimBlue: "#519ff2",
        SecBlue: "#a1c8fe",
        AccentBlue: "#1988ff",
        PrimGray: "#b1b2b5",
        SecGray: "#cecfd2",
        ThirdGray: "#ebecf0",
        AccentRed: "#f57260",
        AccentYellow: "#ffe79f",
      },
    },
  },
  plugins: [],
} satisfies Config;
