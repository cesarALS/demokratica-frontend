// La idea es que aquí se definan las rutas de las páginas

// ¿Por qué? Porque si cambiamos el nombre de una ruta, la idea es que no se vaya a tener que cambiar en toda parte del código. Aquí la cambiaríamos, simplemente

const demokraticaRoutes = {
  // Informativos
  ayuda: { name: "Ayuda", link: "/ayuda" },
  conocenos: { name: "Conócenos", link: "/conocenos" },
  planes: { name: "Planes", link: "/planes" },
  // Registro
  login: { name: "Ingresa", link: "/ingresa" },
  register: { name: "Únete", link: "/unete" },
  // TODO Importantes para el usuario
  cookies: { name: "Cookies", link: "/cookies" },
  userTerms: { name: "Términos de uso", link: "/terminos-de-uso" },
};

export default demokraticaRoutes;
