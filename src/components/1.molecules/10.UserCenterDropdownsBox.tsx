"use client"

import ButtonDropdownSelector from "@/templates/0.atoms/8.ButtonDropdownSelector";
import { useUserCenterStore } from "@/utils/ContextProviders/UserCenterStore";

const UserCenterDropdownsBox = () => {
    
    const SessionsStore = useUserCenterStore();
  
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-5 w-full md:flex-1 px-2 md:py-3 h-full">                                           
                {Object.entries(SessionsStore.filters).map(([key, values]) => {
                    return (
                    <div className="w-[65%] md:w-[30%]" key={key}>
                        <ButtonDropdownSelector
                        buttonClassName="rounded-t-md border-2 gap-x-1 md:gap-x-2 px-2 md:px-4 border-AccentBlue w-full"
                        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"                        
                        checklistItems={values.options}
                        property={key}
                        stateToParent={SessionsStore.setFilter}
                        />
                    </div>
                    )
                })}

        </div>
    );
}

export default UserCenterDropdownsBox;