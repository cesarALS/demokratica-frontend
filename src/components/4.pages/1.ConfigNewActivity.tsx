import ContentCard from "@/templates/2.organisms/2.ContentCard";
import LeftSettingsNewActivity from "@/components/3.templates/5.LeftSettingsNewActivity";
import GridTwoColsRow from "@/templates/2.organisms/3.GridTwoColsRow";

export default function ConfigNewActivity() {
  return (
    <ContentCard>
      {/* Grid para acomodar todo en responsive */}
      <GridTwoColsRow>
        {/* Configuraciones izquierda */}
        <LeftSettingsNewActivity />
        {/* Configuraciones derecha */}
        {/* Especificas al tipo de actividad */}
      </GridTwoColsRow>
    </ContentCard>
  );
}
