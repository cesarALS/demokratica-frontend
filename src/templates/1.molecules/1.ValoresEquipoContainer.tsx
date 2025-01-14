import { highlightWord } from "@/utils/highlightWord";

interface ValoresEquipoContainerProps{
    title: string;
    type: string;
    children: React.ReactNode;
}   

export function ValoresEquipoContainer({title, type, children}:ValoresEquipoContainerProps){
    return(
        /*w-[80%] xl:w-[75%] 2xl:w-[65%] */
        <div className="flex items-center justify-around bg-white gap-5 rounded-3xl p-6 text-lg  flex-col">
            <h1 className="font-bold text-2xl">{highlightWord(title,type)}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-ThirdGray justify-items-center rounded-3xl p-5 gap-5 ">
                {children}
            </div>

        </div>
    )
    
}

export default ValoresEquipoContainer;