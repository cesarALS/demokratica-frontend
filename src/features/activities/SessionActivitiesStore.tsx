import { create } from "zustand";

interface BaseActivity {
  id: number;
  question: string;
  creationTime: Date;
  startTime: string;
  endTime: string;
  tags: { text: string }[];
  type: string;
  status: string;
  alreadyParticipated: boolean;
}

interface CommonVotingActivity extends BaseActivity {
  results?: PollResult[];
}

interface WordCloudActivity extends BaseActivity {
  results?: string[];
}

interface PostingActivity extends BaseActivity {
  results?: string[]; //Un pequeño truco
  content: string;
}

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

type Activity = CommonVotingActivity | WordCloudActivity | PostingActivity;

type SessionActivitiesStore = {
  sessionId: string;
  activities: Activity[];
  userRole: string;
  commonVotingSelectedOptions: Record<number, number>;
  wordCloudWord: string;
  setSessionId: (sessionId: string) => void;
  setActivities: (activities: Activity[]) => void;
  setUserRole: (role: string) => void;
  setCommonVotingSelectedOption: (activityId: number, option: number) => void;
  setWordCloudWord: (word: string) => void;
};

export const useSessionActivitiesStore = create<SessionActivitiesStore>((set) => ({
  sessionId: "0",
  activities: [],
  userRole: "PARTICIPANTE",
  commonVotingSelectedOptions: {},
  wordCloudWord: "",
  
  setSessionId: (sessionId: string) => set({ sessionId }),
  setActivities: (activities: Activity[]) => set({ activities }),
  setUserRole: (role: string) => set({ userRole: role }),
  setCommonVotingSelectedOption: (activityId: number, option: number) =>
    set((state) => ({
      commonVotingSelectedOptions: {
        ...state.commonVotingSelectedOptions,
        [activityId]: option,
      },
    })),
  setWordCloudWord: (word: string) => set({ wordCloudWord: word }),
}));