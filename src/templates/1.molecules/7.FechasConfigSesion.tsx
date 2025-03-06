"use client"

import DatePickerComponent from "@/templates/0.atoms/13.DatePickerComponent";
import { useEffect, useState } from "react";

interface FechasConfigSessionProps {
  initialDateAsProp?: Date | null,
  finalDateAsProp?: Date | null,
  setValue?: (dates: Date[]) => void
}

export default function FechasConfigSesion({
  initialDateAsProp,
  finalDateAsProp,
  setValue = ()=>{}
} : FechasConfigSessionProps) {  
    
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)      
      
  const [startDate, setFirstDate] = useState<Date>(initialDateAsProp? initialDateAsProp: new Date());
  const [endDate, setLastDate]   = useState<Date>(finalDateAsProp? finalDateAsProp: tomorrow);

  useEffect(() => {
    if (initialDateAsProp) setFirstDate(initialDateAsProp);
    if (finalDateAsProp) setLastDate(finalDateAsProp);
  }, [initialDateAsProp, finalDateAsProp]);

  useEffect(() => {
    setValue([startDate, endDate])
  }, [startDate, endDate])

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
