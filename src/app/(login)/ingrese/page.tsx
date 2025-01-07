import LogoAlHomepage from "@/components/1.molecules/2.LogoFullAlHomepage";
import LogInBox from "@/components/3.templates/0.LogInBox";

// Página de Loguearse
export default function Login() {
  return (
    // Contenedor de la pagina completa
    <div className="flex flex-1 flex-col items-center  bg-SecBlue w-full">
      {/* Contenidos de la columna */}
      <div className="w-[80%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[33%] h-full mt-20">
        {/* Logo linkeado al homepage */}
        <LogoAlHomepage />
        {/* Contenedor con el titulo y ambas partes del formulario*/}
        <LogInBox />
      </div>
    </div>
  );
}
