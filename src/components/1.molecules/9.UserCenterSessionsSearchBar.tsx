"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserCenterSessionsSearchBar = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-5 w-full md:w-[40%] h-full md:py-3">
      <form className="flex flex-row bg-white w-[80%] md:w-[90%] mx-2 h-[5vh] rounded-lg">
        <input
          type="text"
          placeholder="Tags:"
          className="w-[80%] pl-3 rounded-tl-lg rounded-bl-lg"
        />
        <button
          type="button"
          className="flex items-center justify-center flex-1 rounded-tr-lg rounded-br-lg bg-AccentBlue hover:bg-SecBlue"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="size-4 text-white" />
        </button>
      </form>
    </div>
  );
};

export default UserCenterSessionsSearchBar;
