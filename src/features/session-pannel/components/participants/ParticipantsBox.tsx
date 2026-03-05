"use client"

import Search from "./Search";
import View from "./View";
import Results from "./Results";

export default function ParticipantsBox() {

  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-6">
      <div className="text-xl">Participantes:</div>
      {/* Busqueda de participantes */}
      <Search />
      {/* Filtros */}
      {/* <ParticipantsFilter /> */}
      {/* Vistas */}
      <View />
      {/* Resultados */}
      <Results />
    </div>
  );
}
