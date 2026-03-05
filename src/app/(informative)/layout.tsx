"use client"

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MessageBox from "@/features/messages/components/MessageBox";
import FixedMenuButton from "@/components/buttons/FixedMenuButton";
import { useAuthContext } from "@/features/auth/AuthProvider";

export default function InformativeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const { user } = useAuthContext();

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
      {user && <FixedMenuButton/>}
    </>
  );
}
