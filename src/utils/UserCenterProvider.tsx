"use client"

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface Filter {
    options: string[],
    current: string
}

interface Filters {
    [key: string]: Filter
}

interface UserCenterState {
    sessions: [],
    filters: Filters
}

const defaultUserCenterState: UserCenterState = {
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
        current: "5"
      }
    }
}

interface UserCenterContextProps {
    userCenterState: UserCenterState;
    setUserCenterState: Dispatch<SetStateAction<UserCenterState>>;
}

const UserCenterContext = createContext<UserCenterContextProps | undefined>(undefined);

// Hook que deben importar los componentes
export const useUserCenterContext = () => {
    const context = useContext(UserCenterContext);
    if (!context) throw new Error("useUserCenterContext debe usarse dentro de un UserCenterProvider");
    return context;
}

export const UserCenterContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [userCenterState, setUserCenterState] = useState<UserCenterState>(structuredClone(defaultUserCenterState));

    useEffect(() => {    
      Object.entries(userCenterState.filters).forEach(([key, value]) => {      
        console.log(`${key} options:`, value.current);
      });    
    }, [userCenterState.filters]);   
    
    return (
        <UserCenterContext.Provider value={{userCenterState, setUserCenterState}}>
            {children}
        </UserCenterContext.Provider>
    );
}