// Este es el layout para las páginas de registrarse y loguearse
// Probablemente el header de esta sección sea diferente, o incluso puede no haber header

// import Footer from "@/components/1.molecules/1.Footer";

const LoginRegisterLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="min-h-screen flex flex-col"> {children}</main>;
};

export default LoginRegisterLayout;
