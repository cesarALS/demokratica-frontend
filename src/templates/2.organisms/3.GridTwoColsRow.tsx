import { ReactNode } from "react";

interface GridTwoColsRowProps {
  children: ReactNode;
  className?: string;
}

export default function GridTwoColsRow({
  children,
  className,
}: GridTwoColsRowProps) {
  if (!className) {
    className = "gap-x-6 gap-y-6";
  }

  return (
    <div
      className={`grid-rows-auto grid sm:grid-cols-2 sm:grid-rows-1 ${className}`}
    >
      {children}
    </div>
  );
}
