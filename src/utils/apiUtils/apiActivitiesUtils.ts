
import { pollOption, tag } from "../ContextProviders/CreateActivityStore";
import { backendAddress, generalFetch, identity } from "./apiUtils";

const activitiesApis = {
  getActivities: "/sessions/",
};


async function getActivities(
  jwtToken: string | undefined,
  sesionID: string | string[] | undefined,
) {
  if (!jwtToken) return { status: 500, data: null, error: "No autenticado" };

  const url = `${backendAddress}${activitiesApis.getActivities + sesionID}`;
  const headers = { Authorization: `Bearer ${jwtToken}` };

  const response = await generalFetch(url, "GET", identity, undefined, headers);

  return { ...response, data: response.data ?? [] }; // Siempre devuelve `[]` en vez de `undefined`
}

async function sendCommonVotationVote(
  jwtToken: string | undefined,
  pollID: number,
  optionID: number,
): Promise<{ status: number; data?: object | [] | undefined; error?: string }> {
  if (!jwtToken) return { status: 500, data: undefined, error: "No autenticado" };
  
  const url = `${backendAddress}/polls/${String(pollID)}`;
  const headers = {"Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` };  

  try {
    const res = await generalFetch(url, "POST", identity, { "optionId": String(optionID) }, headers);
    return res;
  } catch (error) {
    console.error("Error in sendCommonVotationVote:", error);
    return { status: 500, data: undefined};
  }
}

async function createCommonVotation(
  jwtToken: string | undefined,
  sessionId: number,
  title: string,
  description:string,
  startTime:Date,
  endTime:Date,
  tags: tag[],
  pollOptions: pollOption[],  
): Promise<{ status: number; data?: object | [] | undefined; error?: string }> {
  if (!jwtToken) return { status: 500, data: undefined, error: "No autenticado" };
  
  const url = `${backendAddress}/sessions/${sessionId}/polls`;
  const headers = {"Content-Type": "application/json", Authorization: `Bearer ${jwtToken}` }; 
  const body = {
    title,
    description,
    startTime,
    endTime,
    tags,
    pollOptions
  }

  try {
    const res = await generalFetch(url, "POST", identity, body, headers);
    return res;
  } catch (error) {
    console.error("Error in sendCommonVotationVote:", error);
    return { status: 500, data: undefined};
  }
}

export { getActivities, sendCommonVotationVote, createCommonVotation };
