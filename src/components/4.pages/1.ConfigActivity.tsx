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
import { createCommonVotation } from "@/utils/apiUtils/apiActivitiesUtils";
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

  const cancelCreation = () => {router.push(demokraticaRoutes.sesion.link + `/${idSesion}`)} 
  const proceedWithCreation = async () => {
    switch (GeneralActivityStore.activityType) {
      case "común":
        const question = GeneralActivityStore.question;
        const startDate = GeneralActivityStore.startTime;
        const endDate = GeneralActivityStore.endTime;
        const tags = GeneralActivityStore.tags;
        const options = CreatePollStore.pollOptions;
        const result = await createCommonVotation(getCookie(), idSesion, question, startDate, endDate, tags, options);    
        if(result.status === 201) {  
          //Borra caché
          queryClient.removeQueries({ queryKey: [queryKeys.activities] });
          queryClient.invalidateQueries({ queryKey: [queryKeys.activities] });
          // Cargar la nueva 
          router.push(`${demokraticaRoutes.sesion.link}/${idSesion}`);
        }      
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
