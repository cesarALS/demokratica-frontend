import SessionsDisplay from "./pannel/SessionsDisplay";
import FiltersBox from "./filter/FiltersBox";

const UserCenterPannel = () => {
    return (
      <div className="flex flex-col items-center justify-center w-[87%] md:w-[85%] lg:w-[75%] bg-white rounded-2xl border-2 border-black gap-5 box-border p-6 md:p-8">
        <FiltersBox/>
        <h1 className="font-bold text-2xl">Tus sesiones como</h1>        
        <SessionsDisplay/>
      </div>
    );
}

export default UserCenterPannel;