import type { Config } from "tailwindcss";

export default {
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
        SecCreamCan: "#f7d87c",
        AccentCreamCan: "#f2b600",
        PrimCasablanca: "#f2ac33",
        SecCasablanca: "#f7bf5e",
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
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
