import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import demokraticaRoutes from "@/utils/routeUtils";

export default function LogInOauth() {
  return (
    <div className="flex w-full sm:w-[45%] justify-start flex-col self-start gap-y-6">
      {/* Ingresa con */}
      <div className="text-sm">O ingresa con:</div>
      {/* Botones de google y facebook */}
      <div className="flex justify-around text-PrimGray">
        <Link
          href="/"
          className="flex justify-center items-center h-24 w-24 rounded-lg bg-SecGray hover:text-white"
        >
          <FontAwesomeIcon icon={faGoogle} className="h-16" />
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center h-24 w-24 rounded-lg bg-SecGray hover:text-AccentBlue"
        >
          <FontAwesomeIcon icon={faFacebook} className="h-16" />
        </Link>
      </div>
      {/* Aún no tienes una cuenta? Registrate*/}
      <div className="text-xs text-PrimBlack">
        ¿Aún no tienes una cuenta?
        <Link
          href={demokraticaRoutes.register.link}
          className="underline hover:text-black text-AccentBlue pl-1"
        >
          Regístrate
        </Link>
      </div>
    </div>
  );
}
