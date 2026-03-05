
import ButtonDropdownSelector from "@/components/buttons/ButtonDropdownSelector";
import TwoButtonFormDecision from "@/components/buttons/TwoButtonFormDecision";
import GenericModal from "@/components/layout/GenericModal";
import { roles } from "@/features/session-pannel/sessions";
import { roleStrings, useSessionStore } from "@/features/session-pannel/CreateSessionStore";
import { useState } from "react";

interface BulkEdit {    
    closeModal: () => void;
}

export default function BulkEdit ({ closeModal} : BulkEdit) {
    
    const { bulkEdit } = useSessionStore();
    const [ role, setRole ] = useState<string|null>(roleStrings[0]);

    return (
        <GenericModal
            className="flex flex-col items-center justify-center gap-8 w-[90%] lg:w-[50%] h-[35vh] border-2 border-PrimBlue"
        >
            <h1 className="text-xl md:text-2xl">Escoge el rol para todos estos usuarios</h1>
            <div className="w-[60%] md:w-[40%]">
                <ButtonDropdownSelector
                    buttonClassName="w-full rounded-t-xl border-2 border-PrimBlue"
                    listClassName="border-x-2 border-b-2 border-PrimBlack"
                    checklistItems={roleStrings}
                    stateToParent={(property: string) => setRole(property)}
                />
            </div>
            <TwoButtonFormDecision
                firstButtonClassname="bg-SecBlue hover:bg-PrimBlue"
                firstButtonFunction={closeModal}
                secondButtonClassname="hover:bg-AccentCreamCan"
                secondButtonFunction={() => {
                    bulkEdit(role as roles);
                    closeModal();
                }}
            />
            
        </GenericModal>
    )
};
