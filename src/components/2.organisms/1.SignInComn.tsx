"use client";

import UseTerms from "../0.atoms/1.UseTerms";
import { useState } from "react";

import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/navigation"
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import demokraticaRoutes from "@/utils/routeUtils";
import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import FormikTypeInput from "@/templates/1.molecules/0.FormikTypeInput";

const validationSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Se requiere correo"),
  username: Yup.string().required("Debes establecer un nombre de usuario"),
  password: Yup.string()
    .required("Se requiere contraseña")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un carácter especial"),
  confirmPassword: Yup.string()
    .required("Se requiere confirmar la contraseña")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  termsAccepted: Yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones"),
});

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
          let news = 3;        
          
          switch(responseStatus){
            case 201:            
              message = `Bienvenido a Demokratica, ${values.username}`;  
              news = 1;            
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
