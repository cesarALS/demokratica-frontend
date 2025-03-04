import TextAreaTitle from "@/templates/0.atoms/16.TextAreaMarkdownTitle";
import OptionsInput from "@/templates/1.molecules/8.OptionsInput";
import { useCreatePollStore } from "@/utils/ContextProviders/CreateActivityStore";

export default function ConfigCommonVotation() {
  const { setTitle, setPollOptions } = useCreatePollStore()

  const setOptions = (options: string[]) => {
    setPollOptions(options.map((option) => ({ description: option })));
  }

  return (
    <>
      {/* Pregunta a realizar */}
      <TextAreaTitle
        title="Pregunta:"
        placeholder="Ingresa tu pregunta en formato markdown"
        setValue={setTitle}
        className="gap-y-4"
      />
      {/* Opciones de respuesta */}
      <OptionsInput setValue={setOptions}/>
    </>
  );
}
