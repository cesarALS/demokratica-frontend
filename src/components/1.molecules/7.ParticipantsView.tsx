import ButtonDropdownSelector from "@/templates/0.atoms/8.ButtonDropdownSelector";

export default function ParticipantsView() {
  const orderOptions = ["A-Z", "Z-A"];
  const numberResults = ["10", "20", "30", "40"];

  return (
    <div className="flex-no-wrap flex w-full items-center justify-between">
      <ButtonDropdownSelector
        buttonClassName="border-y-2 border-AccentBlue border-l-2 rounded-tl-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={orderOptions}
      />
      {/* separator */}
      <div className="h-full border-r-2 border-AccentBlue bg-AccentBlue"></div>
      <ButtonDropdownSelector
        buttonClassName="border-y-2 border-AccentBlue border-r-2 rounded-tr-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={numberResults}
      />
    </div>
  );
}
