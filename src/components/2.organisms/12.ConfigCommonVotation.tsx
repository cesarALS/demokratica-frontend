import TextAreaTitle from "@/templates/0.atoms/16.TextAreaMarkdownTitle";
import OptionsInput from "@/templates/1.molecules/8.OptionsInput";
import { useCreatePollStore, useGeneralCreateActivityStore } from "@/utils/ContextProviders/CreateActivityStore";

export default function ConfigCommonVotation() {
  const { setPollOptions } = useCreatePollStore()
  const { setQuestion } = useGeneralCreateActivityStore()

  const setOptions = (options: string[]) => {
    setPollOptions(options.map((option) => ({ description: option })));
  }

  return (
    <>
      {/* Pregunta a realizar */}
      <TextAreaTitle
        title="Pregunta:"
        placeholder="Ingresa tu pregunta en formato markdown"
        setValue={setQuestion}
      />
      {/* Opciones de respuesta */}
      <OptionsInput setValue={setOptions}/>
    </>
  );
}
