type roles = "DUEÑO" | "ADMIN" | "EDITOR" | "PARTICIPANTE"

export interface Session {
    id: number,
    title: string,
    description: string,
    creationDate: string,
    noParticipants: number,
    noActivities: number,
    isHost: boolean,
    tags: Tag[]    
}

export interface SessionToSend {
    title: string,
    description: string,
    startTime: string, // Lo convertimos en un string para evitar problemas de compatibiliadd
    endTime: string,
    invitations: Invitation[]
    tags: Tag[]
}

// Es un miembro que sirve para cuando se filtran todos los miembros de la app
export interface DemokraticaListMember {
    username: string,
    email: string
}

interface Invitation {
    invitedUserEmail: string,    
    role: roles
}

interface CreateSessionInvitation {
    email: string,
    role: roles,
    username: string,    
    thicked: boolean
}

interface Tag {
    text: string
}