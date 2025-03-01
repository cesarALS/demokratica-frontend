"use client";

import { useState } from "react";
import SectionContainer from "./10.SectionContainer";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";
import { PollResult } from "@/types/activities";
import { useSessionActivitiesStore } from "@/utils/ContextProviders/SessionActivitiesStore";


interface SelectableOptionProps {
  options: PollResult[];
  activityId: number;
}

interface filteredOptionsType {
  id: number;
  description: string;
  numVotes: number;
}

export default function SelectableOption({ options, activityId }: SelectableOptionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const { setCommonVotationSelectedOption } = useSessionActivitiesStore();
  const filteredOptions = options.filter((option) => option.id !== null && option.description !== null) as filteredOptionsType[];  
  const handleSelect = (option: number, activityId: number) => {    
    setSelected(option);
    setCommonVotationSelectedOption(activityId, option);    
  };

  return (
    <SectionContainer className="flex flex-col gap-y-2">
      <GridTwoColsRow className="gap-x-4 gap-y-4">
        {filteredOptions.map((option) => (
          <label
            key={option.id}
            className={`flex w-full items-center justify-between rounded-lg p-2 text-sm ${selected === option.id ? "border-2 border-black bg-white font-semibold" : "border-2 border-SecBlack bg-white font-semibold text-PrimBlack"} transition hover:border-AccentBlue hover:bg-SecBlue hover:text-white`}
          >
            <input
              type="radio"
              name="options"
              value={option.id}
              checked={selected === option.id}
              onChange={() => handleSelect(option.id, activityId)}
              className="hidden"
            />
            <span>{option.description}</span>
          </label>
        ))}
      </GridTwoColsRow>
    </SectionContainer>
  );
}
