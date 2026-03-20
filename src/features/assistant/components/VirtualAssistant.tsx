import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useChatContext } from '../context/ChatContext';

export const VirtualAssistant: React.FC = () => {
    const {
        isOpen,
        messages,
        inputValue,
        openChat,
        closeChat,
        sendMessage,
        handleInputChange,
        setInputValue,
        isTyping
    } = useChatContext();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(inputValue);
        setInputValue("");
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: "spring" }}
                onClick={() => openChat()}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-cal-emerald rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-cal-emerald-dark transition-colors duration-300 ${isOpen ? 'hidden' : 'flex'}`}
            >
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                    <video
                        src="/avatar/Avatar_Saludo_Para_Chatbot.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Pulsing Badge */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                />

                {/* Tooltip */}
                <div className="absolute top-1/2 -translate-y-1/2 right-20 whitespace-nowrap bg-white text-cal-charcoal px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    ¡Hola! Soy Diamantín 👋
                </div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] h-full sm:h-[500px] bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-cal-bone"
                    >
                        {/* Header */}
                        <div className="bg-cal-emerald p-4 text-white flex justify-between items-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.2) 0%, transparent 20%)', backgroundSize: '20px 20px' }} />

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/20">
                                        <video
                                            src="/avatar/Avatar_Saludo_Para_Chatbot.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Diamantín</h3>
                                    <span className="text-white/80 text-xs">Asistente Virtual CalMiranda</span>
                                </div>
                            </div>
                            <button
                                onClick={closeChat}
                                className="relative z-10 text-white/80 hover:text-white transition-colors hover:bg-white/10 p-1.5 rounded-lg"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-cal-bone/30 flex flex-col gap-4">
                            {messages.map((msg, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.isBot ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${msg.isBot
                                        ? 'bg-white text-cal-charcoal shadow-sm border border-cal-bone rounded-tl-none'
                                        : 'bg-cal-emerald text-white shadow-sm rounded-tr-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white text-cal-charcoal shadow-sm border border-cal-bone rounded-2xl rounded-tl-none px-4 py-3 text-sm flex gap-1 items-center">
                                        <motion.span
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                                            className="w-1.5 h-1.5 bg-cal-charcoal/40 rounded-full"
                                        />
                                        <motion.span
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                                            className="w-1.5 h-1.5 bg-cal-charcoal/40 rounded-full"
                                        />
                                        <motion.span
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                                            className="w-1.5 h-1.5 bg-cal-charcoal/40 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-cal-bone">
                            <form onSubmit={handleFormSubmit} className="flex gap-2 relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Escribe tu mensaje..."
                                    className="flex-1 bg-cal-bone/50 border border-cal-bone rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cal-emerald/20 transition-all font-inter"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="w-12 h-12 flex-shrink-0 bg-cal-emerald text-white rounded-xl flex items-center justify-center transition-colors hover:bg-cal-emerald-dark disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} className="translate-x-px" />
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <a
                                    href="https://adrielssystems.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-cal-charcoal/40 font-medium uppercase tracking-wider hover:text-cal-emerald transition-colors"
                                >
                                    Powered by Adriel's Systems
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
