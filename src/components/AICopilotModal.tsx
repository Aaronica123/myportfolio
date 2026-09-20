import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, RefreshCw, MessageSquare } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface AICopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVeneva: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

export const AICopilotModal: React.FC<AICopilotModalProps> = ({
  isOpen,
  onClose,
  onOpenVeneva,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Greetings! I am **A.A.R.O.N.-AI**, the automated systems copilot representing Aaron Mutua (@Aaronica123).

I can answer questions regarding Aaron's:
• Low-level **C systems programming** & memory safety
• **Microsoft Azure & DevOps** certification speedrun
• Flagship **Veneva 2.0 Project Overhaul** (process fixes, C daemon, Zero-Trust auth)
• **GDG Pwani Hackathon 2026** champion project (Julisha Healthcare AI)
• Background at **Masinde Muliro University** and **KMFRI** enterprise experience

How can I assist your inquiry today?`,
      time: 'ONLINE',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Why is Aaron shifting Veneva to C / JavaScript?',
    'What are Aaron\'s Azure & DevOps objectives?',
    'Tell me about the GDG Pwani Hackathon win',
    'How does Aaron build secure systems in C?',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || loading) return;

    soundManager.playClick();

    const userMsg: Message = {
      role: 'user',
      content: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setLoading(true);

    try {
      const res = await fetch('/api/portfolio/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error('API request failed');

      const data = await res.json();
      const assistantMsg: Message = {
        role: 'assistant',
        content: data.reply || 'Systems nominal. No error details recorded.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      soundManager.playAchievement();
    } catch {
      // Fallback deterministic copilot response
      let fallbackText = `I am Aaron's automated systems copilot. Aaron Mutua is an IT student at Masinde Muliro University of Science and Technology, specializing in low-level C programming, Azure cloud certifications, and AI systems. 

For the Veneva project, he is resolving legacy synchronous bottlenecks by decoupling compute into a high-throughput C micro-daemon while using modern TypeScript for interaction, backed by Zero-Trust token security.

You can contact him directly at k.aaronmutua@gmail.com or 0700069944!`;

      if (text.toLowerCase().includes('veneva')) {
        fallbackText = `The Veneva 2.0 Overhaul is Aaron's primary initiative. The legacy system suffered from blocking synchronous queues and vulnerable static session tokens. Aaron redesigned the architecture into a Dual-Core system: a C micro-daemon for memory-safe concurrency and cryptographic operations, paired with a modern reactive web interface and Zero-Trust ed25519 authentication!`;
      } else if (text.toLowerCase().includes('azure')) {
        fallbackText = `Aaron is actively targeting the Microsoft Azure Certification path (AZ-900 Fundamentals, AZ-104 Administrator, AZ-400 DevOps Solutions), combining cloud infrastructure automation with Docker containers and GitHub Actions CI/CD!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: fallbackText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      soundManager.playClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn font-['Plus_Jakarta_Sans']">
      <div className="w-full max-w-2xl h-[560px] rounded-2xl border-2 border-blue-500/70 bg-[#061224] shadow-[0_0_50px_rgba(37,99,235,0.35)] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#030917] border-b border-blue-900/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-400 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-['Chakra_Petch'] font-bold text-sm text-white flex items-center gap-2">
                <span>A.A.R.O.N. AI COPILOT</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/60">
                  ONLINE
                </span>
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Grounded in Aaron Mutua's verified resume & portfolio data
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm custom-scrollbar">
          {messages.map((msg, idx) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={idx}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/60 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                    <Sparkles size={14} />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    isUser
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-tr-none'
                      : 'bg-[#030917] border border-cyan-900/60 text-slate-200 rounded-tl-none font-normal'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  <span className="text-[10px] font-mono text-slate-400/80 mt-1 block text-right">
                    {msg.time}
                  </span>
                </div>
                {isUser && (
                  <div className="w-7 h-7 rounded-lg bg-blue-900 border border-blue-400/60 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User size={14} />
                  </div>
                )}
              </div>
            );
          })}
          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 p-2">
              <RefreshCw size={14} className="animate-spin" />
              <span>A.A.R.O.N. is synthesizing response...</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-[#030814] border-t border-cyan-950/80 flex flex-wrap gap-1.5">
          {quickPrompts.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(q)}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500 transition-all text-left"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#030917] border-t border-blue-900/60 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Ask anything about Aaron's C training, Azure certs, or Veneva..."
            className="flex-1 bg-[#061224] border border-cyan-900/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={loading || !inputValue.trim()}
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-800 text-black font-bold transition-all shadow-[0_0_12px_rgba(6,182,212,0.4)]"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
