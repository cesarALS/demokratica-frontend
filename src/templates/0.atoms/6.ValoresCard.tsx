import { PiChatTextBold } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { TbClockHeart } from "react-icons/tb";
import { TbChecklist } from "react-icons/tb";

interface ValoresDataTypes {
  icono: React.ReactNode;
  valor: string;
  description: string;
}

export function ValoresCard() {
  const iconStyle = "h-full w-full text-AccentCreamCan text-bold bold";
  const valoresData: ValoresDataTypes[] = [
    {
      icono: <FaHandshake className={iconStyle} />,
      valor: "Colaboración",
      description:
        "La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x",
    },
    {
      icono: <PiChatTextBold className={iconStyle} />,
      valor: "Diálogo",
      description:
        "La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x",
    },
    {
      icono: <TbClockHeart className={iconStyle} />,
      valor: "Eficiencia",
      description:
        "La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x",
    },
    {
      icono: <TbChecklist className={iconStyle} />,
      valor: "Orden",
      description:
        "La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x La colaboración es muy importante para nosotros porque x",
    },
  ];

  return valoresData.map((valor, index) => {
    return (
      <div
        className="flex flex-col items-center justify-center w-full bg-AccentBlue gap-5 rounded-3xl p-4 text-lg "
        key={index}
      >
        <div className="bg-white h-16 w-16 p-3 rounded-full mt-5">
          {valor.icono}
        </div>

        <h1 className="font-extrabold text-xl text-white ">{valor.valor}</h1>

        <p className="text-center text-base bg-white p-5 w-full rounded-2xl">
          {valor.description}
        </p>
      </div>
    );
  });
}

export default ValoresCard;
