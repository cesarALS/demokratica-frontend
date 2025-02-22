import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import CommonVotationActivity from "@/templates/3.templates/0.CommonVotationActivity";
import TextPublication from "@/templates/3.templates/2.TextPublication";
import WordCloudActivity from "@/templates/3.templates/3.WordCloudActivity";
import PlanningPokerActivity from "@/templates/3.templates/4.PlanningPokerActivity";

export default function compDev() {
  const tags = ["tag1", "tag2", "tag3"];
  const markdownQuestion = "## Pregunta de la actividad";
  const options = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"];
  const date = new Date().toISOString();

  return (
    <PageContentContainer>
      <SessionTitleControls />
      <TextPublication tags={tags} />
      <CommonVotationActivity
        tags={tags}
        markdownQuestion={markdownQuestion}
        options={options}
        date={date}
      />
      <WordCloudActivity
        tags={tags}
        markdownQuestion={markdownQuestion}
        date={date}
      />
      <PlanningPokerActivity
        tags={tags}
        markdownQuestion={markdownQuestion}
        date={date}
        scaleType={0}
      />
    </PageContentContainer>
  );
}
