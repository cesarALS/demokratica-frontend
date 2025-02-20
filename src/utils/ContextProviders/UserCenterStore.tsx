"use client";

import { create } from "zustand";
import { Session } from "../../types/sessions";
import _ from "lodash";

interface Filters {
  [key: string]: { options: string[]; current: string };
}

interface UserCenterState {
  sessions: Session[];
  currentSessions: Session[];
  filters: Filters;
  equivalences: { [key: string]: string };
  anfitrion: boolean;
  setSessions: (sessions: Session[]) => void;
  setHostType: (anfitrion: boolean) => void;
  setFilter: (property: string, value: string) => void;
  applyFilters: () => void;
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
    numberOfTimes: {
      options: ["15+", "3", "6", "9", "12", "15"],
      current: "15+"
    }      
  },
  equivalences: {
    "Título": "title",
    "Descripción": "description",
    "Fecha": "creationDate",
    "#Participantes": "noParticipants"
  },
  anfitrion: true,
}

// Usamos Zustand para crear el estado complejo y evitamos usar un contexto
export const useUserCenterStore = create<UserCenterState>((set, get) => ({
  ...structuredClone(defaultUserCenterState),
  
  setSessions: (sessions) => set((state) => ({ ...state, sessions })),
  applyFilters: () => {
    const { sessions, anfitrion, filters, equivalences } = get();
    let filteredSessions = _.filter(sessions, { isHost: anfitrion });
    filteredSessions = _.orderBy(
      filteredSessions,
      equivalences[filters.variable.current],
      filters.alphabeticOrder.current === "ASC" ? ["asc"] : ["desc"]
    );
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
}));