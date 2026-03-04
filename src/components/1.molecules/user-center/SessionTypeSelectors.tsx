import SessionTypeSelector from "@/components/0.atoms/user-center/SessionTypeSelector";

const UserCenterSessionTypeSelectors = () => {
    
    return (
        <div className="h-[6vh] w-[90%] flex items-center justify-center ">
            <SessionTypeSelector />
            <SessionTypeSelector anfitrion={false} />
        </div>
    )
}

export default UserCenterSessionTypeSelectors;