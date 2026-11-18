import React from 'react';
import { personal } from '../data/portfolio';
import { ArrowRight, Code, Database, Globe, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Neon Gradients & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))] -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-500/10 via-purple-600/15 to-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Subtle Matrix / Circuit Line Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md shadow-sm shadow-cyan-950">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Software Engineer at Peritus Corp • Nebula Enterprise Platform</span>
        </div>

        {/* Main Title / Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering the <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent">
                Next-Gen Web & AI
              </span>{' '}
              Applications.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Hi, I'm <strong className="text-cyan-300">{personal.name}</strong>. {personal.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              {personal.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 rounded-xl hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#ai-assistant"
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl hover:bg-slate-800/80 transition-all backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Ask AI Assistant
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">5+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Architecture Layers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">GraphQL</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Data Layer</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">IoT & ML</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Smart Systems</div>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive 3D / Glass Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl bg-slate-900/70 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl group hover:border-cyan-500/40 transition-colors">
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md">
                Live Status
              </div>

              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span>stack.map — 5 layers</span>
              </div>

              {/* Terminal Code Snippet */}
              <div className="py-4 space-y-3 font-mono text-xs">
                <div className="text-slate-400">
                  <span className="text-cyan-400">const</span> developer = &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  name: <span className="text-green-400">"{personal.name}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  role: <span className="text-green-400">"{personal.role}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  company: <span className="text-green-400">"Peritus Corporation"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  platform: <span className="text-purple-400">"Nebula Enterprise"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  core: [<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"TypeScript"</span>, <span className="text-yellow-300">"GraphQL"</span>],
                </div>
                <div className="pl-4 text-slate-300">
                  focus: <span className="text-cyan-300">"Scalable UI & Distributed Systems"</span>
                </div>
                <div className="text-slate-400">&#125;;</div>
              </div>

              {/* Floating badges */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 flex items-center gap-1">
                  <Code className="w-3 h-3" /> React.js
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-purple-950/60 border border-purple-500/40 text-purple-300 flex items-center gap-1">
                  <Database className="w-3 h-3" /> Apollo Client
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> IoT Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
