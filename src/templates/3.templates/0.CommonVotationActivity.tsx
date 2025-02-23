"use client";

import { useState } from "react";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import SelectableOptions from "@/templates/1.molecules/11.SelectableOptions";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import PieChartResults from "../1.molecules/12.PieChart";
import SectionContainer from "../1.molecules/10.SectionContainer";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";

interface CommonVotationActivityProps {
  tags: string[];
  markdownQuestion: string;
  options: string[];
  date: string;
  initialMode: string;
}

export default function CommonVotationActivity({
  tags,
  markdownQuestion,
  options,
  date,
  initialMode
}: CommonVotationActivityProps) {
  const [mode, setMode] = useState(initialMode);

  // Function to generate a unique color for each slice
  function generateColor(index: number, total: number) {
    const hue = (index * (360 / total)) % 360; // Distributes colors evenly
    return `hsl(${hue}, 70%, 50%)`; // Adjust saturation and lightness as needed
  }

  function handleSendResults() {
    setMode("results");
    // TODO: Send results to server
    // TODO: Get results in a viable format
    // TODO: Render results
    // TODO: También debería haber un botón para actualizar los resultados
  }

  // Resultados de prueba
  const results = [
    { name: "Wenas", votes: 10, color: "" },
    { name: "adios", votes: 10, color: "" },
    { name: "uff, naiss", votes: 10, color: "" },
    { name: "otra mas", votes: 10, color: "" },
    { name: "y otra", votes: 10, color: "" },
    { name: "no han votado", votes: 10, color: "" },
  ];
  // Assign a color to each slice
  results.forEach((entry, index) => {
    entry.color = generateColor(index, results.length);
  });

  return (
    <ContentCard>
      <ActivityHeader tags={tags} givenDate={date} rol="admin" />
      <MarkdownShower markdown={markdownQuestion} />
      {mode === "participation" && (
        <>
          <SelectableOptions options={options} />
          <SimpleButton
            onClick={handleSendResults}
            buttonText="Enviar"
            className="w-[40%] self-center bg-PrimCreamCan hover:bg-SecCreamCan"
          />
        </>
      )}
      {mode === "results" && (
        <GridTwoColsRow>
          <PieChartResults data={results} />
          <SectionContainer className="flex flex-col gap-y-2">
            {results.map(({ name, color }, index) => (
              <div
                key={index}
                className="flex w-full items-center gap-x-2 rounded-lg border-2 border-SecBlack bg-white p-2 font-semibold text-PrimBlack"
              >
                <div
                  style={{ backgroundColor: color }}
                  className="size-4 rounded-full"
                ></div>
                <div>{name}</div>
              </div>
            ))}
          </SectionContainer>
        </GridTwoColsRow>
      )}
    </ContentCard>
  );
}
