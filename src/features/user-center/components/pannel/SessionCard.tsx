import CardTitle from "./CardTitle";
import CardInfo from "./CardInfo";

import { useUserCenterStore } from "@/features/user-center/UserCenterStore";

import _ from "lodash";

interface UserCenterProps {
    id: number;
    titleRef: (el: HTMLDivElement | null) => void;
    maxTitleHeight: string;
}

const SessionCard = ({ id, titleRef, maxTitleHeight }: UserCenterProps) => {
        
    const SessionStore = useUserCenterStore();
    const session = _.find(SessionStore.sessions, {id: id});
    
    return (        
        <div className="flex flex-col items-center justify-start bg-white w-full min-h-full rounded-md">
            <CardTitle session={session} titleRef={titleRef} maxTitleHeight={maxTitleHeight}/>                
            <CardInfo session={session}/>
        </div>        
    )
}

export default SessionCard;