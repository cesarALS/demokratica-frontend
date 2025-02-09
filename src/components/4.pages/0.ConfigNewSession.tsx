import EditableTitle from "@/components/0.atoms/3.EditableTitle";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ParticipantsBox from "@/components/3.templates/2.ParticipantsBox";
import LeftSettingsNewSession from "@/components/3.templates/3.LeftSettingsNewSession";
import FormDecision from "@/components/1.molecules/13.NewSessionFormDecision";

export default function ConfigNewSession() {
  return (
    <>
      {/* Ingresar titulo */}
      <EditableTitle title={"Ingresa tu titulo"} />
      {/* Configuraciones */}
      <ContentCard>
        {/* Grid para acomodar todo en responsive */}
        <div className="grid-rows-auto grid gap-x-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-1">
          {/* Configuraciones izquierda */}
          <LeftSettingsNewSession />
          {/* Configuraciones derecha */}
          {/* Participantes */}
          <ParticipantsBox />
        </div>
        {/* FormDecisionNewSession */}
        <FormDecision />
      </ContentCard>
    </>
  );
}
