import UserCenterNewSessionButton from "@/components/0.atoms/7.UserCenterNewSessionButton";
import UserCenterFetchBox from "@/components/3.templates/4.UserCenterFetchBox";
import { UserCenterContextProvider } from "@/utils/ContextProviders/UserCenterProvider";

const CentroUsuario = () => {    
  
  return (    
    <UserCenterContextProvider>
      <div className="flex flex-col items-center justify-center w-full pt-4 gap-8">
        {/* Botón de Nueva Sesión*/ }
        <UserCenterNewSessionButton/>
        {/* Caja de Centro de Usuario */}
        <UserCenterFetchBox/>
      </div>
    </UserCenterContextProvider>    
  );
}

export default CentroUsuario;