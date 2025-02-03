"use client"

import EditableTitle from "@/components/0.atoms/3.EditableTitle";
import PlanShow from "@/components/0.atoms/4.PlanShow";
import FechasConfigSesion from "@/components/1.molecules/5.FechasConfigSesion";
import ConfDescription from "@/components/0.atoms/5.ConfDescription";
import { sessionConfig } from "@/types/sessionConfig";
import { useAuthContext } from "@/utils/AuthProvider";

export default function NuevaSesion() {
  
  // Necesariamente debe haber un usuario para que se cargue esta página, por reglas del layout
  const {user} = useAuthContext();
  
  const config: sessionConfig = {
    title: "Ingresa tu titulo",
    plan: user?.plan || 0,    
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
            <FechasConfigSesion />
            {/* Descripción */}
            <ConfDescription />
            {/* Tags */}
            <div className="flex flex-col gap-y-4">
              <div className="text-xl">Tags:</div>
              <div className="flex w-full flex-wrap items-center justify-center gap-2">
                <div className="rounded-lg bg-PrimGray p-1 text-white">
                  Sistemas de información
                </div>
                <div className="rounded-lg bg-PrimGray p-1 text-white">
                  Sisinfo
                </div>
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
