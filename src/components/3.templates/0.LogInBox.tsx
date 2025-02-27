import LogInComn from "@/components/2.organisms/0.LogInComn";
import Oauth from "../2.organisms/2.Oauth";
import demokraticaRoutes from "@/utils/routeUtils";

export default function LogInBox() {
  return (
    <div className="mb-20 mt-4 flex flex-col rounded-lg bg-ThirdGray px-6 pb-4 pt-4">
      {/* Titulo formulario */}
      <h1 className="font-semimbold my-2 text-lg"> Ingresa: </h1>
      {/* Contenedor parte izquierda, derecha y separador */}
      <div className="flex flex-col items-center justify-between sm:flex-row">
        {/* Parte izquierda formulario login */}
        <LogInComn />
        {/* Separador */}
        <div className="my-6 w-40 rounded-lg border-2 border-SecGray sm:h-40 sm:w-0"></div>
        {/* Parte derecha formulario login */}
        <Oauth
          title="O ingresa con Google:"
          question="¿Aún no tienes una cuenta?"
          link="Regístrate"
          route={demokraticaRoutes.register.link}
        />
      </div>
    </div>
  );
}
