import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

export default function ParticipantsResultsNavBar() {
  return (
    <div className="flex w-full items-center justify-between border-x-2 border-b-2 border-PrimBlack bg-SecGray p-2 text-sm font-semibold text-PrimBlack">
      <button className="hover:text-black">Primera</button>
      <div className="flex items-center justify-center gap-x-1">
        <button className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="size-4 hover:text-black"
          />
        </button>
        <span className="text-base">1</span>
        <button className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="size-4 hover:text-black"
          />
        </button>
      </div>
      <button className="hover:text-black">Ultima</button>
    </div>
  );
}
