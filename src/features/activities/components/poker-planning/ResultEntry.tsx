import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faQuestion,
  faPersonCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

// Interfaz de prueba, no sé como estén manejando los objetos y la API
interface userEntry {
  name: string;
  role: string;
  userVote: number;
  resultReady?: boolean;
  userHasVoted?: boolean;
}

export default function PlanningPokerResultEntry({
  name,
  role,
  userVote,
  resultReady = false,
  userHasVoted = false,
}: userEntry) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border-2 border-SecBlack bg-white p-2 text-xs text-PrimBlack">
      {/* Info about the user */}
      <div className="flex items-center gap-x-2">
        <div className="flex items-center justify-center">
          {/* La idea es que aquí vaya una foto u icono */}
          <FontAwesomeIcon
            icon={faCircleUser}
            className="size-8 text-PrimBlack"
          />
        </div>
        {/* Nombre y correo */}
        <div className="flex flex-col">
          <div className="flex flex-wrap text-black">{name}</div>
          <div className="flex flex-row flex-wrap items-center gap-x-1 text-xs">
            <span className="italic">{role}</span>
          </div>
        </div>
      </div>
      {/* State of invitation */}
      {resultReady && (
        <div className="flex items-center justify-center rounded-lg border-2 border-SecBlack bg-ThirdGray p-1 text-base font-semibold text-PrimBlack">
          {userVote}
        </div>
      )}
      {!resultReady && (
        <div
          className={
            "flex items-center justify-center rounded-lg border-2 border-SecBlack bg-ThirdGray p-1 text-base font-semibold text-PrimBlack"
          }
        >
          <FontAwesomeIcon
            icon={userHasVoted ? faQuestion : faPersonCircleQuestion}
            className="size-5"
          />
        </div>
      )}
    </div>
  );
}
