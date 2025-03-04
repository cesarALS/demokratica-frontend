import TextAreaMarkdownTitle from "@/templates/0.atoms/16.TextAreaMarkdownTitle";
import { useGeneralCreateActivityStore } from "@/utils/ContextProviders/CreateActivityStore";

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
