"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { getActivities } from "@/features/activities/apiCall";
import { PollResult, SessionData, useSessionActivitiesStore } from "@/features/activities/SessionActivitiesStore";
import { useAuthContext } from "@/features/auth/AuthProvider";

import LoadingScreen from "@/components/layout/LoadingScreen";

import CommonVotingActivity from "./common-voting/CommonVotingActivity";
import TidemanActivity from "./tideman-voting/TidemanActivity";
import WordCloudActivity from "./word-cloud/WordCloudActivity";
import TextPost from "./text-post/TextPost";
import PostText from "./text-post/PostText";

import { useQuery } from "@tanstack/react-query";

export default function ActivitiesLoader() {
  const pathname = usePathname();
  const newActivityPath = pathname + "/nuevaActividad";
  const { setActivities, activities , setUserRole, setSessionId, userRole } = useSessionActivitiesStore();
  const { getCookie } = useAuthContext();

  const idSesion = pathname.split("/").pop(); // Obtiene el último segmento de la URL

  // Obtener actividades usando React Query con cache
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["activities", idSesion],
    queryFn: async () => {
      const response = await getActivities(getCookie(), idSesion);
      if (response.status === 200) {        
        console.log(response.data)
        return response.data;
      }
      throw new Error(response.error || "Error al obtener actividades");
    },
    enabled: !!idSesion && !!getCookie(),
    staleTime: 1000 * 60, // Cache por 1 min
    refetchInterval: 1000 * 15, // Refetch cada 15 segundos
    refetchOnWindowFocus: false,
  });
  const sessionData = data as SessionData;

  // Actualiza Zustand cuando cambien los datos
  useEffect(() => {
    if (!isLoading && data) {
      setSessionId(sessionData.sessionId); // Guardar sessionId en Zustand
      setUserRole(sessionData.userRole); // Guardar userRole en Zustand
      setActivities(sessionData.activities); // Guardar actividades
    }
  }, [data, sessionData, isLoading, setActivities, setUserRole]);

  if (isLoading)
    return (
      <div className="border-2 border-black rounded-lg h-[60vh]">
        <LoadingScreen
          fixed={false}
          text={"Cargando sesiones"}
          showText={false}
          scale={1.4}
          logo={"Icon"}          
        />
      </div>
    );
  
    return (      
      <>
        {userRole!=="PARTICIPANTE" && <PostText refetch={refetch}/> }
        {activities.map((activity) => {
          const tags = activity.tags.map((tag) => tag.text);               

          let mode = "participation";
          if (activity.status === "NOT_STARTED") {
            mode = "starting";
          } else if (activity.status === "FINISHED") {
            mode = "results";
          } else if (activity.status === "ONGOING") {
            if (activity.alreadyParticipated) {
              mode = "results";
            } else {
              mode = "participation";
            }
          }
          
          let results = []

          switch (activity.type) {
            case "POLL":
              results = activity.results as PollResult[];
              return (
                <CommonVotingActivity
                  key={"CV"+activity.id}
                  activityId={activity.id}
                  tags={tags}
                  markdownQuestion={activity.question}
                  options={
                    results?.filter((result) => result.id !== null && result.description !== null) || []
                  }
                  date={activity.startTime}
                  initialMode={mode}
                />
              );              
            case "WORD_CLOUD":
              return (
                <WordCloudActivity
                  key={"WC"+activity.id}
                  activityId={activity.id}
                  tags={tags}
                  markdownQuestion={activity.question}
                  date={activity.startTime}
                  initialMode={mode}
                />
              );
            case "TIDEMAN":
              return (
                <TidemanActivity
                  key={activity.id}
                  activityId={activity.id}
                  tags={tags}
                  markdownQuestion={activity.question}
                  date={activity.startTime}
                  initialMode={mode}
                />
              );  
            case "TEXT":
              if ("content" in activity) return (                
                <TextPost
                  key={activity.id}
                  activityId={activity.id}
                  tags={[]}
                  markdown={(activity.content)}
                />
              )
              return null;              
            default:
              results = activity.results as PollResult[];
              return (
                <CommonVotingActivity
                  key={activity.id}
                  activityId={activity.id}
                  tags={tags}
                  markdownQuestion={activity.question}
                  options={
                    results?.filter((result) => result.id !== null && result.description !== null) || []
                  }
                  date={activity.startTime}
                  initialMode={mode}
                />
              );
          }
        })}        
        <Link
          href={newActivityPath}
          className="flex justify-center rounded-lg bg-AccentBlue px-4 py-2 text-white shadow transition hover:bg-PrimBlue w-[40vw] lg:w-[20vw] xl:w-[15vw] px-2"
        >
          Agregar actividad
        </Link>
      </>
    );
    
  
}
