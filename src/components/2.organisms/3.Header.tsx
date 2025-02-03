"use client";
import { useState, useRef, useEffect } from "react";
import { useAuthContext } from "@/utils/AuthProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UserCircleIcon } from '@heroicons/react/24/solid';

import LogoTitleAlHomepage from "../1.molecules/2.LogoTitleAlHomepage";

import Link from "next/link";
import { motion } from "framer-motion";
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

  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const { user, handleLogout } = useAuthContext(); 

  return (
    // Header con todo y la navbar mobile
    <header className="z-50 h-[calc(1/12*100vh)] bg-SecBlue">
      {/* Header sin la navbar mobile */}
      <div className="flex grid h-[calc(1/12*100vh)] w-full grid-cols-3 items-center px-4 py-2 sm:grid-cols-6 md:grid-cols-12">
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-none items-center justify-center rounded-md border-2 border-black bg-PrimBlue p-1 hover:scale-110"
            ref={dropdownButtonRef}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="flex h-5 items-center text-black"
            />
          </button>
        </div>

        {/* Logo */}
        <LogoTitleAlHomepage
          classNameLink="flex-none justify-self-center sm:justify-self-start sm:col-span-2 md:col-span-3"
          classNameLogo="flex items-center justify-center w-full"
        />

        {/* Nav Links Desktop*/}
        <nav className="hidden justify-between sm:col-span-2 sm:col-start-4 sm:flex md:col-span-3 md:col-start-9">
          {headerItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="hover:scale-110 lg:text-base xl:text-lg 2xl:text-xl"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botón de ingreso o de usuario */}

        <div className="justify-self-end sm:justify-self-end">
          {user?           
              <div className="w-full h-full flex items-center justify-center relative">
                <button 
                  type="button" 
                  className="flex justify-center bg-PrimCreamCan border-2 border-black rounded-md text-sm lg:text-base xl:text-lg 2xl:text-xl hover:scale-110 2xl:border-3 2xl:px-2 xl:px-2 lg:px-2"              
                  onMouseEnter={() => setShowLogoutMessage(true)}
                  onMouseLeave={() => setShowLogoutMessage(false)}
                  onClick={handleLogout}
                >
                  <UserCircleIcon className="text-black w-6 h-8 flex justify-center"/> 
                </button>
                {showLogoutMessage && (
                  <div className="absolute top-full mt-2 px-2 py-2 bg-gray-100 text-black rounded-md border border-gray-400 shadow-lg text-center text-sm">
                    {`Cerrar sesión de ${user.username},\n ${user.email},\n plan: ${user.plan}\n`}
                  </div>                  
                )}
              </div>
            : 
              <Link
              href={demokraticaRoutes.login.link}
              type="submit"
              className="2xl:border-3 flex rounded-md border-2 border-black bg-PrimCreamCan px-1 text-center text-sm hover:scale-110 lg:px-2 lg:text-base xl:px-2 xl:text-lg 2xl:px-2 2xl:text-xl"
            >
              Ingresa
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        ref={dropdownRef}
        className="border-1s overflow-hidden border-b border-black bg-SecBlue sm:hidden"
      >
        {headerItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="block px-4 py-2 hover:border-2 hover:border-black"
          >
            {item.name}
          </Link>
        ))}
      </motion.nav>
    </header>
  );
}
