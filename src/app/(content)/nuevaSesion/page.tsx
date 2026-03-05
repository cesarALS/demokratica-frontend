import PageContentContainer from "@/components/layout/PageContentContainer";
import ConfigNewSession from "@/features/session-pannel/components/ConfigSession";

export default function NuevaSesion() {
  return (     
    <PageContentContainer>      
      <ConfigNewSession sessionId={null}/>  
    </PageContentContainer>
  );
}
