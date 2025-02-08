import UserCenterSessionsDisplay from "../2.organisms/10.UserCenterSessionsDisplay";
import UserCenterFiltersBox from "../2.organisms/9.UserCenterFiltersBox";

const UserCenterSessionsBox = () => {
    return (
      <div className="flex flex-col items-center justify-center w-[87%] md:w-[85%] lg:w-[75%] bg-white rounded-2xl border-2 border-black gap-5 py-4">
        <UserCenterFiltersBox/>
        <h1 className="font-bold text-2xl">Tus sesiones como</h1>        
        <UserCenterSessionsDisplay/>
      </div>
    );
}

export default UserCenterSessionsBox;