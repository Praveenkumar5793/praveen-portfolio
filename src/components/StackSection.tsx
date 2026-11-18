import React, { useState } from 'react';
import { stackLayers } from '../data/portfolio';
import { Layers, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';

export const StackSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>(stackLayers[0].id);

  const selected = stackLayers.find((l) => l.id === activeLayer) || stackLayers[0];

  return (
    <section id="stack" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Technology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack Layers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From the browser to the database. Pick a layer to inspect the technologies and tools I utilize day to day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Layer Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 px-2">
              Select Architecture Layer
            </h3>
            {stackLayers.map((layer, index) => {
              const isActive = layer.id === activeLayer;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-200 group ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/50'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: layer.color }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                        <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {layer.title}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{layer.subtitle}</span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Layer Details Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 blur-3xl opacity-15 rounded-full pointer-events-none"
                style={{ backgroundColor: selected.color }}
              />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-slate-400">
                    Active Layer Overview
                  </span>
                  <h4 className="text-2xl font-bold text-white mt-1 flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: selected.color }}
                    />
                    {selected.title}
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-cyan-300 border border-slate-700">
                  {selected.tools.length} Tools Loaded
                </div>
              </div>

              {/* Tools list */}
              <div className="pt-6">
                <h5 className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Libraries, Frameworks & Tooling
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selected.tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Context Banner */}
              <div className="mt-8 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs text-slate-400 leading-relaxed font-mono">
                <span className="text-cyan-400 font-semibold">&gt; System Note:</span> Applied in enterprise micro-frontend and multi-tier architectures, ensuring clean separation of concerns and high maintainability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
