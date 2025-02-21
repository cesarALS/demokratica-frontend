import { useUserCenterStore } from "@/utils/ContextProviders/UserCenterStore";
import UserCenterSessionTitle from "../0.atoms/11.UserCenterSessionTitle";
import _ from "lodash";
import UserCenterSessionInfo from "../0.atoms/12.UserCenterSessionInfo";

interface UserCenterProps {
    id: number;
    titleRef: (el: HTMLDivElement | null) => void;
    maxTitleHeight: string;
}

const UserCenterSession = ({ id, titleRef, maxTitleHeight }: UserCenterProps) => {
        
    const SessionStore = useUserCenterStore();
    const session = _.find(SessionStore.sessions, {id: id});
    
    return (        
        <div className="flex flex-col items-center justify-start bg-white w-full min-h-full rounded-md">
            <UserCenterSessionTitle session={session} titleRef={titleRef} maxTitleHeight={maxTitleHeight}/>                
            <UserCenterSessionInfo session={session}/>
        </div>        
    )
}

export default UserCenterSession;