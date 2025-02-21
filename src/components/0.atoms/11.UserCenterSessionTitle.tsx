import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import demokraticaRoutes from "@/utils/routeUtils";
import Link from "next/link";
import { Session } from "@/types/sessions";

interface UserCenterSessionTitleProps {
    session: Session | undefined;
    titleRef: (el: HTMLDivElement | null) => void;
    maxTitleHeight: string;
}

const UserCenterSessionTitle = ({ session, titleRef, maxTitleHeight }: UserCenterSessionTitleProps) => {    
    
    return (
        <div ref={titleRef} style={{ minHeight: maxTitleHeight }} className="flex items-center justify-center bg-ThirdGray w-full rounded-t-md gap-2">
            <h1 className="flex items-center justify-center w-[70%] text-xl text-center p-2">{session?.title}</h1>
            <div className="flex items-center flex-1">
                <Link href={`${demokraticaRoutes.sesion.link}/${session?.id}`} className="flex items-center justify-center w-full h-full">
                    <FontAwesomeIcon className="text-4xl text-AccentCreamCan hover:text-PrimCreamCan" icon={faArrowAltCircleRight} />
                </Link>
            </div>
        </div>
    );
}

export default UserCenterSessionTitle;