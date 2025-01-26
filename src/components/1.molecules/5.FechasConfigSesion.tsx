export default function FechasConfigSesion() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-4 text-lg">
      <div className="text-xl">Fechas:</div>
      <div className="flex w-full items-center justify-between gap-x-4">
        <label htmlFor="startDate">Inicio:</label>
        <input
          type="date"
          id="startDate"
          className="rounded-lg border bg-ThirdGray p-1 focus:outline-none focus:ring-1 focus:ring-PrimBlack"
        />
      </div>
      <div className="flex w-full items-center justify-between gap-x-4">
        <label htmlFor="endDate">Fin:</label>
        <input
          type="date"
          id="endDate"
          className="rounded-lg border bg-ThirdGray p-1 focus:outline-none focus:ring-1 focus:ring-PrimBlack"
        />
      </div>
    </div>
  );
}
