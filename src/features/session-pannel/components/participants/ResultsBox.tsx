import TitleLogo from "@/components/logo/basic-assets/TitleLogo";

import ResultsEntry from "./ResultsEntry";

import { roles } from "../../sessions";
import { useSessionStore } from "../../CreateSessionStore";

import _ from "lodash";

export default function ResultsBox() {  

  const { invitations, currentPage, toggleGuest, setGuestRole, filters } = useSessionStore();

  return (
    <div className="flex w-full flex-col gap-y-2 border-2 border-PrimBlack bg-ThirdGray p-4">
      {invitations.length>0? ( 
        _.slice(
          invitations,
          (currentPage-1)*parseInt(filters.pageSize.current),
          currentPage*parseInt(filters.pageSize.current)
        ).map(invitation => (
          <ResultsEntry 
            key={invitation.email}
            name={invitation.username}
            email={invitation.email}
            role={invitation.role}          
            onChange={toggleGuest}
            checkboxValue={invitation.thicked}
            onRoleChange={(role: string) => {
              setGuestRole(invitation.email, role as roles);
            }}
          />  
        ))
      ) : (
        <div className=" flex flex-col items-center justify-center gap-4 w-full h-[15vh] bg-white border-2 border-PrimBlack rounded-xl">
          <TitleLogo classNameGeneral="w-[60%]" baseFill="#8d8d8d"/>
          <h1 className="text-AccentGray">¡No has agregado invitaciones!</h1>          
        </div>
      )            
      }      
    </div>
  );
}
