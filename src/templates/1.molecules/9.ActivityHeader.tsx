import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

interface ActivityHeaderProps {
  tags: string[];
  rol: string;
}

export default function ActivityHeader({ tags, rol }: ActivityHeaderProps) {
  return (
    <div className="flex w-full flex-row justify-between gap-y-4">
      <div className="flex max-w-[80%] flex-wrap items-start justify-start gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex max-w-full flex-none flex-wrap items-center justify-center gap-2 break-words break-all rounded-md bg-PrimBlue px-2 py-2 text-base font-semibold italic text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        {rol === "admin" ? (
          <div className="flex items-center gap-x-2">
            <button className="flex items-center justify-center rounded-xl border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue">
              <FontAwesomeIcon
                className="size-8 text-white"
                icon={faRightLeft}
              />
            </button>
            <button className="flex items-center justify-center rounded-xl border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue">
              <FontAwesomeIcon className="size-8 text-white" icon={faTrash} />
            </button>
          </div>
        ) : (
          <button className="flex items-center justify-center rounded-xl border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue">
            <FontAwesomeIcon className="size-8 text-white" icon={faRightLeft} />
          </button>
        )}
      </div>
    </div>
  );
}
