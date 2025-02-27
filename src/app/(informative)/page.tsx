import AssetCentrHmpg from "@/templates/0.atoms/3.AssetCentrHmpg";

export default function Home() {
  // A react fragment, cause we don't need a wrapping element

  return (
    <>
      {/* Contenedor gradiente parte inicial homepage */}
      {/* 11/12*100 = 91.667, es el height restante del viewport quitando el header y teniendo en cuenta las proporciones */}
      <div className="flex h-[91.667vh] w-full flex-1 flex-initial flex-col items-center bg-gradient-to-b from-SecBlue to-white px-20 pb-16 pt-10 landscape:py-0">
        {/* Contenedor para centrar todo */}
        <div className="grid h-full justify-between sm:grid-cols-2 sm:items-center sm:py-[20%] lg:w-[60%] lg:justify-center lg:py-[2.5%] lg:pb-20 landscape:max-lg:h-[78%] landscape:max-lg:py-0">
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
          <div className="row-span-2 flex w-full items-center justify-center">
            <AssetCentrHmpg classNameGeneral="w-full" />
          </div>
          {/* Frase de seguimiento */}
          <div className="self-end text-2xl font-semibold italic sm:self-center">
            ¿Deseas <span className="text-AccentCreamCan">facilitar</span>{" "}
            <br />
            las tuyas?
          </div>
        </div>
      </div>
    </>
  );
}
