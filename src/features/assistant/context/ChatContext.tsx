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
    openChat: (skipWelcome?: boolean) => void;
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
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [sessionId] = useState(() => Math.random().toString(36).substring(7));

    const openChat = useCallback((skipWelcome?: boolean) => {
        setIsOpen(true);
        // Only add welcome message if the chat is completely empty and not skipped
        if (!skipWelcome) {
            setMessages(prev => {
                if (prev.length === 0) {
                    return [{ text: "¡Hola! Soy Diamantín, tu asistente virtual de CalMiranda. ¿En qué puedo ayudarte hoy?", isBot: true }];
                }
                return prev;
            });
        }
    }, []);
    
    const closeChat = useCallback(() => setIsOpen(false), []);
    const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim()) return;

        const isFirstMessage = messages.length === 0 || (messages.length === 1 && messages[0].isBot);

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
                        chatInput: text,
                        action: 'sendMessage',
                        sessionId: sessionId,
                        isFirstMessage: isFirstMessage,
                        timestamp: new Date().toISOString(),
                        source: 'CalMiranda Chatbot'
                    }),
                });

                setIsTyping(false);

                if (!response.ok) {
                    let errorDetail = '';
                    try {
                        const errorData = await response.json();
                        errorDetail = JSON.stringify(errorData);
                    } catch (e) {
                        try {
                            errorDetail = await response.text();
                        } catch (t) {
                            errorDetail = 'No se pudo leer el detalle del error';
                        }
                    }
                    console.error('Error en la respuesta del webhook:', response.status, response.statusText, 'Detalle:', errorDetail);
                    setMessages(prev => [...prev, {
                        text: "Lo siento, tuve un problema al conectar con mi cerebro digital (Error 500). ¿Podrías intentar de nuevo en un momento?",
                        isBot: true
                    }]);
                } else {
                    const data = await response.json();
                    console.log('Respuesta recibida de n8n:', data);

                    // Add n8n's response to messages
                    // Assuming n8n returns something like { output: "message" } or { message: "text" }
                    const botResponse = data.output || data.message || data.text || "Recibí tu mensaje, pero no sé cómo responder procesalmente.";

                    setMessages(prev => [...prev, {
                        text: botResponse,
                        isBot: true
                    }]);
                }
            } catch (error) {
                console.error('Error de red al conectar con n8n:', error);
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    text: "Parece que hay un problema de conexión. Por favor, asegúrate de estar en línea.",
                    isBot: true
                }]);
            }
        } else {
            console.warn('VITE_N8N_WEBHOOK_URL no está definida.');
            setIsTyping(false);
            setMessages(prev => [...prev, {
                text: "Mi conexión con n8n no está configurada aún. Por favor, contacta al administrador.",
                isBot: true
            }]);
        }
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
