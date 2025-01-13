"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoTitleAlHomepage from "../1.molecules/3.LogoTitleAlHomepage";
import Link from "next/link";
import demokraticaRoutes from "@/utils/routeUtils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

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

  interface headerItem {
    name: string;
    link: string;
  }

  const headerItems: headerItem[] = [
    demokraticaRoutes.ayuda,
    demokraticaRoutes.conocenos,
    demokraticaRoutes.planes,
  ];

  return (
    // Header con todo y la navbar mobile
    <header className="bg-SecBlue h-[calc(1/12*100vh)] z-10">
      {/* Header sin la navbar mobile */}
      <div className="flex h-[calc(1/12*100vh)] w-full grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 items-center py-2 px-4">
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex border-2 border-black p-1 flex-none items-center justify-center rounded-md bg-PrimBlue hover:scale-110"
            ref={dropdownButtonRef}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="h-5 flex items-center text-black"
            />
          </button>
        </div>

        {/* Logo */}
        <LogoTitleAlHomepage
          classNameLink="flex-none justify-self-center sm:justify-self-start sm:col-span-2 md:col-span-3"
          classNameLogo="flex items-center justify-center w-full"
        />

        {/* Nav Links */}
        <nav className="hidden sm:flex sm:col-start-4 sm:col-span-2 md:col-start-9 md:col-span-3 justify-between">
          {headerItems.map((item, index) => (
            <Link href={item.link} key={index} className="hover:scale-110">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botón de ingreso */}
        <div className="justify-self-end sm:justify-self-end">
          <Link
            href={demokraticaRoutes.login.link}
            type="submit"
            className="px-1 flex text-center bg-PrimCreamCan border-2 border-black rounded-md text-sm hover:scale-110"
          >
            Ingresa
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="md:hidden bg-SecBlue border-b border-1s border-black"
          ref={dropdownRef}
        >
          {headerItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="block px-4 py-2 hover:border-black hover:border-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
