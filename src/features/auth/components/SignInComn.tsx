"use client";

import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation"

import { useAuthContext } from "@/features/auth/AuthProvider";
import demokraticaRoutes from "@/utils/routes";
import { signupSchema as validationSchema } from "@/features/auth/yupSchemas";
import { useMessageContext } from "@/features/messages/MessageProvider";

import UseTerms from "@/features/informative/components/UseTerms";
import FormikTypeInput from "@/components/inputs/FormikTypeInput";

import { News } from "@/features/messages/message";

import { Formik, Form, ErrorMessage } from "formik";

export default function SignInComn() {
  
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const {handleUserCreation} = useAuthContext();
  const {setMessage} = useMessageContext();

  const inputs = [
    {name:"email", label:"Correo:", type:"email", placeholder:"Tu correo"},
    {name:"username", label:"Nombre de usuario:", type:"text", placeholder:"Tu nombre de usuario"},
    {name:"password", label:"Contraseña:", type:"password", placeholder:"Tu contraseña"},
    {name:"confirmPassword", label:"Confirmar contraseña:", type:"password", placeholder:"Confirma tu contraseña"},
  ]

  return (    
    <>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
          termsAccepted: false,        
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {        
          const responseStatus = await handleUserCreation(values.email, values.username, values.password);
          
          let message = "";
          let news: News = 'bad';        
          
          switch(responseStatus){
            case 201:            
              message = `Bienvenido a Demokratica, ${values.username}`;  
              news = 'good';            
              break;
            case 409:
              message = "Correo de usuario ya asociado a otra cuenta";
              break;
            default:
              message = "Error en el servidor";
          }
          
          setMessage({
            message: message,
            news: news,
            time: 6000,
          });
  
          if(responseStatus === 201) router.push(demokraticaRoutes.centroUsuario.link);   
          
        }}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <Form
            className="flex w-full sm:w-[45%] flex-col justify-start self-start gap-y-4"
            onSubmit={handleSubmit}
          >
            {inputs.map(input => (
              <FormikTypeInput
                key={input.name}
                name = {input.name}
                label = {input.label}
                type = {input.type}
                placeholder = {input.placeholder}
                divClassName="gap-1"
                fieldTextClassName="text-sm"
                fieldLabelClassName="text-sm"
              />
            ))}

            {/* Tratamiento de datos */}
            <div className="flex flex-col gap-y-1">
              <div className="flex items-center justify-center gap-x-1 text-xs text-PrimBlack">
                <div>
                  <input
                    className="bg-SecGray cursor-pointer"
                    type="checkbox"
                    id="dataProccessing"
                    checked={values.termsAccepted}
                    onChange={(e) =>
                      setFieldValue("termsAccepted", e.target.checked)
                    }                    
                  />
                </div>
                <p className="text-center">
                  {`Acepto `}  
                  <span
                    className="underline cursor-pointer text-AccentBlue hover:text-black "
                    onClick={() => setModalOpen(true)}
                  >
                    Términos y Condiciones
                  </span>
                </p>
              </div>
              <ErrorMessage
                name="termsAccepted"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>              

            {/* Botón de submit */}
            <button
              type="submit"
              className="w-full text-center bg-PrimCreamCan border-2 border-black rounded-md text-sm hover:scale-110"
            >
              Regístrate
            </button>
          </Form>
        )}
      </Formik>
      {isModalOpen && <UseTerms closeModal={() => setModalOpen(false)}/>}
    </>  
  );
}
