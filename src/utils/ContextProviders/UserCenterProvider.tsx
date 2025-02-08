"use client"

import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { getSessions } from "../apiUtils/apiSessionsUtils";
import { useAuthContext } from "./AuthProvider";

interface Filters {
    [key: string]: {options: string[], current: string}
}

export enum SessionHostTypes {
  anfrition = 1,
  invitado = 2,
}

interface UserCenterState {
    sessions: object[],
    filters: Filters,
    isLoading: boolean,
    hostType: SessionHostTypes
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
    },
    isLoading: true,
    hostType: 1,
}

type UserCenterAction =
  | { type: "filter"; payload: { property: string; value: string } }
  | { type: "getSessions"; payload: object[] }
  | { type: "loaded"; payload: undefined }
  | { type: "setHostType"; payload: SessionHostTypes};

interface UserCenterContextProps {
    state: UserCenterState;
    dispatch: Dispatch<UserCenterAction>; // Cambié el tipo aquí
}

const UserCenterContext = createContext<UserCenterContextProps | undefined>(undefined);

// Hook que deben importar los componentes
export const useUserCenterContext = () => {
    const context = useContext(UserCenterContext);
    if (!context) throw new Error("useUserCenterContext debe usarse dentro de un UserCenterProvider");
    return context;
}

export const UserCenterContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(userCenterReducer, structuredClone(defaultUserCenterState));
    const { getCookie } = useAuthContext();

    useEffect(()=>{
      const fetchSessions = async () => {
        const sessions = await getSessions(getCookie());
        dispatch({type: "getSessions", payload: sessions.data as []});
        dispatch({type: "loaded", payload: undefined})
      };

      fetchSessions();      
      
    }, [getCookie]);

    useEffect(() => {    
      console.log(state)
    }, [state]);   
    
    function userCenterReducer(
      state: UserCenterState, 
      action: {
        type: string;
        payload: { property: string; value: string } | object[] | undefined | SessionHostTypes;
      }
    ) {
      switch (action.type) {
        case "filter":
          if (typeof action.payload === "object" && "property" in action.payload) {
            return {
              ...state,
              filters: {
                ...state.filters,
                [action.payload.property]: {
                  ...state.filters[action.payload.property],
                  current: action.payload.value
                }
              }
            };
          }
          return state; 
    
        case "getSessions":
          if (Array.isArray(action.payload)) {
            return {
              ...state,
              sessions: action.payload
            };
          }
          return state;
    
        case "loaded":
          return {
              ...state,
              isLoading: false
          };      
        
        case "setHostType":
          return {
            ...state,
            hostType: action.payload as SessionHostTypes,
          };
              
        default:
          return state;
      }
    }   
    
    return (
        <UserCenterContext.Provider value={{state, dispatch}}>
            {children}
        </UserCenterContext.Provider>
    );
}