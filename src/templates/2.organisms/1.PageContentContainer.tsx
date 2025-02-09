import { ReactNode } from "react";

interface PageContentContainerProps {
  children: ReactNode;
}

export default function PageContentContainer({
  children,
}: PageContentContainerProps) {
  return (
    <div className="mb-10 flex w-full flex-col gap-y-8 p-8 md:px-[5%] lg:px-[10%] xl:px-[10%] 2xl:px-[20%]">
      {children}
    </div>
  );
}
