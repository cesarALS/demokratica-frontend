"use client";

import LoginRegFormInput from "@/templates/1.molecules/0.LoginRegFormInput";

import UseTerms from "../0.atoms/1.UseTerms";
import { useState } from "react";

import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Se requiere correo"),
  username: Yup.string().required("Debes establecer un nombre de usuario"),
  password: Yup.string().required("Se requiere contraseña"),
  confirmPassword: Yup.string()
    .required("Se requiere confirmar la contraseña")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  termsAccepted: Yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones"),
});

export default function SignInComn() {
  
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {setModalOpen(true)};
  const closeModal = () => {setModalOpen(false)};
  
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
        onSubmit={(values) => {
          // ANDRÉS: Aquí debe ir la API para comunicarse con el backend
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form
            className="flex w-full sm:w-[45%] flex-col justify-start self-start gap-y-4"
            onSubmit={handleSubmit}
          >
            <LoginRegFormInput name={"email"} label={"Correo:"} type="email" placeholder="Tu correo"/>
            <LoginRegFormInput name={"username"} label={"Nombre de usuario:"} type="text" placeholder="Tu nombre de usuario"/>
            <LoginRegFormInput name={"password"} label={"Contraseña:"} type="password" placeholder="Tu contraseña"/>
            <LoginRegFormInput name={"confirmPassword"} label={"Confirmar contraseña:"} type="password" placeholder="Confirma tu contraseña"/>

            {/* Tratamiento de datos */}
            <div className="flex flex-col gap-y-1">
              <div className="flex items-center justify-center gap-x-1 text-xs text-PrimBlack">
                <div>
                  <input
                    className="bg-SecGray cursor-pointer"
                    type="checkbox"
                    id="dataProccessing"
                  />
                </div>
                <p className="text-center">
                  {`Acepto `}  
                  <span
                    className="underline cursor-pointer text-AccentBlue hover:text-black "
                    onClick={openModal}
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
              Registrate
            </button>
          </Form>
        )}
      </Formik>
      {isModalOpen && <UseTerms closeModalAction={closeModal}/>}
    </>  
  );
}