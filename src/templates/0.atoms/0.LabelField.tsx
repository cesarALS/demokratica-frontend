"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface LabelFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
  showEye?: boolean;
}

export default function LabelField({
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

  // Si showEye es true, se cambia el tipo de input a text, se asume que si se quiere mostrar el ojo es porque el input por default es password
  if (showEye) {
    type = "text";
  }

  return (
    <div>
      <div>
        <label htmlFor="password" className="text-sm">
          {label}
        </label>
      </div>

      <div className="flex-1 bg-SecGray flex items-center">
        <input
          className="flex-auto w-[80%] flex-row bg-SecGray p-1 text-PrimBlack text-sm"
          type={!showEye || showPassword ? type : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
        />

        {/* Boton de mostrar contraseña con icono de ojo */}
        {showEye && (
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
