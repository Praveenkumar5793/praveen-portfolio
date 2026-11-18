import React, { useState } from 'react';
import { Bot, Send, User, RefreshCw } from 'lucide-react';

export const AIAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hi! I am an AI assistant trained on Praveen Kumar Kalva\'s background. Ask me anything about his experience, stack, or projects!' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: "I'm a demo assistant. In a production environment, this would be connected to an RAG backend using Praveen's resume data to provide accurate, real-time answers!" }]);
    }, 1000);
  };

  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Bot className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">AI Portfolio Assistant</h2>
              <p className="text-slate-400 text-sm">Ask me about Praveen's career & skills</p>
            </div>
            <button
              onClick={() => setMessages([messages[0]])}
              className="ml-auto p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800"
            >
                <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto space-y-4 pr-2 mb-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            {messages.map((m, i) => (
              <div key={i} className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'ai' && (
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 shrink-0">
                        <Bot className="w-4 h-4 text-cyan-400" />
                    </div>
                )}
                <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${m.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
                  {m.text}
                </div>
                {m.role === 'user' && (
                    <div className="w-8 h-8 rounded-lg bg-cyan-900/50 flex items-center justify-center border border-cyan-800 shrink-0">
                        <User className="w-4 h-4 text-cyan-200" />
                    </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 p-2 bg-slate-900/50 rounded-2xl border border-slate-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my projects..."
              className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-cyan-500 rounded-xl text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
