"use client"

import PlanShow from "@/templates/0.atoms/14.PlanShow";
import RemainderSessions from "@/components/0.atoms/13.RemainderSessions";
import FechasConfigSesion from "@/templates/1.molecules/7.FechasConfigSesion";
import TagInput from "@/templates/1.molecules/5.TagInput";
import { useGeneralCreateActivityStore } from "@/utils/ContextProviders/CreateActivityStore";

export default function LeftSettingsNewActivity() {
  const { setStartTime, setEndTime, setTags } = useGeneralCreateActivityStore();

  const datesChange = (dates: Date[]) => {
    setStartTime(dates[0]);
    setEndTime(dates[1]);
  };

  const tagsChange = (tags: string[]) => {
    setTags(tags.map((tag) => ({ text: tag })));
  }
  
  return (
    <div className="flex flex-col gap-y-6">
      {/* Información del plan actual */}
      <PlanShow plan={0} />
      {/* Actividades restantes en esta sesión */}
      <RemainderSessions plan={0} remainder={0} />
      {/* Fechas */}
      <FechasConfigSesion setValue = {datesChange}/>
      {/* Tags */}
      <TagInput setValue = {tagsChange}/>
    </div>
  );
}
