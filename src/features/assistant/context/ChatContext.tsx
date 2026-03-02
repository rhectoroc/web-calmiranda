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
    isTyping: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "¡Hola! Soy Diamantín, tu asistente virtual de CalMiranda. ¿En qué puedo ayudarte hoy?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const openChat = useCallback(() => setIsOpen(true), []);
    const closeChat = useCallback(() => setIsOpen(false), []);
    const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim()) return;

        // Add user message to UI
        setMessages(prev => [...prev, { text, isBot: false }]);
        setIsTyping(true);

        const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

        if (webhookUrl) {
            console.log('Enviando mensaje a n8n:', webhookUrl);
            try {
                // Send to n8n Webhook
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: text,
                        timestamp: new Date().toISOString(),
                        source: 'CalMiranda Chatbot'
                    }),
                });

                if (!response.ok) {
                    console.error('Error en la respuesta del webhook:', response.status, response.statusText);
                } else {
                    console.log('Mensaje enviado exitosamente a n8n');
                }
            } catch (error) {
                console.error('Error de red al conectar con n8n:', error);
            }
        } else {
            console.warn('VITE_N8N_WEBHOOK_URL no está definida. El mensaje no se enviará a n8n.');
        }

        // Standard auto-response (can be replaced by n8n response if needed)
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                text: "¡Gracias por escribirnos! Un asesor de CalMiranda se pondrá en contacto con usted a la brevedad posible. ¿Desea dejarnos su número telefónico?",
                isBot: true
            }]);
        }, 1500);
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
            setInputValue,
            isTyping
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
