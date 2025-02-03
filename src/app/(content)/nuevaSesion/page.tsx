"use client"

import EditableTitle from "@/components/0.atoms/3.EditableTitle";
import { sessionConfig } from "@/types/sessionConfig";
import ParticipantsBox from "@/components/3.templates/2.ParticipantsBox";
import LeftSettingsNewSession from "@/components/3.templates/3.LeftSettingsNewSession";
import FormDecision from "@/components/1.molecules/9.FormDecision";
import { useAuthContext } from "@/utils/AuthProvider";
  
export default function NuevaSesion() {

  // Necesariamente debe haber un usuario para que se cargue esta página, por reglas del layout (todavía no implementado)
  const {user} = useAuthContext();
  
  const config: sessionConfig = {
    title: "Ingresa tu titulo",
    plan: user?.plan || 0,    
  }   

  return (
    <div className="mb-10 flex w-full flex-col gap-y-8 p-8 md:px-[5%] lg:px-[10%] xl:px-[10%] 2xl:px-[20%]">
      {/* Ingresar titulo */}
      <EditableTitle title={config.title} />
      {/* Configuraciones */}
      <div className="flex flex-col gap-y-6 rounded-lg border border-2 border-black bg-white p-6">
        {/* Grid para acomodar todo en responsive */}
        <div className="grid-rows-auto grid gap-x-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-1">
          {/* Configuraciones izquierda */}
          <LeftSettingsNewSession />
          {/* Configuraciones derecha */}
          {/* Participantes */}
          <ParticipantsBox />
        </div>
        {/* FormDecisionNewSession */}
        <FormDecision />
      </div>
    </div>
  );
}
