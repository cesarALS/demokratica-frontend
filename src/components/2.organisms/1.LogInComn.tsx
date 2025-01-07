import Link from "next/link";
import LabelField from "@/templates/0.atoms/0.LabelField";

export default function LogInOauth() {
  return (
    <div className="flex w-full sm:w-[45%] justify-start self-start">
      <form className="flex w-full flex-col justify-start gap-y-4">
        {/* Campo de correo */}
        <LabelField
          label="Correo:"
          type="email"
          placeholder="Tu correo"
          id="email"
          name="email"
        />
        {/* Campo de contraseña */}
        <LabelField
          label="Contraseña:"
          type="password"
          placeholder="Tu contraseña"
          id="password"
          name="password"
          showEye={true}
        />
        {/* Recuerdame y olvidaste tu contraseña */}
        <div className="flex justify-between text-xs text-PrimBlack">
          <div>
            <input className="bg-SecGray" type="checkbox" id="rememberMe" />

            <label htmlFor="rememberMe" className="pl-1 hover:text-black">
              Recuérdame
            </label>
          </div>
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
