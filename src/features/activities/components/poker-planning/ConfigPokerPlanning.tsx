import { useState } from "react";

export default function ConfigPokerPlanning() {
  const tiposEscala = ["Fibonacci", "Fibonacci modificada"];
  const prevEscalas = [
    "0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144",
    "0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100",
  ];

  const [scale, setScale] = useState(0);

  return (
    <div className="flex flex-col items-start justify-between gap-y-4 text-xl">
      <div>Escala de estimación:</div>
      <div className="flex w-full items-center justify-center">
        <select
          className="min-w-32 rounded-lg border bg-ThirdGray px-2 py-1 text-center text-lg focus:outline-none focus:ring-1 focus:ring-PrimBlack"
          id="ActivityType"
          name="ActivityType"
          onChange={(e) => setScale(tiposEscala.indexOf(e.target.value))}
        >
          {tiposEscala.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
      <div>Preview:</div>
      <div className="flex w-full flex-row items-center justify-center rounded-lg bg-ThirdGray p-4">
        {prevEscalas[scale]}
      </div>
    </div>
  );
}
