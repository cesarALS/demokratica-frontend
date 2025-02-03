import EditableTitle from "@/components/0.atoms/3.EditableTitle";
import { sessionConfig } from "@/types/sessionConfig";
import ParticipantsBox from "@/components/3.templates/2.ParticipantsBox";
import LeftSettingsNewSession from "@/components/3.templates/3.LeftSettingsNewSession";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";

export default function NuevaSesion() {
  // Prop de ejemplo
  // La verda hay que cuadrar mucho mejor esto de los props, aunque para eso primero se necesitan las APIS
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
      <div className="flex flex-col gap-y-6 rounded-lg border border-2 border-black bg-white p-6">
        {/* Grid para acomodar todo en responsive */}
        <div className="grid grid-rows-2 gap-y-6">
          {/* Configuraciones izquierda */}
          <LeftSettingsNewSession />
          {/* Configuraciones derecha */}
          {/* Participantes */}
          <ParticipantsBox />
        </div>
        {/* Cancelar para volver a la pagina anterior o guardar */}
        <div className="flex items-center justify-center gap-x-8 py-2 text-xl">
          <SimpleButton buttonText="Cancelar" className="bg-PrimCasablanca" />
          <SimpleButton buttonText="Guardar" className="bg-PrimCreamCan" />
        </div>
      </div>
    </div>
  );
}
