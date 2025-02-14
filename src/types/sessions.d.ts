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

interface Tag {
    text: string
}