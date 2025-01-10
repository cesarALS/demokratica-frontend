import AssetCentrHmpg from "@/templates/0.atoms/5.AssetCentrHmpg";

export default function Home() {
  // A react fragment, cause we don't need a wrapping element

  return (
    <>
      {/* Contenedor parte inicial homepage */}
      {/* 11/12*100 = 91.667, es el height restante del viewport quitando el header y teniendo en cuenta las proporciones */}
      <div
        className="flex flex-col flex-initial items-center
      justify-between w-full h-[91.667vh]"
      >
        {/* Frase grande */}
        <div>
          Las decisiones
          <br />
          grupales son la
          <br />
          <span>base</span> del <br />
          <span>progreso</span>
        </div>
        {/* Asset Central */}
        <AssetCentrHmpg />
        {/* Frase de seguimiento */}
        <div>
          Deseas <span>facilitar</span> <br />
          las tuyas?
        </div>
        {/* Boton de ingreso solo en modo pequeño */}
      </div>
    </>
  );
}
