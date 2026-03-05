import TextAreaTitle from "@/components/inputs/TextAreaMarkdownTitle";
import OptionsInput from "@/components/inputs/OptionsInput";
import { useCreatePollStore, useGeneralCreateActivityStore } from "@/features/activities/CreateActivityStore";

export default function ConfigCommonVoting() {
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
        className="gap-y-4"
        setValue={setQuestion}
      />
      {/* Opciones de respuesta */}
      <OptionsInput setValue={setOptions}/>
    </>
  );
}
