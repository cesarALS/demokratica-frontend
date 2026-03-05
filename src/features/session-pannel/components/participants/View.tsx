"use client";

import ButtonDropdownSelector from "@/components/buttons/ButtonDropdownSelector";
import { useSessionStore } from "@/features/session-pannel/CreateSessionStore";

export default function View() {
  
  const SessionStore = useSessionStore();

  return (
    <div className="flex-no-wrap flex w-full items-center justify-between">      
      <ButtonDropdownSelector
        buttonClassName="border-y-2 border-AccentBlue border-l-2 rounded-tl-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={SessionStore.filters.alphabeticOrder.options}        
        stateToParent={(value: string) => {
          SessionStore.setFilters("alphabeticOrder", value);
        }}
      />
      {/* separator */}
      <div className="h-full border-r-2 border-AccentBlue bg-AccentBlue"></div>
      <ButtonDropdownSelector
        buttonClassName="border-y-2 border-AccentBlue border-r-2 rounded-tr-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={SessionStore.filters.pageSize.options}        
        stateToParent={(value: string) => {
          SessionStore.setFilters("pageSize", value);
        }}
      />
    </div>
  );
}
