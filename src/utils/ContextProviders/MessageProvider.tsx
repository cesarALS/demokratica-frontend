// Manejo de mensajes de error para el usuario

"use client"

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";

enum News {
    good = 1,
    neutral = 2,
    bad = 3
}

export interface Message {
    message: string,
    news: News,
    time: number
}

interface MessageContextProps {
    setMessage: Dispatch<SetStateAction<Message | undefined>>
    message: Message | undefined
}

const MessageContext = createContext<MessageContextProps|undefined>(undefined);

// Hook que deben importar los componentes
export function useMessageContext(){
    const context = useContext(MessageContext);
    if (!context) throw new Error("useMessageContext debe usarse dentro de un MessageProvider");
    return context;
}

export const MessageProvider = ({ children }: {children: React.ReactNode}) => {
    
    const [message, setMessage] = useState<Message|undefined>(undefined);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (message) {            
            
            // Cancela cualquier timeout anterior antes de crear uno nuevo
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                setMessage(undefined);
            }, message.time);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [message]);
    
    return (
        <MessageContext.Provider value={{setMessage, message}}>
            {children}
        </MessageContext.Provider>
    );
}