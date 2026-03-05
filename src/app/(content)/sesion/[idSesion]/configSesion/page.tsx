"use client"

import PageContentContainer from "@/components/layout/PageContentContainer";
import ConfigNewSession from "@/features/session-pannel/components/ConfigSession";
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