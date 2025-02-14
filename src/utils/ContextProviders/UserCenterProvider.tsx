"use client"

import { createContext, Dispatch, useContext, useEffect, useReducer, useCallback } from "react";
import { getSessions } from "../apiUtils/apiSessionsUtils";
import { useAuthContext } from "./AuthProvider";
import { Session } from "../../types/sessions";
import _ from "lodash";

interface Filters {
    [key: string]: {options: string[], current: string}
}

interface UserCenterState {
    sessions: Session[],
    currentSessions: Session[],
    filters: Filters,    
    varFilters: string[],
    currentVarFilter: string,
    equivalences: {[key: string]: string}
    anfitrion: boolean,
    isLoading: boolean,    
}

const defaultUserCenterState: UserCenterState = {
    sessions: [],
    currentSessions: [],
    filters:{
      alphabeticOrder: {
        options: ["ASC", "DES"],
        current: "ASC",      
      },
      numberOfTimes: {
        options: ["15+", "3", "6", "9", "12", "15"],
        current: "15+"
      }      
    },
    currentVarFilter: "Título",
    varFilters: ["Título", "Descripción", "Fecha", "#Participantes"],
    equivalences: {
      "Título": "title",
      "Descripción": "description",
      "Fecha": "creationDate",
      "#Participantes": "noParticipants"
    },
    anfitrion: true,
    isLoading: true,
}

type UserCenterAction =
  | { type: "filter"; payload: { property: string; value: string } }
  | { type: "getSessions"; payload: Session[] }
  | { type: "loaded"; payload: undefined }
  | { type: "setHostType"; payload: boolean}
  | { type: "filterSessions"; payload: Session[]}
  | { type: "setFilterVar"; payload: string};

interface UserCenterContextProps {
    state: UserCenterState;
    dispatch: Dispatch<UserCenterAction>;
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
    
    const filterSessions = useCallback(() => {
      let filteredSessions = _.filter(state.sessions, { isHost: state.anfitrion });
      filteredSessions = _.orderBy(
        filteredSessions,
        state.equivalences[state.currentVarFilter],
        state.filters.alphabeticOrder.current === "ASC" ? ["asc"] : ["desc"]
      );
      return filteredSessions;
    }, [state.sessions, state.anfitrion, state.currentVarFilter, state.filters.alphabeticOrder, state.equivalences]);
    
    useEffect(()=>{
      const fetchSessions = async () => {
        const sessions = await getSessions(getCookie());
        dispatch({type: "getSessions", payload: sessions.data as []});
        dispatch({type: "loaded", payload: undefined})
        dispatch({type: "filterSessions", payload: filterSessions()})
      };

      fetchSessions();      
      
    }, [getCookie, filterSessions]);

    useEffect(() => {    
      console.log(state)
    }, [state]);   
    
    useEffect(() => {
      console.log("Hola")
      dispatch({type: "filterSessions", payload: filterSessions()});
    }, [state.filters, state.anfitrion, state.sessions, state.currentVarFilter, filterSessions]);
    
    function userCenterReducer(
      state: UserCenterState, 
      action: {
        type: string;
        payload: { property: string; value: string } | Session[] | undefined | boolean | string;
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
            anfitrion: action.payload as boolean,
          };

        case "filterSessions":
          return {
            ...state,
            currentSessions: action.payload as Session[]
          };

        case "setFilterVar":
          return {
            ...state,
            currentVarFilter: action.payload as string
          }
              
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