"use client"

import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { useState } from "react";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import GenericModal from "@/templates/1.molecules/16.GenericModal";
import TwoButtonFormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTypeInput from "@/templates/1.molecules/0.FormikTypeInput";

const validationSchema = Yup.object({
    newPassword: Yup.string()
        .required("Se requiere contraseña")
        .min(8, "Debe tener al menos 8 caracteres")
        .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un carácter especial"),    
    confirmNewPassword: Yup.string()
        .required("Se requiere confirmar la contraseña")
        .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden"),  
});

const ChangePasswordButton = () => {
    const { user, handlePasswordChange } = useAuthContext(); 
    const { setMessage } = useMessageContext();
    const [ modal, showModal ] = useState<boolean>(false);

    const inputs = [
        {
            name: "currentPassword",
            label: "Ingresa tu contraseña actual",
            placeholder: "Contraseña Actual"
        },
        {
            name: "newPassword",
            label: "Ingresa tu nueva contraseña",
            placeholder: "Nueva Contraseña"
        },
        {
            name: "confirmNewPassword",
            label: "Confirma tu nueva contraseña",
            placeholder: "Confirmar Contraseña"
        },                
    ]; 

    return (
        <>
            <button 
                className = "flex w-full md:w-[60%] items-center justify-center text-2xl py-3 px-2 font-semibold border-1.5 border-PrimBlack bg-ThirdGray rounded-lg hover:bg-SecGray" 
                onClick = {() => {if(user) showModal(true)}}
            >
                Cambiar Contraseña
            </button>
            {modal && (
                <GenericModal
                    className="justify-center min-h-[40vh] w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[45vw] border-2 border-SecBlack"
                >
                    <Formik
                    initialValues={{
                        currentPassword: "",
                        newPassword: "",
                        confirmNewPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={ async(values) => {
                        showModal(false);
                        const res = await handlePasswordChange(values.currentPassword, values.newPassword);
                             
                        let message = "No se pudo eliminar el usuario";
                
                        if (res.status === 204) message = "Cambio de contraseña exitoso";
                        if (res.status === 403 && !(res.problem === null)) message = "Credenciales incorrectas";       
                
                        setMessage({
                            message: message,
                            news: res.status === 204 ? 1 : 3,
                            time: 4000
                        })
                    }}                                    
                    >
                        {({ handleSubmit }) => (
                            <Form className="flex flex-col items-center justify-center w-full h-full gap-4">
                                <h1 className="font-semibold text-center text-2xl md:text-2xl mb-4">
                                    Cambio de Contraseña
                                </h1>
                                {
                                    inputs.map(input => (
                                        <FormikTypeInput 
                                            key={input.name}
                                            name={input.name}
                                            label={input.label}
                                            type="password"
                                            placeholder={input.placeholder}
                                            divClassName="flex flex-col items-center justify-center gap-2 w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw]"
                                            fieldClassName="w-full p-1 rounded-md"   
                                            fieldTextClassName="text-md"                                                                           
                                        />                                        
                                    ))
                                }                                            
                                <TwoButtonFormDecision
                                    divClassName="gap-x-8 mt-4"
                                    firstButtonClassname="bg-red-300 hover:bg-red-500"
                                    firstButtonFunction={() => showModal(false)}
                                    secondButtonClassname="bg-SecCreamCan hover:bg-PrimCreamCan"
                                    secondButtonText="Cambiar"
                                    secondButtonFunction={handleSubmit}                                    
                                />         
                            </Form>  
                        )}                                             
                    </Formik>        
                </GenericModal>
                
            )}
        </>
    );
}   

export default ChangePasswordButton;