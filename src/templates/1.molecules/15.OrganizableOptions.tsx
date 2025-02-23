"use client";

import { useState } from "react";
import SelectDropdown from "../0.atoms/20.SelectDropdown";
import SectionContainer from "../1.molecules/10.SectionContainer";
import { OrganizableEntry } from "@/types/activities";

interface OrganizableOptionsProps {
  optionsList: OrganizableEntry[];
}

export default function OrganizableOptions({
  optionsList,
}: OrganizableOptionsProps) {
  const [options, setOptions] = useState(
    optionsList.sort((a, b) => a.value - b.value),
  );
  const maxValue = Math.max(...optionsList.map(({ value }) => value));
  const listValues = [...Array(maxValue)].map((_, i) => i + 1);

  // Reorder the options each time the user changes the value of an option
  function handleValueChange(lastValue: string, currValue: string) {
    // If the value hasn't changed, do nothing
    if (lastValue === currValue) return;
    // If the value is an empty string, do nothing
    if (currValue === "") return;
    // Do the exchange in values of the two options
    const newOptions = options.map((option) => {
      if (option.value === Number(lastValue)) {
        return { ...option, value: Number(currValue) };
      }
      if (option.value === parseInt(currValue)) {
        return { ...option, value: Number(lastValue) };
      }
      return option;
    });
    console.log("newOptions", newOptions);
    console.log("options", options);
    setOptions(newOptions.sort((a, b) => a.value - b.value));
  }

  return (
    <SectionContainer className="flex flex-col gap-y-2">
      {options.map(({ entry, value }, index) => (
        <div
          key={index}
          className="flex w-full items-center gap-x-2 rounded-lg border-2 border-SecBlack bg-white p-2 font-semibold text-PrimBlack"
        >
          <SelectDropdown
            passAndRestartValue={true}
            initialSelectedItem={value - 1}
            options={listValues.map((e) => e.toString())}
            placeholder={(index + 1).toString()}
            inputClassName="w-8 text-center border-none rounded-lg hover:bg-PrimBlue hover:text-white hover:placeholder-white"
            handleValueChange={handleValueChange}
            listItemClassName="hover:bg-PrimBlue hover:text-white"
          />
          <div>{entry}</div>
        </div>
      ))}
    </SectionContainer>
  );
}
