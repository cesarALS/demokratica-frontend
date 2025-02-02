import InteractionButton from "@/templates/0.atoms/9.InteractionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTable,
  faDeleteLeft,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function ParticipantsResultsInteractions() {
  return (
    <div className="flex w-full">
      <InteractionButton>
        <FontAwesomeIcon icon={faPlus} className="size-6 text-PrimBlack" />
      </InteractionButton>
      <InteractionButton>
        <FontAwesomeIcon icon={faTable} className="size-6 text-PrimBlack" />
      </InteractionButton>
      <InteractionButton>
        <FontAwesomeIcon
          icon={faDeleteLeft}
          className="size-6 text-PrimBlack"
        />
      </InteractionButton>
      <InteractionButton>
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="size-6 text-PrimBlack"
        />
      </InteractionButton>
    </div>
  );
}
