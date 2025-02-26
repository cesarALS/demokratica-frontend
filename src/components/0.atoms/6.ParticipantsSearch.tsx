"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DemokraticaListMember } from "@/types/sessions";
import { getUserList } from "@/utils/apiUtils/apiSessionsUtils";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { queryKeys } from "@/utils/reactQueryUtils";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";
import _ from "lodash";
import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";

export default function ParticipantsSearch() {
  const AuthContext = useAuthContext();
  const [filteredMemberList, setFilteredMemberList] = useState<DemokraticaListMember[]>([]);
  const SessionStore = useSessionStore();
  const searchCampRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState("");

  // Buscamos la lista de todos los usuarios que están en Demokratica, para poder invitarlos
  const { data } = useQuery({
    queryKey: [queryKeys.userList],
    queryFn: async () => {
      const response = await getUserList(AuthContext.getCookie() as string);
      if (response.error) {
        console.error(`No se pudieron fetchear los usuarios`);
      }
      return response.data as DemokraticaListMember[];
    },
  });

  const setDisplayMembers = useCallback((allMembers: DemokraticaListMember[] | undefined, searchString: string) => {
    if (!allMembers) return;
    const normalizedSearchString = _.deburr(_.toLower(searchString));
    const displayMembers = _.filter(
      allMembers,
      (user) =>
        (_.includes(_.deburr(_.toLower(user.email)), normalizedSearchString) ||
          _.includes(_.deburr(_.toLower(user.username)), normalizedSearchString)) &&
        !SessionStore.invitations.some((invite) => invite.email === user.email) && // Evitamos mostrar un usuario ya invitado
        (!(user.email === AuthContext.user?.email)) // Evitamos que el usuario sea nosotros
    );
    setFilteredMemberList(displayMembers);
  }, [SessionStore.invitations, AuthContext.user?.email]);

  useEffect(() => {
    setDisplayMembers(data, searchText);
  }, [searchText, data, setDisplayMembers]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchCampRef.current &&
        dropdownRef.current &&
        !searchCampRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFilteredMemberList([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex-no-wrap flex w-full items-center justify-between overflow-hidden rounded-2xl border border-2 border-AccentBlue bg-white">
        <input
          type="text"
          className="flex w-full border-none bg-transparent text-center text-lg italic text-PrimBlack placeholder-PrimBlack outline-none hover:text-black hover:placeholder-black"
          placeholder="Busqueda"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.currentTarget.value);
          }}
          onFocus={() => {
            if (searchText.length > 0) setDisplayMembers(data, searchText);
          }}
          ref={searchCampRef}
        />
        <button className="flex items-center justify-center border-l-2 border-AccentBlue bg-PrimBlue px-4 py-2 hover:bg-SecBlue">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="size-6 text-white" />
        </button>
      </div>
      {/** Lista desplegable de usuarios existentes en Demokratica **/}
      {filteredMemberList.length > 0 && searchText.length > 0 && (
        <div
          ref={dropdownRef}
          className="flex flex-col items-center absolute mt-2 w-full overflow-y-scroll overflow-x-hidden min-h-0 max-h-[30vh] rounded-xl z-50 bg-SecGray p-2 border-2 border-PrimBlack gap-1 scrollbar-thin scrollbar-thumb-AccentBlue scrollbar-track-transparent"
        >
          {filteredMemberList.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-start w-full px-4 py-2 gap-4 text-PrimBlack bg-white hover:bg-ThirdGray rounded-xl"
            >
              <FontAwesomeIcon icon={faCircleUser} className="size-8 text-black bg-PrimCreamCan border-2 border-black p-1 rounded-md w-[10%]" />
              <div className="text-black w-[60%] overflow-x-hidden">
                <p>{member.email}</p>
                <p>{member.username}</p>
              </div>
              <SimpleButton
                buttonText="Añadir"
                className="bg-PrimCreamCan hover:bg-SecCreamCan text-black"
                onClick={() => {
                  SessionStore.addInvitation(member.username, member.email, "EDITOR");
                  setFilteredMemberList((prevList) =>
                    prevList.filter((invite) => invite.email !== member.email)
                  );
                  setSearchText("");
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
