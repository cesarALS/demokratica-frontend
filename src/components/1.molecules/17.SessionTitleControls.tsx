"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ActivitiesFilter from "@/components/1.molecules/16.ActivitiesFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons";
import useSessionData from "@/utils/SessionData";
import LoadingScreen from "@/templates/1.molecules/6.LoadingScreen";

export default function SessionTitleControls() {
  const pathname = usePathname();
  const newActivityPath = pathname + "/nuevaActividad";
  const configSessionPath = pathname + "/configSesion";
  const activitiesTags = ["tag1", "tag2", "tag3"];
  const activitiesTypes = ["type1", "type2", "type3"];

  const sessionId = pathname.split("/")[2];  
  const { sessionData, isPending } = useSessionData(sessionId);

  if (isPending) return <LoadingScreen/>

  return (
    <>
      {/* Titulo de la sesión */}
      <ContentCard className="sm:max-w-[50%]">
        {isPending? (
          <LoadingScreen
            logo="title"
            scale={1}
          />
        ) : (          
          <>
            <div className="flex items-center justify-between gap-x-2">
              <label className="text-2xl">{sessionData.title}</label>
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
            <ActivitiesFilter
              activitiesTags={activitiesTags}
              activitiesTypes={activitiesTypes}
            />
          </>
        )}
      </ContentCard>
    </>
  );
}
