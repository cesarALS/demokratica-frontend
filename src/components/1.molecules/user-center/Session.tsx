import { useUserCenterStore } from "@/utils/ContextProviders/UserCenterStore";
import SessionTitle from "@/components/0.atoms/user-center/SessionTitle";
import SessionInfo from "@/components/0.atoms/user-center/SessionInfo";
import _ from "lodash";


interface UserCenterProps {
    id: number;
    titleRef: (el: HTMLDivElement | null) => void;
    maxTitleHeight: string;
}

const Session = ({ id, titleRef, maxTitleHeight }: UserCenterProps) => {
        
    const SessionStore = useUserCenterStore();
    const session = _.find(SessionStore.sessions, {id: id});
    
    return (        
        <div className="flex flex-col items-center justify-start bg-white w-full min-h-full rounded-md">
            <SessionTitle session={session} titleRef={titleRef} maxTitleHeight={maxTitleHeight}/>                
            <SessionInfo session={session}/>
        </div>        
    )
}

export default Session;