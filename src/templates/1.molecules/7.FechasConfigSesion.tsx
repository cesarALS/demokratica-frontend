"use client"

import DatePickerComponent from "@/templates/0.atoms/13.DatePickerComponent";
import { useEffect, useState } from "react";

// Este componente se usa en varias partes

interface FechasConfigSessionProps {
  setValue?: (dates: Date[]) => void
}

export default function FechasConfigSesion({setValue = ()=>{}} : FechasConfigSessionProps) {  

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)

  const [startDate, setFirstDate] = useState<Date>(new Date());
  const [endDate, setLastDate]   = useState<Date>(tomorrow);

  useEffect(() => {
    setValue([startDate, endDate])
  }, [startDate, endDate, ])

  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-4 text-lg">
      <div className="text-xl">Fechas:</div>
      <div className="flex w-full flex-col items-start justify-between gap-y-2">
        <div>Inicio:</div>
        <div className="flex items-center justify-start">
          <DatePickerComponent initialDate={startDate} setValue={setFirstDate}/>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-y-2">
        <div>Fin:</div>
        <div className="flex items-center justify-start">
          <DatePickerComponent initialDate={endDate} setValue={setLastDate}/>
        </div>
      </div>
    </div>
  );
}
