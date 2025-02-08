"use client"

import ButtonDropdownSelector from "@/templates/0.atoms/8.ButtonDropdownSelector";
import { useUserCenterContext } from "@/utils/ContextProviders/UserCenterProvider";

const UserCenterDropdownsBox = () => {
    
    const context = useUserCenterContext();

    if (!context) {
        throw new Error("FilterControls debe estar dentro de UserCenterContext.Provider");
    }    

    const changeFilter = (property: string, value: string) => {
        context.dispatch({type: "filter", payload: {
            property: property,
            value: value,
        }})        
    }
  
    return (
        <div className="flex flex-col items-center justify-center gap-2 md:gap-5 w-full md:w-[60%] px-2 md:py-3 h-full">
            <div className="flex items-center justify-start w-full">
                <p className="italic ml-[7%]">Ordenar por</p>
            </div>
            <div className="flex items-center justify-center w-full h-[5vh] gap-2 lg:gap-6">
                {Object.entries(context.state.filters).map(([key, values]) => {
                    return (
                    <div className="w-[30%] lg:w-[25%]" key={key}>
                        <ButtonDropdownSelector
                        buttonClassName="rounded-t-md border-2 gap-x-1 md:gap-x-2 px-2 md:px-4 border-AccentBlue w-full"
                        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"                        
                        checklistItems={values.options}
                        property={key}
                        stateToParent={changeFilter}
                        />
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default UserCenterDropdownsBox;