"use client";

import { useUserCenterStore } from "@/utils/ContextProviders/UserCenterStore";

const UserCenterSessionsSearchBar = () => {

  const { setTextSearch } = useUserCenterStore();  
  
  return (
    <div 
      className="flex flex-col items-center justify-center gap-2 md:gap-5 w-[90%] xl:w-[30%] h-full"
    >      
      <input
        type="text"
        placeholder="Busca sesiones:"
        className="w-full h-full pl-3 py-2 rounded-md border-2 border-PrimBlack"
        onChange={(e) => setTextSearch(e.target.value)}
      />      
    </div>
  );
};

export default UserCenterSessionsSearchBar;
