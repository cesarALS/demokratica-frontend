import { ReactNode } from "react";

interface ContentCardProps {
  children: ReactNode;
}

export default function ContentCard({ children }: ContentCardProps) {
  return (
    <div className="flex flex-col gap-y-6 rounded-lg border border-2 border-black bg-white p-6">
      {children}
    </div>
  );
}
