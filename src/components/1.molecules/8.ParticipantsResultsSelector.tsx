import CheckboxLabelPair from "@/templates/0.atoms/10.CheckboxLabelPair";
import { useSessionStore } from "@/utils/ContextProviders/CreateSessionStore";

export default function ParticipantsSelector() {
  
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
