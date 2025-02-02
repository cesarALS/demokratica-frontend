import EditableTitle from "@/components/0.atoms/3.EditableTitle";
import PlanShow from "@/components/0.atoms/4.PlanShow";
import FechasConfigSesion from "@/components/1.molecules/5.FechasConfigSesion";
import ConfDescription from "@/components/0.atoms/5.ConfDescription";
import TagInput from "@/templates/1.molecules/5.TagInput";
import { sessionConfig } from "@/types/sessionConfig";
import ParticipantsBox from "@/components/3.templates/2.ParticipantsBox";

export default function NuevaSesion() {
  // Prop de ejemplo
  const defaultConfig: sessionConfig = {
    title: "Ingresa tu titulo",
    plan: 0,
  };

  const config = defaultConfig;

  return (
    <div className="flex w-full flex-col gap-y-8 p-8">
      {/* Ingresar titulo */}
      <EditableTitle title={config.title} />
      {/* Configuraciones */}
      <div className="flex flex-col rounded-lg border border-2 border-black bg-white p-6">
        {/* Grid para acomodar todo en responsive */}
        <div className="grid grid-rows-2 gap-y-6">
          {/* Configuraciones izquierda */}
          <div className="flex flex-col gap-y-6">
            {/* Plan actual */}
            <PlanShow plan={config.plan} />
            {/* Fechas */}
            <FechasConfigSesion />
            {/* Descripción */}
            <ConfDescription />
            {/* Tags */}
            <TagInput />
          </div>
          {/* Configuraciones derecha */}
          {/* Participantes */}
          <ParticipantsBox />
        </div>
      </div>
    </div>
  );
}
