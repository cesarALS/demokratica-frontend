import SearchBar from "./SearchBar";
import DropdownsBox from "./DropdownsBox";

const FiltersBox = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-ThirdGray w-full md:w-[95%] rounded-2xl gap-4 box-border py-6">
        <h1 className="font-semibold">Herramientas de búsqueda</h1>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full gap-4 xl:px-4">
          {/* Barra de búsqueda de las sesiones que tiene el usuario */}      
          <SearchBar/>
          {/* Sección de filtros con Button Dropdown Checklists */}
          <DropdownsBox/>      
        </div>
      </div>
    );
}

export default FiltersBox;