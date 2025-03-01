import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import CommonVotationActivity from "@/templates/3.templates/0.CommonVotationActivity";
import TidemanActivity from "@/templates/3.templates/1.TidemanActivity";
import TextPublication from "@/templates/3.templates/2.TextPublication";
import WordCloudActivity from "@/templates/3.templates/3.WordCloudActivity";
import PlanningPokerActivity from "@/templates/3.templates/4.PlanningPokerActivity";
import { PollResult } from "@/types/activities";

export default function compDev() {
  const tags = ["tag1", "tag2", "tag3"];
  const markdownQuestion = "## Pregunta de la actividad";
  //const options = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"];
  const pollResults: PollResult[] = [
    { id: 1, description: "Opción 1", numVotes: 10 },
    { id: 2, description: "Opción 2", numVotes: 20 },
    { id: 3, description: "Opción 3", numVotes: 30 },
    { id: 4, description: "Opción 4", numVotes: 40 },
    { id: 5, description: "Opción 5", numVotes: 50 },
  ];
  const date = new Date().toISOString();

  return (
    <PageContentContainer>
      <SessionTitleControls />
      <TextPublication tags={tags} />
      <CommonVotationActivity
        activityId={1}
        tags={tags}
        markdownQuestion={markdownQuestion}
        options={pollResults}
        date={date}
        initialMode="participation"
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
      <TidemanActivity
        tags={tags}
        markdownQuestion={markdownQuestion}
        date={date}
        initialMode="participation"
      />
    </PageContentContainer>
  );
}
