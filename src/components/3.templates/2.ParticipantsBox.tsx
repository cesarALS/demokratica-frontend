import ParticipantsSearch from "../0.atoms/6.ParticipantsSearch";
import ParticipantsFilter from "@/components/1.molecules/6.ParticipantsFilter";
import ParticipantsView from "@/components/1.molecules/7.ParticipantsView";

export default function ParticipantsBox() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-6">
      <div className="text-xl">Participantes:</div>
      {/* Busqueda de participantes */}
      <ParticipantsSearch />
      {/* Filtros */}
      <ParticipantsFilter />
      {/* Vistas */}
      <ParticipantsView />
      {/* Resultados */}
    </div>
  );
}
