"use client"

import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import { linkStyles } from "@/utils/tailwindUtils";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const TerminosDeUso = () => {
    
    const [markdownFile, setMarkdownFile] = useState<string>("");
    useEffect(() => {
        // Lee el archivo Markdown desde la carpeta public
        fetch("/UseTerms.md")
            .then((res) => res.text())
            .then((data) => setMarkdownFile(data));
    }, []);
     
    return (
        <PageContentContainer>
            <div className="border-2 min-h-[75vh] bg-white border-black rounded-md y-overflow-scroll p-5">
                <ReactMarkdown 
                    className="flex flex-col pr-3 gap-5 text-justify w-full"
                    components={{
                        h1: ({ children, ...props}) => (                                      
                            <h1 className="text-center font-bold text-2xl" {...props}>
                                {children}
                            </h1>
                        ),
                        h2: ({ children, ...props}) => (                                       
                            <h2 className="text-left font-semibold text-xl" {...props}>
                                {children}
                            </h2>                                        
                        ),
                        p: ({ children, ...props}) => (
                            <p className="text-lg" {...props}>
                                {children}
                            </p>
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
        </PageContentContainer>
    );
};

export default TerminosDeUso;