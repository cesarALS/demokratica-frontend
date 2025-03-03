import demokraticaRoutes from "@/utils/routeUtils";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FixedMenuButton = () => {
    return (
        <Link 
        className="fixed bottom-10 left-10 rounded-full z-50 border-2 bg-AccentBlue p-2 hover:bg-PrimBlue hover:scale-110"
        href={demokraticaRoutes.centroUsuario.link}
        title="Ve al menú del usuario"
      >
        <FontAwesomeIcon icon={faHome} className="text-3xl lg:text-4xl text-ThirdGray p-1"/>
      </Link>
    );
};

export default FixedMenuButton;