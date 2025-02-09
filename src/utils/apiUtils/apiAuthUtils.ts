/* eslint-disable @typescript-eslint/no-explicit-any */

import { DemokraticaUser } from "@/types/auth"
import { backendAddress, generalFetch, identity } from "./apiUtils"

const authApis = {
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

interface ApiUserReturns extends ApiReturns {  
  data?: {
    user?: DemokraticaUser | null,
    jwtToken?: string
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
    
  const url = `${backendAddress}${authApis.createUser}`
    
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
    
  const url = `${backendAddress}${authApis.login}`;
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

  const url = `${backendAddress}${authApis.getUser}`
  const headers = {
    "Authorization": `Bearer ${jwtToken}`
  }
  
  return generalFetch(url, "GET", userReturn, undefined, headers);

}
  
async function deleteAccount(email: string, password: string, jwtToken: string){
  
  const url = `${backendAddress}${authApis.deleteAccount}/${email}`
  const headers = {
    "Authorization": `Bearer ${jwtToken}`,
    "Content-Type": "application/json"
  }

  const body = {
    password: password
  }
  
  return generalFetch(url, "DELETE", identity, body, headers);

}
  
async function changeUsername(email: string, jwtToken: string, newUsername: string) {
  
  const url = `${backendAddress}${authApis.changeUsername}/${email}`
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

export { createUser, login, getUser, deleteAccount, changeUsername };