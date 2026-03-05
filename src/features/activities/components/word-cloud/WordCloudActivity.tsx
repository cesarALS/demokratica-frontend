"use client";

import { useState } from "react";
import MarkdownShower from "@/components/display-info/MarkdownDisplayer";
import ActivityHeader from "@/features/activities/components/ActivityHeader";
import ContentCard from "@/components/display-info/ContentCard";
import SimpleButton from "@/components/buttons/SimpleButton";
import SectionContainer from "@/components/display-info/SectionContainer";
import WordCloudComponent, { WordData } from "./WordCloud";
import GridTwoColsRow from "@/components/layout/GridTwoColsRow";
import { SessionData, useSessionActivitiesStore } from "@/features/activities/SessionActivitiesStore";
import { useAuthContext } from "@/features/auth/AuthProvider";
import { getActivities, sendWordCloudWord } from "@/features/activities/apiCall";

interface WordCloudActivityProps {
  activityId: number;
  tags: string[];
  markdownQuestion: string;
  date: string;
  initialMode: string;
}

function generateWordData(words: string[]): WordData[] {
  const wordCount: { [key: string]: number } = {};

  words.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  return Object.keys(wordCount).map((word) => ({
    text: word,
    value: wordCount[word],
  }));
}

export default function WordCloudActivity({
  activityId,
  tags,
  markdownQuestion,
  date,
  initialMode
}: WordCloudActivityProps) {
  const [mode, setMode] = useState(initialMode);
  const userRole = useSessionActivitiesStore((state) => state.userRole);
  const { wordCloudWord, setWordCloudWord } = useSessionActivitiesStore();
  const { getCookie } = useAuthContext();
  const { sessionId, setActivities } = useSessionActivitiesStore();
  const words = useSessionActivitiesStore(
    (state) =>
      state.activities.find((act) => act.id === activityId)?.results,
  );

  const wordsTyped = words as string[];
  const wordData = generateWordData(wordsTyped);

  async function handleSendResults() {    
    try {
      // Envía el voto
      await sendWordCloudWord(getCookie(), activityId, wordCloudWord);
        
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

  return (
    <ContentCard>
      <ActivityHeader tags={tags} givenDate={date} rol={userRole} activityId={activityId} activityType="WORD"/>
      <GridTwoColsRow className="gap-x-4 gap-y-4">
        <div className="flex items-center justify-center">
          <MarkdownShower markdown={markdownQuestion} />
        </div>
        {mode === "participation" && (
          <SectionContainer className="flex items-center">
            <input
              type="text"
              className="flex w-full items-center gap-x-2 rounded-lg border-2 border-SecBlack bg-white p-2 font-semibold text-black"
              placeholder="Agrega tu palabra"
              onChange={(e) => setWordCloudWord(e.target.value)}
            ></input>
          </SectionContainer>
        )}
        {mode === "results" && <WordCloudComponent words={wordData}/>}
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
