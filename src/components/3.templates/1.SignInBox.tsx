import SignInComn from "@/components/2.organisms/1.SignInComn";
import Oauth from "../2.organisms/2.Oauth";
import demokraticaRoutes from "@/utils/routeUtils";

export default function SignInBox() {
  return (
    
      <div className="flex flex-col bg-ThirdGray rounded-lg pt-4 px-6 pb-6 mt-4 mb-20">
        {/* Titulo formulario */}
        <h1 className="font-semimbold text-lg my-2"> Registrate: </h1>
        {/* Contenedor parte izquierda, derecha y separador */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Parte izquierda formulario login */}
          <SignInComn />
          {/* Separador */}
          <div className="border-2 border-SecGray w-40 my-6 rounded-lg sm:h-40 sm:w-0 "></div>
          {/* Parte derecha formulario login */}
          <Oauth 
          title="O registrate con:" 
          question="¿Ya tienes una cuenta?" 
          link="Inicia sesión"
          route={demokraticaRoutes.login.link}
        />
        </div>
      </div>
  );
}
