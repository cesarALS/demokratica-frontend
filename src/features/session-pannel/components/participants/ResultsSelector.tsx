import CheckboxLabelPair from "@/components/inputs/CheckboxLabelPair";
import { useSessionStore } from "@/features/session-pannel/CreateSessionStore";

export default function ResultsSelector() {
  
  const SessionStore = useSessionStore();
  
  return (
    <div className="flex items-center justify-between border-2 border-PrimBlack bg-SecGray p-2">
      {/* All selector */}
      <CheckboxLabelPair 
        labelText="Seleccionar Todos" 
        id="all" 
        checkedValue={SessionStore.allToggled}
        onCheck={SessionStore.toggleAllGuests}
      />
      <button
        type="button"
        className="text-sm font-semibold text-PrimBlack hover:text-black rounded-lg px-1 "
        onClick={() => SessionStore.toggleAllGuests(false)}
      >
        Limpiar Selección
      </button>
      {/*<CheckboxLabelPair labelText="Limpiar" id="clear" />*/}
    </div>
  );
}
