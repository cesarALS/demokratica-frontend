/*
Recordar que este es el layout de la aplicación en general. Todo lo que vaya acá,
aparecerá en todas las páginas de la app.
*/ 

import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/utils/ContextProviders/AuthProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { MessageProvider } from "@/utils/ContextProviders/MessageProvider";

// Fuentes para la App. Las importamos de Google fonts, haciendo uso de next/font para optimizaciones

const sourceSans3 = Source_Sans_3({
  variable: "--font-sourcesans3",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Demokratica",
  description: "Demokratica facilita la toma de decisiones grupales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es"      
      className={`${sourceSans3.variable} font-sourcesans3`}
    > 
      <body className="flex flex-col min-h-screen"> 
        <Suspense fallback={ <Loading />}>
          <AuthProvider>
            <MessageProvider>           
              {children}
            </MessageProvider>
          </AuthProvider>
        </Suspense> 
      </body>
    </html>       
  );
}
