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
    <div className="flex flex-col items-start justify-between gap-y-4 text-xl">
      <div>Actividades restantes:</div>
      <div className={planStyle}>{remainder}</div>
    </div>
  );
}
