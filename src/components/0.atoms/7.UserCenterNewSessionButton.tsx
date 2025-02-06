import Link from "next/link";
import demokraticaRoutes from "@/utils/routeUtils";

const UserCenterNewSessionButton = () => {
    return (
      <Link 
        className="flex items-center justify-center bg-AccentBlue p-2 rounded-2xl text-white w-[45%] md:w-[20%] lg:w-[12%] hover:scale-110"
        href={demokraticaRoutes.nuevaSesion.link}
      >
        <div className="w-[20%] flex items-center justify-end">
          <p className="text-[1.9em] font-bold leading-none">+</p>
        </div>
        <div className="italic w-[80%] flex items-center justify-center">
          <p className="">Nueva Sesión</p>
        </div>
      </Link>
    );
  }

  export default UserCenterNewSessionButton;