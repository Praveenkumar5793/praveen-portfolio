import React from 'react';
import { education, certifications, internship } from '../data/portfolio';
import { GraduationCap, Award, Building2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Background</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 transition-colors">
                  <span className="text-xs font-mono text-blue-400">{edu.period}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{edu.degree}</h3>
                  <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certs & Internship Column */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Skills</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-300 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
                <Building2 className="w-3.5 h-3.5" />
                <span>Industry Training</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 border-l-4 border-l-purple-500">
                <h3 className="text-lg font-bold text-white">{internship.role}</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{internship.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
