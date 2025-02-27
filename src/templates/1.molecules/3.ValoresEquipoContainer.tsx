import { highlightWord } from "@/utils/highlightWord";

interface ValoresEquipoContainerProps {
  title: string;
  type: string;
  children: React.ReactNode;
}

export default function ValoresEquipoContainer({
  title,
  type,
  children,
}: ValoresEquipoContainerProps) {
  return (
    <div className="flex w-full flex-col items-center justify-around gap-6 rounded-3xl bg-white p-6 text-lg">
      <h1 className="text-2xl font-bold">{highlightWord(title, type)}</h1>
      <div className="grid w-full grid-cols-1 justify-items-center gap-6 rounded-3xl sm:grid-cols-2">
        {children}
      </div>
    </div>
  );
}
