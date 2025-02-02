import CheckboxLabelPair from "@/templates/0.atoms/10.CheckboxLabelPair";

export default function ParticipantsSelector() {
  return (
    <div className="flex items-center justify-between border-2 border-PrimBlack bg-SecGray p-2">
      {/* All selector */}
      <CheckboxLabelPair labelText="Todos" id="all" />
      {/* Page Selector */}
      <CheckboxLabelPair labelText="Página" id="page" />
      {/* Clear Selector */}
      <CheckboxLabelPair labelText="Limpiar" id="clear" />
    </div>
  );
}
