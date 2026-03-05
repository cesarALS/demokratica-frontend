"use client";

import { useState } from "react";

import ContentCard from "@/components/display-info/ContentCard";
import ActivityHeader from "@/features/activities/components/ActivityHeader";
import MarkdownShower from "@/components/display-info/MarkdownDisplayer";
import SelectableOptions from "@/features/activities/components/common-voting/SelectableOptions";
import SimpleButton from "@/components/buttons/SimpleButton";

import PieChartResults from "./PieChart";
import SectionContainer from "@/components/display-info/SectionContainer";
import GridTwoColsRow from "@/components/layout/GridTwoColsRow";

import { PollResult } from "../../activities";
import { sendCommonVotingVote, getActivities } from "../../apiCall";
import {
  SessionData,
  useSessionActivitiesStore,
} from "@/features/activities/SessionActivitiesStore";
import { useAuthContext } from "@/features/auth/AuthProvider";

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
      state.activities.find((act) => act.id === activityId)?.results,
  );
  const { getCookie } = useAuthContext();
  const selectedOption = useSessionActivitiesStore(
    (state) => state.commonVotingSelectedOptions[activityId],
  );

  const resultsType = pollResults as PollResult[];

  const results =
    resultsType
      ?.filter((result) => result.id !== null && result.description !== null)
      .map((option) => ({
        id: option.id,
        name: option.description,
        votes: option.numVotes,
        color: "",
      }))  || [];
  const { setActivities, sessionId } = useSessionActivitiesStore();

  // Function to generate a unique color for each slice
  function generateColor(index: number, total: number) {
    const hue = (index * (360 / total)) % 360; // Distributes colors evenly
    return `hsl(${hue}, 70%, 50%)`; // Adjust saturation and lightness as needed
  }

  async function handleSendResults() {
    try {
      // Envía el voto
      await sendCommonVotingVote(getCookie(), activityId, selectedOption);
        
      setMode("results");
      //Hace de nuevo el fetch para actualizar los resultados en el estado global   
      const response = await getActivities(getCookie(), sessionId);           

      if(response.status == 200){
        const sessionData = response.data as SessionData;        
        setActivities(sessionData.activities); // Guardar actividades
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
      {mode === "starting" && (
        <>
          <SelectableOptions options={options} activityId={activityId} />
          <span className="text-center"> Esperando a comenzar actividad...</span>
        </>
      )}
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
