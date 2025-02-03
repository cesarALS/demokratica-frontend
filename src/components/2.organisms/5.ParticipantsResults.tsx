import ParticipantsResultsInteractions from "./6.ParticipantsResultsInteractions";
import ParticipantsResultsSelector from "@/components/1.molecules/8.ParticipantsResultsSelector";
import ParticipantsResultsBox from "@/components/2.organisms/7.ParticipantsResultsBox";
import ParticipantsResultsNavBar from "@/components/2.organisms/8.ParticipantsResultsNavBar";

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
      <ParticipantsResultsNavBar />
    </div>
  );
}
