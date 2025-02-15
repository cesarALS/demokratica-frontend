import SimpleButton from "../0.atoms/11.SimpleButton";
import ActivityHeader from "../1.molecules/9.ActivityHeader";
import GridTwoColsRow from "./3.GridTwoColsRow";
interface TidemanActivityProps {
  mode: string;
  tags: string[];
  pregunta: string;
}

export default function TidemanActivity({
  mode,
  tags,
  pregunta,
}: TidemanActivityProps) {
  let contenido;

  if (mode === "resultados") {
    contenido = (
      <>
        <GridTwoColsRow>
          <div className="flex items-center justify-center rounded-md border border-black bg-white p-4 text-center text-2xl">
            {pregunta}
          </div>
          <div className="rounded-md border border-black bg-white p-4 text-center text-xl">
            Recuadro para mostrar los resultadosRecuadro para mostrar los resultadosRecuadro para mostrar los resultadosRecuadro para mostrar los resultadosRecuadro para mostrar los resultadosRecuadro para mostrar los resultados
          </div>
        </GridTwoColsRow>
      </>
    );
  } else if (mode === "participar") {
    contenido = (
      <>
        <GridTwoColsRow>
          <div className="flex items-center justify-center rounded-md border border-black bg-white p-4 text-center text-2xl ">
            {pregunta}
          </div>
          <div className="rounded-md border border-black bg-white p-4 text-center text-xl">
            Recuadro para participarRecuadro para participarRecuadro para participarRecuadro para participarRecuadro para participarRecuadro para participarRecuadro para participarRecuadro para participarRecuadro para participar
          </div>
        </GridTwoColsRow>
        <div className="flex items-center justify-center gap-x-4 py-2 text-xl">
          <SimpleButton
            buttonText="Enviar"
            className="bg-PrimCreamCan hover:bg-SecCreamCan"
          />
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-col gap-y-4 rounded-md border border-black bg-ThirdGray p-4">
      <ActivityHeader tags={tags} />
      {contenido}
    </div>
  );
}
