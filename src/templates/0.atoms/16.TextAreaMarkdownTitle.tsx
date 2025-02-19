"use client";

import { useState } from "react";
import MarkdownShower from "./18.MarkdownShower";

interface TextAreaMarkdownTitle {
  title: string;
  placeholder: string;
}

export default function TextAreaMarkdownTitle({
  title,
  placeholder,
}: TextAreaMarkdownTitle) {
  const [markdown, setMarkdown] = useState("");

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
