import InteractionButton from "@/templates/0.atoms/9.InteractionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faDeleteLeft,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";
import { useState } from "react";
import ParticipantsBulkEdit from "../1.molecules/20.ParticipantsBulkEdit";

export default function ParticipantsResultsInteractions() {
  
  const SessionStore = useSessionStore();

  const [bulkEditing, openBulkEditing] = useState(false);
  
  return (
    <>
      <div className="flex w-full">
        <InteractionButton>
          <FontAwesomeIcon icon={faTable} className="size-6 text-PrimBlack" />
        </InteractionButton>
        <InteractionButton 
          onClick={SessionStore.discardInvitations}
        >
          <FontAwesomeIcon
            icon={faDeleteLeft}
            className="size-6 text-PrimBlack"
          />
        </InteractionButton>
        <InteractionButton
          onClick={() => openBulkEditing(true)}
        >
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="size-6 text-PrimBlack"
          />
        </InteractionButton>
      </div>
      {bulkEditing && (
        <ParticipantsBulkEdit
          closeModal={() => openBulkEditing(false)}
        />
      )        
      }
      
      
    </>  
  );
}
