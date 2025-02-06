"use client"

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "@/utils/AuthProvider";

import AccountUsernameField from "@/components/1.molecules/11.AccountUsernameField";
import AccountButton from "@/components/1.molecules/12.AccountButton";
import MessageBox from "@/templates/0.atoms/12.MessageBox";

export default function Cuenta() {
    const {user} = useAuthContext();

    return (
        <>
            <div className="flex justify-center w-full text-center mt-6 mb-6">
                <div className="flex flex-col gap-y-8 w-[55%] sm:w-[45%] lg:w-[30%] xl:w-[25%] p-4 pb-10 mt-10 bg-white border-2 border-PrimBlack rounded-lg">
                    <div className = "text-3xl pt-4">
                        Gestiona tu cuenta
                    </div>
                    <div className = "flex justify-center">
                        <UserCircleIcon className="h-32 w-32 text-PrimGray" />
                    </div>
                    <div className = "">
                        {!!user ? user.email : "error"}
                    </div>
                    <div className = "flex flex-col gap-y-6 px-4">
                        <AccountUsernameField/> 
                        <AccountButton text = {"Cambiar contraseña"}/>
                        <AccountButton text = {"Eliminar cuenta"}/>
                    </div>
                </div>
            </div>
            <MessageBox/>
        </>
    )
}