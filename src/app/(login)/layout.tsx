// Este es el layout para las páginas de registrarse y loguearse
// Probablemente el header de esta sección sea diferente, o incluso puede no haber header

"use client"

import Footer from "@/components/2.organisms/4.Footer";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/utils/AuthProvider";
import { useEffect } from "react";

const LoginRegisterLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const router = useRouter();
  const {user} = useAuthContext(); 

  useEffect(() => {    
    if (user) {
      router.push("/"); 
    }
  }, [user, router]);  

  return (
    <main className="flex flex-1 flex-col overflow-y-auto w-full">
      {children}
      <Footer />
    </main>
  );
};

export default LoginRegisterLayout;
