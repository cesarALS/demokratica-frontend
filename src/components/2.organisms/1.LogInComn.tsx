import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

// TODO Implementar tipo de texto con el ojo del input y refactorizar parejas input label y boton subrayado
export default function LogInOauth() {
  return (
    <div className="flex w-[45%] justify-start">
      <form className="flex w-full flex-col justify-start gap-y-4">
        {/* Campo de correo */}
        <div>
          <div>
            <label htmlFor="email" className="text-sm">
              Correo:
            </label>
          </div>
          <input
            className="bg-SecGray w-full p-1 text-PrimBlack text-sm"
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo"
          />
        </div>
        {/* Campo de contraseña */}
        <div>
          <div>
            <label htmlFor="password" className="text-sm">
              Contraseña:
            </label>
          </div>

          {/* Boton de mostrar contraseña con icono de ojo */}
          <div className="relative">
            <input
              className="bg-SecGray w-full p-1 text-PrimBlack text-sm"
              type="password"
              id="password"
              name="password"
              placeholder="Tu contraseña"
            />
            <button
              type="button"
              className="absolute inset-y-0 h-full right-0 flex items-center pr-2"
            >
              <FontAwesomeIcon icon={faEye} className="h-4 text-PrimBlack" />
            </button>
          </div>
        </div>
        {/* Recuerdame y olvidaste tu contraseña */}
        <div className="flex justify-between text-xs text-PrimBlack">
          <input className="bg-SecGray" type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="hover:text-black">
            Recuérdame
          </label>
          <Link href="/" className="underline hover:text-black">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        {/* Boton de submit */}
        <input
          className="w-full text-center bg-PrimCreamCan border-2 border-black rounded-md text-sm hover:scale-110"
          type="submit"
          value="Ingresa"
        ></input>
      </form>
    </div>
  );
}
