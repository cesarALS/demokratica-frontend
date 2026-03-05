import TextAreaTitle from "@/components/inputs/TextAreaMarkdownTitle";
import OptionsInput from "@/components/inputs/OptionsInput";

export default function ConfigCommonVoting() {
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
