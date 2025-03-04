"use client"

import { linkStyles } from "@/utils/tailwindUtils";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import demokraticaRoutes from "@/utils/routeUtils";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import FormikTypeInput from "@/templates/1.molecules/0.FormikTypeInput";
import GenericModal from "@/templates/1.molecules/16.GenericModal";
import TwoButtonFormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";
import LabelField from "@/templates/0.atoms/0.LabelField";

const validationSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Se requiere correo"),
  password: Yup.string().required("Se requiere contraseña"),
});

export default function LogInComn() {
  
  const router = useRouter();
  const {handleLogin} = useAuthContext();
  const {setMessage} = useMessageContext();

  const [forgotPasswordModal, openForgotPasswordModal] = useState(false);

  const inputs = [
    {name:"email", label:"Correo:", type:"email", placeholder:"Tu correo"},
    {name:"password", label:"Contraseña:", type:"password", placeholder:"Tu contraseña"}
  ];
  
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        
        validationSchema={validationSchema}

        onSubmit={async (values) => {
          const responseStatus = await handleLogin(values.email, values.password);        
          
          let message = "";
          let news = 3;        
          
          switch(responseStatus){
            case 200:            
              message = "Bienvenido de vuelta";  
              news = 1;            
              break;
            case 403:
              message = "Credenciales no válidas";
              break;
            default:
              message = "Error en el servidor";
          }
          
          setMessage({
            message: message,
            news: news,
            time: 3000
          });

          if(responseStatus === 200) router.push(demokraticaRoutes.centroUsuario.link);        
          
        }}
      >
        {({ handleSubmit }) => (
          <Form className="flex w-full sm:w-[45%] flex-col justify-start self-start gap-y-4" onSubmit={handleSubmit}>      

            {inputs.map(input => (
              <FormikTypeInput 
                key={input.name}
                name={input.name}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                divClassName="gap-1"
                fieldLabelClassName="text-sm"
                fieldTextClassName="text-sm"
              />
            ))}

            {/* Recuérdame y olvidaste tu contraseña */}
            <div className="flex items-center justify-between text-xs text-PrimBlack">
              <div>
                <input className="bg-SecGray" type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="pl-1 hover:text-black">
                  Recuérdame
                </label>
              </div>
              <button 
                className={`${linkStyles()}`}
                onClick={() => {openForgotPasswordModal(true)}}  
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="w-full text-center bg-PrimCreamCan border-2 border-black rounded-md text-sm hover:scale-110"            
            >
              Ingresa
            </button>          

          </Form>
        )}
      </Formik>
      {forgotPasswordModal && 
      <GenericModal
        className="flex flex-col p-8 gap-4"
      >
        <h1 className="text-xl font-bold mb-2">
          Provee tu correo para cambiar la contraseña
        </h1>
        <LabelField
          type="email"
          placeholder="Correo"
          id="email"
          label="Ingresa tu correo"
          name="Correo"
          divClassName="gap-y-2"
          fieldClassName="rounded-xl px-2"
        />        
        <TwoButtonFormDecision
          divClassName="mt-4"
          firstButtonClassname="Cancelar"
          secondButtonClassname="Enviar"
          firstButtonFunction={() => openForgotPasswordModal(false)}          
        />        
      </GenericModal>
      }
    </>  
  );
}

