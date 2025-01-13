// La idea es que aquí se definan las rutas de las páginas

// ¿Por qué? Porque si cambiamos el nombre de una ruta, la idea es que no se vaya a tener que cambiar en toda parte del código. Aquí la cambiaríamos, simplemente

const demokraticaRoutes = {
  ayuda: { name: "Ayuda", link: "/ayuda" },
  conocenos: { name: "Conocenos", link: "/conocenos" },
  planes: { name: "Planes", link: "/planes" },
  login: { name: "Ingresa", link: "/ingresa" },
  register: { name: "Unete", link: "/unete" },
};

export default demokraticaRoutes;
