// Siempre que se necesite la información de una sesión en concreto, se usa este hook

import { useQuery } from "@tanstack/react-query";
import { getIndividualSession } from "@/features/session-pannel/apiCall";
import { queryKeys } from "@/utils/queries/reactQuery";
import { useAuthContext } from "@/features/auth/AuthProvider";
import { IndividualSessionGetType } from "@/features/session-pannel/sessions";

const useSessionData = (sessionId: string | null) => {    
  
    const { getCookie } = useAuthContext();
    
    const { data: sessionData, isPending } = useQuery({
      queryKey: [queryKeys.individualSession, sessionId],
      queryFn: () => getIndividualSession(getCookie() as string, parseInt(sessionId!)), 
      enabled: !!sessionId, 
    });
  
    /*
    TODO: La función que llama a la api debería determinar el tipo ella misma, no deberíamos
    hacerlo desde acá
    */
    return { 
      sessionData: sessionData?.data as unknown as IndividualSessionGetType, 
      status: sessionData?.status,
      isPending 
    };
  };
  
  export default useSessionData;
  