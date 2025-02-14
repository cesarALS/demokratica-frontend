"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function OptionsInput() {
  const [options, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addOption = () => {
    const trimmedInputValue = inputValue.trim();
    if (trimmedInputValue && !options.includes(trimmedInputValue)) {
      setOptions([...options, trimmedInputValue]);
      setInputValue("");
    }
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addOption();
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-xl">Opciones:</div>
      {/* TagBox */}
      <div className="w-full">
        {options.map((option, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex list-inside list-decimal flex-wrap space-y-2 break-words break-all px-2 py-2 leading-tight text-PrimBlack">
              {index + 1}. {option}
            </div>
            <button
              onClick={() => removeOption(index)}
              className="flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faX} className="size-4 text-PrimBlue" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-none items-center justify-center">
        <div className="flex w-full flex-wrap items-center justify-start gap-2">
          <input
            type="text"
            className="w-full rounded-lg border-2 border-PrimGray bg-ThirdGray px-4 py-2 text-base text-PrimBlack placeholder-PrimBlack focus:outline-none focus:ring-1 focus:ring-PrimBlack"
            placeholder="Agrega tus opciones"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
