import React from 'react';
import { personal } from '../data/portfolio';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
            <Terminal className="w-4 h-4 text-slate-950" />
          </div>
          <span className="font-semibold text-sm text-slate-300">
            {personal.name}
          </span>
        </div>

        <p className="text-xs font-mono text-slate-500 text-center">
          © {new Date().getFullYear()} {personal.name}. Built with React, TypeScript & Neon UI.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 text-xs font-mono transition-colors"
        >
          Back to top
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
