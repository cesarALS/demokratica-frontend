"use client";

import { useState } from "react";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import SectionContainer from "@/templates/1.molecules/10.SectionContainer";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";
import InputPlanningPoker from "@/components/1.molecules/18.InputPlanningPoker";
import IndicatorRightResultPlanningPoker from "../../components/1.molecules/19.IndicatorsRightResultPlanningPoker";
import PlanningPokerResultEntry from "../2.organisms/4.PlanningPokerResultEntry";

interface PlanningPokerActivityProps {
  tags: string[];
  markdownQuestion: string;
  date: string;
  scaleType: number;
}

export default function PlanningPokerActivity({
  tags,
  markdownQuestion,
  date,
  scaleType,
}: PlanningPokerActivityProps) {
  // to track the selected number

  const [mode, setMode] = useState("participation");
  const [chosenNum, setChosenNum] = useState(0);

  function handleSendResults() {
    // TODO: Send results to server
    // TODO: Get results in a viable format
    // TODO: Render results
    setMode("results");
    console.log(chosenNum);
  }

  return (
    <ContentCard>
      <ActivityHeader tags={tags} givenDate={date} rol="admin" />
      <GridTwoColsRow className="grid-rows-[auto_1fr] gap-x-4 gap-y-4">
        <MarkdownShower markdown={markdownQuestion} />
        {mode === "participation" && (
          <InputPlanningPoker scaleType={scaleType} onChange={setChosenNum} />
        )}
        {mode === "results" && (
          <div className="flex flex-col gap-y-4">
            {/* Resultados totales */}
            <div className="grid grid-cols-3 gap-x-2">
              <IndicatorRightResultPlanningPoker
                title="Promedio"
                result="4.5"
              />
              <IndicatorRightResultPlanningPoker
                title="Desviación"
                result="5.2"
              />
              {/* El orden de los votos, para ver los mayores y menores, con esos discutir los limites */}
              <IndicatorRightResultPlanningPoker title="Orden" orderButton />
            </div>
            {/* Resultados individuales */}
            <SectionContainer className="flex max-h-64 flex-col gap-y-2 overflow-y-auto">
              {/* La idea es mapear esto dependiendo de como llegue el resultado */}
              {/* Dependiendo de si ha votado y de si ya están listos los resultados */}
              <PlanningPokerResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
                userHasVoted
                resultReady
              />
              <PlanningPokerResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
                userHasVoted
              />
              <PlanningPokerResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
              />
              <PlanningPokerResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
              />
              <PlanningPokerResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
              />
            </SectionContainer>
          </div>
        )}
      </GridTwoColsRow>
      {mode === "participation" && (
        <SimpleButton
          onClick={handleSendResults}
          buttonText="Enviar"
          className="w-[40%] self-center bg-PrimCreamCan hover:bg-SecCreamCan"
        />
      )}
    </ContentCard>
  );
}
