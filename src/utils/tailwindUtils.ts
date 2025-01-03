import clsx from "clsx";

// La idea de este archivo es exportar utilidades clsx útiles para manejar estilos de tailwind que requieran manejos dinámicos

/*
Esta función sirve para añadir a los estilos de un contenedor, de forma que se pueda manejar la escala y la duración. 
Cuidado: Tailwind solo tiene unos valores predefinidos de scale. Para añadir más, ir a tailwind.config.ts, y añadirlas en
extend: {      scale: {115: '1.15'}}
*/
const hoverScale = (scale: number, duration: number) => 
    clsx(
        `transition-transform transform duration-${duration} hover:scale-${scale}`
    );

export { hoverScale }