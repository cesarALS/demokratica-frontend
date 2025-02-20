import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import ActivitiesLoader from "@/components/2.organisms/ActivitiesLoader";

export default function Sesion() { 

  return (
    <PageContentContainer>
      <SessionTitleControls />
        <ActivitiesLoader />
    </PageContentContainer>
  );
}