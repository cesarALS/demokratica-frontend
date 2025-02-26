import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCircle, faUserTie } from "@fortawesome/free-solid-svg-icons";
import ButtonDropdownSelector from "../0.atoms/8.ButtonDropdownSelector";

interface userEntry {
  name: string;
  role: string;
  email: string;
  invitationState?: string;
  checkboxValue?: boolean;
  onChange?: (email: string, thicked: boolean) => void;
  onRoleChange?: (value: string) => void;
}

export default function ParticipantsResultsEntry({
  name,
  role,
  email,
  invitationState = "",
  checkboxValue = false,
  onChange = () => {},
  onRoleChange = () => {}
}: userEntry) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border-2 border-SecBlack bg-white p-2 text-xs text-PrimBlack">
      {/* Info about the user */}
      <div className="flex items-center w-full gap-x-2">
        <input 
          type="checkbox" 
          checked={checkboxValue}
          onChange={(e) => onChange(email, e.target.checked)}
          className="size-4 w-[6%]"
        />
        <div className="flex items-center justify-center w-[10%]">
          {/* La idea es que aquí vaya una foto u icono */}
          <FontAwesomeIcon
            icon={faCircleUser}
            className="size-6 text-PrimBlack"
          />
        </div>
        {/* Nombre y correo */}
        <div className="flex flex-col w-[100%]">
          <div className="flex flex-wrap text-black">{name}</div>
          <div className="flex flex-row flex-wrap items-center gap-x-1 text-xs">            
            <span className="italic">{role}</span>
            <FontAwesomeIcon
              icon={faCircle}
              className="hidden size-1 sm:block"
            />            
            <span className="hidden break-all sm:block">{email}</span>
          </div>
        </div>
        {/* Set Role of the guest */}
          <ButtonDropdownSelector            
            divClassName="w-[20vh] md:w-[18vh] h-12"
            buttonClassName="rounded-md border-2 border-PrimBlue"
            listClassName="border-2 rounded-b-md border-PrimBlack"
            checklistItems={["ADMIN", "EDITOR", "PARTICIPANTE"]}
            showSelectedItem={false}
            property="role"
            stateToParent={onRoleChange}
          >
            <FontAwesomeIcon icon={faUserTie} className="text-lg text-white"></FontAwesomeIcon>
          </ButtonDropdownSelector>          
        {/* State of invitation */}        
        {invitationState && (      
          <div className="flex items-center text-xs text-black">
            {invitationState}
          </div>
        )}
      </div>

    </div>
  );
}
