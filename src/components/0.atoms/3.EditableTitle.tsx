import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

// La idea de este componente es que solo sea editable cuando se tenga permiso para hacerlo

export default function EditableTitle() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-2 border-black bg-white px-4 py-2">
      <span className="text-xl">Ingresa tu titulo</span>
      <button className="flex items-center justify-center rounded-full bg-PrimBlue p-2">
        <FontAwesomeIcon className="size-6 text-white" icon={faPen} />
      </button>
    </div>
  );
}
