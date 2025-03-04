"use client";

import { useEffect, useRef, useState } from "react";
import MarkdownShower from "./18.MarkdownShower";

interface TextAreaMarkdownTitle {
  title: string;
  placeholder: string;
  className?: string;
  flex?: string;
  setValue?: (value: string) => void;
}

export default function TextAreaMarkdownTitle({
  title,
  placeholder,
  className,
  flex ="flex flex-col",
  setValue = () => {},  
}: TextAreaMarkdownTitle) {
  const [markdown, setMarkdown] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null); // Referencia al textarea

  useEffect(() => {
    // Send the markdown to the parent component
    if (setValue) {
      setValue(markdown);
    }
  }, [markdown]);

    // Función para ajustar la altura del textarea
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reinicia altura
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Ajusta según el contenido
    }
  };

  return (
    <div className={`${flex} gap-y-4 text-xl ${className}`}>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-bold text-2xl">{title}</h1>
        <textarea
          ref={textareaRef}
          className="w-full rounded-lg border-2 border-PrimGray bg-ThirdGray p-2 text-lg leading-tight text-PrimBlack max-h-[45vh] placeholder-PrimBlack focus:outline-none focus:ring-1 focus:ring-PrimBlack scrollbar-thin scrollbar-track-transparent scrollbar-thumb-PrimGray"
          placeholder={placeholder}
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
            adjustHeight();
          }}
          onInput={adjustHeight}
        />
      </div>
      {/* Vista previa */}
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-bold text-2xl">Vista previa:</h1>
        <MarkdownShower markdown={markdown} />
      </div>
    </div>
  );
}
