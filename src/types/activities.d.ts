export type ActivityType = "VOTACION_COMUN" | "TIDEMAN" | "OTRO_TIPO"; // Agrega más tipos si es necesario

export interface PollOption {
    id: number;
    description: string;
    voters: string[]; // Suponiendo que almacena IDs o emails de los votantes
}

export interface Activity {
    id: number;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    tags: Tag[];
    pollOptions?: PollOption[]; // Opcional, ya que algunas actividades podrían no tener opciones de votación
    type: ActivityType; // Indica qué tipo de actividad es
}

export interface Tag {
    text: string;
}