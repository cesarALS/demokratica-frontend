import LogoAlHomepage from "@/components/1.molecules/2.LogoFullAlHomepage";
import SignInBox from "@/components/3.templates/1.SignInBox";

// Página de Registrarse
export default function SignIn() {
  return (
    // Contenedor de la pagina completa
    <div className="flex flex-1 flex-col items-center bg-gradient-to-b from-SecBlue to-white w-full">
      {/* Contenidos de la columna */}
      <div className="w-[75%] sm:w-[82%] md:w-[70%] lg:w-[52%] xl:w-[42%] 2xl:w-[35%] h-full mt-20">
        {/* Logo linkeado al homepage */}
        <LogoAlHomepage />
        {/* Contenedor con el titulo y ambas partes del formulario*/}
        <SignInBox />
      </div>
    </div>
  );
}
