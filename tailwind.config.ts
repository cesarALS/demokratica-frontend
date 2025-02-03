import type { Config } from "tailwindcss";

export default {
  // Aquí toca poner las clases de hover:scale, sumado a las que se pongan en scale: dentro de extend, cuando no estén predeterminadas por tailwind
  safelist: [
    "hover:scale-115", // Asegura que estas clases siempre se incluyan
  ],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Con esta propiedad, creamos nuevas clases de tw, que podemos usar en el código
    extend: {
      // Es bueno poner las nuevas clases aquí, en extend. Si se ponen fuera, hacen que se
      // deshabiliten clases nativas de tw
      fontFamily: {
        // Aquí especificamos las fuentes que deseamos. Usar font-<nombre_variable> Ej. font-ptsans
        // Las fuentes deben estar importadas en el layout.tsx principal
        ptsans: ["var(--font-ptsans)"],
        sourcesans3: ["var(--font-sourcesans3)"],
      },
      colors: {
        // Esta es nuestra paleta de Colores! Se puede usar con libertad en el proyecto
        PrimBlack: "#717171",
        SecBlack: "#8d8d8d",
        PrimBlue: "#519ff2",
        SecBlue: "#a1c8fe",
        AccentBlue: "#1988ff",
        PrimGray: "#b1b2b5",
        SecGray: "#cecfd2",
        ThirdGray: "#ebecf0",
        PrimCreamCan: "#f2ca50",
        SecCreamCan: "#f2dfa2",
        AccentCreamCan: "#f2b600",
        PrimCasablanca: "#f2ac33",
      },
      // Escalas, sobre todo para las animaciones de tamaño
      scale: {
        115: "1.15",
      },
      // La propiedad del tamaño de los bordes
      borderWidth: {
        "1.5": "1.5px",
      },
      // El tamaño del header de las páginas informativas
      spacing: {
        "header-size": "4em",
      },
    },
  },
  plugins: [],
} satisfies Config;
