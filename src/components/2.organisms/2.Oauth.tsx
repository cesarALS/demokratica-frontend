import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { linkStyles } from "@/utils/tailwindUtils";

interface OauthProps {
    title: string;
    question: string;
    link: string;
    route: string; //No sé cómo definir mejor este tipo
}

export default function Oauth( { title, question, link, route }: OauthProps ) {
  return (
    <div className="flex w-full sm:w-[45%] justify-start flex-col self-start gap-y-6">
      {/* Registrate con */}
      <div className="text-sm">{title}</div>
      {/* Botones de google y facebook */}
      <div className="flex justify-around text-PrimGray">
        <Link
          href="/"
          className="flex justify-center items-center h-24 w-24 rounded-lg bg-SecGray hover:text-white"
        >
          <FontAwesomeIcon icon={faGoogle} className="h-16" />
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center h-24 w-24 rounded-lg bg-SecGray hover:text-AccentBlue"
        >
          <FontAwesomeIcon icon={faFacebook} className="h-16" />
        </Link>
      </div>
      {/* Aún no tienes una cuenta? Registrate*/}
      <div className="text-xs text-PrimBlack text-center">
        {question}
        <Link
          href={route}
          className={`${linkStyles()} pl-1`}
        >
          {link}
        </Link>
      </div>
    </div>
  );
}
