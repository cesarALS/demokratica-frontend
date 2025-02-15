import PlanShow from "@/templates/0.atoms/14.PlanShow";
import FechasConfigSesion from "@/templates/1.molecules/7.FechasConfigSesion";
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
