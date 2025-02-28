import { create } from "zustand";

export interface PollResult {
  id?: number; // Puede ser null en el JSON, lo hacemos opcional
  description: string; // Puede ser null en el JSON
  numVotes: number;
}

type Activity = {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  tags: { text: string }[];
  pollResults?: PollResult[]; // Cambiado de pollOptions a pollResults
  type: string;
  activityStatus: string; // Agregar el estado de la actividad
  alreadyParticipated: boolean; // Agregar si el usuario ya participó
};

type SessionActivitiesStore = {
  activities: Activity[];
  userRole: string;
  setActivities: (activities: Activity[]) => void;
  setUserRole: (role: string) => void;
};

export const useSessionActivitiesStore = create<SessionActivitiesStore>((set) => ({
  activities: [],
  userRole: "PARTICIPANTE",
  setActivities: (activities) => set({ activities }),
  setUserRole: (role) => set({ userRole: role }),
}));