import PageContentContainer from "@/components/layout/PageContentContainer";
import SessionTitleControls from "@/features/activities/components/SessionTitleControls";
import ActivitiesLoader from "@/features/activities/components/ActivitiesLoader";

export default function Sesion() {
  return (
    <PageContentContainer>
      <SessionTitleControls />
      <ActivitiesLoader />
    </PageContentContainer>
  );
}
