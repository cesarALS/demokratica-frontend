import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react";
import { linkStyles } from "@/utils/tailwindUtils";
import GenericModal from "@/templates/1.molecules/16.GenericModal";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";

interface UseTermsProps {
    closeModal: () => void;
}

const UseTerms = ({ closeModal }: UseTermsProps) => {
    
    const [markdownFile, setMarkdownFile] = useState<string>("");
    useEffect(() => {
        // Lee el archivo Markdown desde la carpeta public
        fetch("/UseTerms.md")
            .then((res) => res.text())
            .then((data) => setMarkdownFile(data));
    }, []);

    return (
        <GenericModal
            className="flex flex-col items-center w-[80%] md:w-[40%] h-[65vh] rounded-2xl p-4 border-2 border-AccentBlue"               
        >                                
            {markdownFile ? (
                <div className="w-full h-full flex flex-col items-center gap-4">
                    <div className="overflow-y-auto p-2 w-full scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-PrimBlue scrollbar-track-transparent"> {/*Aseguramos scroll en el área de Markdown */}
                        <ReactMarkdown 
                            className="flex flex-col pr-3 gap-3 text-justify w-full "
                            components={{
                                h1: ({ children, ...props}) => (                                      
                                    <h1 className="text-center font-bold text-xl" {...props}>
                                        {children}
                                    </h1>
                                ),
                                h2: ({ children, ...props}) => (                                       
                                    <h2 className="text-left font-semibold text-lg" {...props}>
                                        {children}
                                    </h2>                                        
                                ),
                                a: ({ children, ...props}) => (                                       
                                    <a className={`${linkStyles()}`} {...props}>
                                        {children}
                                    </a>                                                  
                                ),
                            }}>
                            {markdownFile}
                        </ReactMarkdown>                            
                    </div>
                    <SimpleButton
                        buttonText="Entendido"
                        className="bg-PrimCreamCan hover:bg-AccentCreamCan"
                        onClick={closeModal}
                    >
                    </SimpleButton>
                </div>
            ) : (
                <></>
            )}
        </GenericModal>
    );
};

export default UseTerms;
