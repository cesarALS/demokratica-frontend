"use client"

import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useState } from "react";
import ModalGetInput from "../0.atoms/9.ModalGetInput";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";

interface AccountButtonProps {
    text: string,
    function?: () => void
}

const AccountButton = ({text}: AccountButtonProps) => {
    const { user, handleAccountDeletion } = useAuthContext(); 
    const {setMessage} = useMessageContext();
    const [modal, showModal] = useState<boolean>(false);    

    const testButtonClick = () => {
        if(user) showModal(true);                             
    }

    const handleSend = async (ps: string) => {

        showModal(false);
        const success = await handleAccountDeletion(ps);

        let message = "No se pudo eliminar el usuario";
        let news = 3;

        if(success){
            message = "Usuario eliminado";
            news = 1;
        }

        setMessage({
            message: message,
            news: news,
            time: 3000
        })
    }

    const handleCancel = () => showModal(false);

    return (
        <>
            <button 
                className = "flex w-full justify-center text-2xl py-3 px-2 font-bold italic border-1.5 border-PrimBlack bg-ThirdGray rounded-lg hover:scale-110" 
                onClick = {testButtonClick}
            >
                {text}
            </button>
            {modal && (
                <ModalGetInput
                    type="password"
                    handleSend={handleSend}
                    handleCancel={handleCancel}
                />
                
            )}
        </>
    );
}   

export default AccountButton;