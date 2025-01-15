import ReactMarkdown from "react-markdown"
import { useEffect, useState } from "react";
import { linkStyles } from "@/utils/tailwindUtils";

interface UseTermsProps {
    closeModalAction: () => void;
}

const UseTerms = ({ closeModalAction }: UseTermsProps) => {
    
    const [markdownFile, setMarkdownFile] = useState<string>("");

    useEffect(() => {
        // Lee el archivo Markdown desde la carpeta public
        fetch("/UseTerms.md")
            .then((res) => res.text())
            .then((data) => setMarkdownFile(data));
        
        // Bloquear el scroll del fondo
        document.body.style.overflow = "hidden";

        // Limpiar el bloqueo cuando el modal se cierre
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-SecGray bg-opacity-50 flex items-center justify-center z-50">
            {/* Div para pointer-events-none, que anula los eventos del fondo */}
            <div className="w-[50%] h-[65vh] bg-white rounded-2xl p-4 pointer-events-none"> 
                <div className="flex flex-col items-center justify-center gap-4 w-full h-full pointer-events-auto">
                    {markdownFile ? (
                        <>
                            <div className="overflow-y-auto p-2"> {/* Aseguramos scroll en el área de Markdown */}
                                <ReactMarkdown 
                                    className="prose flex flex-col gap-4 pr-3 text-justify"
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
                            <button
                                className={`flex items-center justify-center bg-PrimCreamCan px-2 py-1 rounded-md border-2 border-black hover:scale-110`}
                                onClick={closeModalAction}
                            >
                                Entendido
                            </button>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UseTerms;
