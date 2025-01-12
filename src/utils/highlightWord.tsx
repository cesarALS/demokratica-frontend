import { JSX } from "react";
/* Función para resaltar la palabra que se envia como parámetro dentro de un String */
export const highlightWord = (text: string, word: string) => {
  const parts = text.split(word); 
  let result: (string | JSX.Element)[] = [];
  parts.forEach((part, index) => {
    if (part === "" && index !== parts.length - 1) {
      result.push(<span className="text-AccentBlue font-bold">Demokratica</span>);
    } else if (part !== "" && index !== parts.length - 1) {
      result.push(part);
      result.push(<span className="text-AccentBlue font-bold">Demokratica</span>);
    } else {
      result.push(part);
    }
  });

  return result; 
};
