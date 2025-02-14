import TextAreaTitle from "@/templates/0.atoms/16.TextAreaTitle";
import OptionsInput from "@/templates/1.molecules/8.OptionsInput";

export default function ConfigCommonVotation() {
  return (
    <>
      {/* Pregunta a realizar */}
      <TextAreaTitle title="Pregunta:" placeholder="Ingresa tu pregunta" />
      {/* Opciones de respuesta */}
      <OptionsInput />
    </>
  );
}
