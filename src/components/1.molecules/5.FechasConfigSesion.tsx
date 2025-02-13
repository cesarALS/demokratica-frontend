import DatePickerComponent from "@/templates/0.atoms/13.DatePickerComponent";

export default function FechasConfigSesion() {
  // Fecha de ejemplo
  const initialDate = new Date();

  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-4 text-lg">
      <div className="text-xl">Fechas:</div>
      <div className="flex w-full flex-col items-start justify-between gap-y-2">
        <div>Inicio:</div>
        <div className="flex items-center justify-start">
          <DatePickerComponent initialDate={initialDate} />
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-y-2">
        <div>Fin:</div>
        <div className="flex items-center justify-start">
          <DatePickerComponent initialDate={initialDate} />
        </div>
      </div>
    </div>
  );
}
