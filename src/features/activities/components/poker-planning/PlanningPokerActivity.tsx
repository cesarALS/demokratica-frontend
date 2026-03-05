"use client";

import { useState } from "react";
import MarkdownShower from "@/components/display-info/MarkdownDisplayer";
import ActivityHeader from "@/features/activities/components/ActivityHeader";
import ContentCard from "@/components/display-info/ContentCard";
import SectionContainer from "@/components/display-info/SectionContainer";
import SimpleButton from "@/components/buttons/SimpleButton";
import GridTwoColsRow from "../../../../components/layout/GridTwoColsRow";
import Input from "@/features/activities/components/poker-planning/Input";
import IndicatorRightResult from "./IndicatorRightResult";
import ResultEntry from "./ResultEntry";

interface PlanningPokerActivityProps {
  activityId: number;
  tags: string[];
  markdownQuestion: string;
  date: string;
  scaleType: number;
}

export default function PlanningPokerActivity({
  activityId,
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
      <ActivityHeader tags={tags} givenDate={date} rol="admin" activityId={activityId} activityType="POKER"/>
      <GridTwoColsRow className="grid-rows-[auto_1fr] gap-x-4 gap-y-4">
        <MarkdownShower markdown={markdownQuestion} />
        {mode === "participation" && (
          <Input scaleType={scaleType} onChange={setChosenNum} />
        )}
        {mode === "results" && (
          <div className="flex flex-col gap-y-4">
            {/* Resultados totales */}
            <div className="grid grid-cols-3 gap-x-2">
              <IndicatorRightResult
                title="Promedio"
                result="4.5"
              />
              <IndicatorRightResult
                title="Desviación"
                result="5.2"
              />
              {/* El orden de los votos, para ver los mayores y menores, con esos discutir los limites */}
              <IndicatorRightResult title="Orden" orderButton />
            </div>
            {/* Resultados individuales */}
            <SectionContainer className="flex max-h-64 flex-col gap-y-2 overflow-y-auto">
              {/* La idea es mapear esto dependiendo de como llegue el resultado */}
              {/* Dependiendo de si ha votado y de si ya están listos los resultados */}
              <ResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
                userHasVoted
                resultReady
              />
              <ResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
                userHasVoted
              />
              <ResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
              />
              <ResultEntry
                name="Nombre"
                role="Rol"
                userVote={4.5}
              />
              <ResultEntry
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
