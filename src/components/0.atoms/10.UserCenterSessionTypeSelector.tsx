"use client"

import { SessionHostTypes, useUserCenterContext } from "@/utils/ContextProviders/UserCenterProvider";

interface UserCenterTypeSelectorProps {
    numButton?: SessionHostTypes;
}

const UserCenterSessionTypeSelector = ( { 
    numButton = 1,
}: UserCenterTypeSelectorProps) => {        
    
    const context = useUserCenterContext();
    
    return (
        <button 
            className={`flex items-center justify-center ${context.state.hostType === numButton ? "bg-PrimBlue":"bg-ThirdGray"} w-[40%] h-full rounded-t-lg hover:bg-PrimBlue`}
            onClick={() => context.dispatch({ type: "setHostType", payload: numButton })}    
        >
            <p className={`font-bold italic ${context.state.hostType === numButton? "text-white": "text-black"}`}>
                {numButton === 1 ? "Anfitrión" : "Invitado"}
            </p>
        </button>
    );
}

export default UserCenterSessionTypeSelector;