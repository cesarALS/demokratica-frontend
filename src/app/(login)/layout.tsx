// Este es el layout para las páginas de registrarse y loguearse
// Probablemente el header de esta sección sea diferente, o incluso puede no haber header

import Footer from "@/components/2.organisms/4.Footer";

const LoginRegisterLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex flex-1 flex-col overflow-y-auto w-full">
      {children}
      <Footer />
    </main>
  );
};

export default LoginRegisterLayout;
