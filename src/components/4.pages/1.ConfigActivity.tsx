import ContentCard from "@/templates/2.organisms/2.ContentCard";
import GridTwoColsRow from "@/templates/2.organisms/3.GridTwoColsRow";
import LeftSettingsNewActivity from "@/components/3.templates/5.LeftSettingsNewActivity";
import TypeActivityConfig from "../2.organisms/11.TypeActivityConfig";
import TwoButtonFormDecision from "@/templates/1.molecules/13.TwoButtonFormDecision";

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
        <TypeActivityConfig />
      </GridTwoColsRow>
      <TwoButtonFormDecision/>
    </ContentCard>
  );
}
