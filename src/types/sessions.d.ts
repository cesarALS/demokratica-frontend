type roles = "ADMIN" | "INVITADO" | "DUEÑO" | "EDITOR"

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

interface Invitation {
    invitedUserEmail: string,
    role: roles
}

interface Tag {
    text: string
}