import React from 'react';
import { experience } from '../data/portfolio';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Building robust enterprise solutions and scalable frontend platforms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 shadow-lg shadow-cyan-500/50" />

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative hover:border-cyan-500/40 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-cyan-400">
                    {experience.company}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{experience.role}</h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {experience.period}
                </div>
              </div>

              {/* Bullets */}
              <div className="pt-6 space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-3">
                  {experience.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badge Row */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  React.js
                </span>
                <span className="px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  TypeScript
                </span>
                <span className="px-3 py-1 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-300 text-xs font-mono">
                  GraphQL & Apollo
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  Git & GitLab
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
