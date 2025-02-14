"use client";

import { useState } from "react";
import ConfigCommonVotation from "./12.ConfigCommonVotation";

export default function TypeActivityConfig() {
  const tiposVotacion = [
    "Común",
    "Tideman",
    "WordCloud",
    "Poker Planning",
    "Texto",
  ];
  const [type, setType] = useState(tiposVotacion[0].toLowerCase());
  let configComponent;

  switch (type) {
    case tiposVotacion[0].toLowerCase():
      configComponent = <ConfigCommonVotation />;
      break;
    case tiposVotacion[1].toLowerCase():
      // Por ahora tienen la misma config
      configComponent = <ConfigCommonVotation />;
      break;
    case tiposVotacion[2].toLowerCase():
      configComponent = <div></div>;
      break;
    case tiposVotacion[3].toLowerCase():
      configComponent = <div></div>;
      break;
    case tiposVotacion[4].toLowerCase():
      configComponent = <div></div>;
      break;
    default:
      configComponent = <div></div>;
      break;
  }

  return (
    <div className="flex flex-col gap-y-6">
      {/* TODO: Dependiendo del tipo de actividad */}
      <div className="flex flex-col items-start justify-start gap-y-4 text-xl">
        <div>Tipo de actividad:</div>
        <div className="flex w-full items-center justify-center">
          <select
            className="min-w-32 rounded-lg border bg-ThirdGray px-2 py-1 text-center text-lg focus:outline-none focus:ring-1 focus:ring-PrimBlack"
            id="ActivityType"
            name="ActivityType"
            onChange={(e) => setType(e.target.value)}
          >
            {tiposVotacion.map((tipo) => (
              <option key={tipo} value={tipo.toLowerCase()}>
                {tipo}
              </option>
            ))}
          </select>
        </div>
      </div>
      {configComponent}
    </div>
  );
}
