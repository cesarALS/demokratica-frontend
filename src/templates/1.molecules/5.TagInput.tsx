"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface TagInputProps {
  setValue?: (tags: string[]) => void
}

export default function TagInput(
  {setValue = ([])=>{}}: TagInputProps
) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addTag = () => {
    const trimmedInputValue = inputValue.trim();
    if (trimmedInputValue && !tags.includes(trimmedInputValue)) {
      setTags([...tags, trimmedInputValue]);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTag();
    }
  };

  useEffect(()=>{
    setValue(tags);
  }, [tags]);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-xl">Tags:</div>
      {/* TagBox */}
      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex max-w-full flex-none flex-wrap items-center justify-center gap-2 break-words break-all rounded-md bg-PrimBlue px-2 py-2 text-base font-semibold italic text-white"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="border-1 flex items-center justify-center rounded-full border-black bg-ThirdGray p-1 hover:bg-SecGray"
            >
              <FontAwesomeIcon icon={faX} className="size-4 text-PrimBlue" />
            </button>
          </span>
        ))}
        <div className="flex flex-none items-center justify-center gap-x-2 rounded-md bg-PrimGray px-2 py-2 text-base font-semibold italic text-white">
          <input
            type="text"
            className="flex w-32 border-none bg-transparent text-center text-white placeholder-PrimBlack outline-none"
            placeholder="Agrega tu tag"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
