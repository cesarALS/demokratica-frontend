"use client";

import { useState } from "react";
import { FieldInputProps } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface LabelFieldProps {
  field?: FieldInputProps<string>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;   
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;  
  divClassName?:string;
  fieldClassName?: string;
  fieldLabelClassName?: string;
  fieldTextClassName?: string;
  showEye?: boolean;
}

export default function LabelField({
  field,
  onChange,
  label,
  type,
  placeholder,
  id,
  name,
  divClassName,
  fieldClassName,
  fieldLabelClassName,
  fieldTextClassName,
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
    <div className={`flex flex-col ${divClassName}`}>
      <div>
        <label htmlFor={id} className={`${fieldLabelClassName}`}>
          {label}
        </label>
      </div>

      <div className={`${fieldClassName} bg-SecGray flex items-center`}>
        <input
          {...field}
          className={`flex-auto flex-row bg-SecGray p-1 text-PrimBlack ${fieldTextClassName}`}
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={field?.onChange ?? onChange}
        />

        {/* Boton de mostrar contraseña con icono de ojo */}
        {showEye && type === "password" && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="flex-1 flex items-center justify-end px-1 w-[20%] h-full"
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
