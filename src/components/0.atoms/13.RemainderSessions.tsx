interface RemainderSessionsProps {
  plan?: number;
  remainder: number;
}

export default function RemainderSessions({
  plan = 0,
  remainder,
}: RemainderSessionsProps) {
  let planStyle;

  switch (plan) {
    case 0:
      planStyle =
        "flex w-full flex-row items-center justify-center bg-ThirdGray py-1";
      break;
    case 1:
      planStyle =
        "flex w-full flex-row items-center justify-center bg-SecBlue py-1";
      break;
    case 2:
      planStyle =
        "flex w-full flex-row items-center justify-center border-2 border-black bg-ThirdGray py-1 font-bold italic text-PrimBlack";
      break;
    case 3:
      planStyle =
        "flex w-full flex-row items-center justify-center border-2 border-black bg-PrimCreamCan py-1 font-bold italic";
      break;
    default:
      planStyle =
        "flex w-full flex-row items-center justify-center bg-ThirdGray py-1";
  }

  return (
    <div className="flex items-center justify-between gap-x-2 text-xl">
      <label>Actividades restantes:</label>
      <label className={planStyle}>{remainder}</label>
    </div>
  );
}
