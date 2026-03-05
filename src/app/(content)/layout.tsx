"use client"

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MessageBox from "@/features/messages/components/MessageBox";
import { useAuthContext } from "@/features/auth/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FixedMenuButton from "@/components/buttons/FixedMenuButton";

export default function AfterLogInContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
     if (!user) {
       router.push("/");
     }
  }, [user, router]);
  
  return (
    <>
      {/* Header siempre visible en la parte superior */}
      <Header />

      {/* Contenido principal que ocupa el resto del vh, que tiene el background fijo y que tiene un overflow que permite scrollear el contenido hacía abajo*/}
      <div className="flex h-[91.667vh] w-full flex-initial flex-col items-center overflow-y-auto bg-gradient-to-b from-SecBlue to-white to-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-PrimBlue">
        {/* Contenido de la página */}
        <main className="flex min-h-[91.667vh] w-full flex-shrink-0 grow items-start">
          {children}
        </main>
        {/* Footer al final de la página o contenido */}
        <Footer />
      </div>
      {user && <FixedMenuButton/>}
      <MessageBox/>
    </>
  );
}
