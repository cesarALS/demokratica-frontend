import PlanShow from "@/components/0.atoms/4.PlanShow";
import FechasConfigSesion from "@/components/1.molecules/5.FechasConfigSesion";
import ConfDescription from "@/components/0.atoms/5.ConfDescription";
import TagInput from "@/templates/1.molecules/5.TagInput";

export default function LeftSettingsNewSession() {
  return (
    <div className="flex flex-col gap-y-6">
      {/* Plan actual */}
      <PlanShow plan={0} />
      {/* Fechas */}
      <FechasConfigSesion />
      {/* Descripción */}
      <ConfDescription />
      {/* Tags */}
      <TagInput />
    </div>
  );
}
