"use client";

import { useEffect, useState } from "react";
import MarkdownShower from "./18.MarkdownShower";

interface TextAreaMarkdownTitle {
  title: string;
  placeholder: string;
  setValue?: (value: string) => void;
}

export default function TextAreaMarkdownTitle({
  title,
  placeholder,
  setValue = () => {},
}: TextAreaMarkdownTitle) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // Send the markdown to the parent component
    if (setValue) {
      setValue(markdown);
    }
  }, [markdown]);
  return (
    <div className="flex flex-col items-start justify-start gap-y-4 text-xl">
      {title}
      <textarea
        className="w-full rounded-lg border-2 border-PrimGray bg-ThirdGray p-2 text-lg leading-tight text-PrimBlack placeholder-PrimBlack focus:outline-none focus:ring-1 focus:ring-PrimBlack"
        placeholder={placeholder}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      {/* Vista previa */}
      <div className="text-lg">Vista previa:</div>
      <MarkdownShower markdown={markdown} />
    </div>
  );
}
