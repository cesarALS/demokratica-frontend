import PlanShow from "@/templates/0.atoms/14.PlanShow";
import RemainderSessions from "@/components/0.atoms/13.RemainderSessions";
import FechasConfigSesion from "@/templates/1.molecules/7.FechasConfigSesion";
import TagInput from "@/templates/1.molecules/5.TagInput";

export default function LeftSettingsNewActivity() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center text-2xl">Agregar Actividad</div>
      {/* Información del plan actual */}
      <PlanShow plan={0} />
      {/* Actividades restantes en esta sesión */}
      <RemainderSessions plan={0} remainder={0} />
      {/* Fechas */}
      <FechasConfigSesion />
      {/* Tags */}
      <TagInput />
    </div>
  );
}
