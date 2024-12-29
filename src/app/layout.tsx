/*
Recordar que este es el layout de la aplicación en general. Todo lo que vaya acá,
aparecerá en todas las páginas de la app.
*/ 

import type { Metadata } from "next";
import { PT_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Fuentes para la App. Las importamos de Google fonts, haciendo uso de next/font para optimizaciones

const ptSans = PT_Sans({
  variable: "--font-ptsans",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-sourcesans3",
  subsets: ["latin"],
  display: "swap",
});

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
    className={`${ptSans.variable} ${sourceSans3.variable} font-sourcesans3`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
