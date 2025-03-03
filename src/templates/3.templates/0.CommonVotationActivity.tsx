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
import {
  SessionData,
  useSessionActivitiesStore,
} from "@/utils/ContextProviders/SessionActivitiesStore";
import { PollResult } from "@/types/activities";
import { sendCommonVotationVote } from "@/utils/apiUtils/apiActivitiesUtils";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { getActivities } from "@/utils/apiUtils/apiActivitiesUtils";

interface CommonVotationActivityProps {
  activityId: number;
  tags: string[];
  markdownQuestion: string;
  options: PollResult[];
  date: string;
  initialMode: string;
}

export default function CommonVotationActivity({
  activityId,
  tags,
  markdownQuestion,
  options,
  date,
  initialMode,
}: CommonVotationActivityProps) {
  const [mode, setMode] = useState(initialMode);
  const userRole = useSessionActivitiesStore((state) => state.userRole);
  const pollResults = useSessionActivitiesStore(
    (state) =>
      state.activities.find((act) => act.id === activityId)?.pollResults,
  );
  const { getCookie } = useAuthContext();
  const selectedOption = useSessionActivitiesStore(
    (state) => state.commonVotationSelectedOptions[activityId],
  );
  const results =
    pollResults
      ?.filter((result) => result.id !== null && result.description !== null)
      .map((option) => ({
        id: option.id,
        name: option.description,
        votes: option.numVotes,
        color: "",
      })) || [];
  const { setActivities, sessionId } = useSessionActivitiesStore();

  // Function to generate a unique color for each slice
  function generateColor(index: number, total: number) {
    const hue = (index * (360 / total)) % 360; // Distributes colors evenly
    return `hsl(${hue}, 70%, 50%)`; // Adjust saturation and lightness as needed
  }

  async function handleSendResults() {
    try {
      // Envía el voto
      await sendCommonVotationVote(getCookie(), activityId, selectedOption);
        
      setMode("results");
      //Hace de nuevo el fetch para actualizar los resultados en el estado global   
      const response = await getActivities(getCookie(), sessionId);           

      if(response.status == 200){
        const sessionData = response.data as SessionData;        
        setActivities(sessionData.pollDTOs); // Guardar actividades
      }    
    } catch (error) {
      console.error("Error sending vote:", error);
    }
  }

  // Resultados de prueba
  /*const results = [
    { name: "Wenas", votes: 10, color: "" },
    { name: "adios", votes: 10, color: "" },
    { name: "uff, naiss", votes: 10, color: "" },
    { name: "otra mas", votes: 10, color: "" },
    { name: "y otra", votes: 10, color: "" },
    { name: "no han votado", votes: 10, color: "" },
  ];
  */
  // Assign a color to each slice
  results.forEach((entry, index) => {
    entry.color = generateColor(index, results.length);
  });

  return (
    <ContentCard>
      <ActivityHeader activityId = {activityId} tags={tags} givenDate={date} rol={userRole} activityType = "POLL"/>
      <MarkdownShower markdown={markdownQuestion} />
      {mode === "participation" && (
        <>
          <SelectableOptions options={options} activityId={activityId} />
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
            {results.map(({ name, votes, color }, index) => (
              <div
                key={index}
                className="flex w-full items-center gap-x-2 rounded-lg border-2 border-SecBlack bg-white p-2 font-semibold text-PrimBlack"
              >
                <div
                  style={{ backgroundColor: color }}
                  className="size-4 rounded-full"
                ></div>
                <div>
                  {name} : {votes}
                </div>
              </div>
            ))}
          </SectionContainer>
        </GridTwoColsRow>
      )}
    </ContentCard>
  );
}
