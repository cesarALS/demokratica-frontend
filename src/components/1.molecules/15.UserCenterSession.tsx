import { useUserCenterStore } from "@/utils/ContextProviders/UserCenterStore";
import UserCenterSessionTitle from "../0.atoms/11.UserCenterSessionTitle";
import _ from "lodash";
import UserCenterSessionInfo from "../0.atoms/12.UserCenterSessionInfo";

interface UserCenterProps {
    id: number
}

const UserCenterSession = (props: UserCenterProps) => {
    
    const {id} = props;
    const SessionStore = useUserCenterStore();
    const session = _.find(SessionStore.sessions, {id: id});
    
    return (        
        <div className="flex flex-col items-center justify-start bg-white w-full min-h-full rounded-md">
            <UserCenterSessionTitle session={session}/>                
            <UserCenterSessionInfo session={session}/>
        </div>        
    )
}

export default UserCenterSession;