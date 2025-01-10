import FullLogo from "@/templates/0.atoms/2.FullLogo";
import Link from "next/link";
import { hoverScale } from "@/utils/tailwindUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import demokraticaRoutes from "@/utils/routeUtils";

// Página de Registrarse

const Join = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[33%] h-full mt-10 mb-10">
        <Link href="/" passHref>
          <FullLogo
            baseFill="#000000"
            classNameGeneral={`flex items-center justify-center ${hoverScale(
              110,
              200
            )}`}
          />
        </Link>
        <div className="bg-white rounded-lg p-4 mt-4 h-full w-full border-black border-2">
          <div className="flex flex-col h-full w-full justify-start p-2 gap-2">
            <h1 className="font-semimbold text-[1.1em]"> Regístrate: </h1>
            <div className="flex flex-col sm:flex-row justify-between">
              <form className="w-full sm:w-[45%]">
                <CustomInput
                  labelString="Correo:"
                  inputType="email"
                  inputId="email"
                  initialValue="Tu correo"
                ></CustomInput>
                <CustomInput
                  labelString="Nombre de usuario:"
                  inputType="text"
                  inputId="username"
                  initialValue="Tu nombre de usuario"
                ></CustomInput>
                <CustomInput
                  labelString="Contraseña:"
                  inputType="password"
                  inputId="password"
                  initialValue="Tu contraseña"
                ></CustomInput>
                <CustomInput
                  labelString="Confirma contraseña:"
                  inputType="password"
                  inputId="confirmed_password"
                  initialValue="Tu contraseña"
                ></CustomInput>
                <input className="bg-SecGray" type="checkbox" />
                <label className="text-[0.6em]">
                  Acepto
                  <Link href="/" className="text-blue-500 underline">
                    {" "}
                    tratamiento de datos{" "}
                  </Link>
                </label>
                <input
                  className="w-full mt-4 text-center bg-PrimCreamCan border-2 border-black rounded-md text-[0.8em] transform transition-transform hover:scale-110 duration-200"
                  type="submit"
                  value="Regístrese"
                ></input>
              </form>
              <div className="sm:py-6">
                <div className="border-2 border-SecGray rounded-lg mt-6 w-full h-0 sm:h-40 sm:w-0">
                  {" "}
                </div>
              </div>
              <div className="w-full sm:w-[45%] flex flex-col justify-start pt-6 pb-2 gap-y-4 sm:py-10 sm:gap-y-6">
                <h2 className="text-sm"> O registrate con: </h2>
                <div className="flex flex-row justify-between gap-x-10 px-10 sm:px-0 sm:gap-x-4">
                  <Link
                    href="/"
                    className="p-2 rounded-lg bg-SecGray w-full hover:text-white"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </Link>
                  <Link
                    href="/"
                    className="p-2 rounded-lg bg-SecGray w-full hover:text-AccentBlue"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </div>
                <h2 className="text-sm">
                  ¿Ya tienes cuenta?
                  <Link
                    href={demokraticaRoutes.login.link}
                    className="text-blue-500 underline"
                  >
                    {" "}
                    Inicia sesión{" "}
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CustomInputProps {
  labelString: string;
  inputType: string; //Debería ser un enum con los valores posibles, pero me vale huevo
  inputId: string;
  initialValue: string;
}
const CustomInput = ({
  labelString,
  inputType,
  inputId,
  initialValue,
}: CustomInputProps) => {
  return (
    <div>
      <label className="text-[0.8em] gap-2"> {labelString} </label> <br></br>
      <input
        className="bg-SecGray p-1 text-SecBlack text-[0.8em] gap-2 w-full"
        type={inputType}
        id={inputId}
        name={inputId}
        placeholder={initialValue}
      />{" "}
      <br></br>
    </div>
  );
};

export default Join;
