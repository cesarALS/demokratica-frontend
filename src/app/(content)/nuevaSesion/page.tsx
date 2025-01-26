import EditableTitle from "@/components/0.atoms/3.EditableTitle";
import PlanShow from "@/components/0.atoms/4.PlanShow";
import { sessionConfig } from "@/types/sessionConfig";

interface NuevaSesionProps {
  config?: sessionConfig;
}

export default function NuevaSesion({ config }: NuevaSesionProps) {
  // Prop de ejemplo
  const defaultConfig: sessionConfig = {
    title: "Ingresa tu titulo",
    plan: 0,
  };

  if (!config) {
    config = defaultConfig;
  }

  return (
    <div className="flex w-full flex-col gap-y-8 p-8">
      {/* Ingresar titulo */}
      <EditableTitle title={config.title} />
      {/* Configuraciones */}
      <div className="flex flex-col rounded-lg border border-2 border-black bg-white p-6">
        {/* Grid para acomodar todo en responsive */}
        <div className="grid grid-rows-2">
          {/* Configuraciones izquierda */}
          <div className="flex flex-col gap-y-6">
            {/* Plan actual */}
            <PlanShow plan={config.plan} />
            {/* Fechas */}
            <div className="flex w-full flex-col items-start justify-start gap-y-4 text-lg">
              <div className="text-xl">Fechas:</div>
              <div className="flex w-full items-center justify-between gap-x-4">
                <label htmlFor="startDate">Inicio:</label>
                <input
                  type="date"
                  id="startDate"
                  className="rounded-lg border bg-ThirdGray p-1 focus:outline-none focus:ring-1 focus:ring-PrimBlack"
                />
              </div>
              <div className="flex w-full items-center justify-between gap-x-4">
                <label htmlFor="endDate">Fin:</label>
                <input
                  type="date"
                  id="endDate"
                  className="rounded-lg border bg-ThirdGray p-1 focus:outline-none focus:ring-1 focus:ring-PrimBlack"
                />
              </div>
            </div>
          </div>
          {/* Configuraciones derecha */}
          <div>{/* Participantes */}</div>
        </div>
      </div>
    </div>
  );
}
