"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import CommonVotationActivity from "@/templates/3.templates/0.CommonVotationActivity";
import TidemanActivity from "@/templates/3.templates/1.TidemanActivity";
import { getActivities } from "@/utils/apiUtils/apiActivitiesUtils";
import { SessionData, useSessionActivitiesStore } from "@/utils/ContextProviders/SessionActivitiesStore";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import LoadingScreen from "@/templates/1.molecules/6.LoadingScreen";
import Link from "next/link";
import TextAreaMarkdownTitle from "@/templates/0.atoms/16.TextAreaMarkdownTitle";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import WordCloudActivity from "@/templates/3.templates/3.WordCloudActivity";

export default function ActivitiesLoader() {
  const pathname = usePathname();
  const newActivityPath = pathname + "/nuevaActividad";
  const { setActivities, activities , setUserRole, setSessionId } = useSessionActivitiesStore();
  const { getCookie } = useAuthContext();

  const idSesion = pathname.split("/").pop(); // Obtiene el último segmento de la URL

  // Obtener actividades usando React Query con cache
  const { data, isLoading } = useQuery({
    queryKey: ["activities", idSesion],
    queryFn: async () => {
      const response = await getActivities(getCookie(), idSesion);
      if (response.status === 200) {        
        return response.data;
      }
      throw new Error(response.error || "Error al obtener actividades");
    },
    enabled: !!idSesion && !!getCookie(),
    staleTime: 1000 * 60, // Cache por 1 min
    refetchInterval: 1000 * 30, // Refetch cada 30 segundos
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
        <div className="flex flex-col items-center min-h-[25vh] gap-6 w-full bg-white p-6 rounded-xl border-2 border-black">
          <TextAreaMarkdownTitle 
            title="Haz una publicación"
            placeholder="Ingresa tu publicación" 
            className="w-full"    
            flex="flex flex-col lg:flex-row items-start justify-start lg:gap-x-8 "   
          />
          <SimpleButton
            buttonText="Publicar"
            onClick={() => {}}
            className="flex justify-center bg-PrimCasablanca w-[15vh] hover:bg-SecCasablanca px-1"
          />
        </div>               
        {activities.map((activity) => {
          const tags = activity.tags.map((tag) => tag.text);
          
          let mode = "participation";
          if (activity.activityStatus === "NOT_STARTED") {
            mode = "starting";
          } else if (activity.activityStatus === "FINISHED") {
            mode = "results";
          } else if (activity.activityStatus === "ONGOING") {
            if (activity.alreadyParticipated) {
              mode = "results";
            } else {
              mode = "participation";
            }
          }
    
          switch (activity.type) {
            case "POLL":
              return (
                <CommonVotationActivity
                  key={activity.id}
                  activityId={activity.id}
                  tags={tags}
                  markdownQuestion={activity.question}
                  options={
                    activity.results?.filter((result) => result.id !== null && result.description !== null) || []
                  }
                  date={activity.startTime}
                  initialMode={mode}
                />
              );
            case "WORD_CLOUD":
              return (
                <WordCloudActivity
                  key={activity.id}
                  activityId={activity.id}
                  tags={tags}
                  markdownQuestion={activity.question}
                  date={activity.startTime}
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
            default:
              return (
                <CommonVotationActivity
                  key={activity.id}
                  activityId={activity.id}
                  tags={tags}
                  markdownQuestion={activity.question}
                  options={
                    activity.results?.filter((result) => result.id !== null && result.description !== null) || []
                  }
                  date={activity.startTime}
                  initialMode={mode}
                />
              );
          }
        })}        
        <Link
          href={newActivityPath}
          className="flex justify-center rounded-lg bg-AccentBlue px-4 py-2 text-white shadow transition hover:bg-PrimBlue w-[20vh] px-2"
        >
          Agregar actividad
        </Link>
      </>
    );
    
  
}
