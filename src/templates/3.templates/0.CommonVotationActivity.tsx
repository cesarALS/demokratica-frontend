"use client";

import { useState } from "react";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import SelectableOptions from "@/templates/1.molecules/11.SelectableOptions";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import PieChartResults from "../1.molecules/12.PieChartResults";

interface CommonVotationActivityProps {
  tags: string[];
  markdownQuestion: string;
  options: string[];
  date: string;
}

export default function CommonVotationActivity({
  tags,
  markdownQuestion,
  options,
  date,
}: CommonVotationActivityProps) {
  const [mode, setMode] = useState("participation");

  function handleSendResults() {
    setMode("results");
    // TODO: Send results to server
    // TODO: Get results in a viable format
    // TODO: Render results
  }

  // Resultados de prueba
  const results = [
    { name: "Wenas", votes: 10 },
    { name: "adios", votes: 10 },
    { name: "uff, naiss", votes: 10 },
    { name: "otra mas", votes: 10 },
    { name: "y otra", votes: 10 },
    { name: "no han votado", votes: 10 },
  ];

  return (
    <ContentCard>
      <ActivityHeader tags={tags} givenDate={date} />
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
        <>
          <PieChartResults data={results} />
        </>
      )}
    </ContentCard>
  );
}
