"use client";

import { useState } from "react";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import SectionContainer from "@/templates/1.molecules/10.SectionContainer";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";
import InputPlanningPoker from "@/components/1.molecules/18.InputPlanningPoker";

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
      <GridTwoColsRow className="gap-x-4 gap-y-4">
        <MarkdownShower markdown={markdownQuestion} />
        {mode === "participation" && (
          <InputPlanningPoker scaleType={scaleType} onChange={setChosenNum} />
        )}
        {mode === "results" && (
          <div className="flex flex-col gap-y-4">
            {/* Resultados totales */}
            <div className="grid grid-cols-3">
              <div className="flex flex-col gap-y-2">
                <div>Promedio</div>
                <div>Result</div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>Desviación</div>
                <div>Result</div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div>Orden</div>
                <div>Result</div>
              </div>
            </div>
            {/* Resultados individuales */}
            <SectionContainer>
              Aquí van los resultados individuales
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
