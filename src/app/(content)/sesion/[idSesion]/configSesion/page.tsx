"use client"

import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import ConfigNewSession from "@/components/4.pages/0.ConfigSession";
import { usePathname } from "next/navigation";

export default function ConfigSesion() {
  const pathname = usePathname();
  
  const sessionId = pathname.split("/")[2];

  return (
    <PageContentContainer>
      <ConfigNewSession sessionId={sessionId} />
    </PageContentContainer>
  );
}