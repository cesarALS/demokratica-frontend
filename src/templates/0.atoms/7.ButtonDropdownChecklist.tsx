"use client";

import { useState, useRef, useEffect } from "react";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface ButtonDropdownChecklistProps {
  children?: ReactNode;
  divClassName?: string;
  buttonClassName?: string;
  listClassName?: string;
  checklistItems?: string[];
}

export default function ButtonDropdownChecklist({
  children,
  divClassName,
  buttonClassName,
  listClassName,
  checklistItems,
}: ButtonDropdownChecklistProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  if (!checklistItems) {
    checklistItems = ["Item 1", "Item 2", "Item 3"];
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      dropdownButtonRef.current &&
      !(
        dropdownRef.current.contains(event.target as Node) ||
        dropdownButtonRef.current.contains(event.target as Node)
      )
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative flex w-full flex-col items-center justify-center ${divClassName}`}>
      {/* boton activador */}
      <button
        ref={dropdownButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-center gap-x-4 bg-SecBlue px-4 py-2 hover:bg-PrimBlue ${buttonClassName}`}
      >
        {children}
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} className="size-6 text-white" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="size-6 text-white" />
        )}
      </button>

      {/* dropdown */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        ref={dropdownRef}
        className={`${listClassName} absolute left-0 top-full z-30 w-full overflow-hidden bg-ThirdGray`}
      >
        <ul className="space-y-2 p-2">
          {checklistItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <input type="checkbox" id={`item-${index}`} className="h-4 w-4" />
              <label
                htmlFor={`item-${index}`}
                className="text-PrimBlack hover:text-black"
              >
                {item}
              </label>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
