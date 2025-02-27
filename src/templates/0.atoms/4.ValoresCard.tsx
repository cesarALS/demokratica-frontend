import { FaLeaf } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { TbClockHeart } from "react-icons/tb";
import { TbChecklist } from "react-icons/tb";

interface ValoresDataTypes {
  icono: React.ReactNode;
  valor: string;
  description: string;
}

export default function ValoresCard() {
  const iconStyle = "h-full w-full text-white text-bold bold";
  const valoresData: ValoresDataTypes[] = [
    {
      icono: <FaHandshake className={iconStyle} />,
      valor: "Colaboración",
      description:
        "Creemos que la unión hace la fuerza, por ello brindamos herramientas que nos permiten coordinarnos y ponernos de acuerdo más fácilmente.",
    },
    {
      icono: <FaLeaf className={iconStyle} />,
      valor: "Adaptabilidad",
      description:
        "Sabemos que nuestros entornos son cambiantes y por ello cada sesión es flexible respecto a los roles de sus miembros y respecto a las actividades contenidas en la sesión.",
    },
    {
      icono: <TbClockHeart className={iconStyle} />,
      valor: "Eficiencia",
      description:
        "Sabemos lo escaso y valioso que es tu tiempo, nuestras herramientas te ayudarán a agilizar tus reuniones y dar prioridad a aquello que realmente te importa.",
    },
    {
      icono: <TbChecklist className={iconStyle} />,
      valor: "Orden",
      description:
        "Garantizamos la trazabilidad de nuestras sesiones al llevar registro de cada una de ellas y de sus actividades, brindamos herramientas como tags y filtros para garantizar que encuentres aquello que buscas.",
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
