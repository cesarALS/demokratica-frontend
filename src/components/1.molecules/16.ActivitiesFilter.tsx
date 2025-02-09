import ButtonDropdownChecklist from "@/templates/0.atoms/7.ButtonDropdownChecklist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

interface ActivitiesFilterProps {
  activitiesTags: string[];
  activitiesTypes: string[];
}

export default function ActivitiesFilter({
  activitiesTags,
  activitiesTypes,
}: ActivitiesFilterProps) {
  return (
    <div className="flex-no-wrap flex w-full items-center justify-center divide-x-2 divide-AccentBlue">
      <ButtonDropdownChecklist
        buttonClassName="border-y-2 border-AccentBlue border-l-2 rounded-tl-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={activitiesTags}
      >
        <FontAwesomeIcon icon={faFilter} className="size-6 text-white" />
      </ButtonDropdownChecklist>
      {/* separator */}
      <ButtonDropdownChecklist
        buttonClassName="border-y-2 border-AccentBlue border-r-2 rounded-tr-2xl"
        listClassName="border-x-2 border-PrimBlack border-b-2 rounded-b-2xl"
        checklistItems={activitiesTypes}
      >
        <label className="text-white">Tipo</label>
      </ButtonDropdownChecklist>
    </div>
  );
}
