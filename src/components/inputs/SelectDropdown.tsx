"use client";

import { useState, useRef, useEffect } from "react";

interface SelectWithFilterProps {
  passAndRestartValue?: boolean;
  initialSelectedItem: number;
  options: string[];
  placeholder: string;
  inputClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
  handleValueChange: (lastValue: string, value: string) => void;
}

export default function SelectDropdown({
  passAndRestartValue = false,
  initialSelectedItem,
  options,
  placeholder,
  inputClassName,
  listClassName,
  listItemClassName,
  handleValueChange,
}: SelectWithFilterProps) {
  // Set default options if none are provided
  if (!listClassName) {
    listClassName = "bg-white border border-gray-200 rounded-lg shadow-md";
  }

  const [lastValue, setLastValue] = useState<string>(
    options[initialSelectedItem],
  );
  const [value, setValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setIsOpen(true);

    // Filter options based on input
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    );

    // Check if input matches any option
    if (options.includes(inputValue)) {
      handleValueChange(lastValue, inputValue);
      setLastValue(inputValue);
      if (passAndRestartValue) {
        setLastValue(options[initialSelectedItem]);
        setValue(options[initialSelectedItem]);
      }
    }
  };

  // Handle option selection
  const handleSelect = (selectedOption: string) => {
    setValue(selectedOption);
    // Check if input matches any option
    if (options.includes(selectedOption)) {
      handleValueChange(lastValue, selectedOption);
      setLastValue(selectedOption);
      if (passAndRestartValue) {
        setLastValue(options[initialSelectedItem]);
        setValue(options[initialSelectedItem]);
      }
    }
    setIsOpen(false);
    inputRef.current?.blur();
  };

  function handleBlur() {
    if (!options.includes(value)) {
      setValue(lastValue);
    }
  }

  // Close dropdown when clicking outside (with delay for selection)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        listRef.current &&
        !(
          inputRef.current.contains(event.target as Node) ||
          listRef.current.contains(event.target as Node)
        )
      ) {
        setTimeout(() => setIsOpen(false), 100); // Delay to allow selection
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-xs">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={() => setIsOpen(true)}
        onBlur={handleBlur}
        className={inputClassName}
        placeholder={placeholder}
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul
          ref={listRef}
          className={`absolute left-0 z-30 mt-1 max-h-40 w-full overflow-auto ${listClassName}`}
        >
          {filteredOptions.map((option) => (
            <li
              key={option}
              className={`cursor-pointer p-2 ${listItemClassName}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
