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
  const iconStyle = "h-full w-full text-white text-bold bold";
  const valoresData: ValoresDataTypes[] = [
    {
      icono: <FaHandshake className={iconStyle} />,
      valor: "Colaboración",
      description:
        "Promovemos el trabajo en equipo, asegurando que todas las voces sean escuchadas en la toma de decisiones.",
    },
    {
      icono: <PiChatTextBold className={iconStyle} />,
      valor: "Diálogo",
      description:
        "Fomentamos la comunicación abierta y respetuosa para alcanzar consensos efectivos.",
    },
    {
      icono: <TbClockHeart className={iconStyle} />,
      valor: "Efectividad",
      description:
        "Nos aseguramos de que cada decisión tomada en la plataforma genere resultados concretos y alineados con los objetivos del grupo.",
    },
    {
      icono: <TbChecklist className={iconStyle} />,
      valor: "Orden",
      description:
        "Garantizamos la trazabilidad y claridad con herramientas que organizan y registran cada actividad.",
    },
  ];

  return valoresData.map((valor, index) => {
    return (
      <div
        className="flex flex-col items-center bg-PrimBlue gap-5 rounded-3xl p-4 text-lg w-full max-w-[250px] sm:max-w-[275px]"
        key={index}
      >
        <div className="bg-PrimCreamCan w-32 p-5 rounded-full mt-5">
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
