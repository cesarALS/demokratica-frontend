"use client";

import { useState } from "react";
import { FieldInputProps } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface LabelFieldProps {
  field: FieldInputProps<string>;
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
  showEye?: boolean;
}

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
  const inputType =
    type === "password" && showEye
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <>
      <div>
        <label htmlFor="password" className="text-sm">
          {label}
        </label>
      </div>

      <div className="flex-1 bg-SecGray flex items-center">
        <input
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
    </>
  );
}
