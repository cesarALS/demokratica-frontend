"use client";

import { useState } from "react";
import SectionContainer from "./10.SectionContainer";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";

interface SelectableOptionProps {
  options: string[];
}

export default function SelectableOption({ options }: SelectableOptionProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <SectionContainer className="flex flex-col gap-y-2">
      <GridTwoColsRow className="gap-x-4 gap-y-4">
        {options.map((option) => (
          <label
            key={option}
            className={`flex w-full items-center justify-between rounded-lg p-2 text-sm ${selected === option ? "border-2 border-black bg-white font-semibold" : "border-2 border-SecBlack bg-white font-semibold text-PrimBlack"} transition hover:border-AccentBlue hover:bg-SecBlue hover:text-white`}
          >
            <input
              type="radio"
              name="options"
              value={option}
              checked={selected === option}
              onChange={() => handleSelect(option)}
              className="hidden"
            />
            <span>{option}</span>
          </label>
        ))}
      </GridTwoColsRow>
    </SectionContainer>
  );
}
