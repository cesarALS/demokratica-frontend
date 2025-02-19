import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCircle } from "@fortawesome/free-solid-svg-icons";

// Interfaz de prueba, no sé como estén manejando los objetos y la API
interface userEntry {
  name: string;
  role: string;
  email: string;
  invitationState: string;
}

export default function ParticipantsResultsEntry({
  name,
  role,
  email,
  invitationState,
}: userEntry) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border-2 border-SecBlack bg-white p-2 text-xs text-PrimBlack">
      {/* Info about the user */}
      <div className="flex items-center gap-x-2">
        <input type="checkbox" className="size-4" />
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
            <FontAwesomeIcon
              icon={faCircle}
              className="hidden size-1 sm:block"
            />
            <span className="hidden sm:block">{email}</span>
          </div>
        </div>
      </div>
      {/* State of invitation */}
      <div className="flex items-center text-xs text-black">
        {invitationState}
      </div>
    </div>
  );
}
