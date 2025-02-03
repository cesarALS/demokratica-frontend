"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

// La idea de este componente es que solo sea editable cuando se tenga permiso para hacerlo
interface EditableTitleProps {
  title: string;
  editable?: boolean;
  onChange?: (newTitle: string) => void;
}

export default function EditableTitle({
  title,
  editable = true,
  onChange = () => {},
}: EditableTitleProps) {
  // Estado para saber si se está editando el título y el titulo como estado
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cambia el modo del componente cuando se presiona el botón de editar/guardar
  const toggleEditing = () => {
    setIsEditing(!isEditing);
    if (isEditing && onChange) {
      onChange(currentTitle);
    }
  };

  // Cuando se actualiza el componente y se está editando se enfoca el input
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="flex items-center justify-between gap-x-4 rounded-lg border border-2 border-black bg-white px-6 py-2 sm:max-w-[50%]">
      {/* Si se esta editanto se cambia el label por un input */}
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          className="w-full rounded-lg border text-2xl focus:outline-none focus:ring-1 focus:ring-PrimBlack"
        />
      ) : (
        <span className="text-2xl">{currentTitle}</span>
      )}
      {/* Si es editable se muestra el botón de editar */}
      {editable && (
        <button
          onClick={toggleEditing}
          className="flex items-center justify-center rounded-full border-2 border-PrimBlue bg-PrimBlue p-2 hover:bg-SecBlue"
        >
          {/* Se cambia el icono si se está editando */}
          {isEditing ? (
            <FontAwesomeIcon
              className="size-6 text-white"
              icon={faFloppyDisk}
            />
          ) : (
            <FontAwesomeIcon className="size-6 text-white" icon={faPen} />
          )}
        </button>
      )}
    </div>
  );
}
