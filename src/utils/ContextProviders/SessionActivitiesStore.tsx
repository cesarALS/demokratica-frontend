import { create } from "zustand";

export interface PollResult {
  id?: number; // Puede ser null en el JSON, lo hacemos opcional
  description: string; // Puede ser null en el JSON
  numVotes: number;
}
export interface SessionData{
  sessionId: string;
  userRole: string;
  activities: Activity[];
}

type Activity = {
  id: number;
  question: string;
  startTime: string;
  endTime: string;
  tags: { text: string }[];
  results?: PollResult[]; 
  type: string;
  activityStatus: string; // Agregar el estado de la actividad
  alreadyParticipated: boolean; // Agregar si el usuario ya participó
};

type SessionActivitiesStore = {
  sessionId: string;
  activities: Activity[];
  userRole: string;
  commonVotationSelectedOptions: Record<number, number>;
  setSessionId: (sessionId: string) => void;
  setActivities: (activities: Activity[]) => void;
  setUserRole: (role: string) => void;
  setCommonVotationSelectedOption: (activityId: number, option: number) => void;
};

export const useSessionActivitiesStore = create<SessionActivitiesStore>((set) => ({
  sessionId: "0",
  activities: [],
  userRole: "PARTICIPANTE",
  commonVotationSelectedOptions: {},
  setSessionId: (sessionId: string) => set({ sessionId }),
  setActivities: (activities: Activity[]) => set({ activities }),
  setUserRole: (role: string) => set({ userRole: role }),
  setCommonVotationSelectedOption: (activityId: number, option: number) =>
    set((state) => ({
      commonVotationSelectedOptions: {
        ...state.commonVotationSelectedOptions,
        [activityId]: option,
      },
    })),
}));