"use client";

import ContentCard from "@/templates/2.organisms/2.ContentCard";
import GridTwoColsRow from "@/templates/2.organisms/3.GridTwoColsRow";
import LeftSettingsNewActivity from "@/components/3.templates/5.LeftSettingsNewActivity";
import TypeActivityConfig from "../2.organisms/11.TypeActivityConfig";
import TwoButtonFormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";
import { useCreatePollStore, useGeneralCreateActivityStore } from "@/utils/ContextProviders/CreateActivityStore";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useRouter } from "next/navigation";
import demokraticaRoutes from "@/utils/routeUtils";
import { usePathname } from "next/navigation";
import { createCommonVotation, createWordCloud } from "@/utils/apiUtils/apiActivitiesUtils";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/utils/reactQueryUtils";

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
        const resultCV = await createCommonVotation(getCookie(), idSesion, question, startDate, endDate, tags, options);    
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
        <TypeActivityConfig />
      </GridTwoColsRow>
      <TwoButtonFormDecision firstButtonFunction={cancelCreation} secondButtonFunction={proceedWithCreation}/>
    </ContentCard>
  );
}
