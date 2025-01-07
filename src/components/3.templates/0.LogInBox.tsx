import LogInOauth from "@/components/2.organisms/0.LogInOauth";
import LogInComn from "@/components/2.organisms/1.LogInComn";

export default function LogInBox() {
  return (
    <div className="flex flex-col bg-ThirdGray rounded-lg pt-4 px-6 pb-6 mt-4">
      {/* Titulo formulario */}
      <h1 className="font-semimbold text-lg my-2"> Ingresa: </h1>
      {/* Contenedor parte izquierda, derecha y separador */}
      <div className="flex flex-row items-center justify-between">
        {/* Parte izquierda formulario login */}
        <LogInComn />
        {/* Separador */}
        <div className="border-2 border-SecGray h-40 rounded-lg"></div>
        {/* Parte derecha formulario login */}
        <LogInOauth />
      </div>
    </div>
  );
}
