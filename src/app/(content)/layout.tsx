import Header from "@/components/2.organisms/3.Header";
import Footer from "@/components/2.organisms/4.Footer";

export default function afterLogInContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Contenedor principal como un flexbox con altura mínima de pantalla
    <div className="flex min-h-screen flex-col">
      {/* Header siempre visible en la parte superior */}
      <Header />

      {/* Contenido principal que ocupa el resto del vh, que tiene el background fijo y que tiene un overflow que permite scrollear el contenido hacía abajo*/}
      <div className="flex h-[91.667vh] w-full flex-initial flex-col items-center overflow-y-auto bg-gradient-to-b from-SecBlue to-white">
        {/* Contenido de la página */}
        <main className="flex items-start grow flex-shrink-0 h-[91.667vh] w-full">
          {children}
        </main>
        {/* Footer al final de la página o contenido */}
        <Footer />
      </div>
    </div>
  );
}
