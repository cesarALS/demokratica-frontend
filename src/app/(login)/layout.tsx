
// Este es el layout para las páginas de registrarse y loguearse
// Probablemente el header de esta sección sea diferente, o incluso puede no haber header

import Footer from "@/components/1.molecules/1.Footer";

const LoginRegisterLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    
    return (
        <div className="bg-ThirdGray min-h-screen flex flex-col">
            <main className={`flex-1 mt-header-size`}>
                {children}
            </main>
            <Footer></Footer>
        </div>
    );  
};

export default LoginRegisterLayout;