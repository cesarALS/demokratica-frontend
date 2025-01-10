/*
    Este es el Layout para todas las páginas informativas
    Landing Page, About, Pitch de Talento, Q&A, etc.
    Aquí van todas las cosas que comparten estas páginas
*/

import Header from "@/components/1.molecules/0.Header";
// import Footer from "@/components/1.molecules/1.Footer";

const InformativeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    // Este div es el contenedor principal de la página, un grid con dos filas, una pal header, otra pal contenido
    <div className="grid grid-rows-[1fr,11fr] h-screen">
      {/* Fila del header */}
      <Header />
      {/* Fila del contenido */}
      {/* Este div es el contenedor del contenido, un flexbox que se puede scrollear */}
      {/* El contenido de la página va dentro de este div */}
      {/* El footer va al final de este div */}
      <div className={`flex-1 flex-col items-center overflow-y-auto`}>
        <main className={`flex-1 flex-col items-center h-full w-full`}>
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default InformativeLayout;
