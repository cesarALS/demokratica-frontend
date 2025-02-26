"use client";

import { create } from "zustand";
import { Session } from "../../types/sessions";
import _ from "lodash";
import { Filters } from "@/types/filters";

interface UserCenterState {
  sessions: Session[];
  currentSessions: Session[];
  filters: Filters;
  equivalences: { [key: string]: string };  
  currentPage: number;
  currentTextSearch: string;
  anfitrion: boolean;
  setSessions: (sessions: Session[]) => void;
  setHostType: (anfitrion: boolean) => void;
  setFilter: (property: string, value: string) => void;
  applyFilters: () => void;
  setCurrentPage: (page: number) => void;
  setTextSearch: (search: string) => void;
  resetState: () => void;
}

const defaultUserCenterState = {
  sessions: [],
  currentSessions: [],
  filters:{
    variable: {
      options: ["Título", "Descripción", "Fecha", "#Participantes"],
      current: "Título"
    },
    alphabeticOrder: {
      options: ["ASC", "DES"],
      current: "ASC",      
    },
    paginationSize: {
      options: ["3", "6", "12", "18", "24"],
      current: "3"
    }      
  },
  equivalences: {
    "Título": "title",
    "Descripción": "description",
    "Fecha": "creationDate",
    "#Participantes": "noParticipants"
  },
  currentPage: 1,
  currentTextSearch: "",
  anfitrion: true,
}

// Usamos Zustand para crear el estado complejo y evitamos usar un contexto
export const useUserCenterStore = create<UserCenterState>((set, get) => ({
  ...structuredClone(defaultUserCenterState),
  
  setSessions: (sessions) => set((state) => ({ ...state, sessions })),
  applyFilters: () => {
    const { sessions, anfitrion, filters, equivalences, setCurrentPage, currentTextSearch } = get();
    let filteredSessions = _.filter(sessions, { isHost: anfitrion });
    filteredSessions = _.orderBy(
      filteredSessions,
      equivalences[filters.variable.current],
      filters.alphabeticOrder.current === "ASC" ? ["asc"] : ["desc"]
    );
    
    // Las búsquedas con la barra de búsqueda
    const searchTerm = _.deburr(_.toLower(currentTextSearch));
    filteredSessions = _.filter(filteredSessions, obj => 
      _.some(obj.tags, tag => _.includes(_.deburr(_.toLower(tag.text)), searchTerm)) ||
      _.includes(_.deburr(_.toLower(obj.title)), searchTerm) ||
      _.includes(_.deburr(_.toLower(obj.description)), searchTerm)
    );
    
    setCurrentPage(1);
    set({ currentSessions: filteredSessions });
  },

  setHostType: (anfitrion) => {
    set({ anfitrion });
    get().applyFilters();
  },

  setFilter: (property, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [property]: { ...state.filters[property], current: value },
      },
    }));    
    get().applyFilters();
  },

  setCurrentPage: (page: number) => set({currentPage: page}),
  setTextSearch: (search: string) => {
    set({currentTextSearch: search});
    get().applyFilters();
  },
  resetState: () => set(structuredClone(defaultUserCenterState)),
}));