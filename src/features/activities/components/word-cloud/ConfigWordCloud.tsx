import TextAreaMarkdownTitle from "@/components/inputs/TextAreaMarkdownTitle";
import { useGeneralCreateActivityStore } from "@/features/activities/CreateActivityStore";

export default function ConfigWordCloud() {

  const { setQuestion } = useGeneralCreateActivityStore()
  
  return (
    <>
      <TextAreaMarkdownTitle
        title="Texto:"
        placeholder="Ingresa tu texto en formato markdown"
        setValue={setQuestion}
      />
    </>
  );
}
