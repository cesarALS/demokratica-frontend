"use client";

import { useState } from "react";
import ContentCard from "../2.organisms/2.ContentCard";
import MarkdownShower from "../0.atoms/18.MarkdownShower";
import ActivityHeader from "../1.molecules/9.ActivityHeader";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";
import OrganizableOptions from "../1.molecules/15.OrganizableOptions";
import SimpleButton from "../0.atoms/11.SimpleButton";

import { OrganizableEntry } from "@/types/activities";
import SectionContainer from "../1.molecules/10.SectionContainer";

interface TidemanActivityProps {
  date: string;
  tags: string[];
  markdownQuestion: string;
}

export default function TidemanActivity({
  date,
  tags,
  markdownQuestion,
}: TidemanActivityProps) {
  const [mode, setMode] = useState("participation");
  const currOptions: OrganizableEntry[] = [
    { entry: "Option 1", value: 1 },
    { entry: "Option 2", value: 2 },
    { entry: "Option 3", value: 3 },
    { entry: "Option 4", value: 4 },
    { entry: "Option 5", value: 5 },
  ];

  function handleSendResults() {
    // TODO: Send the results to the server
    // TODO: Get results in a viable format
    // TODO: Los resultados solo deberían ser visibles al finalizar la actividad
    setMode("results");
  }

  return (
    <ContentCard>
      <ActivityHeader tags={tags} givenDate={date} rol="admin" />
      <GridTwoColsRow>
        <MarkdownShower markdown={markdownQuestion} />
        {mode === "participation" && (
          <OrganizableOptions optionsList={currOptions} />
        )}
        {mode === "results" && (
          <SectionContainer className="flex flex-col gap-y-2">
            <div className="text-xl">Resultados:</div>
            {currOptions.map(({ entry, value }, index) => (
              <div
                key={index}
                className="flex w-full items-center gap-x-2 rounded-lg border-2 border-SecBlack bg-white px-3 py-2 font-semibold text-PrimBlack"
              >
                <div>
                  <span className="text-black">{value.toString() + ". "}</span>
                  {entry}
                </div>
              </div>
            ))}
          </SectionContainer>
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
