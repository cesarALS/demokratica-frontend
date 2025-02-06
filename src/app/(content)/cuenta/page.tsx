"use client"

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "@/utils/AuthProvider";
import { deleteAccount  } from "@/utils/apiUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";

export default function Cuenta() {
    const {user} = useAuthContext();

    return (
        <div className="flex justify-center w-full text-center mt-6">
            <div className="flex flex-col gap-y-8 w-[55%] sm:w-[45%] lg:w-[35%] xl:w-[25%] p-4 pb-10 mt-10 bg-white border-2 border-PrimBlack rounded-lg">
                <div className = "text-3xl pt-4">
                    Gestiona tu cuenta
                </div>
                <div className = "flex justify-center">
                    <UserCircleIcon className="h-32 w-32 text-PrimGray" />
                </div>
                <div className = "">
                    {!!user ? user.email : "error"}
                </div>
                <div className = "flex flex-col gap-y-6 px-4">
                    <UsernameField/> 
                    <AccountButton text = {"Cambiar contraseña"}/>
                    <AccountButton text = {"Eliminar cuenta"}/>
                </div>
            </div>
        </div>
    )
}

const UsernameField = () => {
    const { handleUsernameChange, user } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false)
    const [currentUsername, setCurrentUsername] = useState(!!user ? user.username : "error")
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
          inputRef.current.focus();
        }
      }, [isEditing]);
    
    const toogleEditing = async () => {
        //Si estaba editando antes de llamar a esta función significa que presionó guardar y hay que llamar a la API
        //para cambiar el nombre de usuario
        if (isEditing) {
            handleUsernameChange(currentUsername);
        }
        setIsEditing(!isEditing)
    }

        return(
            <div className = "flex flex-row w-full justify-between text-2xl py-3 px-2 font-bold italic border-1.5 border-PrimBlack bg-ThirdGray rounded-lg">
                
                {isEditing ? (
                        <input
                        ref={inputRef}
                        type="text"
                        value={currentUsername}
                        onChange={(e) => setCurrentUsername(e.target.value)}
                        className="w-full rounded-lg border text-2xl focus:outline-none focus:ring-1 focus:ring-PrimBlack"
                        />
                    ) : (
                        <span className="text-2xl">{currentUsername}</span>
                )}

                <button className = "flex items-center justify-center rounded-full border-2 border-PrimBlue bg-PrimBlue p-2 hover:bg-SecBlue" onClick = {toogleEditing}>
                    {isEditing ? (
                            
                            <FontAwesomeIcon
                                className="size-6 text-white"
                                icon={faFloppyDisk}
                            />

                        ) : (
                            
                            <FontAwesomeIcon className="size-6 text-white" icon={faPen} />

                    )}
                </button>

            </div>
        )
}

interface AccountButtonProps {
    text: string,
    function?: () => void
}

const AccountButton = ({text}: AccountButtonProps) => {
    const { user, handleLogout } = useAuthContext(); 

    const testButtonClick = () => {
        deleteAccount(user.email, "123", Cookies.get("token"));
        handleLogout()
    }

    return (
        <button className = "flex w-full justify-center text-2xl py-3 px-2 font-bold italic border-1.5 border-PrimBlack bg-ThirdGray rounded-lg hover:scale-110" onClick = {testButtonClick}>
            {text}
        </button>
    );
}