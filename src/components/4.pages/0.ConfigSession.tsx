"use client";

import EditableTitle from "@/templates/0.atoms/15.EditableTitle";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ParticipantsBox from "@/components/3.templates/2.ParticipantsBox";
import LeftSettingsNewSession from "@/components/3.templates/3.LeftSettingsNewSession";
import FormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";
import GridTwoColsRow from "@/templates/2.organisms/3.GridTwoColsRow";

import { CreatableSession, useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";
import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import demokraticaRoutes from "@/utils/routeUtils";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { queryKeys } from "@/utils/reactQueryUtils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIndividualSession } from "@/utils/apiUtils/apiSessionsUtils";
import { IndividualSessionGetType } from "@/types/sessions";
import { Noto_Sans_Tamil_Supplement } from "next/font/google";

// TODO: Esta pagina sirve para las configuraciones de sesión en general, no solo los de una nueva sesión, la idea es que tome la info dependiendo de en donde la llamen y además entregue la info también dependiendo de donde la llamen.

// Si la llaman para crear una nueva sesion, debería mostrar todo en ceros y luego entregar sus resultados a la pagina que la llamo para que cree la sesión.
// Si la llaman para editar una sesión, debería mostrar la info de la sesión y luego entregar sus resultados a la pagina que la llamo para que edite la sesión.

export default function ConfigSession() {  
  
  const SessionStore = useSessionStore();  
  const queryClient = useQueryClient();
  const MessageContext = useMessageContext();
  const { getCookie } = useAuthContext();

  const pathname = usePathname();

  const { isCreatingSession, isEditingSession, sessionId } = useMemo(() => {
    const creating = pathname.startsWith("/nuevaSesion");
    const editing = pathname.includes("/configSesion");
    const id = editing ? pathname.split("/")[2] : null;
    console.log("Recalculando sessionId:", id);
    return { isCreatingSession: creating, isEditingSession: editing, sessionId: id };
  }, [pathname]);
  

//   const { isCreatingSession, isEditingSession, sessionId } = useMemo(() => {
//   const creating = pathname.startsWith("/nuevaSesion");
//   const editing = pathname.includes("/configSesion");
//   const id = editing ? pathname.split("/")[2] : null;
//   return { isCreatingSession: creating, isEditingSession: editing, sessionId: id };
// }, [pathname]);


  // let isCreatingSession: boolean = false;
  // let isEditingSession: boolean = false;
  // let sessionId: string | null = "";
  
  // useEffect(() => {
  //   isCreatingSession = pathname.startsWith("/nuevaSesion");
  //   isEditingSession = pathname.includes("/configSesion");
  //   sessionId = isEditingSession? pathname.split("/")[2] : null;
  // },)

  // const isCreatingSession = pathname.startsWith("/nuevaSesion");
  // const isEditingSession = pathname.includes("/configSesion");
  // const sessionId = isEditingSession? pathname.split("/")[2] : null;

  // const { data: sessionData } = useQuery({
  //   queryKey: [queryKeys.individualSession, sessionId], 
  //   queryFn: () => getIndividualSession(getCookie() as string, parseInt(sessionId as string)),
  //   enabled: isEditingSession, // Solo se ejecuta en modo edición
  // });

  const { data: sessionData } = useQuery({
    queryKey: [queryKeys.individualSession, sessionId], 
    queryFn: () => {
      if (!sessionId) {
        console.warn("❌ sessionId es null, no se ejecuta la consulta");
        return Promise.resolve(null); // Evita la ejecución de la API
      }
      return getIndividualSession(getCookie() as string, parseInt(sessionId));
    },
    enabled: isEditingSession && !!sessionId, // Solo si realmente hay un sessionId válido
  });
  

  useEffect(() => {
    if (sessionData?.data && typeof sessionData.data === "object" && !Array.isArray(sessionData.data)) {
      const session = sessionData.data as IndividualSessionGetType;
      
      SessionStore.setField("title", session.title);
      SessionStore.setField("description", session.description);
      SessionStore.setField("startDate", session.startTime ? new Date(session.startTime) : undefined);
      SessionStore.setField("endDate", session.endTime ? new Date(session.endTime) : undefined);
      SessionStore.setField("tags", session.tags?.map(tag => tag.text) || []);
      SessionStore.setField("invitations", session.participants?.map(invitation => ({
        ...invitation,
        thicked: false,
      })) || []);
      
    }
  }, [sessionData]);
  
  // useEffect(() => {
  //   return () => {
  //     if (!pathname.startsWith("/nuevaSesion") && !pathname.includes("/configSesion")) {
  //       SessionStore.resetForm();
  //     }
  //   };
  // }, [pathname]);

  useEffect(() => {
    return () => {
      console.log("Saliendo de la vista, reseteando SessionStore...");
      SessionStore.resetForm();
    };
  }, [pathname]);
  
  
  
  useEffect(() => {
    console.log(isCreatingSession, isEditingSession);
  }, []);

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
