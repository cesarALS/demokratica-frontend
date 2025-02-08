"use client"

import LoadingScreen from "@/templates/1.molecules/6.LoadingScreen";
import { useUserCenterContext } from "@/utils/ContextProviders/UserCenterProvider";
import UserCenterSessionTypeSelectors from "../1.molecules/14.UserCenterSessionTypeSelectors";
import UserCenterSession from "../1.molecules/15.UserCenterSession";

const UserCenterSessionsDisplay = () => {
    
    const context = useUserCenterContext();
    
    return (
        <div className="flex flex-col items-center w-[80%]">
            <UserCenterSessionTypeSelectors/>
            <div className="flex flex-col items-center justify-center w-full min-h-[20vh] bg-PrimBlue rounded-xl">
                {context.state.isLoading ? 
                        (
                            <div className="w-[80%] h-[15vh] rounded-md">
                                <LoadingScreen 
                                    fixed={false} 
                                    text={"Cargando sesiones"} 
                                    showText={false} 
                                    scale={1.2} 
                                    logo={"Title"}
                                />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center w-full p-4 gap-4">                                
                                <UserCenterSession name="Sesión 1" description="Descripción Sesión 1"/>
                                <UserCenterSession name="Sesión 2" description="Descripción Sesión 2"/>
                            </div>
                        )
                }           
            </div>
        </div>
    );
};

export default UserCenterSessionsDisplay;

