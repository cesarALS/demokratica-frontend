export type ActivityType = "POLL" | "TIDEMAN" | "OTRO_TIPO"; // Agrega más tipos si es necesario

export interface PollResult {
  id?: number; // Puede ser null en el JSON, lo hacemos opcional
  description: string; // Puede ser null en el JSON
  numVotes: number;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  tags: Tag[];
  type: ActivityType; // Indica qué tipo de actividad es
  activityStatus: "FINISHED" | "ONGOING"; // Nuevo campo basado en el JSON
  alreadyParticipated: boolean; // Nuevo campo basado en el JSON
  pollResults?: PollResult[]; // Actualizado para reflejar el JSON
}

export interface SessionInfo {
  sessionId: number;
  userRole: "DUEÑO" | "PARTICIPANTE" | "INVITADO"; // Adaptado al JSON
}

export type OrganizableEntry = {
  entry: string;
  value: number;
};

export interface Tag {
  text: string;
}