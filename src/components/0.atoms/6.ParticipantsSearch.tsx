import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ParticipantsSearch() {
  return (
    <div className="flex-no-wrap flex w-full items-center justify-between overflow-hidden rounded-2xl border border-2 border-AccentBlue bg-white">
      <input
        type="text"
        className="flex w-full border-none bg-transparent text-center text-lg italic text-PrimBlack placeholder-PrimBlack outline-none"
        placeholder="Busqueda"
      ></input>
      <button className="flex items-center justify-center border-l-2 border-AccentBlue bg-PrimBlue px-4 py-2 hover:bg-SecBlue">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="size-6 text-white"
        />
      </button>
    </div>
  );
}
