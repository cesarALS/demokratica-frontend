"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoTitleAlHomepage from "../1.molecules/2.LogoTitleAlHomepage";
import Link from "next/link";
import { motion } from "framer-motion";
import demokraticaRoutes from "@/utils/routeUtils";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "@/utils/AuthProvider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);    

  const [ isOpenAccountInfo, setOpenAccountInfo ] = useState(false);
  const { user, handleLogout } = useAuthContext(); 
  
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
      setOpenAccountInfo(false);
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
    <header className="z-50 h-[calc(1/12*100vh)] bg-SecBlue">
      {/* Header sin la navbar mobile */}
      <div className="flex grid h-[calc(1/12*100vh)] w-full grid-cols-3 items-center px-4 py-2 sm:grid-cols-6 md:grid-cols-12">
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-none items-center justify-center rounded-md border-2 border-black bg-PrimBlue p-1 hover:scale-110"
            ref = {dropdownButtonRef}
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
          {user ? (
            <div className="relative flex h-full w-full items-center justify-center">
              <button
                type="button"
                className="2xl:border-3 flex justify-center rounded-md border-2 border-black bg-PrimCreamCan text-sm hover:scale-110 lg:px-2 lg:text-base xl:px-2 xl:text-lg 2xl:px-2 2xl:text-xl"
                onClick={() => { setOpenAccountInfo(!isOpenAccountInfo) }}
                ref={dropdownButtonRef}
              >
                <UserCircleIcon className="flex h-8 w-6 justify-center text-black" />
              </button>
              {isOpenAccountInfo && (
                <motion.nav
                  initial={false}
                  animate={{ height: isOpenAccountInfo ? "auto" : 0, opacity: isOpenAccountInfo ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}                    
                  className="absolute top-full right-0 flex flex-col min-w-[60vw] md:min-w-[25vw] text-black bg-PrimGray mt-2 p-2 rounded-2xl border-2 border-black"
                  ref = {dropdownRef}
                >
                  <div className="flex w-full text-end bg-PrimGray w-fullrounded-xl">
                    <p className="w-full p-2 text-ls font-bold">{`Hola, ${user.username}`}</p>
                  </div>
                  <div className="rounded-xl">                    
                    <Link 
                      href={demokraticaRoutes.cuenta.link}
                      className="flex w-full items-center justify-end p-2 rounded-t-xl text-ls bg-ThirdGray hover:bg-SecGray hover:cursor"                                             
                    >
                      Gestionar Cuenta
                    </Link>                     
                    <Link 
                      href={demokraticaRoutes.centroUsuario.link}
                      className="flex w-full items-center justify-end p-2 text-ls bg-ThirdGray hover:bg-SecGray hover:cursor"                                             
                    >
                      Mirar Sesiones
                    </Link>                                                            
                    <button                        
                      onClick={handleLogout}
                      className="flex w-full items-center justify-end p-2 rounded-b-xl text-ls bg-ThirdGray hover:bg-SecGray hover:cursor"
                    >
                      Cerrar Sesión
                    </button>
                  </div>                              
                </motion.nav>
              )}
            </div>
          ) : (
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
        className="border-1s overflow-hidden border-b border-black bg-SecBlue sm:hidden"
        ref={dropdownRef}
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
