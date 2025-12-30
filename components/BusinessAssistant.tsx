
import React, { useState, useRef, useEffect } from 'react';
import { getBusinessInsights } from '../services/geminiService';
import { Message } from '../types';
import Icon from './Icons';

const BusinessAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm your Sebenza AI Business Consultant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const businessContext = "This is a company using Sebenza System for CRM, Inventory, HR, and Accounting.";
    const response = await getBusinessInsights(input, businessContext);

    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button - Smaller on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-12 md:w-16 h-12 md:h-16 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full shadow-2xl flex items-center justify-center transition-all z-50 group"
        aria-label="Open AI Assistant"
      >
        <Icon name={isOpen ? "X" : "Sparkles"} size={20} className="md:w-7 md:h-7" />
      </button>

      {/* Chat Window - Fullscreen on mobile, floating on desktop */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-8 md:w-[380px] md:h-[550px] bg-white dark:bg-gray-800 md:border md:border-gray-200 dark:md:border-gray-700 md:rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <Icon name="Cpu" size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-900 dark:text-white">Sebenza AI</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-mono">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 md:hidden">
              <Icon name="X" size={20} />
            </button>
            <button onClick={() => setIsOpen(false)} className="hidden md:flex text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Icon name="ChevronDown" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 md:p-4 rounded-2xl text-sm ${m.role === 'user'
                    ? 'bg-[#1e3a5f] text-white rounded-br-none'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-600'
                  }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl rounded-bl-none animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input - Safe area padding for mobile */}
          <div className="p-3 md:p-4 border-t border-gray-200 dark:border-gray-700 pb-6 md:pb-4 flex-shrink-0">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-full py-3 px-4 pr-12 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f] dark:focus:border-blue-400 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isTyping}
                className="absolute right-1.5 top-1.5 w-9 h-9 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full flex items-center justify-center disabled:opacity-50 transition-colors"
              >
                <Icon name="ArrowUp" size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessAssistant;
