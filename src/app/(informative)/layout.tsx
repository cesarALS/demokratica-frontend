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
    <div className="grid grid-rows-[1fr,11fr] h-screen">
      <div>
        <Header />
      </div>
      <div className={`flex-1 flex-col items-center overflow-y-auto`}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default InformativeLayout;
