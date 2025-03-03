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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


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
      setActivities(sessionData.pollDTOs); // Guardar actividades
    }
  }, [data, sessionData, isLoading, setActivities, setUserRole]);

  if (isLoading)
    return (
      <div className="border-2 border-black rounded-lg h-[15vh]">
        <LoadingScreen
          fixed={false}
          text={"Cargando sesiones"}
          showText={false}
          scale={1.2}
          logo={"Title"}          
        />
      </div>
    );
  if (!activities.length) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <FontAwesomeIcon icon={faBoxOpen} className="text-6xl text-black" />
        <p className="mt-4 text-lg text-black">
          No hay actividades en esta sesión.
        </p>
        <Link
          href={newActivityPath}
          className="mt-4 rounded-lg bg-PrimBlue px-4 py-2 text-white shadow transition hover:bg-AccentBlue"
        >
          Agregar actividad
        </Link>
      </div>
    );
  }

  return (
    <>
      {activities.map((activity) => {
        const tags = activity.tags.map((tag) => tag.text);
        
        let mode = "participation";
        if(activity.activityStatus === "NOT_STARTED"){
          mode = "starting"
        }else if(activity.activityStatus === "FINISHED"){
          mode = "results"
        }else if(activity.activityStatus === "ONGOING"){
          if(activity.alreadyParticipated){
            mode = "results"
          }else{
            mode = "participation"
          }
        }

         
        switch (activity.type) {
          // TODO: Aquí falta el caso de texto
          case "POLL":
            return (
              <CommonVotationActivity
                key={activity.id}
                activityId={activity.id}
                tags={tags}
                markdownQuestion={activity.title}
                options={
                  activity.pollResults?.filter((result) => result.id !== null && result.description !== null) ||
                  []
                }
                date={activity.startTime}
                initialMode = {mode}
              />
            );

          case "TIDEMAN":
            return (
              <TidemanActivity
                date={activity.startTime}
                key={activity.id}
                initialMode={mode}
                tags={tags}
                markdownQuestion={activity.title}
              />
            );

          default:
            return (
              <CommonVotationActivity
                key={activity.id}
                activityId={activity.id}
                tags={tags}
                markdownQuestion={activity.title}
                options={
                  activity.pollResults?.filter((result) => result.id !== null && result.description !== null) ||
                  []
                }
                date={activity.startTime}
                initialMode = {mode}
            />
            );
        }
      })}
    </>
  );
}
