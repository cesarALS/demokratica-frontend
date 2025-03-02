import {create} from 'zustand';

export interface tag{
    text: string;
}

export interface pollOption{
    description: string;
}

export type GeneralCreateActivity = {
    sessionId: number,
    activityType: string,
    description: string,    
    startTime: Date,
    endTime: Date,
    tags: tag[],
    setSessionId: (sessionId: number) => void,   
    setActivityType: (activityType: string) => void, 
    setStartTime: (startTime: Date) => void,
    setDescription: (descripttion: string) => void,     
    setEndTime: (endTime: Date) => void,
    setTags: (tags: tag[]) => void,
}

export type CreatePollActivity ={    
    title: string,
    pollOptions: pollOption[],    
    setTitle: (title: string) => void,
    setPollOptions: (pollOptions: pollOption[]) => void
}

export const useGeneralCreateActivityStore = create<GeneralCreateActivity>((set) => ({
    sessionId: 0,
    activityType: "común",
    description: "",    
    startTime: new Date(),
    endTime: new Date(),
    tags: [],
    setSessionId: (sessionId: number) => set({ sessionId }),
    setActivityType: (activityType: string) => set({ activityType }),
    setDescription: (description: string) => set({ description }),    
    setStartTime: (startTime: Date) => set({ startTime }),
    setEndTime: (endTime: Date) => set({ endTime }),
    setTags: (tags: tag[]) => set({ tags })
}));

export const useCreatePollStore = create<CreatePollActivity>((set) => ({    
    title: "",
    pollOptions: [],
    setTitle: (title: string) => set({ title }),
    setPollOptions: (pollOptions: pollOption[]) => set({ pollOptions })
}));