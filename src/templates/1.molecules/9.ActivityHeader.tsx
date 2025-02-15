import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ActivityHeaderProps {
  tags: string[];
}

export default function ActivityHeader({ tags }: ActivityHeaderProps) {
  return (
    <div className="flex w-full flex-row gap-y-4 justify-between">
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
        <button className="flex items-center justify-center rounded-xl border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue">
          <FontAwesomeIcon className="size-8 text-white" icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
