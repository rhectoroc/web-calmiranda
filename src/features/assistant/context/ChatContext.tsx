import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface Message {
    text: string;
    isBot: boolean;
}

interface ChatContextType {
    isOpen: boolean;
    messages: Message[];
    inputValue: string;
    openChat: () => void;
    closeChat: () => void;
    toggleChat: () => void;
    sendMessage: (text: string) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setInputValue: (value: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "¡Hola! Soy Diamantín, tu asistente virtual de CalMiranda. ¿En qué puedo ayudarte hoy?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");

    const openChat = useCallback(() => setIsOpen(true), []);
    const closeChat = useCallback(() => setIsOpen(false), []);
    const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

    const sendMessage = useCallback((text: string) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { text, isBot: false }]);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "¡Gracias por escribirnos! Un asesor de CalMiranda se pondrá en contacto con usted a la brevedad posible. ¿Desea dejarnos su número telefónico?",
                isBot: true
            }]);
        }, 1000);
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    return (
        <ChatContext.Provider value={{
            isOpen,
            messages,
            inputValue,
            openChat,
            closeChat,
            toggleChat,
            sendMessage,
            handleInputChange,
            setInputValue
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
};
