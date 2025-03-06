// Siempre que se necesite la información de una sesión en concreto, se usa este hook

import { useQuery } from "@tanstack/react-query";
import { getIndividualSession } from "./apiUtils/apiSessionsUtils";
import { queryKeys } from "./reactQueryUtils";
import { useAuthContext } from "./ContextProviders/AuthProvider";

const useSessionData = (sessionId: string | null) => {    
  
    // if(!sessionId) return {sessionData: null, isPending: false}
  
    const { getCookie } = useAuthContext();
    
    const { data: sessionData, isPending } = useQuery({
      queryKey: [queryKeys.individualSession, sessionId],
      queryFn: () => getIndividualSession(getCookie() as string, parseInt(sessionId!)), 
      enabled: !!sessionId, 
    });
  
    return { sessionData, isPending };
  };
  
  export default useSessionData;
  