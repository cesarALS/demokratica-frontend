import LogInOauth from "@/components/2.organisms/0.LogInOauth";
import LogInComn from "@/components/2.organisms/1.LogInComn";

export default function LogInBox() {
  return (
    <div className="flex flex-col bg-ThirdGray rounded-lg pt-4 px-6 pb-6 mt-4 mb-20">
      {/* Titulo formulario */}
      <h1 className="font-semimbold text-lg my-2"> Ingresa: </h1>
      {/* Contenedor parte izquierda, derecha y separador */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {/* Parte izquierda formulario login */}
        <LogInComn />
        {/* Separador */}
        <div className="border-2 border-SecGray w-40 my-6 rounded-lg sm:h-40 sm:w-0 "></div>
        {/* Parte derecha formulario login */}
        <LogInOauth />
      </div>
    </div>
  );
}
