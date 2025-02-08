import UserCenterSessionsSearchBar from "../1.molecules/9.UserCenterSessionsSearchBar";
import UserCenterDropdownsBox from "../1.molecules/10.UserCenterDropdownsBox";

const UserCenterFiltersBox = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center bg-ThirdGray w-[90%] rounded-2xl gap-2 py-3">
        {/* Barra de búsqueda de las sesiones que tiene el usuario */}      
        <UserCenterSessionsSearchBar/>
        {/* Sección de filtros con Button Dropdown Checklists */}
        <UserCenterDropdownsBox/>      
      </div>
    );
}

export default UserCenterFiltersBox;