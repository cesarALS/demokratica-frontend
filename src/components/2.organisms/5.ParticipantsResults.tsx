import ParticipantsResultsInteractions from "./6.ParticipantsResultsInteractions";
import ParticipantsResultsSelector from "@/components/1.molecules/8.ParticipantsResultsSelector";
import ParticipantsResultsBox from "@/components/2.organisms/7.ParticipantsResultsBox";
import PaginationNavBar from "@/templates/0.atoms/19.PaginationNavBar";
import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";

export default function ParticipantsResults() {
  
  const { invitations, filters, currentPage, setPage } = useSessionStore();  
  
  return (
    <div className="flex w-full flex-col">
      {/* Interacciones */}
      <ParticipantsResultsInteractions />
      {/* Selectores */}
      <ParticipantsResultsSelector />
      {/* UsersResultsBox */}
      <ParticipantsResultsBox />
      {/* ResultsNavBar */}
      <PaginationNavBar 
        panelClassname="bg-ThirdGray border-2 border-t-0 border-PrimBlack"
        dataSize={invitations.length}
        pageSize={parseInt(filters.pageSize.current)}
        currentPage={currentPage}
        setPage={setPage}
      />
    </div>
  );
}
