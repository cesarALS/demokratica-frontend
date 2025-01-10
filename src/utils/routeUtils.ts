// La idea es que aquí se definan las rutas de las páginas

// ¿Por qué? Porque si cambiamos el nombre de una ruta, la idea es que no se vaya a tener que cambiar en toda parte del código. Aquí la cambiaríamos, simplemente

const demokraticaRoutes = {
    ayuda: {name: "Ayuda", link: "/ayuda"},
    conozcanos: {name: "Conózcanos", link: "/conozcanos"},
    precios: {name: "Precios", link: "/precios"},
    login: {name: "Ingrese", link: "/ingrese"},
    register: {name: "Únase", link: "/unase"},
};

export default demokraticaRoutes;