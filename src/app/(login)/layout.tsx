"use client";

import Footer from "@/components/2.organisms/4.Footer";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useEffect, useRef } from "react";
import MessageBox from "@/templates/0.atoms/12.MessageBox";

const LoginRegisterLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const { user } = useAuthContext();
  const hasRun = useRef(false); // Se usa para rastrear si ya se ejecutó

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      if (user) {
        router.push("/");
      }
    }
  }, [user, router]);

  return (
    <>
      {/* Contenido principal que ocupa el resto del vh, que tiene el background fijo y que tiene un overflow que permite scrollear el contenido hacía abajo*/}
      <div className="flex w-full flex-col items-center overflow-y-auto bg-gradient-to-b from-SecBlue to-white scrollbar-thin scrollbar-track-transparent scrollbar-thumb-PrimBlue">
        {/* Contenido de la página */}
        <main className="flex w-full flex-col">{children}</main>
        {/* Footer al final de la página o contenido */}
        <Footer />
      </div>
      <MessageBox />
    </>
  );
};

export default LoginRegisterLayout;
