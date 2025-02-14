"use client"

import ButtonDropdownSelector from "@/templates/0.atoms/8.ButtonDropdownSelector";
import { useUserCenterContext } from "@/utils/ContextProviders/UserCenterProvider";

const UserCenterDropdownsBox = () => {
    
    const context = useUserCenterContext();

    const changeFilter = (property: string, value: string) => {
        context.dispatch({type: "filter", payload: {
            property: property,
            value: value,
        }})        
    }

    const changeVar = (property: string, value: string) => {
        context.dispatch({type: "setFilterVar", payload: value})
    }
  
    return (
        <div className="flex flex-wrap lg:flex-row items-center justify-center gap-5 md:gap-5 w-full md:flex-1 px-2 md:py-3 h-full">                        
                <div className="w-[70%] md:w-[30%]">
                    <ButtonDropdownSelector
                        buttonClassName="rounded-t-md border-2 gap-x-1 md:gap-x-2 px-2 md:px-4 border-AccentBlue w-full"
                        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl" 
                        checklistItems={context.state.varFilters}
                        stateToParent={changeVar}
                        property={""}                    
                    />   
                </div>                         
                {Object.entries(context.state.filters).map(([key, values]) => {
                    return (
                    <div className="w-[30%]" key={key}>
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
    );
}

export default UserCenterDropdownsBox;