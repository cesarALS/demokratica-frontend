/*
  Esta es la Landing Page Chicxs
*/

import Link from "next/link";
import { hoverScale } from "@/utils/tailwindUtils";

const methods = [
  {method: "Planning Poker", img: "/"},
  {method: "Votación Tideman", img: "/"},
  {method: "Nube de Palabras", img: "/"},
  {method: "Votación Normal", img: "/"}
]

export default function Home() {
  return (
    <>
      <div className="p-2 pt-4 grid place-items-center gap-2">
        <h1 
        className={`font-bold text-[2em] ${hoverScale(110, 200)}`}
        >
          Explore el poder del Consenso
        </h1>
        <h2 className="text-[1.5em]">Esta poderosa herramienta potenciará la productividad de su equipo</h2>
        <div className="w-[80%] h-[45vh] flex flex-col items-center justify-center gap-2 border-2 bg-SecGray p-2 pt-4 rounded-xl mt-4">
          <h3 className="text-[1.2em] font-bold">
            Acceda a diversos métodos de votación y consenso para su equipo, al instante:
          </h3>
          <div className="flex gap-5 p-4 w-[85%] h-full">
            {methods.map(method => {
              return (
                <ConsensusMethodsCards 
                  key={method.method}
                  text={method.method}
                  width="w-[25%]"
                  height="h-full"
                  textWidth="text-[1.1em]"
                ></ConsensusMethodsCards>
              );
            })}
          </div>
        </div>
        <h3>Organice el flujo de trabajo de sus reuniones</h3>
        <h3>Desbloquee todo el potencial, a un bajo costo</h3>
        
          <Link 
            href="/precios" 
            className={`flex items-center justify-center w-[20%] h-[10vh] bg-PrimCreamCan border-2 ${hoverScale(110,200)} hover:bg-AccentCreamCan`}>
            Obtener prueba gratuita
          </Link>
      </div>      
    </>
  );
}

// El siguiente componente, son unas cartas que se usan para mostrarle al usuario las diferentes opciones de métodos de consenso de los que dispone. La idea es que tengan el nombre del método, una imagen descriptiva, y un link a la sección de la página de manual o de la página de casos de uso, donde se explique dicho método

interface ConsensusMethodsCardsProps {
  text: string,
  width: string,
  height: string,
  textWidth: string
}

const ConsensusMethodsCards = ( { text, width, height, textWidth }: ConsensusMethodsCardsProps) => {
  return (
    <Link className={`${width} ${height} flex items-center justify-center bg-SecCreamCan hover:bg-PrimCreamCan ${hoverScale(110, 50)} rounded-md border-1.5 border-black`} href="/">
      <h1 className={`font-semibold ${textWidth}`}>{text}</h1>
    </Link>
  );
}