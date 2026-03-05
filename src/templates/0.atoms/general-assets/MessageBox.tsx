import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";
import clsx from "clsx";

const MessageBox = () => {
    
    const {message} = useMessageContext();

    return(
        <>
            {message?.message && ( 
                <div 
                className={clsx(
                    `fixed top-20 md:top-10 left-1/2 transform -translate-x-1/2 
                    w-[80vw] md:w-[30vw] lg:w-[10vw] min-h-[5vh]
                    flex items-center justify-center 
                    bg-ThirdGray border-2 rounded-lg z-50 p-2`,
                    {
                        "bg-[#56f577]": message.news === 'good',  // Verde
                        "bg-[#1988ff]": message.news === 'neutral',  // AccentBlue
                        "bg-[#f77777]": message.news === 'bad',  // Rojo
                    }
                )}
                >
                    <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-md lg:text-lg text-center">{message.message}</h1>
                    </div>
                </div>
            )}
        </>
    );
}

export default MessageBox;

