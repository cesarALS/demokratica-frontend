/*
  Esta es la Landing Page Chicxs
*/

import Link from "next/link";

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
        className="font-bold text-[2em] transition-transform transform duration-200 hover:scale-110"
        >
          Descubra el poder del Consenso
        </h1>
        <h2 className="text-[1.5em]">Esta poderosa herramienta potenciará la productividad de su equipo</h2>
        <h3 className="text-[1.1em]">Acceda a diversos métodos de votación y consenso para su equipo, al instante</h3>
        <div className="flex gap-4 p-4 w-[70%] h-[35vh] ">
          {methods.map(method => {
            return (
              <ConsensusMethodsCards 
                key={method.method}
                text={method.method}
                width="w-[25%]"
                height="h-full"
              ></ConsensusMethodsCards>
            );
          })}
        </div>
      </div>      
    </>
  );
}

// El siguiente componente, son unas cartas que se usan para mostrarle al usuario las diferentes opciones de métodos de consenso de los que dispone. La idea es que tengan el nombre del método, una imagen descriptiva, y un link a la sección de la página de manual o de la página de casos de uso, donde se explique dicho método

interface ConsensusMethodsCardsProps {
  text: string,
  width: string,
  height: string,
}

const ConsensusMethodsCards = ( { text, width, height }: ConsensusMethodsCardsProps) => {
  return (
    <div className={`bg-SecCreamCan rounded-md border-1.5 border-black ${width} ${height} transition-transform transform duration-200 hover:scale-110`}>
      <Link className="w-full h-full flex items-center justify-center" href="/">
        <h1 className="font-semibold">{text}</h1>
      </Link>
    </div>
  );
}