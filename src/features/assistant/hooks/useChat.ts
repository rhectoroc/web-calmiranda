import { useState, useCallback } from 'react';

interface Message {
    text: string;
    isBot: boolean;
}

/**
 * Custom hook to manage chat state and bot responses.
 * @returns Object containing messages, input state, and handlers.
 */
export const useChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "¡Hola! Soy Diamantin, tu asistente virtual de CalMiranda. ¿En qué puedo ayudarte hoy?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");

    const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);
    const openChat = useCallback(() => setIsOpen(true), []);
    const closeChat = useCallback(() => setIsOpen(false), []);

    const sendMessage = useCallback((text: string) => {
        if (!text.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text, isBot: false }]);

        // Simulate bot response
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

    const clearInput = useCallback(() => setInputValue(""), []);

    return {
        isOpen,
        messages,
        inputValue,
        toggleChat,
        openChat,
        closeChat,
        sendMessage,
        handleInputChange,
        clearInput,
        setInputValue
    };
};
