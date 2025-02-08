"use client"

import Header from "@/components/2.organisms/3.Header";
import Footer from "@/components/2.organisms/4.Footer";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AfterLogInContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
    const router = useRouter();
    const {user} = useAuthContext(); 
  
    useEffect(() => {    
      if (!user) {
        router.push("/"); 
      }
    }, [user, router]);
  
  return (
    // Contenedor principal como un flexbox con altura mínima de pantalla
    <div className="flex min-h-screen flex-col">
      {/* Header siempre visible en la parte superior */}
      <Header />

      {/* Contenido principal que ocupa el resto del vh, que tiene el background fijo y que tiene un overflow que permite scrollear el contenido hacía abajo*/}
      <div className="flex h-[91.667vh] w-full flex-initial flex-col items-center overflow-y-auto bg-gradient-to-b from-SecBlue to-white to-white scrollbar-thin scrollbar-track-SecBlue scrollbar-thumb-ThirdGray">
        {/* Contenido de la página */}
        <main className="flex min-h-[91.667vh] w-full flex-shrink-0 grow items-start">
          {children}
        </main>
        {/* Footer al final de la página o contenido */}
        <Footer />
      </div>
    </div>
  );
}
