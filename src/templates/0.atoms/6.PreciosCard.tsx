import precios from "@/utils/priceUtils"

interface PreciosCardData {
  nombrePlan: string;
  precio: number;
  contenido: string[];
  textoBoton: string;
}

export function PreciosCard() {
  const data: PreciosCardData[] = [
    {
      nombrePlan: "Gratuito",
      precio: precios.gratuito,
      contenido: ["10", "3"],
      textoBoton: "Inicia sesión",
    },
    {
      nombrePlan: "Plus",
      precio: precios.plus,
      contenido: ["50", "10"],
      textoBoton: "Empieza ya",
    },
    {
      nombrePlan: "Premium",
      precio: precios.premium,
      contenido: ["200", "20"],
      textoBoton: "Empieza ya",
    },
    {
      nombrePlan: "Profesional",
      precio: precios.profesional,
      contenido: ["500", "50"],
      textoBoton: "Empieza ya",
    },
  ];
  return data.map((plan,index) => {
    const formattedPrice = new Intl.NumberFormat("es-CO").format(plan.precio);
    return (
        <div key={index} className="flex flex-col bg-white rounded-lg p-4 gap-6 w-64 border-solid border-1.5 border-black">
            <h1 className="">{plan.nombrePlan}</h1>
            <div className="flex flex-row items-end italic">
                <h1 className="text-3xl">${formattedPrice}</h1>
                <span className="text-md">COP</span>
                <span className="text-lg ml-1">/sesión</span>
            </div>
            <hr className="border-t-2 border-gray-300 "/>
            <ul className="list-disc flex flex-col gap-1 ml-5 text-md mb-7">
                <li>Invita hasta {plan.contenido[0]} participantes.</li>
                <li>Realiza hasta {plan.contenido[1]} actividades.</li>
            </ul>
            <button className="bg-AccentCreamCan hover:bg-PrimCreamCan text-white rounded-lg p-2 mt-auto">
                {plan.textoBoton}
            </button>
        </div> 
    )
  });
}

export default PreciosCard;
