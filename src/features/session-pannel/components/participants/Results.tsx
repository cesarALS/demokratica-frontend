import ResultsInteractions from "./ResultsInteractions";
import ResultsSelector from "./ResultsSelector";
import ResultsBox from "./ResultsBox";
import PaginationNavBar from "@/components/layout/PaginationNavBar";
import { useSessionStore } from "@/features/session-pannel/CreateSessionStore";

export default function Results() {
  
  const { invitations, filters, currentPage, setPage } = useSessionStore();  
  
  return (
    <div className="flex w-full flex-col">
      {/* Interacciones */}
      <ResultsInteractions />
      {/* Selectores */}
      <ResultsSelector />
      {/* UsersResultsBox */}
      <ResultsBox />
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
