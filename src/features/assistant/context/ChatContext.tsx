import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
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

// Helper to deduce the base API URL from the chatbot URL
const getApiBaseUrl = (webhookUrl: string) => {
    if (!webhookUrl) return '';
    if (webhookUrl.endsWith('/web-chatbot')) {
        return webhookUrl.substring(0, webhookUrl.length - '/web-chatbot'.length);
    }
    try {
        const url = new URL(webhookUrl);
        if (url.pathname.includes('/api/')) {
            return `${url.origin}/api`;
        }
        return url.origin;
    } catch (e) {
        if (webhookUrl.startsWith('/')) {
            return '/api';
        }
        return '';
    }
};

const WELCOME_MESSAGE_TEXT = "¡Hola! Bienvenido a CalMiranda. Soy Diamantin, su asistente virtual. ¿En qué puedo ayudarle hoy? ¡Vamos positivos!";

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    
    // Persist sessionId in sessionStorage to maintain chat history across refreshes
    const [sessionId] = useState(() => {
        const key = 'calmiranda_chat_session_id';
        let id = sessionStorage.getItem(key);
        if (!id) {
            id = 'web_' + Math.random().toString(36).substring(7);
            sessionStorage.setItem(key, id);
        }
        return id;
    });

    const openChat = useCallback((skipWelcome?: boolean) => {
        setIsOpen(true);
        // Only add welcome message if the chat is completely empty and not skipped
        if (!skipWelcome) {
            setMessages(prev => {
                if (prev.length === 0) {
                    return [{ text: WELCOME_MESSAGE_TEXT, isBot: true }];
                }
                return prev;
            });
        }
    }, []);
    
    const closeChat = useCallback(() => setIsOpen(false), []);
    const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

    // Polling effect for fetching new messages in real-time
    useEffect(() => {
        if (!isOpen) return;

        const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
        if (!webhookUrl) return;

        const apiBaseUrl = getApiBaseUrl(webhookUrl);
        if (!apiBaseUrl) return;

        const fetchChatMessages = async () => {
            try {
                const response = await fetch(`${apiBaseUrl}/chats/${sessionId}/messages`);
                if (response.ok) {
                    const data = await response.json();
                    
                    // Map the server messages to our Message interface
                    const mappedMessages: Message[] = [
                        { text: WELCOME_MESSAGE_TEXT, isBot: true },
                        ...data.map((msg: any) => ({
                            text: msg.text,
                            isBot: msg.sender === 'bot' || msg.sender === 'agent'
                        }))
                    ];

                    setMessages(prev => {
                        // If we have more messages locally than server (e.g. user just sent a message
                        // and it hasn't finished writing to DB or returning in polling), don't overwrite.
                        if (prev.length > mappedMessages.length) {
                            return prev;
                        }

                        // Compare content to avoid unnecessary re-renders
                        const isIdentical = prev.length === mappedMessages.length &&
                            prev.every((msg, idx) => msg.text === mappedMessages[idx].text && msg.isBot === mappedMessages[idx].isBot);

                        if (isIdentical) {
                            return prev;
                        }

                        return mappedMessages;
                    });
                }
            } catch (err) {
                console.error('Error polling chat messages:', err);
            }
        };

        // Run immediately when chat is opened
        fetchChatMessages();

        const interval = setInterval(fetchChatMessages, 3000);
        return () => clearInterval(interval);
    }, [isOpen, sessionId]);

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim()) return;

        const isFirstMessage = messages.length === 0 || (messages.length === 1 && messages[0].isBot);

        // Add user message to UI
        setMessages(prev => [...prev, { text, isBot: false }]);
        setIsTyping(true);

        const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

        if (webhookUrl) {
            console.log('Enviando mensaje al chatbot backend:', webhookUrl);
            try {
                // Send to backend chatbot endpoint
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
                    console.error('Error en la respuesta del chatbot:', response.status, response.statusText, 'Detalle:', errorDetail);
                    setMessages(prev => [...prev, {
                        text: "Lo siento, tuve un problema al conectar con mi cerebro digital (Error 500). ¿Podrías intentar de nuevo en un momento?",
                        isBot: true
                    }]);
                } else {
                    const data = await response.json();
                    console.log('Respuesta recibida:', data);

                    const botResponse = data.output !== undefined ? data.output : (data.message || data.text || "");

                    if (data.handoff === true || (botResponse === "" && data.output === "")) {
                        // Handoff mode is active, do not append any bot message.
                        // The human agent will reply and polling will pick it up.
                        console.log('Handoff activado. Esperando respuesta del agente humano.');
                    } else {
                        const finalResponse = botResponse || "Recibí tu mensaje, pero no sé cómo responder procesalmente.";
                        setMessages(prev => [...prev, {
                            text: finalResponse,
                            isBot: true
                        }]);
                    }
                }
            } catch (error) {
                console.error('Error de red al conectar con chatbot:', error);
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
                text: "La conexión con el chatbot no está configurada aún. Por favor, contacta al administrador.",
                isBot: true
            }]);
        }
    }, [messages, sessionId]);

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
