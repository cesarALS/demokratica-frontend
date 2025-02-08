import UserCenterSessionTypeSelector from "../0.atoms/10.UserCenterSessionTypeSelector";

const UserCenterSessionTypeSelectors = () => {
    
    return (
        <div className="h-[6vh] w-[90%] flex items-center justify-center ">
            <UserCenterSessionTypeSelector />
            <UserCenterSessionTypeSelector numButton={2} />
        </div>
    )
}

export default UserCenterSessionTypeSelectors;