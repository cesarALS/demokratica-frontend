"use client"

import { useUserCenterContext } from "@/utils/ContextProviders/UserCenterProvider";

interface UserCenterTypeSelectorProps {
    anfitrion?: boolean;
}

const UserCenterSessionTypeSelector = ( { 
    anfitrion = true,
}: UserCenterTypeSelectorProps) => {        
    
    const context = useUserCenterContext();
    
    return (
        <button 
            className={`flex items-center justify-center ${context.state.anfitrion === anfitrion ? "bg-PrimBlue":"bg-ThirdGray"} w-[40%] h-full rounded-t-lg hover:bg-PrimBlue`}
            onClick={() => context.dispatch({ type: "setHostType", payload: anfitrion })}    
        >
            <p className={`font-bold italic ${context.state.anfitrion === anfitrion? "text-white": "text-black"}`}>
                {anfitrion ? "Anfitrión" : "Invitado"}
            </p>
        </button>
    );
}

export default UserCenterSessionTypeSelector;