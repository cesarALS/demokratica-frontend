// "use client";

// import { useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

// interface EditableTitleProps {
//   title: string;
//   editable?: boolean;
//   className?: string;
//   textClassname?: string;
//   buttonOverlay?: boolean; // Nueva prop para superponer el botón
//   onChange?: (newTitle: string) => void;
// }

// export default function EditableTitle({
//   title,
//   editable = true,
//   className = "",
//   textClassname = "",
//   buttonOverlay = false,
//   onChange = () => {},
// }: EditableTitleProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTitle, setCurrentTitle] = useState(title);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const toggleEditing = () => {
//     setIsEditing((prev) => {
//       const newEditingState = !prev;
//       if (!newEditingState && onChange) {
//         setTimeout(() => onChange(currentTitle), 0); // Posponer actualización
//       }
//       return newEditingState;
//     });
//   };  

//   // Enfocar el input automáticamente al entrar en modo edición
//   useEffect(() => {
//     if (isEditing && inputRef.current) {
//       setTimeout(() => inputRef.current?.focus(), 0);
//     }
//   }, [isEditing]);

//   // Detectar clics fuera del componente para salir del modo edición
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target as Node)
//       ) {
//         setIsEditing(false);
//         onChange(currentTitle); // Guarda el título al salir
//       }
//     };

//     if (isEditing) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isEditing, currentTitle, onChange]);

//   return (
//     <div ref={containerRef} className={`${className} relative flex items-center px-6`}>
//       {/* Input o texto */}
//       {isEditing ? (
//         <input
//           ref={inputRef}
//           type="text"
//           value={currentTitle}
//           onChange={(e) => setCurrentTitle(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && toggleEditing()}
//           className={`${textClassname} w-full rounded-lg border text-2xl focus:outline-none focus:ring-1 focus:ring-PrimBlack`}
//         />
//       ) : (
//         <span className={`${textClassname} text-2xl`}>{currentTitle}</span>
//       )}

//       {/* Botón de editar/guardar */}
//       {editable && (
//         <button
//           onClick={toggleEditing}
//           className={`flex items-center justify-center rounded-full border-2 border-PrimBlue bg-PrimBlue p-2 hover:bg-SecBlue 
//             ${buttonOverlay ? "absolute right-0 top-0 z-10 translate-x-1/2 -translate-y-1/2 shadow-lg" : "ml-2"}`}
//         >
//           {isEditing ? (
//             <FontAwesomeIcon className="size-6 text-white" icon={faFloppyDisk} />
//           ) : (
//             <FontAwesomeIcon className="size-6 text-white" icon={faPen} />
//           )}
//         </button>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

// interface EditableTitleProps {
//   title: string;
//   editable?: boolean;
//   className?: string;
//   textClassname?: string;
//   buttonOverlay?: boolean; 
//   placeholder?: string; // Nuevo: Placeholder opcional
//   onChange?: (newTitle: string) => void;
// }

// export default function EditableTitle({
//   title,
//   editable = true,
//   className = "",
//   textClassname = "",
//   buttonOverlay = false,
//   placeholder = "", // Valor por defecto: sin placeholder
//   onChange = () => {},
// }: EditableTitleProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTitle, setCurrentTitle] = useState(title || placeholder); // Si no hay título, usa el placeholder
//   const inputRef = useRef<HTMLInputElement>(null);

//   const toggleEditing = () => {
//     setIsEditing((prev) => {
//       const newEditingState = !prev;
//       if (!newEditingState) {
//         setTimeout(() => onChange(currentTitle), 0); // Guarda al salir
//       }
//       return newEditingState;
//     });
//   };

//   useEffect(() => {
//     if (isEditing) {
//       inputRef.current?.focus();
//       if (currentTitle === placeholder) {
//         setCurrentTitle(""); // Si el texto es el placeholder, lo borra al entrar
//       }
//     } else if (currentTitle === "") {
//       setCurrentTitle(placeholder); // Si el usuario no escribe nada, vuelve el placeholder
//     }
//   }, [isEditing]);

//   return (
//     <div className={`${className} relative flex items-center px-6`}>
//       {isEditing ? (
//         <input
//           ref={inputRef}
//           type="text"
//           value={currentTitle}
//           onChange={(e) => setCurrentTitle(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && toggleEditing()}
//           className={`${textClassname} w-full rounded-lg border text-2xl focus:outline-none focus:ring-1 focus:ring-PrimBlack`}
//         />
//       ) : (
//         <span className={`${textClassname} text-2xl ${currentTitle === placeholder ? "text-gray-400 italic" : ""}`}>
//           {currentTitle}
//         </span>
//       )}

//       {editable && (
//         <button
//           onClick={toggleEditing}
//           className={`flex items-center justify-center rounded-full border-2 border-PrimBlue bg-PrimBlue p-2 hover:bg-SecBlue 
//             ${buttonOverlay ? "absolute right-0 top-0 z-10 translate-x-1/2 -translate-y-1/2 shadow-lg" : "ml-2"}`}
//         >
//           {isEditing ? (
//             <FontAwesomeIcon className="size-6 text-white" icon={faFloppyDisk} />
//           ) : (
//             <FontAwesomeIcon className="size-6 text-white" icon={faPen} />
//           )}
//         </button>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

interface EditableTitleProps {
  title: string;
  editable?: boolean;
  className?: string;
  textClassname?: string;
  buttonOverlay?: boolean; 
  placeholder?: string;
  onChange?: (newTitle: string) => void;
}

export default function EditableTitle({
  title,
  editable = true,
  className = "",
  textClassname = "",
  buttonOverlay = false,
  placeholder = "",
  onChange = () => {},
}: EditableTitleProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title || placeholder);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleEditing = () => {
    setIsEditing((prev) => {
      const newEditingState = !prev;
      if (!newEditingState) {
        setTimeout(() => onChange(currentTitle), 0);
      }
      return newEditingState;
    });
  };

  // 🔹 Manejo de clics fuera del input para guardar cambios
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isEditing && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsEditing(false);
        if (currentTitle.trim() === "") {
          setCurrentTitle(placeholder); // Restaurar placeholder si está vacío
        }
        onChange(currentTitle);
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, currentTitle]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      if (currentTitle === placeholder) {
        setCurrentTitle(""); 
      }
    } else if (currentTitle.trim() === "") {
      setCurrentTitle(placeholder);
    }
  }, [isEditing]);

  return (
    <div ref={containerRef} className={`${className} relative flex items-center px-6`}>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && toggleEditing()}
          className={`${textClassname} w-full rounded-lg border text-2xl focus:outline-none focus:ring-1 focus:ring-PrimBlack px-2`}
        />
      ) : (
        <span className={`${textClassname} text-2xl ${currentTitle === placeholder ? "text-gray-400 italic" : ""}`}>
          {currentTitle}
        </span>
      )}

      {editable && (
        <button
          onClick={toggleEditing}
          className={`flex items-center justify-center rounded-full border-2 border-PrimBlue bg-PrimBlue p-2 hover:bg-SecBlue 
            ${buttonOverlay ? "absolute right-0 top-0 z-10 translate-x-1/2 -translate-y-1/2 shadow-lg" : "ml-2"}`}
        >
          {isEditing ? (
            <FontAwesomeIcon className="size-6 text-white" icon={faFloppyDisk} />
          ) : (
            <FontAwesomeIcon className="size-6 text-white" icon={faPen} />
          )}
        </button>
      )}
    </div>
  );
}
