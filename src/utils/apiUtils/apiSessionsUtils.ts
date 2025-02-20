/* eslint-disable @typescript-eslint/no-explicit-any */

import { SessionToSend } from "@/types/sessions";
import { backendAddress, generalFetch, identity } from "./apiUtils"

const sessionApis = {
    getSessions: "/sessions",
    createSession: "/sessions",
}

async function getSessions(jwtToken: string | undefined) {
  if (!jwtToken) return { status: 500, data: null, error: "No autenticado" };

  const url = `${backendAddress}${sessionApis.getSessions}`;
  const headers = { "Authorization": `Bearer ${jwtToken}` };

  const response = await generalFetch(url, "GET", identity, undefined, headers);
  
  return { ...response, data: response.data ?? [] }; // Siempre devuelve `[]` en vez de `undefined`
}


async function createSession(jwtToken: string | undefined, session: SessionToSend) {
  
  if (!jwtToken) return { status: 500, data: null, error: "No autenticado" };

  const url = `${backendAddress}${sessionApis.getSessions}`;
  const headers = { 
    "Authorization": `Bearer ${jwtToken}`,
    "Content-Type": "application/json"  
  };

  const resParams = (resParams: any) => {
    return {id: resParams.id as number}
  }

  return await generalFetch(url, "POST", resParams, session, headers);
}

export { getSessions, createSession };