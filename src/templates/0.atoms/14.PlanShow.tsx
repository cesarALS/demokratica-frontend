// Este componente se usa en varias partes

interface PlanShowProps {
  plan?: number;
}

export default function PlanShow({ plan }: PlanShowProps) {
  let planComponent;

  switch (plan) {
    case 0:
      planComponent = (
        <div className="flex w-full flex-row items-center justify-center bg-ThirdGray py-1">
          Gratuito
        </div>
      );
      break;
    case 1:
      planComponent = (
        <div className="flex w-full flex-row items-center justify-center bg-SecBlue py-1">
          Plus
        </div>
      );
      break;
    case 2:
      planComponent = (
        <div className="flex w-full flex-row items-center justify-center border-2 border-black bg-ThirdGray py-1 font-bold italic text-PrimBlack">
          Premium
        </div>
      );
      break;
    case 3:
      planComponent = (
        <div className="flex w-full flex-row items-center justify-center border-2 border-black bg-PrimCreamCan py-1 font-bold italic">
          Profesional
        </div>
      );
      break;
    default:
      planComponent = (
        <div className="flex w-full flex-row items-center justify-center bg-ThirdGray py-1">
          Gratuito
        </div>
      );
  }

  return (
    <div className="flex flex-col items-start justify-start gap-y-4 text-xl">
      <div>Tu plan actual es:</div>
      {planComponent}
    </div>
  );
}
