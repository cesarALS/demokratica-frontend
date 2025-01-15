import AssetCentrHmpg from "@/templates/0.atoms/3.AssetCentrHmpg";

export default function Home() {
  // A react fragment, cause we don't need a wrapping element

  return (
    <>
      {/* Contenedor gradiente parte inicial homepage */}
      {/* 11/12*100 = 91.667, es el height restante del viewport quitando el header y teniendo en cuenta las proporciones */}
      <div
        className="flex flex-1 flex-col flex-initial
       pt-10 pb-16 w-full h-[91.667vh] bg-gradient-to-b from-SecBlue to-white px-20 items-center"
      >
        {/* Contenedor para centrar todo */}
        <div className="h-full justify-between grid sm:grid-cols-2 sm:items-center lg:w-[60%] lg:justify-center lg:pb-20">
          {/* Frase grande */}
          <div className="text-3xl font-semibold italic">
            Las decisiones
            <br />
            grupales son la
            <br />
            <span className="text-PrimBlack">base</span> del <br />
            <span className="text-AccentBlue">progreso</span>
          </div>
          {/* Asset Central */}
          <AssetCentrHmpg classNameGeneral="w-full" />
          {/* Frase de seguimiento */}
          <div className="text-2xl font-semibold italic self-end sm:self-start">
            ¿Deseas <span className="text-AccentCreamCan">facilitar</span> <br />
            las tuyas?
          </div>
        </div>
      </div>
    </>
  );
}
