"use client"

import LoadingScreen from "@/templates/3.templates/0.LoadingScreen";
import { useUserCenterContext } from "@/utils/ContextProviders/UserCenterProvider";

const UserCenterSessionsDisplay = () => {
    
    const context = useUserCenterContext();
    
    return (
        <div className="flex items-center justify-center h-[20vh] w-[80%] bg-SecBlue rounded-xl">
           {context.state.isLoading ? 
                (
                    <LoadingScreen 
                        fixed={false} 
                        text={"Cargando sesiones"} 
                        showText={false} 
                        scale={1.2} 
                        logo={"Title"}
                    />
                ) : (
                    <h1 className="text-xl">Sesiones</h1>
                )
           }           
        </div>
    );
};

export default UserCenterSessionsDisplay;

