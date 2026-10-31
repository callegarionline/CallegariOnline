import React from 'react';
import { Globe } from 'lucide-react';
import coverageBgImage from '../assets/images/coverage_brazil_bg_1787220031506.jpg';

export const NationalCoverageSection: React.FC = () => {
  return (
    <section id="atuacao-nacional" className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Graphic & Brazil Coverage Map Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={coverageBgImage}
          alt="Presença Nacional - Callegari Engenharia"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 opacity-25"
          referrerPolicy="no-referrer"
        />
        {/* Dark Blue/Slate Gradient Overlay guaranteeing total text contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-[#182d47]/85 to-slate-950/95" />
        <div className="absolute inset-0 bg-blueprint-pattern opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-sm font-mono font-bold tracking-widest uppercase">
            <Globe className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>PRESENÇA NACIONAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif leading-tight">
            Engenharia Legal em todo o Brasil.
          </h2>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            A Callegari Engenharia possui atuação em todo o território nacional, oferecendo suporte técnico especializado para clientes, advogados e escritórios de advocacia em diferentes regiões do país.
          </p>
        </div>

      </div>
    </section>
  );
};

