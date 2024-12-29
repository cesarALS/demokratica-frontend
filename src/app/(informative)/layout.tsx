
/*
    Este es el Layout para todas las páginas informativas
    Landing Page, About, Pitch de Talento, Q&A, etc.
    Aquí van todas las cosas que comparten estas páginas
*/

import Header from "@/components/1.molecules/0.Header";
import Footer from "@/components/1.molecules/1.Footer";

const InformativeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="bg-ThirdGray min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 mt-[10vh]">
                {children}
            </main>
            <Footer />
        </div>
    )
};

export default InformativeLayout;