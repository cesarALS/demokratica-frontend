import ParticipantsSearch from "../0.atoms/6.ParticipantsSearch";

export default function ParticipantsBox() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-6">
      <div className="text-xl">Participantes:</div>
      {/* Busqueda de participantes */}
      <ParticipantsSearch />
      {/* Filtros */}

      {/* Vistas */}
      {/* Resultados */}
    </div>
  );
}
