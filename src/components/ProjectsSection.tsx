import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import { ExternalLink, FolderGit2, Code } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'React', 'IoT', 'Networking', 'Full Stack'];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'React') return p.tags.includes('React.js') || p.tags.includes('React') || p.tags.includes('TypeScript');
    if (filter === 'IoT') return p.tags.includes('IoT');
    if (filter === 'Networking') return p.tags.includes('Networking');
    if (filter === 'Full Stack') return p.tags.includes('Full Stack') || p.tags.includes('Node.js') || p.tags.includes('GraphQL');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects & Innovations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Production applications, enterprise platforms, and IoT machine learning systems.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                    {project.icon}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                      title="Source Code"
                    >
                      <Code className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 rounded-lg bg-slate-950 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                {/* Stats / Features */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stats.map((st) => (
                    <span
                      key={st}
                      className="px-2.5 py-1 rounded-md bg-slate-950/60 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      {st}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-cyan-400/80 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
