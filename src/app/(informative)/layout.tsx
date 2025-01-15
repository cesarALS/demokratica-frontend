import Header from "@/components/2.organisms/3.Header";
import Footer from "@/components/2.organisms/4.Footer";

export default function InformativeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Contenedor principal como un flexbox con altura mínima de pantalla
    <div className="flex flex-col min-h-screen">
      {/* Header siempre visible en la parte superior */}
      <Header />

      {/* Contenido principal que ocupa al menos 100vh, pero puede crecer */}
      <div className="flex-grow overflow-y-auto">
        <main className="flex flex-col items-center h-full w-full">
          {children}
        </main>
      </div>

      {/* Footer al final de la página o contenido */}
      <Footer />
    </div>
  );
}
