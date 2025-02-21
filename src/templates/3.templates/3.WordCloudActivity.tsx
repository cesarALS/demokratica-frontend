"use client";

import { useState } from "react";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import SectionContainer from "@/templates/1.molecules/10.SectionContainer";
import WordCloudComponent from "@/templates/1.molecules/14.WordCloud";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";

interface WordCloudActivityProps {
  tags: string[];
  markdownQuestion: string;
  date: string;
}

export default function WordCloudActivity({
  tags,
  markdownQuestion,
  date,
}: WordCloudActivityProps) {
  const [mode, setMode] = useState("participation");

  function handleSendResults() {
    setMode("results");
    // TODO: Send results to server
    // TODO: Get results in a viable format
    // TODO: Render results
    // TODO: También debería haber un botón para actualizar los resultados
  }

  return (
    <ContentCard>
      <ActivityHeader tags={tags} givenDate={date} rol="admin" />
      <GridTwoColsRow>
        <MarkdownShower markdown={markdownQuestion} />
        {mode === "participation" && (
          <SectionContainer>
            <input
              type="text"
              className="flex w-full items-center gap-x-2 rounded-lg border-2 border-SecBlack bg-white p-2 font-semibold text-black"
              placeholder="Agrega tu palabra"
            ></input>
          </SectionContainer>
        )}
        {mode === "results" && <WordCloudComponent />}
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
