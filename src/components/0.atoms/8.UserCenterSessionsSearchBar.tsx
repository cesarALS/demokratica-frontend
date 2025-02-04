import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserCenterSessionsSearchBar = () => {
    return (
      <form className="flex flex-row bg-white w-[80%] h-[5vh] rounded-lg">
        <input 
          type="text" 
          placeholder="Filtra por:"
          className="italic w-[50%] pl-3 rounded-tl-lg rounded-bl-lg"
        >
        </input>
        <div className="flex items-center justify-center w-[35%]">
          <p>Variable</p>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-[15%] rounded-tr-lg rounded-br-lg bg-AccentBlue hover:bg-SecBlue"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="size-4 text-white"
          />
        </button>
      </form>
    );
}

export default UserCenterSessionsSearchBar;