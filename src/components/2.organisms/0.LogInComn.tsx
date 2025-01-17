"use client"

import Link from "next/link";
import { linkStyles } from "@/utils/tailwindUtils";

import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginRegFormInput from "@/templates/1.molecules/0.LoginRegFormInput";

import { login } from "@/utils/apiUtils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Se requiere correo"),
  password: Yup.string().required("Se requiere contraseña"),
});

export default function LogInComn() {
  
  const router = useRouter();

  useEffect(() => {
    // Verificar la cookie solo después de que el componente se haya montado
    const us = Cookies.get("user");
    if (us) {
      router.push("/"); // Redirigir a la página de inicio si la cookie existe
    }
  }, [router]); 
  
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const response = await login(values.email, values.password);
        if (response.status === 200 && response.userInfo?.username) {
          Cookies.set("user", response.userInfo?.username, { expires: 7 });
          router.push("/");
        }
        else if (response.status === 403){
          alert("Credenciales no válidas")
        } else {
          alert("Error en el servidor")
        }
      }}
    >
      {({ handleSubmit }) => (
        <Form className="flex w-full sm:w-[45%] flex-col justify-start self-start gap-y-4" onSubmit={handleSubmit}>      

          <LoginRegFormInput name="email" label="Correo:" type="email" placeholder="Tu correo"/>
          <LoginRegFormInput name="password" label="Contraseña:" type="password" placeholder="Tu contraseña"/>

          {/* Recuérdame y olvidaste tu contraseña */}
          <div className="flex items-center justify-between text-xs text-PrimBlack">
            <div>
              <input className="bg-SecGray" type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="pl-1 hover:text-black">
                Recuérdame
              </label>
            </div>
            <Link href="/" className={`${linkStyles()}`}>
              ¿Olvidaste tu contraseña?
            </Link>
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
  );
}

