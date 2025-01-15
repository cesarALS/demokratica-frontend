import clsx from "clsx";

// La idea de este archivo es exportar utilidades clsx útiles para manejar estilos de tailwind que requieran manejos dinámicos
/*
Esta función simplemente devuelve los estilos de links genéricos
*/
const linkStyles = () => 
    clsx (
        `underline hover:text-black text-AccentBlue cursor-pointer`
    );

export { linkStyles }