"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ActivitiesFilter from "@/components/1.molecules/16.ActivitiesFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function SessionTitleControls() {
  const pathname = usePathname();
  const newActivityPath = pathname + "/nuevaActividad";
  const configSessionPath = pathname + "/configSesion";
  const activitiesTags = ["tag1", "tag2", "tag3"];
  const activitiesTypes = ["type1", "type2", "type3"];

  return (
    <>
      {/* Titulo de la sesión */}
      <ContentCard>
        {/* Titulo y settings de la sesión */}
        <div className="flex items-center justify-between gap-x-2">
          <label className="text-2xl">Titulo de la sesión</label>
          <div className="flex gap-x-2">
            <Link
              className="flex items-center justify-center rounded-xl border border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue"
              href={newActivityPath}
            >
              <FontAwesomeIcon className="size-8 text-white" icon={faPlus} />
            </Link>
            <Link
              className="flex items-center justify-center rounded-xl border border-2 border-AccentBlue bg-SecBlue p-1 hover:bg-PrimBlue"
              href={configSessionPath}
            >
              <FontAwesomeIcon className="size-8 text-white" icon={faGear} />
            </Link>
          </div>
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
