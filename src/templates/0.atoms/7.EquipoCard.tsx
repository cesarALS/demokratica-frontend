import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

interface EquipoDataTypes {
  foto: ReactElement;
  nombres: string;
  apellidos: String;
  rol: string[];
}

export function EquipoCard() {
  const fotoStyle = "h-full w-full rounded-full";
  const valoresData: EquipoDataTypes[] = [
    {
      foto: (
        <Image src="/img/fotoCesar.jpg" alt="Foto1" height={300} width={300} className={fotoStyle}/>
      ),
      nombres: "Andrés Felipe",
      apellidos: "Rojas Aguilar",
      rol: ["Desarrollador"],
    },
    {
      foto: (
        <Image src="/img/fotoCesar.jpg" alt="Foto1" height={300} width={300} className={fotoStyle} />
      ),
      nombres: "César Arthuro",
      apellidos: "Lemos Silva",
      rol: ["Desarrollador"],
    },
    {
      foto: (
        <Image src="/img/fotoCesar.jpg" alt="Foto1" height={300} width={300} className={fotoStyle}/>
      ),
      nombres: "David Felipe",
      apellidos: "Marín Rosas",
      rol: ["Desarrollador","Product Owner"],
    },
    {
      foto: (
        <Image src="/img/fotoCesar.jpg" alt="Foto1" height={300} width={300} className={fotoStyle}/>
      ),
      nombres: "Julián David",
      apellidos: "Huertas Domínguez",
      rol: ["Desarrollador"],
    },
  ];

  return valoresData.map((valor, index) => {
    return (
      <div
        className="flex flex-col items-center w-full bg-SecBlue gap-5 rounded-3xl p-4 text-lg "
        key={index}
      >
        <div className="w-full rounded-full mt-5 max-w-[175px]">
          {valor.foto}
        </div>
        {/*  bg-white p-1 w-full rounded-2xl*/ }
        <div className="flex flex-col items-center text-white font-extrabold text-lg bg-AccentBlue  p-1 w-full rounded-2xl">
        <h1 className="">{valor.nombres}</h1>
        <h1 className="">{valor.apellidos}</h1>
        </div>
        

        <p className="text-center text-lg font-bold  text-white bg-PrimCreamCan p-1 w-full rounded-2xl">
          {valor.rol.map((role, idx) => (
            <span key={idx}>
              {role}
              {idx < valor.rol.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    );
  });
}

export default EquipoCard;
