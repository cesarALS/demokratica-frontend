'use client';

import Link from "next/link";
import { hoverScale } from "@/utils/tailwindUtils";
import demokraticaRoutes from "@/utils/routeUtils";
import TitleLogo from "../0.atoms/1.TitleLogo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const headerRoutes: (keyof typeof demokraticaRoutes)[] = [
  "ayuda",
  "conozcanos",
  "precios",
];

const Header = () => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setVisibleDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setVisibleDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-SecBlue w-full h-16 flex items-center justify-between relative">
      {/* Menú para pantallas pequeñas */}
      <div className="block md:hidden relative w-[15%] flex items-center justify-center h-full">
        <button
          onClick={toggleDropdown}
          className={`p-2 rounded-md ${hoverScale(
            110,
            100
          )}`}
        >
          <FontAwesomeIcon icon={faBars} className="h-5 w-5 flex items-center" />
        </button>

        {/* Dropdown */}
        <div
          ref={dropdownRef}
          className={`absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg z-50 transition-all duration-200 ${
            visibleDropdown
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {headerRoutes.map((route) => (
            <a
              key={route}
              href={demokraticaRoutes[route].link}
              className="block px-4 py-2 text-sm text-right text-gray-700 hover:bg-gray-100"
            >
              {demokraticaRoutes[route].name}
            </a>
          ))}
        </div>
      </div>

      {/* Logo (pantalla pequeña) */}
      <LogoDiv width="w-[70%]" sm={true} />
      {/* Logo (pantalla grande) */}
      <LogoDiv width="w-[50%]" sm={false} />

      {/* Navegación completa para pantallas grandes, y botón de login */}
      
      <div className="hidden md:flex items-center justify-center h-full w-[50%]">
        <nav className="hidden md:flex items-center justify-end pr-3 gap-10 w-[75%] h-full">
          {headerRoutes.map((route) => (
            <HeaderLink
              key={route}
              name={demokraticaRoutes[route].name}
              link={demokraticaRoutes[route].link}
            />
          ))}
        </nav>

        {/* Botón de login */}
        <LoginButton width="w-[25%]" sm={false}/>
      </div>

      {/* Botón de login */}
      <LoginButton width={"w-[15%]"} sm={true}/>
    </header>
  );
};

interface HeaderLinkProps {
  name: string;
  link: string;
}

const HeaderLink = ({ name, link }: HeaderLinkProps) => {
  return (
    <Link
      href={link}
      className={`text-[1.1em] ${hoverScale(115, 100)}`}
    >
      {name}
    </Link>
  );
};

interface LogoDivProps {
  width: string;
  sm: boolean
}

const LogoDiv = ({ width, sm }: LogoDivProps) => {
  return (
    <div 
      className={`${sm ? "block md:hidden" : "hidden md:block"} flex md:flex items-center ${sm ? "justify-center" : "justify-start"} ${width} `}
    >
      <Link href={"/"} passHref title="Demokratica">
        <TitleLogo
          baseFill="#000000"
          classNameGeneral={` ${sm ? "w-[60%] mx-auto" : "pl-5 w-[65%] "} ${hoverScale(110, 100)}`}
        />
      </Link>
    </div>
  );
};

interface LoginButtonProps {
  width: string;
  sm: boolean;
}

const LoginButton = ( { width, sm }: LoginButtonProps) => {
  return (
    <div className={`${sm ? "block md:hidden" : "hidden md:block"} flex md:flex items-center justify-center ${width} h-full`}>
    <Link
      href={demokraticaRoutes.login.link}
      passHref
      title="Loguearse"
      className={`flex items-center justify-center bg-PrimCreamCan rounded-md border-[0.15em] border-black px-[10%] py-2 text-[0.8em] md:text-[1.2em] md:px-[15%] md:py-1 ${hoverScale(
        110,
        100
      )}`}
    >
      {demokraticaRoutes.login.name}
    </Link>
  </div>    
  )
};


export default Header;
