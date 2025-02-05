
import { DemokraticaUser } from "@/types/auth";

// No sé qué tan importante sea que esto esté acá o en environment variables.
// Otro detalle: eventualemnte, el dominio del back y del front será el mismo
// Y otro detalle: si de pronto el backend está corriendo en local, esta dirección habría que cambiarla por la dirección donde está corriendo el back en local
const backendAddress = "https://demokraticabackend.onrender.com";

const apis = {
  createUser: '/unase',
  login: '/ingrese',
  getUser: '/token-info',
  deleteAccount: '/users'
}

interface ApiReturns {
  status: number,
  error?: string,
}

interface ApiUserReturns extends ApiReturns {
  user: DemokraticaUser | null,
  jwtToken?: string
}

async function deleteAccount(email: string, password: string, jwtToken: string) {
  
  const url = `${backendAddress}${apis.deleteAccount}/{email}`
  const headers = {
    "Authorization": `Bearer ${jwtToken}`,
    "Content-Type": "application/json"
  }

  const body = {
    password: password
  }

  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: headers,
      body: JSON.stringify(body)
    });

    return {
      status: res.status,
      error: res.statusText
    }
    
  } catch (error) {
    if (error instanceof Error){        
      return {status: 500, error: error.message, user: null};
    } else {
      console.error(error);
      return {status: 500, error: "Raro error en el servidor", user: null};        
    }
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

  return fetchAuth(url, "POST", body, headers);

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

  return fetchAuth(url, "POST", body, headers);

}

async function getUser(jwtToken: string){

  const url = `${backendAddress}${apis.getUser}`
  const headers = {
    "Authorization": `Bearer ${jwtToken}`
  }

  return fetchAuth(url, "GET", undefined, headers);

}

async function fetchAuth(url: string, method: string, body?: object, headers?: object){    
  
  try {
    const res = await fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: headers ? (headers as HeadersInit) : undefined
    });
        
    if (!res.ok){
      return {
        status: res.status,
        error: res.statusText,
        user: null,        
      }
    } 
    
    const params = await res.json();

    return {
      status: res.status,
      user: {
        username: params.username,
        email: params.email,
        plan: 0, //Esto se debe cambiar cuando se actualice la BD        
      },
      jwtToken: params.jwtToken || null,
    };

  } catch (error) {
    if (error instanceof Error){        
      return {status: 500, error: error.message, user: null};
    } else {
      console.error(error);
      return {status: 500, error: "Raro error en el servidor", user: null};        
    }
  }    
};

export { createUser, login, getUser, deleteAccount };