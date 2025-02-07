import { backendAddress, generalFetch, identity } from "./apiUtils"

const sessionApis = {
    getSessions: "/sessions"
}

async function getSessions(jwtToken: string | undefined) {

    if (!jwtToken) return {status: 500, error: "No autenticado"};
    
    const url = `${backendAddress}${sessionApis.getSessions}`;
    const headers = {
      "Authorization": `Bearer ${jwtToken}`
    };

    return generalFetch(url, "GET", identity, undefined, headers);

};

export { getSessions };