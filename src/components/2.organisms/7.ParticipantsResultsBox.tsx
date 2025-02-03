import ParticipantsResultsEntry from "@/templates/2.organisms/0.ParticipantsResultsEntry";

export default function ParticipantsResultsBox() {
  // Aquí se deberían tratar los resultados de la API

  const userEntry = {
    name: "Nombre",
    role: "Rol",
    email: "email@correo.com", // El email está hidden por debajo de small
    invitationState: "Pendiente",
  };

  return (
    <div className="flex w-full flex-col gap-y-2 border-2 border-PrimBlack bg-ThirdGray p-4">
      {/* Results */}
      {/* No sé como vayan a manejar esto, esto es solo un EJEMPLO */}
      <ParticipantsResultsEntry {...userEntry} />
    </div>
  );
}
