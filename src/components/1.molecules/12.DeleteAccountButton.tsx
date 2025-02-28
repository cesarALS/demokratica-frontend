"use client"

import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useState } from "react";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import GenericModal from "@/templates/1.molecules/16.GenericModal";
import TwoButtonFormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";
import LabelField from "@/templates/0.atoms/0.LabelField";

const DeleteAccountButton = () => {
    const { user, handleAccountDeletion } = useAuthContext(); 
    const { setMessage } = useMessageContext();
    const [ modal, showModal ] = useState<boolean>(false);    
    const [field, setField] = useState<string>("")

    const buttonClick = () => {if (user) showModal(true)};                             

    const handleSend = async (ps: string) => {

        showModal(false);
        const success = await handleAccountDeletion(ps);

        let message = "No se pudo eliminar el usuario";
        let news = 3;

        if(success){
            message = "Usuario eliminado";
            news = 2;
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
                className = "flex w-full md:w-[60%] items-center justify-center text-2xl py-3 px-2 font-semibold border-1.5 border-PrimBlack bg-ThirdGray rounded-lg hover:bg-SecGray" 
                onClick = {buttonClick}
            >
                Eliminar Cuenta
            </button>
            {modal && (
                <GenericModal
                    className="flex flex-col items-center justify-center gap-10 min-h-[40vh] w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[45vw] border-2 border-PrimBlack"
                >
                    <h1 className="font-semibold text-center text-2xl md:text-2xl">
                        Eliminar Cuenta
                    </h1>
                    <LabelField
                        label="Ingresa tu contraseña"
                        type="password"
                        placeholder="Contraseña"
                        name="Ingresar Contraseña"
                        showEye={true}
                        id={"password"}
                        onChange={e => {
                            setField(e.currentTarget.value)
                        }}
                        divClassName="gap-4"
                        fieldClassName="rounded-lg px-2"
                        fieldLabelClassName="text-lg"
                        fieldTextClassName="text-lg"
                    />
                    <TwoButtonFormDecision
                        divClassName="gap-x-8"
                        firstButtonClassname="bg-SecCreamCan hover:bg-PrimCreamCan"
                        firstButtonFunction={handleCancel}
                        secondButtonClassname="bg-red-300 hover:bg-red-500"
                        secondButtonText="Eliminar"
                        secondButtonFunction={() => handleSend(field)}
                    />                    
                </GenericModal>
                
            )}
        </>
    );
}   

export default DeleteAccountButton;