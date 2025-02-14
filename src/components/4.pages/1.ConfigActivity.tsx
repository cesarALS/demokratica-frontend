import ContentCard from "@/templates/2.organisms/2.ContentCard";
import LeftSettingsNewActivity from "@/components/3.templates/5.LeftSettingsNewActivity";
import GridTwoColsRow from "@/templates/2.organisms/3.GridTwoColsRow";

export default function ConfigActivity() {
  return (
    <ContentCard>
      <div className="flex items-center text-2xl">Agregar Actividad</div>
      {/* Grid para acomodar todo en responsive */}
      <GridTwoColsRow>
        {/* Configuraciones izquierda */}
        <LeftSettingsNewActivity />
        {/* Configuraciones derecha */}
        {/* Especificas al tipo de actividad */}
        <div className="flex flex-col gap-y-6">
          {/* TODO: Dependiendo del tipo de actividad */}
        </div>
      </GridTwoColsRow>
    </ContentCard>
  );
}
