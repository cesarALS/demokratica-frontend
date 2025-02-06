import UserCenterSessionsSearchBar from "../0.atoms/8.UserCenterSessionsSearchBar";
import UserCenterDropdownsBox from "../1.molecules/10.UserCenterDropdownsBox";

const UserCenterFiltersBox = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-ThirdGray w-[95%] rounded-2xl gap-2 py-3">
        <div className="flex border-AccentBlue w-full pt-2">
          <h1 className="italic ml-[7%]">Filtros</h1>
        </div>
        {/* Barra de búsqueda de las sesiones que tiene el usuario */}      
        <UserCenterSessionsSearchBar/>
        {/* Sección de filtros con Button Dropdown Checklists */}
        <UserCenterDropdownsBox/>      
      </div>
    );
}

export default UserCenterFiltersBox;