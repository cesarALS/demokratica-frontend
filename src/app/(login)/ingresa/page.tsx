import LogoAlHomepage from "@/components/logo/LogoFullAlHomepage";
import LogInBox from "@/features/auth/components/LogInBox";

// Página de Loguearse
export default function LogIn() {
  return (
    // Contenedor de la pagina completa
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-SecBlue to-white">
      {/* Contenidos de la columna */}
      <div className="mt-20 h-full w-[75%] sm:w-[82%] md:w-[70%] lg:w-[52%] xl:w-[42%] 2xl:w-[35%]">
        {/* Logo linkeado al homepage */}
        <LogoAlHomepage />
        {/* Contenedor con el titulo y ambas partes del formulario*/}
        <LogInBox />
      </div>
    </div>
  );
}
