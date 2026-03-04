"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { linkStyles } from "@/utils/tailwindUtils";
import DialogoWIP from "@/templates/1.molecules/18.DialogoWIP";
import { useState } from "react";

interface OauthProps {
    title: string;
    question: string;
    link: string;
    route: string; //No sé cómo definir mejor este tipo
}

export default function Oauth( { title, question, link, route }: OauthProps ) {
  
  const [showDialog, setShowDialog] = useState(false);
  
  return (
    <>
      <div className="flex w-full sm:w-[45%] justify-start flex-col self-start gap-y-6">
        {/* Registrate con */}
        <div className="flex items-center justify-center text-sm">{title}</div>
        {/* Botones de google y facebook */}
        <div className="flex justify-around text-PrimGray">
          <button
            onClick={() => setShowDialog(true)}
            className="flex justify-center items-center h-24 w-24 rounded-lg bg-SecGray hover:text-white"
          >
            <FontAwesomeIcon icon={faGoogle} className="h-16" />
          </button>
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
      <DialogoWIP isOpen={showDialog} onClose={() => setShowDialog(false)} />
    </>
  );
}
