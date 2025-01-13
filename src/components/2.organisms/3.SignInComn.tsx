"use client";

import Link from "next/link";
import LabelField from "@/templates/0.atoms/0.LabelField";

import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Se requiere correo"),
  password: Yup.string().required("Se requiere contraseña"),
});

export default function SignInComn() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
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
          {/* Campo de correo */}
          <div className="flex flex-col gap-y-1">
            <Field
              component={LabelField}
              label="Correo:"
              type="email"
              placeholder="Tu correo"
              id="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Campo de nombre de usuario */}
          <div className="flex flex-col gap-y-1">
            <Field
              component={LabelField}
              label="Nombre de usuario:"
              type="text"
              placeholder="Tu nombre de usuario"
              id="username"
              name="username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Campo de contraseña */}
          <div className="flex flex-col gap-y-1">
            <Field
              component={LabelField}
              label="Contraseña:"
              type="password"
              placeholder="Tu contraseña"
              id="password"
              name="password"
              showEye={true}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Confirmar contraseña */}
          <div className="flex flex-col gap-y-1">
            <Field
              component={LabelField}
              label="Confirmar contraseña:"
              type="password"
              placeholder="Confirma tu contraseña"
              id="confirmPassword"
              name="confirmPassword"
              showEye={true}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Tratamiento de datos */}
          <div className="flex gap-x-1 text-xs text-PrimBlack">
            <div>
              <input
                className="bg-SecGray"
                type="checkbox"
                id="dataProccessing"
              />
              <label
                htmlFor="dataProccessing"
                className="pl-1 hover:text-black"
              >
                Acepto
              </label>
            </div>
            <Link href="/" className="underline hover:text-black">
              terminos y condiciones
            </Link>
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
  );
}
