# Demokratica

Frontend del Proyecto Demokratica. Web para crear consensos por medio de diferentes herramientas democráticas

## Generalidades del proyecto

Demokratica le permite usar varios métodos de creación de consenso diferentes, como Planning Poker, Tideman Ranks, etc.
También le permite hacer trazabilidad de las reuniones de su equipo, donde se haga un seguimiento de lo que se ha decidido, lo que se ha convenido, etc.
En particular, Demokratica es muy útil para equipos ágiles. 

# Herramientas

El Frontend está desarrollado con **React**, utilizando el framework **Nextjs**.

Se utiliza **Tailwind** para los diseños css de la aplicación

Se utiliza **Jest** para hacer tests unitarios.

# Instrucciones básicas de ejecución
Recordar que, cuando se descarga el repositorio, es necesario tener instalado node.js, y correr el comando:
    npm i

Esto instala todos los paquetes. 

Para correr rápidamente el proyecto local, simplemente se debe usar:
    npm run dev

Una vez se ha ejecutado npm run dev localmente, abrir:
    http://localhost:3000
**Es importante usar explícitamente el http://, para las comunicaciones con el backend. Esto previene errores CORS**

Para correr el proyecto local como si fuera el deploy, usar
    npm run build

Para ejecutar los tests unitarios, usar el comando:
    npm run test

Por si fuera necesario, para crear la imagen del docker:
    docker build -t nextjs-docker .

# Algunas convenciones

La app utiliza AppRouter, por lo que las rutas se encuentran dentro de la carpeta /src/app

Los componentes de React reutilizables, se ubican en la carpeta /src/templates

Los componentes de React no reutilizables, se ubican en la carpeat /src/components

Ambas carpetas siguen la convención atoms-molecules-organisms-templates-pages

# Desarrolladores del proyecto:
Este proyecto es desarrollado por:
- David Felipe Marín Rosas
- Andrés Felipe Rojas Aguilar
- Julián David Huertas Dominguez
- César Arthuro Lemos Silva