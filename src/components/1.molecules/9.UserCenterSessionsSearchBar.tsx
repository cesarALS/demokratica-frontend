import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserCenterSessionsSearchBar = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-2 md:gap-5 w-full md:w-[40%] h-full md:py-3">
        <div className="flex items-center w-full">
          <h1 className="italic ml-[7%]">Filtros</h1>
        </div>
        <form className="flex flex-row bg-white w-[80%] md:w-[85%] mx-2 h-[5vh] rounded-lg">
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
      </div>
    );
}

export default UserCenterSessionsSearchBar;