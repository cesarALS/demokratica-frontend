import Image from "next/image";
import { ReactElement } from "react";

interface EquipoDataTypes {
  foto: ReactElement;
  nombres: string;
  apellidos: string;
  rol: string[];
}

export function EquipoCard() {
  const fotoStyle = "h-[175px] w-[175px] rounded-full";
  const valoresData: EquipoDataTypes[] = [
    {
      foto: (
        <Image
          src="/img/fotoAndres.PNG"
          alt="Foto1"
          height={300}
          width={300}
          className={fotoStyle}
          layout="responsive"
        />
      ),
      nombres: "Andrés Felipe",
      apellidos: "Rojas Aguilar",
      rol: ["Backend Dev & DB Architect"],
    },
    {
      foto: (
        <Image
          src="/img/fotoCesar.jpg"
          alt="Foto1"
          height={300}
          width={300}
          className={fotoStyle}
          layout="responsive"
        />
      ),
      nombres: "César Arthuro",
      apellidos: "Lemos Silva",
      rol: ["Fullstack Dev & DevOps"],
    },
    {
      foto: (
        <Image
          src="/img/fotoDavid.PNG"
          alt="Foto1"
          height={300}
          width={300}
          className={fotoStyle}
          layout="responsive"
        />
      ),
      nombres: "David Felipe",
      apellidos: "Marín Rosas",
      rol: ["UX/UI, Product Owner & Frontend Dev"],
    },
    {
      foto: (
        <Image
          src="/img/fotoJulian.PNG"
          alt="Foto1"
          height={300}
          width={300}
          className={fotoStyle}
          layout="responsive"
        />
      ),
      nombres: "Julián David",
      apellidos: "Huertas Domínguez",
      rol: ["Frontend Dev"],
    },
  ];

  return valoresData.map((valor, index) => {
    return (
      <div
        className="flex w-full flex-col items-center gap-5 rounded-3xl bg-ThirdGray p-6 text-lg"
        key={index}
      >
        <div className="grid h-full w-full grid-cols-1 grid-rows-[1fr,2fr] gap-2 xl:grid-cols-2 xl:grid-rows-1">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex w-full flex-col items-center text-2xl font-semibold text-black">
              <div className="flex items-center justify-center text-center">
                {valor.nombres}
              </div>
              <div className="flex items-center justify-center text-center">
                {valor.apellidos}
              </div>
            </div>

            <div className="flex w-[70%] items-center justify-center gap-2 text-center text-sm text-black">
              {valor.rol.map((role, idx) => (
                <span key={idx}>
                  {role}
                  {idx < valor.rol.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            {valor.foto}
          </div>
        </div>
      </div>
    );
  });
}

export default EquipoCard;
