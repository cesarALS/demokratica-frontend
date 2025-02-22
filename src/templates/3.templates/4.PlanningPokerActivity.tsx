"use client";

import { useState } from "react";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import SectionContainer from "@/templates/1.molecules/10.SectionContainer";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";

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
  const [chosenNum, setChosenNum] = useState(0);
  const scaleNumbers = [
    [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
    [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100],
  ];

  function handleSendResults() {
    // TODO: Send results to server
    // TODO: Get results in a viable format
    // TODO: Render results
    console.log(chosenNum);
  }

  return (
    <ContentCard>
      <ActivityHeader tags={tags} givenDate={date} rol="admin" />
      <GridTwoColsRow className="gap-x-4 gap-y-4">
        <MarkdownShower markdown={markdownQuestion} />
        <SectionContainer className="flex flex-col gap-y-4">
          <div className="text-lg">Ingresa el valor de tu respuesta:</div>
          <div className="flex w-full items-center justify-center">
            <select
              className="min-w-32 rounded-lg border-2 border-SecBlack bg-white px-2 py-1 text-center text-lg text-xl font-semibold focus:outline-none focus:ring-1 focus:ring-PrimBlack"
              id="ActivityType"
              name="ActivityType"
              onChange={(e) => setChosenNum(Number(e.target.value))}
            >
              {scaleNumbers[scaleType].map((num) => (
                <option key={num} value={num} className="text-base">
                  {num}
                </option>
              ))}
            </select>
          </div>
        </SectionContainer>
      </GridTwoColsRow>
      <SimpleButton
        onClick={handleSendResults}
        buttonText="Enviar"
        className="w-[40%] self-center bg-PrimCreamCan hover:bg-SecCreamCan"
      />
    </ContentCard>
  );
}
