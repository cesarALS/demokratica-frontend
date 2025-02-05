"use client"

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "@/utils/AuthProvider";

export default function Cuenta() {
    const {user} = useAuthContext();

    return (
        <div className="flex justify-center w-full text-center mt-6">
            <div className="flex flex-col gap-y-8 w-[80%] sm:w-[20%] p-4 pb-10 mt-10 bg-white border-2 border-PrimBlack rounded-lg">
                <div className = "text-3xl pt-4">
                    Gestiona tu cuenta
                </div>
                <div className = "flex justify-center">
                    <UserCircleIcon className="h-32 w-32 text-PrimGray" />
                </div>
                <div className = "flex flex-col gap-y-6 px-4">
                    <AccountButton text = {!!user ? user?.username : "error"}/>
                    <AccountButton text = {"Cambiar contraseña"}/>
                    <AccountButton text = {"Eliminar cuenta"}/>
                </div>
            </div>
        </div>
    )
}

interface AccountButtonProps {
    text: string
}

const AccountButton = ({text}: AccountButtonProps) => {
    return (
        <div className = "flex w-full justify-center text-2xl py-3 font-bold italic border-1.5 border-PrimBlack bg-ThirdGray rounded-lg">
            {text}
        </div>
    );
}