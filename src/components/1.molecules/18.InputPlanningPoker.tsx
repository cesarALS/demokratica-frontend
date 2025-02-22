"use client";

import SectionContainer from "@/templates/1.molecules/10.SectionContainer";

interface InputPlanningPokerProps {
  scaleType: number;
  onChange: (num: number) => void;
}

export default function InputPlanningPoker({
  scaleType,
  onChange,
}: InputPlanningPokerProps) {
  const scaleNumbers = [
    [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
    [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100],
  ];

  return (
    <SectionContainer className="flex flex-col justify-center gap-y-4">
      <div className="text-lg">Ingresa el valor de tu respuesta:</div>
      <div className="flex w-full items-center justify-center">
        <select
          className="min-w-32 rounded-lg border-2 border-SecBlack bg-white px-2 py-1 text-center text-lg text-xl font-semibold focus:outline-none focus:ring-1 focus:ring-PrimBlack"
          id="ActivityType"
          name="ActivityType"
          onChange={(e) => onChange(Number(e.target.value))}
        >
          {scaleNumbers[scaleType].map((num) => (
            <option key={num} value={num} className="text-base">
              {num}
            </option>
          ))}
        </select>
      </div>
    </SectionContainer>
  );
}
