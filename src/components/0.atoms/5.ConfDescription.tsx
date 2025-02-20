"use client"

import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";

export default function ConfDescription() {
  
  const { description, setField } = useSessionStore();
  
  return (
    <div className="flex flex-col gap-y-4 text-lg">
      <div className="text-xl">Descripción:</div>
      <textarea
        className="rounded-lg border-2 border-PrimGray bg-ThirdGray p-1 text-PrimBlack placeholder-PrimBlack focus:outline-none focus:ring-1 focus:ring-PrimBlack"
        placeholder="Ingresa tu descripción"
        value={description}
        onChange={(e)=>{
          setField("description", e.target.value)
        }}
      ></textarea>
    </div>
  );
}
