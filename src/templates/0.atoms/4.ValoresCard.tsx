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
        className="flex w-full flex-col items-center gap-6 rounded-3xl bg-ThirdGray p-4 text-lg"
        key={index}
      >
        <div className="grid h-full w-full grid-cols-1 grid-rows-2 gap-2 xl:grid-cols-2 xl:grid-rows-1">
          <div className="flex w-full flex-col items-center justify-center gap-6 rounded-3xl p-4 text-lg">
            <div className="w-32 rounded-full bg-PrimBlue p-4">
              {valor.icono}
            </div>

            <h1 className="text-2xl font-extrabold text-black">
              {valor.valor}
            </h1>
          </div>

          <div className="flex w-full items-center rounded-2xl border-2 border-black bg-white p-5 text-start text-lg">
            {valor.description}
          </div>
          <div className="flex flex-grow items-center justify-center"></div>
        </div>
      </div>
    );
  });
}

export default ValoresCard;
