"use client"

import ButtonDropdownSelector from "@/templates/0.atoms/8.ButtonDropdownSelector";
import { useUserCenterContext } from "@/utils/UserCenterProvider";

const UserCenterDropdownsBox = () => {
    
    const context = useUserCenterContext();

    if (!context) {
        throw new Error("FilterControls debe estar dentro de UserCenterContext.Provider");
    }    

    const changeFilter = (property: string, value: string) => {
        context.setUserCenterState((prevState) => ({
            ...prevState,
            filters: {
              ...prevState.filters,
              [property]: {
                ...prevState.filters[property],
                current: value
              }
            }
        }));             
    }
  
    return (
        <div className="flex flex-col items-center justify-center py-2 gap-3 w-full">
        <div className="flex items-center justify-start w-full">
            <p className="italic ml-[7%]">Ordenar por</p>
        </div>
        {Object.entries(context.userCenterState.filters).map(([key, values]) => {
            return (
            <div className="w-[40%]" key={key}>
                <ButtonDropdownSelector
                buttonClassName="rounded-t-md border-2 border-AccentBlue w-full"
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