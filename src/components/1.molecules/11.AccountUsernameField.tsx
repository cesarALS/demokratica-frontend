import { useAuthContext } from "@/utils/AuthProvider";
import { useMessageContext } from "@/utils/MessageProvider";
import { faFloppyDisk, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

const AccountUsernameField = () => {
    const { handleUsernameChange, user } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false)
    const [currentUsername, setCurrentUsername] = useState(!!user ? user.username : "...")
    const inputRef = useRef<HTMLInputElement>(null);

    const {setMessage} = useMessageContext();

    useEffect(() => {
        if (isEditing && inputRef.current) {
          inputRef.current.focus();
        }
      }, [isEditing]);
    
    const toogleEditing = async () => {
        //Si estaba editando antes de llamar a esta función significa que presionó guardar y hay que llamar a la API
        //para cambiar el nombre de usuario
        if (isEditing) {
            if(currentUsername != user?.username){
                const success = await handleUsernameChange(currentUsername);
                
                let message = "No se pudo cambiar el username";
                let news = 3;

                if(success){
                    message = `¡Cambio exitoso, ${currentUsername}!`;
                    news = 1;
                } 

                setMessage({
                    message: message,
                    news: news,
                    time: 5000
                })
            }
        }
        setIsEditing(!isEditing)
    }

        return(
            <>
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
            </>
        )
}

export default AccountUsernameField;