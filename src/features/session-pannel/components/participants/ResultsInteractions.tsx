import InteractionButton from "@/components/buttons/InteractionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTable,
  faDeleteLeft,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useSessionStore } from "@/features/session-pannel/CreateSessionStore";
import { useState } from "react";
import BulkEdit from "./BulkEdit";

export default function ResultsInteractions() {
  
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
        <BulkEdit
          closeModal={() => openBulkEditing(false)}
        />
      )        
      }
      
      
    </>  
  );
}
