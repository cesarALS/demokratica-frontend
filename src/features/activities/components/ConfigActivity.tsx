"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import ContentCard from "@/components/display-info/ContentCard";
import GridTwoColsRow from "@/components/layout/GridTwoColsRow";
import TwoButtonFormDecision from "@/components/buttons/TwoButtonFormDecision";

import LeftSettingsNewActivity from "./LeftSettingsNewActivity";
import ConfigActivityType from "./ConfigActivityType";

import { useCreatePollStore, useGeneralCreateActivityStore } from "@/features/activities/CreateActivityStore";
import { useAuthContext } from "@/features/auth/AuthProvider";

import demokraticaRoutes from "@/utils/routes";
import { createCommonVoting, createWordCloud } from "@/features/activities/apiCall";
import { queryKeys } from "@/utils/queries/reactQuery";

import { useQueryClient } from "@tanstack/react-query";

export default function ConfigActivity() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const path = usePathname();
  const idSesion = parseInt(path.split("/")[2], 10); // Extrae el ID de la URL y lo convierte a número
  const GeneralActivityStore = useGeneralCreateActivityStore();
  const CreatePollStore = useCreatePollStore();
  const { getCookie } = useAuthContext();  

  const handleRedirect = () => {
    //Borra caché
    queryClient.removeQueries({ queryKey: [queryKeys.activities] });
    queryClient.invalidateQueries({ queryKey: [queryKeys.activities] });
    // Cargar la nueva 
    router.push(`${demokraticaRoutes.sesion.link}/${idSesion}`);
  }

  const cancelCreation = () => {router.push(demokraticaRoutes.sesion.link + `/${idSesion}`)} 
  const proceedWithCreation = async () => {
    const question = GeneralActivityStore.question;
    const startDate = GeneralActivityStore.startTime;
    const endDate = GeneralActivityStore.endTime;
    const tags = GeneralActivityStore.tags;
    console.log(GeneralActivityStore.activityType);
    switch (GeneralActivityStore.activityType) {
      case "votación común":        
        const options = CreatePollStore.pollOptions;
        const resultCV = await createCommonVoting(getCookie(), idSesion, question, startDate, endDate, tags, options);    
        if(resultCV.status === 201) {  
          handleRedirect();       
        }
        break;
      case "wordcloud":
        const resultWC = await createWordCloud(getCookie(), idSesion, question, startDate, endDate, tags);    
        GeneralActivityStore.activityType = "votación común";
        if(resultWC.status === 201) {  
          handleRedirect();       
        }
        break;
    }
  }

  return (
    <ContentCard>
      <div className="flex items-center text-2xl">Agregar Actividad</div>
      {/* Grid para acomodar todo en responsive */}
      <GridTwoColsRow>
        {/* Configuraciones izquierda */}
        <LeftSettingsNewActivity />
        {/* Configuraciones derecha */}
        {/* Especificas al tipo de actividad */}
        <ConfigActivityType />
      </GridTwoColsRow>
      <TwoButtonFormDecision firstButtonFunction={cancelCreation} secondButtonFunction={proceedWithCreation}/>
    </ContentCard>
  );
}
