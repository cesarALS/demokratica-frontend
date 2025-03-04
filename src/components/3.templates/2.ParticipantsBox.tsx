"use client"

import ParticipantsSearch from "../0.atoms/6.ParticipantsSearch";
import ParticipantsView from "@/components/1.molecules/7.ParticipantsView";
import ParticipantsResults from "@/components/2.organisms/5.ParticipantsResults";

export default function ParticipantsBox() {

  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-6">
      <div className="text-xl">Participantes:</div>
      {/* Busqueda de participantes */}
      <ParticipantsSearch />
      {/* Filtros */}
      {/* <ParticipantsFilter /> */}
      {/* Vistas */}
      <ParticipantsView />
      {/* Resultados */}
      <ParticipantsResults />
    </div>
  );
}
