import LogoAlHomepage from "@/components/1.molecules/2.LogoAlHomepage";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

// Página de Loguearse
export default function Login() {
  return (
    // container de la pagina completa
    <div className="flex flex-col items-center justify-center h-screen bg-SecBlue">
      {/* Contenidos de la columna */}
      <div className="w-[33%] h-full mt-[5%] ">
        {/* Logo linkeado al homepage */}
        <LogoAlHomepage />
        {/* Contenedor con el titulo y ambas partes del formulario*/}
        <div className="flex flex-col bg-ThirdGray rounded-lg pt-4 px-6 pb-6 mt-4">
          {/* Titulo formulario */}
          <h1 className="font-semimbold text-lg my-2"> Ingresa: </h1>
          {/* Contenedor parte izquierda, derecha y separador */}
          <div className="flex flex-row items-center justify-between">
            {/* Parte izquierda formulario login */}
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
                      <FontAwesomeIcon
                        icon={faEye}
                        className="h-4 text-PrimBlack"
                      />
                    </button>
                  </div>
                </div>
                {/* Recuerdame y olvidaste tu contraseña */}
                <div className="flex justify-between text-xs text-PrimBlack">
                  <input
                    className="bg-SecGray"
                    type="checkbox"
                    id="rememberMe"
                  />
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
            {/* Separador */}
            <div className="border-2 border-SecGray h-40 rounded-lg"></div>
            {/* Parte derecha formulario login */}
            <div className="flex w-[45%] justify-start flex-col self-start gap-y-6">
              {/* Ingresa con */}
              <div className="text-sm">O ingresa con:</div>
              {/* Botones de google y facebook */}
              <div className="flex justify-around text-PrimGray">
                <button className="flex justify-center items-center h-24 w-24 rounded-lg bg-SecGray hover:text-ThirdGray">
                  <FontAwesomeIcon icon={faGoogle} className="h-16" />
                </button>
                <button className="flex justify-center items-center h-24 w-24 rounded-lg bg-SecGray hover:text-PrimBlue">
                  <FontAwesomeIcon icon={faFacebook} className="h-16" />
                </button>
              </div>
              {/* Aún no tienes una cuenta? Registrate*/}
              <div className="text-xs text-PrimBlack">
                ¿Aún no tienes una cuenta?
                <Link
                  href="/"
                  className="underline hover:text-black text-AccentBlue pl-1"
                >
                  Regístrate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
