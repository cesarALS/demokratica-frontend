import { create } from "zustand";

type Activity = {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  tags: { text: string }[];
  pollOptions?: { id: number; description: string; voters: string[] }[];
  type: string;
};

type SessionActivitiesStore = {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
};

export const useSessionActivitiesStore = create<SessionActivitiesStore>((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities }),
}));