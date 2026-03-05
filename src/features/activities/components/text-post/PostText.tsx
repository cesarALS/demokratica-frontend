import SimpleButton from "@/components/buttons/SimpleButton";
import TextAreaMarkdownTitle from "@/components/inputs/TextAreaMarkdownTitle";
import { sendTextPosting } from "@/features/activities/apiCall";
import { useAuthContext } from "@/features/auth/AuthProvider";
import { useMessageContext } from "@/features/messages/MessageProvider";
import { useSessionActivitiesStore } from "@/features/activities/SessionActivitiesStore";
import { useState } from "react";

interface PostTextProps {
    refetch: () => void;
}

const PostText = ({refetch}: PostTextProps) => {
    
    const { sessionId }= useSessionActivitiesStore();
    const { setMessage } = useMessageContext();    
    const { getCookie } = useAuthContext();
    const [text, setText] = useState("");
    const [resetTrigger, setResetTrigger] = useState(false); 
    
    const post = async () => {
        const res = await sendTextPosting(sessionId, text, [], getCookie() as string);
        if (res.status !== 201 ) { setMessage ({
            message: "No se pudo publicar",
            news: 'bad',
            time: 3000
        })} else {
            setResetTrigger((prev) => !prev);
            refetch();
        }
    
    };
    
    return (
        <div className="flex flex-col items-center min-h-[25vh] gap-6 w-full bg-white p-6 rounded-xl border-2 border-black">
          <TextAreaMarkdownTitle 
            title="Haz una publicación"
            placeholder="Ingresa tu publicación" 
            className="w-full"    
            flex="flex flex-col lg:flex-row items-start justify-start lg:gap-x-8 "   
            setValue={(value: string) => setText(value)}
            resetTrigger={resetTrigger}
          />
          <SimpleButton
            buttonText="Publicar"
            onClick={post}
            className="flex justify-center bg-PrimCasablanca w-[40vw] lg:w-[20vw] xl:w-[15vw] hover:bg-SecCasablanca px-1"
          />
        </div> 
    );
};

export default PostText;