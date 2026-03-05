"use client"

import PlanShow from "@/features/session-pannel/components/PlanShow";
import FechasConfigSesion from "@/features/session-pannel/components/FechasConfig";
import TagInput from "@/components/inputs/TagInput";

import { useSessionStore } from "@/features/session-pannel/CreateSessionStore";

export default function LeftSettingsNewSession() {
 
  const { setField, startDate, endDate } = useSessionStore();

  const datesChange = (dates: Date[]) => {
    setField("startDate", dates[0]);
    setField("endDate", dates[1]);
  };

  const tagsChange = (tags: string[]) => {
    setField("tags", tags);
  };
  
  return (
    <div className="flex flex-col gap-y-6">
      {/* Plan actual */}
      <PlanShow plan={0} />
      {/* Fechas */}
      <FechasConfigSesion 
        setValue={datesChange}
        initialDateAsProp={startDate} // Para que la SessionStore pueda setear el estado del hijo
        finalDateAsProp={endDate}
      />
      {/* Descripción */}
      <SessionDescription />
      {/* Tags */}
      <TagInput setValue={tagsChange}/>
    </div>
  );
}

function SessionDescription() {  
  
  const { description, setField } = useSessionStore();
  
  return (
    <div className="flex flex-col gap-y-4 text-lg">
      <div className="text-xl">Descripción:</div>
      <textarea
        className="rounded-lg border-2 border-PrimGray bg-ThirdGray p-1 text-PrimBlack placeholder-PrimBlack focus:outline-none focus:ring-1 focus:ring-PrimBlack"
        placeholder="Ingresa tu descripción"
        value={(description === undefined)? "" : description}
        onChange={(e)=>{
          setField("description", e.target.value)
        }}
      ></textarea>
    </div>
  );
}