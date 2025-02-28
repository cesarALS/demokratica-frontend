"use client"

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";

import MessageBox from "@/templates/0.atoms/12.MessageBox";
import EditableTitle from "@/templates/0.atoms/15.EditableTitle";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import DeleteAccountButton from "@/components/1.molecules/12.DeleteAccountButton";
import ChangePasswordButton from "@/components/1.molecules/13.ChangeUsernameButton";

export default function Cuenta() {
    const {user, handleUsernameChange} = useAuthContext();
    const { setMessage } = useMessageContext();

    return (
        <>
            <div className="flex justify-center w-full text-center mt-6 mb-6">
                <div className="flex flex-col gap-y-8 w-[80%] lg:w-[60%] xl:w-[40%] p-4 pb-10 mt-10 bg-white border-2 border-PrimBlack rounded-lg">
                    <div className = "text-3xl pt-4">
                        Gestiona tu cuenta
                    </div>
                    <div className = "flex justify-center">
                        <UserCircleIcon className="h-32 w-32 bg-PrimCreamCan text-black rounded-xl border-2 border-black p-2 " />
                    </div>
                    <div>
                        <span className="text-xl">{!!user ? user.email : "Email"}</span>
                    </div>
                    <div className = "flex flex-col items-center justify-center gap-y-6 px-4">
                        <EditableTitle
                            title={user?.username ? user.username : "Username"}
                            className="w-full md:w-[60%] border-1.5 border-PrimBlack justify-center rounded-lg bg-ThirdGray hover:bg-SecGray py-3"
                            textClassname="font-semibold text-center"
                            buttonOverlay={true}
                            onChange={(newTitle) => {
                                const changeUsername = async() => {
                                    const success = await handleUsernameChange(newTitle);
            
                                    let message = "No se pudo cambiar el username";
                                    let news = 3;
                    
                                    if(success){
                                        message = `¡Cambio exitoso, ${newTitle}!`;
                                        news = 1;
                                    } 
                    
                                    setMessage({
                                        message: message,
                                        news: news,
                                        time: 5000
                                    })  
                                } 
                                if (!(user?.username === newTitle)) changeUsername();
                            }}
                        />                        
                        <ChangePasswordButton/>
                        <DeleteAccountButton/>
                    </div>
                </div>
            </div>
            <MessageBox/>
        </>
    )
}