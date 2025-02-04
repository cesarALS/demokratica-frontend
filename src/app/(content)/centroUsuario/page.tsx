"use client"

import UserCenterNewSessionButton from "@/components/0.atoms/7.UserCenterNewSessionButton";
import UserCenterFetchBox from "@/components/3.templates/4.UserCenterFetchBox";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface Filter {
  options: string[],
  current: string
}

interface Filters {
  [key: string]: Filter
}

interface UserCenterContext {
  sessions: [],
  filters: Filters
}

const defaultUserCenterContext: UserCenterContext = {
  sessions: [],
  filters:{
    longevity: {
      options: ["Old", "New"],
      current: "Old"
    },
    alphabeticOrder: {
      options: ["A-Z", "Z-A"],
      current: "A-Z",      
    },
    numberOfTimes: {
      options: ["5", "10", "15", "20", "20+"],
      current: "10"
    }
  }
}

interface UserCenterContextProps {
  userCenterState: UserCenterContext;
  setUserCenterState: Dispatch<SetStateAction<UserCenterContext>>;
}

const UserCenterContext = createContext<UserCenterContextProps | undefined>(undefined);

export default function CentroUsuario() {
  
  const [userCenterState, setUserCenterState] = useState<UserCenterContext>(structuredClone(defaultUserCenterContext));

  useEffect(() => {    
    Object.entries(userCenterState.filters).forEach(([key, value]) => {      
      console.log(`${key} options:`, value.current);
    });    
  }, [userCenterState.filters]);   
  
  return (    
    <UserCenterContext.Provider value={{userCenterState, setUserCenterState}}> 
      <div className="flex flex-col items-center justify-center w-full pt-4 gap-8">
        {/* Botón de Nueva Sesión*/ }
        <UserCenterNewSessionButton/>
        {/* Caja de Centro de Usuario */}
        <UserCenterFetchBox/>
      </div>
    </UserCenterContext.Provider>
  );
}

export {UserCenterContext};



