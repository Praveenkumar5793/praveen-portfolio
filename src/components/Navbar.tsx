import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolio';
import { Menu, X, Download, Terminal, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    window.print();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-cyan-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <span className="font-bold text-lg text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
              Praveen.dev
            </span>
            <span className="block text-xs text-cyan-400/80 font-mono">AI & Software Engineer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-xl hover:bg-cyan-900/40 hover:border-cyan-400/60 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 bg-slate-900/80 border border-slate-800 rounded-xl"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl p-6 shadow-2xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-xl transition-colors border border-slate-900 hover:border-slate-800"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                handleResumeDownload();
                setMobileMenuOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 rounded-xl"
            >
              <Download className="w-4 h-4" />
              Resume PDF
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
