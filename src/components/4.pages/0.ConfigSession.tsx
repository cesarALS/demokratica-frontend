"use client";

import EditableTitle from "@/templates/0.atoms/15.EditableTitle";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ParticipantsBox from "@/components/3.templates/2.ParticipantsBox";
import LeftSettingsNewSession from "@/components/3.templates/3.LeftSettingsNewSession";
import FormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";
import GridTwoColsRow from "@/templates/2.organisms/3.GridTwoColsRow";

import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import demokraticaRoutes from "@/utils/routeUtils";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { queryKeys } from "@/utils/reactQueryUtils";
import { useQueryClient } from "@tanstack/react-query";

// TODO: Esta pagina sirve para las configuraciones de sesión en general, no solo los de una nueva sesión, la idea es que tome la info dependiendo de en donde la llamen y además entregue la info también dependiendo de donde la llamen.

// Si la llaman para crear una nueva sesion, debería mostrar todo en ceros y luego entregar sus resultados a la pagina que la llamo para que cree la sesión.
// Si la llaman para editar una sesión, debería mostrar la info de la sesión y luego entregar sus resultados a la pagina que la llamo para que edite la sesión.

export default function ConfigSession() {  
  
  const SessionStore = useSessionStore();
  const queryClient = useQueryClient();
  const MessageContext = useMessageContext();
  const { getCookie } = useAuthContext();

  const handleTitleChange = (title: string) => SessionStore.setField("title", title);

  useEffect(() => {
    const {title, description, startDate, endDate, invitations, tags, filters, currentPage} = SessionStore;
    const logs = {title, description, startDate, endDate, invitations, tags, filters, currentPage };
    console.log(logs);

  }, [SessionStore])

  const router = useRouter();    

  const cancelCreation = () => {router.push(demokraticaRoutes.centroUsuario.link)}
  const proceedWithCreation = async () => {
    const result = await SessionStore.sendSessionToCreate(getCookie);        
    let news = 2;
    
    if (result.status === 201) news = 1;
    else if (result.status !== null) news = 3; // La solicitud está mal          

    MessageContext.setMessage({
      message: result.mssg,
      news: news,
      time: 3000
    })

    // TODO: La api de creación de sesión debe devolver el id de la sesión creada
    if(result.status === 201) {
      // Borrar caché            
      queryClient.removeQueries({ queryKey: [queryKeys.sessions] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.sessions] });
      // Cargar el muro de sesiones
      router.push(`${demokraticaRoutes.sesion.link}/${result.id}`);
    }

  }
      
  return (
    <>
      {/* Ingresar titulo */}
      <EditableTitle 
        title={""} 
        onChange={handleTitleChange} 
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
          secondButtonText="Crear"
          secondButtonFunction={proceedWithCreation}
        />
      </ContentCard>
    </>
  );
}
