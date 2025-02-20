import { create } from "zustand"
import { createSession } from "../apiUtils/apiSessionsUtils";
import { SessionToSend } from "@/types/sessions";

const emptySession = {
    title: undefined as string | undefined,
    description: undefined as string | undefined,
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    tags: [] as string[],
    invitations: [], //TODO
}

type CreatableSession =  typeof emptySession;

interface SessionState extends CreatableSession {
    setField: <K extends keyof SessionState>(field: K, value: SessionState[K]) => void;
    resetForm: () => void;
    sendSessionToCreate: (getToken: () =>string|undefined) => Promise<{
        status: number|null, 
        mssg: string,
        id: number | null
    }>
}

export const useSessionStore = create<SessionState>((set, get) => ({    
    ...structuredClone(emptySession),
    setField: (field, value) => set ((state) => ({...state, [field]: value})),    
    resetForm: () => set(structuredClone(emptySession)),
    sendSessionToCreate: async (getToken: () => string|undefined): Promise<{
        status: number|null, 
        mssg: string,
        id: number | null
    }> => {
        
        // Convertimos los tags en el formato de objetos
        const { tags } = get();
        const sendTags = tags.map(tag => ({text: tag}));

        const { title, description, startDate, endDate, invitations } = get();

        if (!title || !description || !startDate || !endDate) return {status: null, mssg:"Todos los campos son obligatorios.", id:null};
        
        // Comprobamos temas de fechas
        if (endDate <= startDate) return ({status: null, mssg: "La fecha de fin debe ser posterior a la de inicio", id: null});
        if (endDate <= new Date()) return ({status: null, mssg: "La fecha de finalización debe ser posterior a la actual", id: null});
        
        
        const sessionToSend: SessionToSend = {
            title,
            description,
            startTime: startDate.toISOString().slice(0, -5),
            endTime: endDate.toISOString().slice(0, -5),
            invitations,
            tags: sendTags
        }
            
        const response = await createSession(getToken(), sessionToSend as SessionToSend);        
        
        let message = "Error del servidor. Intenta de nuevo más tarde";
        if (response.status === 201) message = "¡Sesión Creada con Éxito";
        return {status: response.status, mssg: message, id: response.data ? response.data.id : null};        
        
    }, 
}));



