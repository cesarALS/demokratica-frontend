import ParticipantsResultsInteractions from "./6.ParticipantsResultsInteractions";
import ParticipantsResultsSelector from "@/components/1.molecules/8.ParticipantsResultsSelector";

export default function ParticipantsResults() {
  return (
    <div className="flex w-full flex-col">
      {/* Interacciones */}
      <ParticipantsResultsInteractions />
      {/* Selectores */}
      <ParticipantsResultsSelector />
      {/*  */}
    </div>
  );
}
