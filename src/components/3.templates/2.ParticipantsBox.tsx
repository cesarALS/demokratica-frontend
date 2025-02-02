import ParticipantsSearch from "../0.atoms/6.ParticipantsSearch";
import ParticipantsFilter from "@/components/1.molecules/6.ParticipantsFilter";

export default function ParticipantsBox() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-6">
      <div className="text-xl">Participantes:</div>
      {/* Busqueda de participantes */}
      <ParticipantsSearch />
      {/* Filtros */}
      <ParticipantsFilter />
      {/* Vistas */}
      {/* Resultados */}
    </div>
  );
}
