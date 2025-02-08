import UserCenterSessionTitle from "../0.atoms/11.UserCenterSessionTitle";

/**
 * Estos props se irán apenas tome datos de la api, porque se tomarán del contexto
 */

interface UserCenterProps {
    name: string
    description: string,
    creationDate?: Date,
    numParticipants?: number,
    numActivites?: number,
    tags?: string[]

}

const UserCenterSession = (props: UserCenterProps) => {
    
    return (        
        <div className="flex flex-col items-center justify-center bg-white w-full rounded-md min-h-[15vh]">
            <UserCenterSessionTitle sessionName={props.name}/>                
            <div className="flex-1">
                <p>{props.name}</p>
            </div>
        </div>        
    )
}

export default UserCenterSession;