"use client"

import { Session } from "@/types/sessions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const UserCenterSessionInfo = (props : {session: Session | undefined}) => {
    
    const {session} = props;
    const [isOpen, open] = useState(false);

    const MD_VIEWPORT = 768
    const isMd = useMediaQuery({minWidth: MD_VIEWPORT})

    useEffect(() => {
        open(isMd);        
    }, [isMd])
    
    return (        
        <div className="flex flex-col items-center justify-center box-border w-full min-h-[7vh] rounded-b-md">
            <div className="flex items-center w-full h-full box-border pt-2 px-3 pb-2">
                <div className={`flex items-center justify-center ${isOpen ? "w-full" : "w-[70%]"} h-full`}>
                    <h1 className="text-md text-center">{session?.description}</h1>                               
                </div>
                
                {isMd ? (
                    <></>
                ) : (
                    <button className="flex-1 m-5" onClick={() => open(state => !state)}>
                        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="text-2xl text-AccentBlue"/>
                    </button>            
                )
                
                }
            </div>
            {
                (isOpen)? (
                    <>
                        <hr className="border-t-2 border-PrimGray w-[80%]"/>
                        <div className="flex flex-col items-center justify-center w-full box-border gap-4 p-3">
                            <div className="grid grid-rows-3 grid-cols-2 w-[80%] text-center text-sm">
                                <p className="font-semibold">Creación</p>
                                <p className="">{session?.creationDate}</p>
                                <p className="font-semibold">Participantes</p>
                                <p className="">{session?.noParticipants}</p>
                                <p className="font-semibold">Actividades</p>
                                <p className="">{session?.noActivities}</p>
                            </div>
                            <div className="flex items-center justify-center flex-wrap flex-1 w-full gap-4">
                                {session?.tags.map(tag => {
                                    return (
                                        <div className="rounded-md p-1 text-center bg-ThirdGray" key={tag.text}>
                                            {tag.text}
                                        </div>
                                    )})                                                                    
                                }
                            </div>
                                                
                        </div>
                    </>
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default UserCenterSessionInfo;