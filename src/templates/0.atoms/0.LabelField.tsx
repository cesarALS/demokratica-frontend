"use client";

import { useState } from "react";
import { FieldInputProps } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

//ANDRÉS: Modificada la clase para que acepte dos props extra, field y form, que nos los pasa Formik
interface LabelFieldProps {
  //ANDRÉS: Machetazo en esos dos primeros props de Formik porque no sé cómo averiguar de qué tipo son
  field: FieldInputProps<string>;
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
  showEye?: boolean;
}

//ANDRÉS: dos props extra para conectar este componente con Formik
export default function LabelField({
  field,
  label,
  type,
  placeholder,
  id,
  name,
  showEye = false,
}: LabelFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Si el tipo es "password" y showEye es true, cambiamos el tipo a "text"
  const inputType = type === "password" && showEye ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      <div>
        <label htmlFor="password" className="text-sm">
          {label}
        </label>
      </div>

      <div className="flex-1 bg-SecGray flex items-center">
        <input
          //ANDRÉS: Formik nos pasa ciertos props en field (value, onChange, onBlur) y los 
          // expandimos aquí en el input
          {...field}

          className="flex-auto w-[80%] flex-row bg-SecGray p-1 text-PrimBlack text-sm"
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
        />

        {/* Boton de mostrar contraseña con icono de ojo */}
        {showEye && type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="flex-1 items-center h-full items-center justify-center w-[20%] "
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} className="w-4 text-PrimBlack" />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="w-4 text-PrimBlack"
              />
            )}
          </button>
        )}

      </div>

    </div>
  );
}

