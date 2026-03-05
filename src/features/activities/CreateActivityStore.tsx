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
    question: string,
    startTime: Date,
    endTime: Date,
    tags: tag[],
    setSessionId: (sessionId: number) => void,   
    setActivityType: (activityType: string) => void, 
    setStartTime: (startTime: Date) => void,
    setQuestion: (question: string) => void,     
    setEndTime: (endTime: Date) => void,
    setTags: (tags: tag[]) => void,
}

export type CreatePollActivity ={        
    pollOptions: pollOption[],        
    setPollOptions: (pollOptions: pollOption[]) => void
}

export const useGeneralCreateActivityStore = create<GeneralCreateActivity>((set) => ({
    sessionId: 0,
    activityType: "votación común",
    question: "",
    startTime: new Date(),
    endTime: new Date(),
    tags: [],
    setSessionId: (sessionId: number) => set({ sessionId }),
    setActivityType: (activityType: string) => set({ activityType }),
    setQuestion: (question: string) => set({ question }),    
    setStartTime: (startTime: Date) => set({ startTime }),
    setEndTime: (endTime: Date) => set({ endTime }),
    setTags: (tags: tag[]) => set({ tags })
}));

export const useCreatePollStore = create<CreatePollActivity>((set) => ({        
    pollOptions: [],    
    setPollOptions: (pollOptions: pollOption[]) => set({ pollOptions })
}));