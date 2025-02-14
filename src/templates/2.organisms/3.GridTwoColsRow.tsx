import { ReactNode } from "react";

interface GridTwoColsRowProps {
  children: ReactNode;
}

export default function GridTwoColsRow({ children }: GridTwoColsRowProps) {
  return (
    <div className="grid-rows-auto grid gap-x-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-1">
      {children}
    </div>
  );
}
