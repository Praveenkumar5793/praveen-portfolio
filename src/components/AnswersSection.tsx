import React from 'react';
import { quickAnswers } from '../data/portfolio';
import { HelpCircle, ChevronRight } from 'lucide-react';

export const AnswersSection: React.FC = () => {
  return (
    <section id="answers" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Quick Info</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ask the Portfolio
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tap a common question for a short answer directly from my professional profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickAnswers.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center justify-between">
                {item.q}
                <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
