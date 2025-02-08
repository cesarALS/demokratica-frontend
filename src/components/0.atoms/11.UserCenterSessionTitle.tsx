import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface UserCenterSessionTitleProps {
    sessionName: string
}

const UserCenterSessionTitle = ( { sessionName }: UserCenterSessionTitleProps) => {
    return (
        <div className="flex items-center justify-center bg-ThirdGray h-[8vh] w-full rounded-t-md gap-2">
            <h1 className="flex items-center justify-center w-[70%] h-full text-xl">{sessionName}</h1>
            <div className="flex items-center h-full flex-1">
                <button className="flex items-center justify-center w-[80%] h-[60%]">
                    <FontAwesomeIcon className="h-full w-full text-AccentCreamCan hover:text-PrimCreamCan"  icon={faArrowAltCircleRight} />
                </button>
            </div>
        </div>
    );
}

export default UserCenterSessionTitle;