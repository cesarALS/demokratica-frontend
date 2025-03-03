"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoTitleAlHomepage from "../1.molecules/2.LogoTitleAlHomepage";
import Link from "next/link";
import { motion } from "framer-motion";
import demokraticaRoutes from "@/utils/routeUtils";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "@/utils/ContextProviders/AuthProvider";
import { faHome, faSignOutAlt, faGear, faBullhorn } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenAccountInfo, setOpenAccountInfo] = useState(false);
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

  const userAccountInfoItems = [
    {type: "link", ref: demokraticaRoutes.cuenta.link, text:"Gestionar Cuenta", icon:faGear},
    {type: "link", ref: demokraticaRoutes.centroUsuario.link, text:"Menú de Usuario", icon:faHome},
    {type: "link", ref: demokraticaRoutes.nuevaSesion.link, text:"Crear Sesión", icon:faBullhorn},
    {type: "button", onClick: handleLogout, text: "Cerrar Sesión", icon:faSignOutAlt}
  ] 

  return (
    // Header con todo y la navbar mobile
    <header className="z-50 h-[calc(1/12*100vh)] bg-SecBlue landscape:max-[900px]:h-[70px]">
      {/* Header sin la navbar mobile */}
      <div className="flex grid h-full w-full grid-cols-[auto_50%_auto] items-center px-4 py-2 sm:grid-cols-6 md:grid-cols-12">
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
        <nav className="hidden justify-between sm:col-span-2 sm:col-start-4 sm:flex md:col-span-5 md:col-start-7 md:justify-around">
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
        <div className="justify-self-end">
          {user ? (
            <div className="relative flex h-full w-full items-center justify-center">
              <button
                type="button"
                className="2xl:border-3 flex justify-center rounded-md border-2 border-black bg-PrimCreamCan text-sm hover:scale-110 lg:px-2 lg:text-base xl:px-2 xl:text-lg 2xl:px-2 2xl:text-xl"
                onClick={() => {
                  setOpenAccountInfo(!isOpenAccountInfo);
                }}                
                ref={dropdownButtonRef}
              >
                <UserCircleIcon className="flex h-8 w-9 justify-center text-black lg:w-8" />
              </button>
              {isOpenAccountInfo && (
                <motion.nav                  
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isOpenAccountInfo ? "auto" : 0,
                    opacity: isOpenAccountInfo ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute right-0 top-full mt-2 flex min-w-[60vw] flex-col rounded-2xl border-2 border-black bg-PrimGray p-2 text-black md:min-w-[15vw] text-left"
                  ref={dropdownRef}
                >
                  <div className="w-full rounded-xl flex w-full bg-PrimGray text-center">
                    <p className="text-ls w-full p-2 font-bold">{`Hola, ${user.username}`}</p>
                  </div>
                  <div className="rounded-xl overflow-hidden p-1">
                    {userAccountInfoItems.map(item => (                      
                      item.type === "link" ? (
                        <Link
                          key={item.text}
                          href={item.ref? item.ref : "/"}
                          className="text-ls hover:cursor flex w-full items-center bg-ThirdGray p-2 px-4 gap-4 hover:bg-SecGray first:rounded-t-xl last:rounded-b-xl"
                        >
                          <FontAwesomeIcon icon={item.icon}/>
                          {item.text}
                        </Link>
                      ) : (
                        <button
                          key={item.text}  
                          onClick= {item.onClick}
                          className="text-ls hover:cursor flex w-full items-center bg-ThirdGray p-2 px-4 gap-4 hover:bg-SecGray first:rounded-t-xl last:rounded-b-xl"
                        >
                          <FontAwesomeIcon icon={item.icon}/>
                          {item.text}
                        </button>
                      )
                    ))}
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
