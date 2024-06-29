import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { Message } from "../types/message";

const MessageContext = createContext<Message | undefined>(undefined);

const MessageProvider = ({ children }: { children: ReactNode }) => {
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = useCallback((message: string) => {
        setMessages(prevMessages => [...prevMessages, message])
    }, [])

    const clearMessages = () => {
        setMessages([]);
    }

    return (
        <MessageContext.Provider value={{ messages, addMessage, clearMessages }}>
            {children}
        </MessageContext.Provider>
    )
}

const useMessages = () => {
    const context = useContext(MessageContext);

    if (context === undefined) {
        throw new Error("useMessages must be used within a MessageProvider");
    }

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MessageProvider, useMessages }