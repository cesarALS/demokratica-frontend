"use client";

import { useState, useRef, useEffect } from "react";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface ButtonDropdownSelectorProps {
  children?: ReactNode;
  buttonClassName?: string;
  listClassName?: string;
  checklistItems?: string[];
  initialSelectedItem?: number;
}

export default function ButtonDropdownSelector({
  buttonClassName,
  listClassName,
  checklistItems,
  initialSelectedItem = 0,
}: ButtonDropdownSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  if (!checklistItems) {
    checklistItems = ["Item 1", "Item 2", "Item 3"];
  }

  const handleSelection = (index: number) => {
    setSelectedItem(index);
    setIsOpen(false);
  };

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
    <div className="relative flex w-full flex-col items-center justify-center">
      {/* boton activador */}
      <button
        ref={dropdownButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-center gap-x-4 bg-SecBlue px-4 py-2 hover:bg-PrimBlue ${buttonClassName}`}
      >
        <span className="text-lg font-extrabold text-white">
          {checklistItems[selectedItem]}
        </span>
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
        <ul>
          {checklistItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-2 text-PrimBlack hover:bg-SecGray hover:text-black"
              onClick={() => handleSelection(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
