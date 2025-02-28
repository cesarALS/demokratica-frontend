"use client"

/**
 * Un par de botones que se pueden usar para formularios típicos
 * donde hay un botón de cancelar y un botón de aceptar
 */

import SimpleButton from "@/templates/0.atoms/11.SimpleButton";

interface TwoButtonFormDecisionProps {
  divClassName?: string,
  firstButtonText?: string,
  firstButtonFunction?: ()=>void,
  firstButtonClassname?: string,
  secondButtonText?: string,
  secondButtonFunction?: ()=>void,
  secondButtonClassname?: string,
}

export default function TwoButtonFormDecision({
  divClassName = "",
  firstButtonText = "Cancelar",
  firstButtonFunction = () => {},
  firstButtonClassname = "",
  secondButtonText = "Guardar",
  secondButtonFunction = () => {},
  secondButtonClassname = ""
}: TwoButtonFormDecisionProps) {
  return (
    <div className={`flex items-center justify-center gap-x-4 py-2 text-xl ${divClassName}`}>      
      <SimpleButton
        buttonText={firstButtonText}
        className={`${firstButtonClassname} bg-PrimCasablanca`}
        onClick={firstButtonFunction}
      />
      <SimpleButton
        buttonText={secondButtonText}
        className={`${secondButtonClassname} bg-PrimCreamCan`}
        onClick={secondButtonFunction}
      />
    </div>
  );
}
