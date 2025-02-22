import DateTime from "@/templates/0.atoms/17.DateTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

interface ActivityHeaderProps {
  tags: string[];
  givenDate?: string;
  rol: string;
}

export default function ActivityHeader({
  tags,
  givenDate,
  rol,
}: ActivityHeaderProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex w-full items-center justify-between">
        {/* Fecha publicación actividad*/}
        <DateTime className="text-sm" date={givenDate} />
        {/* Boton de borrar publicación */}
        {rol === "admin" ? (
          <div className="flex items-center gap-x-2">
            <button className="flex items-center justify-center rounded-xl border-2 border-AccentBlue bg-SecBlue p-2 hover:bg-PrimBlue">
              <FontAwesomeIcon className="size-6 text-white" icon={faTrash} />
            </button>
          </div>
        ) : (
          <button className="flex items-center justify-center rounded-xl border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue">
            <FontAwesomeIcon className="size-8 text-white" icon={faRightLeft} />
          </button>
        )}
      </div>
      {/* Tags de la actividad */}
      <div className="flex w-full justify-between">
        <div className="flex gap-x-1 overflow-x-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex h-auto flex-none items-center justify-center gap-1 break-words rounded-md bg-PrimBlue px-2 py-1 text-sm font-semibold italic text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
