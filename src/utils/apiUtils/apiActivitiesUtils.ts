import { backendAddress, generalFetch, identity } from "./apiUtils"

const activitiesApis = {
    getActivities: "/sessions/",    
}

async function getSessions(jwtToken: string | undefined, sesionID: string | string[] | undefined) {
  if (!jwtToken) return { status: 500, data: null, error: "No autenticado" };

  const url = `${backendAddress}${activitiesApis.getActivities+sesionID}`;
  const headers = { "Authorization": `Bearer ${jwtToken}` };

  const response = await generalFetch(url, "GET", identity, undefined, headers);
  
  return { ...response, data: response.data ?? [] }; // Siempre devuelve `[]` en vez de `undefined`
}

export { getSessions }