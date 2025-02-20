"use client"

import PlanShow from "@/templates/0.atoms/14.PlanShow";
import FechasConfigSesion from "@/templates/1.molecules/7.FechasConfigSesion";
import ConfDescription from "@/components/0.atoms/5.ConfDescription";
import TagInput from "@/templates/1.molecules/5.TagInput";
import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";

export default function LeftSettingsNewSession() {
 
  const { setField } = useSessionStore();

  const datesChange = (dates: Date[]) => {
    setField("startDate", dates[0]);
    setField("endDate", dates[1]);
  }

  const tagsChange = (tags: string[]) => {
    setField("tags", tags);
  }
  
  return (
    <div className="flex flex-col gap-y-6">
      {/* Plan actual */}
      <PlanShow plan={0} />
      {/* Fechas */}
      <FechasConfigSesion setValue={datesChange}/>
      {/* Descripción */}
      <ConfDescription />
      {/* Tags */}
      <TagInput setValue={tagsChange}/>
    </div>
  );
}
