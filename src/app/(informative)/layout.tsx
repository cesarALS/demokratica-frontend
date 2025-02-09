"use client"

import Header from "@/components/2.organisms/3.Header";
import Footer from "@/components/2.organisms/4.Footer";
import MessageBox from "@/templates/0.atoms/12.MessageBox";

export default function InformativeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Header siempre visible en la parte superior */}
      <Header />

      {/* Contenido principal que ocupa el resto del vh, que tiene el background fijo y que tiene un overflow que permite scrollear el contenido hacía abajo*/}
      <div className="flex flex-initial flex-col items-center h-[91.667vh] w-full overflow-y-auto bg-gradient-to-b from-SecBlue to-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-PrimBlue">
        {/* Contenido de la página */}
        <main className="flex min-h-[91.667vh] w-full flex-shrink-0 grow items-start">
          {children}
        </main>
        {/* Footer al final de la página o contenido */}
        <Footer />
      </div>
      <MessageBox />
    </>
  );
}
