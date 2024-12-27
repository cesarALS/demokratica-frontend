/*
Recordar que este es el layout de la aplicación en general. Todo lo que vaya acá,
aparecerá en todas las páginas de la app.
*/ 

import type { Metadata } from "next";
import { PT_Serif, PT_Sans, Funnel_Sans, Funnel_Display, Encode_Sans, Faustina } from "next/font/google";
import "./globals.css";

// Fuentes para la App. Las importamos de Google fonts, haciendo uso de next/font para optimizaciones

//Fuentes Sans
const ptSans = PT_Sans({
  variable: "--font-ptsans",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const funnelSans = Funnel_Sans({
  variable: "--font-funnelsans",
  subsets: ["latin"],
  display: "swap"
});

const encodeSans = Encode_Sans({
  variable: "--font-encodesans",
  subsets: ["latin"],
  display: "swap",
});

// Fuentes Serif
const ptSerif = PT_Serif({
  variable: "--font-ptserif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funneldisplay",
  subsets: ["latin"],
  display: "swap"
});

const faustina = Faustina({
  variable: "--font-faustina",
  subsets: ["latin"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Demokratica",
  description: "App para decisiones grupales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="es"
    // Estas son las fuentes por defecto, pero cuando se necesiten otras, se especifican en las clases de tw
    // Al final se especifica la variable que se usará por defecto en el proyecto, con font-<fuente>
    className={`${ptSans.variable} ${ptSerif.variable} ${funnelSans.variable} ${funnelDisplay.variable} ${encodeSans.variable} ${faustina.variable} font-faustina`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
