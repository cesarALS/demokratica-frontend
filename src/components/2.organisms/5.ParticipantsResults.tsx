import ParticipantsResultsInteractions from "./6.ParticipantsResultsInteractions";
import ParticipantsResultsSelector from "@/components/1.molecules/8.ParticipantsResultsSelector";
import ParticipantsResultsBox from "@/components/2.organisms/7.ParticipantsResultsBox";
import PaginationNavBar from "@/templates/0.atoms/19.PaginationNavBar";

export default function ParticipantsResults() {
  return (
    <div className="flex w-full flex-col">
      {/* Interacciones */}
      <ParticipantsResultsInteractions />
      {/* Selectores */}
      <ParticipantsResultsSelector />
      {/* UsersResultsBox */}
      <ParticipantsResultsBox />
      {/* ResultsNavBar */}
      <PaginationNavBar panelClassname="bg-ThirdGray border-2 border-t-0 border-PrimBlack"/>
    </div>
  );
}
