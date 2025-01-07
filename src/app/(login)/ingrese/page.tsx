import LogoAlHomepage from "@/components/0.atoms/0.LogoFullAlHomepage";
import LogInBox from "@/components/3.templates/0.LogInBox";

// Página de Loguearse
// TODO: Hacer responsive, terminar de refactorizar y TODOs de los componentes
export default function Login() {
  return (
    // container de la pagina completa
    <div className="flex flex-col items-center justify-center h-screen bg-SecBlue">
      {/* Contenidos de la columna */}
      <div className="w-[33%] h-full mt-[5%] ">
        {/* Logo linkeado al homepage */}
        <LogoAlHomepage />
        {/* Contenedor con el titulo y ambas partes del formulario*/}
        <LogInBox />
      </div>
    </div>
  );
}
