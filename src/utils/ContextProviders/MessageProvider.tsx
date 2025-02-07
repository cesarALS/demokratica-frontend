// Manejo de mensajes de error para el usuario

"use client"

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

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
    if (!context) throw new Error("useAuth debe usarse dentro de un AuthProvider");
    return context;
}

export const MessageProvider = ({ children }: {children: React.ReactNode}) => {
    
    const [message, setMessage] = useState<Message|undefined>(undefined);

    useEffect(() => {
        let timer: NodeJS.Timeout; // Store the timer ID

        if (message) {
            timer = setTimeout(() => {
                setMessage(undefined);
            }, message.time);
        }

        return () => {  // Cleanup function to clear the timer
            clearTimeout(timer);
        };
    }, [message]); // Add message as a dependency
    
    /*
    const colors = {
        good: 'bg-green',
        neutral: 'bg-AccentBlue',
        bad: 'bg-red'
    }
    */
    
    return (
        <MessageContext.Provider value={{setMessage, message}}>
            {children}
        </MessageContext.Provider>
    );
}