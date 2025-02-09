import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ButtonDropdownChecklist from "@/templates/0.atoms/7.ButtonDropdownChecklist";

export default function ParticipantsFilter() {
  const rolFilter = ["Dueño", "Admin", "Editor", "Participante"];
  const invitationStateFilter = ["Aceptado", "Pendiente", "Rechazado"];

  return (
    <div className="flex-no-wrap flex w-full items-center justify-center">
      <ButtonDropdownChecklist
        buttonClassName="border-y-2 border-AccentBlue border-l-2 rounded-tl-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={rolFilter}
      >
        <FontAwesomeIcon icon={faUserTie} className="size-6 text-white" />
      </ButtonDropdownChecklist>
      {/* separator */}
      <div className="h-full border-r-2 border-AccentBlue"></div>
      <ButtonDropdownChecklist
        buttonClassName="border-y-2 border-AccentBlue border-r-2 rounded-tr-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={invitationStateFilter}
      >
        <FontAwesomeIcon icon={faEnvelope} className="size-6 text-white" />
      </ButtonDropdownChecklist>
    </div>
  );
}
