import { highlightWord } from "@/utils/highlightWord";

interface ValoresEquipoContainerProps{
    title: string;
    type: string;
    children: React.ReactNode;
}   

export function ValoresEquipoContainer({title, type, children}:ValoresEquipoContainerProps){
    return(
        <div className="flex items-center justify-around w-[80%] bg-white gap-5 rounded-3xl p-6 text-lg xl:w-[65%] 2xl:w-[55%] flex-col">
            <h1 className="font-bold text-2xl" key="1">{highlightWord(title,type)}</h1>
            <div className="grid grid-cols-1 bg-ThirdGray items-center justify-center rounded-3xl p-5">
                {children}
            </div>

        </div>
    )
    
}

export default ValoresEquipoContainer;