import LogoAlHomepage from "@/components/1.molecules/2.LogoAlHomepage";
import Link from "next/link";
// Página de Loguearse

export default function Login() {
  return (
    // container de la pagina completa
    <div className="flex flex-col items-center justify-center h-screen bg-SecBlue">
      {/* Contenidos de la columna */}
      <div className="w-[33%] h-full mt-[5%] ">
        {/* Logo linkeado al homepage */}
        <LogoAlHomepage />
        {/* Contenedor del formulario */}
        <div className="flex flex-col bg-ThirdGray rounded-lg p-4">
          {/* Titulo formulario */}
          <h1 className="font-semimbold text-lg my-2"> Ingresa: </h1>
          {/* Formulario */}
          <div className="flex">
            {/* Parte izquierda formulario login */}
            <div className="flex w-[40%] justify-start">
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
                      className="absolute inset-y-0 right-0 flex items-center px-2"
                    >
                      {/* TODO Icono de ojo */}
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
            {/* Parte derecha formulario login */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
