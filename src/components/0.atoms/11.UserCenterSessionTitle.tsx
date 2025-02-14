import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import demokraticaRoutes from "@/utils/routeUtils";
import Link from "next/link";
import { Session } from "@/types/sessions";

interface UserCenterSessionTitleProps {
    session: Session | undefined
}

const UserCenterSessionTitle = ( { session }: UserCenterSessionTitleProps) => {    
    
    return (
        <div className="flex items-center justify-center bg-ThirdGray h-[8vh] w-full rounded-t-md gap-2">
            <h1 className="flex items-center justify-center w-[70%] h-full text-xl text-center">{session?.title}</h1>
            <div className="flex items-center h-full flex-1">
                <Link href={`${demokraticaRoutes.sesion.link}/${session?.id}`} className="flex items-center justify-center w-[80%] h-[60%]">
                    <FontAwesomeIcon className="h-full w-full text-AccentCreamCan hover:text-PrimCreamCan"  icon={faArrowAltCircleRight} />
                </Link>
            </div>
        </div>
    );
}

export default UserCenterSessionTitle;