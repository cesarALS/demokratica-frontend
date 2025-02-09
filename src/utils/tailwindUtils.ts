import clsx from "clsx";

// La idea de este archivo es exportar utilidades útiles para manejar estilos de tailwind

/*
Esta función simplemente devuelve los estilos de links genéricos
*/
export const linkStyles = () => clsx("underline hover:text-black text-AccentBlue cursor-pointer");
