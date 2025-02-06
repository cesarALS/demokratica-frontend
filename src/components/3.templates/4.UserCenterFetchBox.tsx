import UserCenterFiltersBox from "../2.organisms/9.UserCenterFiltersBox";

const UserCenterFetchBox = () => {
    return (
      <div className="flex flex-col items-center justify-center w-[95%] md:w-[80%] lg:w-[50%] bg-white rounded-2xl border-2 border-black gap-5 py-4">
        <UserCenterFiltersBox/>
        <h1 className="font-bold text-2xl">Tus sesiones como</h1>        
        <div className="flex items-center justify-center h-[20vh] w-[80%] bg-SecBlue rounded-xl">
          <h1 className="text-xl">Sesiones</h1>
        </div>
      </div>
    );
}

export default UserCenterFetchBox;