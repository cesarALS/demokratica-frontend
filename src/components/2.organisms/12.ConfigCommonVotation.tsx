import TextAreaTitle from "@/templates/0.atoms/16.TextAreaMarkdownTitle";
import OptionsInput from "@/templates/1.molecules/8.OptionsInput";

export default function ConfigCommonVotation() {
  return (
    <>
      {/* Pregunta a realizar */}
      <TextAreaTitle
        title="Pregunta:"
        placeholder="Ingresa tu pregunta en formato markdown"
      />
      {/* Opciones de respuesta */}
      <OptionsInput />
    </>
  );
}
