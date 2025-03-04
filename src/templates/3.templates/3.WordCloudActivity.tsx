"use client";

import { useState } from "react";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import SectionContainer from "@/templates/1.molecules/10.SectionContainer";
import WordCloudComponent, { WordData } from "@/templates/1.molecules/14.WordCloud";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";
import { SessionData, useSessionActivitiesStore } from "@/utils/ContextProviders/SessionActivitiesStore";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { getActivities, sendWordCloudWord } from "@/utils/apiUtils/apiActivitiesUtils";

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
