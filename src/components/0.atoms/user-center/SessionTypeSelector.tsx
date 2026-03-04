"use client"

import { useUserCenterStore } from "@/utils/ContextProviders/UserCenterStore";

interface UserCenterTypeSelectorProps {
    anfitrion?: boolean;
}

const UserCenterSessionTypeSelector = ( { 
    anfitrion = true,
}: UserCenterTypeSelectorProps) => {        
    
    const SessionStore = useUserCenterStore();
    
    return (
        <button 
            className={`flex items-center justify-center ${SessionStore.anfitrion === anfitrion ? "bg-PrimBlue":"bg-ThirdGray"} w-[40%] h-full rounded-t-lg hover:bg-PrimBlue`}
            onClick={() => SessionStore.setHostType(anfitrion)}    
        >
            <p className={`font-bold italic ${SessionStore.anfitrion === anfitrion? "text-white": "text-black"}`}>
                {anfitrion ? "Anfitrión" : "Invitado"}
            </p>
        </button>
    );
}

export default UserCenterSessionTypeSelector;