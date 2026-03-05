"use client"

import PlanShow from "@/features/session-pannel/components/PlanShow";
import FechasConfigSesion from "@/features/session-pannel/components/FechasConfig";
import TagInput from "@/components/inputs/TagInput";

import RemainderSessions from "./RemainderSessions";

import { useGeneralCreateActivityStore } from "@/features/activities/CreateActivityStore";

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
      <RemainderSessions plan={0} remainder={10} />
      {/* Fechas */}
      <FechasConfigSesion setValue = {datesChange}/>
      {/* Tags */}
      <TagInput setValue = {tagsChange}/>
    </div>
  );
}
