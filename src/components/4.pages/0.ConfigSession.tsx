"use client";

import EditableTitle from "@/templates/0.atoms/15.EditableTitle";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ParticipantsBox from "@/components/3.templates/2.ParticipantsBox";
import LeftSettingsNewSession from "@/components/3.templates/3.LeftSettingsNewSession";
import FormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";
import GridTwoColsRow from "@/templates/2.organisms/3.GridTwoColsRow";

import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import demokraticaRoutes from "@/utils/routeUtils";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { queryKeys } from "@/utils/reactQueryUtils";
import { useQueryClient } from "@tanstack/react-query";
import useSessionData from "@/utils/SessionData";
import LoadingScreen from "@/templates/1.molecules/6.LoadingScreen";

import { News } from "@/types/message.d";

interface ConfigSessionProps {
  sessionId: string | null  
}

export default function ConfigSession({
  sessionId
}: ConfigSessionProps) {  
  
  const SessionStore = useSessionStore();  
  const queryClient = useQueryClient();
  const MessageContext = useMessageContext();
  const { getCookie } = useAuthContext();
  const router = useRouter();   
  const [isLoadingView, setIsLoadingView] = useState(true);
    
  // Si se está editando una sesión existente, entonces se fetchea en la base de datos su información      
  const { sessionData } = useSessionData(sessionId);
  
  useEffect(() => {
    if (!sessionData) {
      SessionStore.resetForm();
      SessionStore.setField("creatingSession", true);
    }    
    else if (sessionData) {
            
      const session = sessionData;
  
      SessionStore.setField("creatingSession", false)
      SessionStore.setField("title", session.title);
      SessionStore.setField("description", session.description);
      SessionStore.setField("startDate", session.startTime ? new Date(session.startTime) : undefined);
      SessionStore.setField("endDate", session.endTime ? new Date(session.endTime) : undefined);
      SessionStore.setField("tags", session.tags?.map(tag => tag.text) || []);
      SessionStore.setField(
        "invitations",
        session.participants?.map(invitation => ({
          ...invitation,
          thicked: false,
        })) || []
      );
    };

    setIsLoadingView(false);
  }, [sessionId, sessionData]); // Dependemos de sessionId y sessionData para actualizar correctamente
  

  useEffect(() => {
    const {creatingSession,title, description, startDate, endDate, invitations, tags, filters, currentPage} = SessionStore;
    const logs = {creatingSession, title, description, startDate, endDate, invitations, tags, filters, currentPage };
    console.log(logs);

  }, [SessionStore])  

  const cancelCreation = () => {router.push(demokraticaRoutes.centroUsuario.link)}
  
  const proceedWithCreation = async () => {
    const result = await SessionStore.sendSessionToCreate(getCookie);        
    let news: News = 'bad';
    
    if (result.status === 201) news = 'good';
    else if (result.status !== null) news = 'bad'; // La solicitud está mal          

    MessageContext.setMessage({
      message: result.mssg,
      news: news,
      time: 3000
    })
    
    if(result.status === 201) {
      // Borrar caché del menú de usuario            
      queryClient.removeQueries({ queryKey: [queryKeys.sessions] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.sessions] });

      // Resetear el estado de la SessionStore
      SessionStore.resetForm();
      
      router.push(`${demokraticaRoutes.sesion.link}/${result.id}`);
    }

  };

  const proceedWithModification = async() => {    
    MessageContext.setMessage({
      message: "No fue posible modificar la sesión",
      news: 'bad',
      time: 3000,
    })
  }

  if(isLoadingView) return <LoadingScreen/>
  else return (
    <>      
      {/* Ingresar titulo */}
      <EditableTitle 
        title={SessionStore.title as string} 
        onChange={(title: string) => SessionStore.setField("title", title)} 
        placeholder="Ingresa tu título"
        className="sm:max-w-[50%] border-2 border-black justify-between gap-x-4 py-2 bg-white"
      />
      {/* Configuraciones */}
      <ContentCard>
        {/* Grid para acomodar todo en responsive */}
        <GridTwoColsRow>
          {/* Configuraciones izquierda */}
          <LeftSettingsNewSession />
          {/* Configuraciones derecha */}
          {/* Participantes */}
          <ParticipantsBox />
        </GridTwoColsRow>
        {/* FormDecisionNewSession */}
        <FormDecision 
          firstButtonFunction={cancelCreation}
          firstButtonClassname="bg-red-300 hover:bg-red-400"
          secondButtonText={SessionStore.creatingSession? "Crear": "Modificar"}
          secondButtonClassname="hover:bg-PrimCasablanca"
          secondButtonFunction={SessionStore.creatingSession? proceedWithCreation : proceedWithModification}
        />
      </ContentCard>
    </>
  );
}

