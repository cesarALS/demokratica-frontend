import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <div
      className={`w-full rounded-lg border-2 border-PrimGray bg-ThirdGray p-4 ${className}`}
    >
      {children}
    </div>
  );
}
