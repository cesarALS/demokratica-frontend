import ActivitiesFilter from "@/components/1.molecules/16.ActivitiesFilter";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SessionTitleControls() {
  const activitiesTags = ["tag1", "tag2", "tag3"];
  const activitiesTypes = ["type1", "type2", "type3"];

  return (
    <>
      {/* Titulo de la sesión */}
      <ContentCard>
        {/* Titulo y settings de la sesión */}
        <div className="flex items-center justify-between">
          <label className="text-2xl">Titulo de la sesión</label>
          <button className="flex items-center justify-center rounded-xl border border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue">
            <FontAwesomeIcon className="size-8 text-white" icon={faGear} />
          </button>
        </div>
        {/* Filtros de tags */}
        <ActivitiesFilter
          activitiesTags={activitiesTags}
          activitiesTypes={activitiesTypes}
        />
      </ContentCard>
    </>
  );
}
