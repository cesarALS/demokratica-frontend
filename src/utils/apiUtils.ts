/* eslint-disable @typescript-eslint/no-explicit-any */

import { DemokraticaUser } from "@/types/auth";

// No sé qué tan importante sea que esto esté acá o en environment variables.
// Otro detalle: eventualemnte, el dominio del back y del front será el mismo
// Y otro detalle: si de pronto el backend está corriendo en local, esta dirección habría que cambiarla por la dirección donde está corriendo el back en local
const backendAddress = "https://demokraticabackend.onrender.com";

const apis = {
  createUser: '/unase',
  login: '/ingrese',
  getUser: '/token-info',
  deleteAccount: '/users',
  changeUsername: '/users'
}

interface ApiReturns {
  status: number,
  error?: string,
}

interface ApiUser {  
  user: DemokraticaUser | null,
  jwtToken?: string
}

interface ApiUserReturns extends ApiReturns {  
  data?: ApiUser
}

interface changeUsernameReturns extends ApiReturns {
  data?: {
    jwtToken: string
  }
}

const userReturn = (resParams: any) => {
  return {
    user: {
      username: resParams.username,
      email: resParams.email,
      plan: 0, //Esto se debe cambiar cuando se actualice la BD        
    },
    jwtToken: resParams.jwtToken || null,      
  }  
}

async function createUser(email: string, username: string, password: string): Promise<ApiUserReturns> {
    
  const url = `${backendAddress}${apis.createUser}`
    
  const body = {
    email: email,
    username: username,
    password: password
  }

  const headers = {
    "Content-Type": "application/json"    
  }

  return generalFetch(url, "POST", userReturn, body, headers);

}

async function login(email: string, password: string): Promise<ApiUserReturns> {
    
  const url = `${backendAddress}${apis.login}`;
  const body = {
    email: email,
    password: password
  }
  const headers = {
    "Content-Type": "application/json"
  }

  return generalFetch(url, "POST", userReturn, body, headers);

}

async function getUser(jwtToken: string){

  const url = `${backendAddress}${apis.getUser}`
  const headers = {
    "Authorization": `Bearer ${jwtToken}`
  }
  
  return generalFetch(url, "GET", userReturn, undefined, headers);

}

async function deleteAccount(email: string, password: string, jwtToken: string) {
  
  const url = `${backendAddress}${apis.deleteAccount}/${email}`
  const headers = {
    "Authorization": `Bearer ${jwtToken}`,
    "Content-Type": "application/json"
  }

  const body = {
    password: password
  }  

  const data = () => {}
  
  return generalFetch(url, "DELETE", data, body, headers);

}

async function changeUsername(email: string, jwtToken: string, newUsername: string): Promise<changeUsernameReturns> {

  const url = `${backendAddress}${apis.changeUsername}/${email}`
  const headers = {
    "Authorization": `Bearer ${jwtToken}`,
    "Content-Type": "application/json"
  }
  
  const body = {
    newUsername: newUsername,
  }

  const data = (res: any) => {
    return {
      jwtToken: res.jwtToken
    }
  }
  
  return generalFetch(url, "PUT", data, body, headers);

}

async function generalFetch<T>(
  url: string, 
  method: string, 
  transformData: (res: any) => T, 
  body?: object, 
  headers?: HeadersInit
): Promise<{ status: number; data?: T; error?: string }> {
  try {
    const res = await fetch(url, {
      method: method,
      body: body ? JSON.stringify(body) : undefined,
      headers: headers ? headers: undefined
    });

    if (!res.ok) {
      return { status: res.status, error: res.statusText };
    }

    const params = await res.json();
    const returnData = transformData(params);

    return { status: res.status, data: returnData };

  } catch (error) {
    return { status: 500, error: error instanceof Error ? error.message : "Error inesperado" };
  }
}

export { createUser, login, getUser, deleteAccount, changeUsername };