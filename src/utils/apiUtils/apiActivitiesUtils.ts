import { pollOption, tag } from "../ContextProviders/CreateActivityStore";
import { backendAddress, generalFetch, identity } from "./apiUtils";

async function getActivities(
  jwtToken: string | undefined,
  sesionID: string | string[] | undefined,
) {
  if (!jwtToken) return { status: 500, data: null, error: "No autenticado" };

  const url = `${backendAddress}/sessions/${sesionID}/activities`;
  const headers = { Authorization: `Bearer ${jwtToken}` };

  const response = await generalFetch(url, "GET", identity, undefined, headers);

  return { ...response, data: response.data ?? [] }; // Siempre devuelve `[]` en vez de `undefined`
}

async function sendCommonVotationVote(
  jwtToken: string | undefined,
  pollID: number,
  optionID: number,
): Promise<{ status: number; data?: object | [] | undefined; error?: string }> {
  if (!jwtToken)
    return { status: 500, data: undefined, error: "No autenticado" };

  const url = `${backendAddress}/polls/${String(pollID)}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`,
  };

  try {
    const res = await generalFetch(
      url,
      "POST",
      identity,
      { optionId: String(optionID) },
      headers,
    );
    return res;
  } catch (error) {
    console.error("Error in sendCommonVotationVote:", error);
    return { status: 500, data: undefined };
  }
}

async function sendWordCloudWord(
  jwtToken: string | undefined,
  activityId: number,
  word:string,  
): Promise<{ status: number; data?: object | [] | undefined; error?: string }> {
  if (!jwtToken)
    return { status: 500, data: undefined, error: "No autenticado" };

  const url = `${backendAddress}/wordclouds/${activityId}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`,
  };

  try {
    const res = await generalFetch(
      url,
      "POST",
      identity,
      { word: word },
      headers,
    );
    return res;
  } catch (error) {
    console.error("Error in sendWordCloudWord:", error);
    return { status: 500, data: undefined };
  }
}

async function createCommonVotation(
  jwtToken: string | undefined,
  sessionId: number,
  question: string,
  startTime: Date,
  endTime: Date,
  tags: tag[],
  pollOptions: pollOption[],
): Promise<{ status: number; data?: object | [] | undefined; error?: string }> {
  if (!jwtToken)
    return { status: 500, data: undefined, error: "No autenticado" };

  const url = `${backendAddress}/sessions/${sessionId}/polls`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`,
  };
  const body = {
    question,
    startTime,
    endTime,
    tags,
    pollOptions,
  };

  try {
    const res = await generalFetch(url, "POST", identity, body, headers);
    return res;
  } catch (error) {
    console.error("Error in sendCommonVotationVote:", error);
    return { status: 500, data: undefined };
  }
}

async function createWordCloud(
  jwtToken: string | undefined,
  sessionId: number,
  question: string,
  startTime: Date,
  endTime: Date,
  tags: tag[],  
): Promise<{ status: number; data?: object | [] | undefined; error?: string }> {
  if (!jwtToken)
    return { status: 500, data: undefined, error: "No autenticado" };

  const url = `${backendAddress}/sessions/${sessionId}/wordclouds`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`,
  };
  const body = {
    question,
    startTime,
    endTime,
    tags,    
  };

  try {
    const res = await generalFetch(url, "POST", identity, body, headers);
    return res;
  } catch (error) {
    console.error("Error in createWordCloud:", error);
    return { status: 500, data: undefined };
  }
}

async function deleteActivity(
  jwtToken: string | undefined,
  activityId: number,
  activityType: string,
): Promise<{ status: number; data?: object | [] | undefined; error?: string }> {
  if (!jwtToken)
    return { status: 500, data: undefined, error: "No autenticado" };
  let url = `${backendAddress}`;
  switch (activityType){
    case "POLL":
      url += `/polls/${activityId}`;
      break;
    case "WORD":
      url += `/wordclouds/${activityId}`;
      break;
    default:
      url += `/polls/${activityId}`;
      break;
  }

  const headers = { Authorization: `Bearer ${jwtToken}` };

  try {
    const res = await generalFetch(url, "DELETE", identity, undefined, headers);    
    return res;
  } catch (error) {
    console.error("Error in deleteActivity:", error);
    return { status: 500, data: undefined };
  }
}

async function sendTextPosting(
  sessionId: string, 
  markdown: string, 
  tags: [], 
  jwtToken: string
){
  if (!jwtToken) return { status: 500, data: null, error: "No autenticado" };
  const url = `${backendAddress}/sessions/${sessionId}/texts`;

  const headers = { 
    Authorization: `Bearer ${jwtToken}`,
    "Content-Type": "application/json",
  };

  const body = {
    content: markdown, 
    tags: tags.map(tag => {
      {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        text: tag
      }
    })
  };

  return await generalFetch(url, "POST", identity, body, headers);

}

export { 
  getActivities, 
  sendCommonVotationVote, 
  createCommonVotation, 
  deleteActivity, 
  createWordCloud, 
  sendWordCloudWord,
  sendTextPosting
};
