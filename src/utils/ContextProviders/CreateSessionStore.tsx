import { create } from "zustand"
import { createSession } from "../apiUtils/apiSessionsUtils";
import { CreateSessionInvitation, roles, SessionToSend } from "@/types/sessions";
import { Filters } from "@/types/filters";
import _ from "lodash"

export const roleStrings = [ "ADMIN", "EDITOR", "PARTICIPANTE"]

const emptySession = {
    title: undefined as string | undefined,
    description: undefined as string | undefined,
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    tags: [] as string[],
    invitations: [] as CreateSessionInvitation[],
    allToggled: false as boolean,
    filters: {
        alphabeticOrder: {
            options: ["A-Z", "Z-A"],
            current: "A-Z"
        },
        pageSize: {
            options: ["5", "10", "15", "20"],
            current: "5"
        },
    } as Filters,
    currentPage: 1 as number
}

type CreatableSession =  typeof emptySession;

interface SessionState extends CreatableSession {
    setField: <K extends keyof SessionState>(field: K, value: SessionState[K]) => void;
    addInvitation: (username: string, email: string, role: roles) => void;
    toggleGuest: (email: string, thicked: boolean) => void;
    toggleAllGuests: (thicked: boolean) => void;
    bulkEdit: (role: roles) => void;
    discardInvitations: () => void;
    setGuestRole: (email: string, role: roles) => void;
    applyFilters: () => void;
    setFilters: (property: string, value: string) => void;
    setPage: (page: number) => void;
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
    addInvitation: (username: string, email: string, role: roles) => {        
        set(state => {
            if (state.invitations.some(invite => invite.email === email)) {
                return state; // Evita duplicados por email
            }
            return {
                invitations: [...state.invitations, { username, email, role, thicked: false }]
            };
        });
        get().applyFilters();
    },  
    toggleGuest: (email: string, thicked: boolean) => {
        set(state => ({
            invitations: state.invitations.map(invite =>
                invite.email === email ? { ...invite, thicked } : invite
            )
        }));
    },
    toggleAllGuests: (thicked: boolean) => {
        set(state => ({
            invitations: state.invitations.map(invite => ({
                ...invite,
                thicked,
            })),
            allToggled: thicked ? true : false,
        }));
    },
    bulkEdit: (role: roles) => {
        set(state => ({
            invitations: state.invitations.map(invite => ({
                ...invite,
                role,
            })),            
        }));        
        get().toggleAllGuests(false)
    },
    discardInvitations: () => {
        const { applyFilters } = get();
        set(state => ({
            invitations: state.invitations.filter(invite => !invite.thicked)
        }));
        applyFilters();
    },
    setGuestRole: (email, role) => {
        set(state => ({
            invitations: state.invitations.map(invite =>
                invite.email === email ? { ...invite, role } : invite
            )
        }));
    },
    applyFilters: () => {
        const { invitations } = get();
        set((state) => {
            const order = state.filters.alphabeticOrder.current === "A-Z" ? "asc" : "desc";
            const orderedInv = _.orderBy(invitations, ["username"], [order]);
    
            return { invitations: orderedInv };
        });
    },
    setFilters: (property, value) => {
        set((state) => {
            const newFilters = {
                ...state.filters,
                [property]: { ...state.filters[property], current: value },
            };
            return { filters: newFilters };
        }, false);
        
        get().setPage(1);
        get().applyFilters(); 
        
    },    
    setPage: (page: number) => {
        set(() => ({currentPage: page}));
    },
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
                
        const invitationsToSend = invitations.map(invitation => ({
            invitedUserEmail: invitation.email, 
            role: invitation.role
        }));
        
        const sessionToSend: SessionToSend = {
            title,
            description,
            startTime: startDate.toISOString().slice(0, -5),
            endTime: endDate.toISOString().slice(0, -5),
            invitations: invitationsToSend,
            tags: sendTags
        }

        //console.log(sessionToSend)
        console.log(JSON.stringify(sessionToSend, null, 2));
            
        const response = await createSession(getToken(), sessionToSend as SessionToSend);        
        
        let message = "Error del servidor. Intenta de nuevo más tarde";
        if (response.status === 201) message = "¡Sesión Creada con Éxito";
        return {status: response.status, mssg: message, id: response.data ? response.data.id : null};        
        
    }, 
}));



