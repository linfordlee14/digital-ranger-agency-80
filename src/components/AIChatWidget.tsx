import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const STORAGE_KEY = 'linfy-chat-history';
const DEFAULT_GREETING: Message = {
  id: 1,
  text: "Hello! I'm Linfy AI. How can I help you secure your data or protect wildlife today?",
  sender: 'bot',
};

const loadMessages = (): Message[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return [DEFAULT_GREETING];
};

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(loadMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now(), text: input.trim(), sender: 'user' };
    const currentInput = input.trim();
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Send conversation history (excluding the initial greeting)
      const history = messages.slice(1).map((m) => ({ text: m.text, sender: m.sender }));

      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: currentInput, history },
      });

      if (error) throw error;

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data?.reply || "I couldn't generate a response. Please try again.",
          sender: 'bot',
        },
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "I'm having trouble connecting right now. Please try again in a moment.",
          sender: 'bot',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] h-[480px] flex flex-col rounded-2xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-xl shadow-2xl animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-cyan to-bio-green flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-background" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Linfy AI</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/[0.05] text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-bio-green/15 border border-bio-green/20 text-foreground rounded-br-md'
                      : 'bg-neon-cyan/10 border border-neon-cyan/15 text-foreground rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed bg-neon-cyan/10 border border-neon-cyan/15 text-muted-foreground rounded-bl-md flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Linfy AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/[0.08]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/30 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-neon-cyan to-bio-green text-background hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-bio-green flex items-center justify-center shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 hover:scale-105 transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-background" />
        ) : (
          <MessageCircle className="w-6 h-6 text-background" />
        )}
      </button>
    </>
  );
};

export default AIChatWidget;
