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

      {/* Boton de mostrar contraseña con icono de ojo */}
      <div className="relative">
        <input
          className="bg-SecGray w-full p-1 text-PrimBlack text-sm"
          type={!showEye || showPassword ? type : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 h-full right-0 flex items-center pr-2"
        >
          {showEye &&
            (showPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="h-4 text-PrimBlack"
              />
            ) : (
              <FontAwesomeIcon icon={faEye} className="h-4 text-PrimBlack" />
            ))}
        </button>
      </div>
    </div>
  );
}
