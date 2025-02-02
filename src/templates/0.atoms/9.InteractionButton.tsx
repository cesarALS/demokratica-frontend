import { ReactNode } from "react";

interface InteractionButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function InteractionButton({
  children,
  onClick,
}: InteractionButtonProps) {
  return (
    <button
      className="flex w-full items-center justify-center rounded-t-xl border-x-2 border-t-2 border-PrimBlack bg-ThirdGray p-2 hover:bg-SecGray"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
