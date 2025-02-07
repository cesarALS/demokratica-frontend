import { useMessageContext } from "@/utils/ContextProviders/MessageProvider";

const MessageBox = () => {
    
    const {message} = useMessageContext();
        
    return(
        <>
            {message?.message && ( 
                <div className={`position fixed top-20 left-1/2 transform -translate-x-1/2 w-[20vw] h-[10vh] flex items-center justify-center bg-ThirdGray border-2 rounded-lg z-50 border-AccentBlue p-2`}>
                    <div className="flex items-center justify-center w-full h-full">
                        <h1 className="text-lg">{message.message}</h1>
                    </div>
                </div>
            )}
        </>
    );
}

export default MessageBox;

