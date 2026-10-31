import React from 'react';
import { DIFFERENTIALS } from '../data/companyData';
import { UserCheck2, Compass, ShieldCheck, Layers, Quote, Sparkles } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentialIcons = [
    {
      icon: UserCheck2,
      gradient: 'from-blue-600 to-[#2f5d8f]',
      badge: 'DEDICAÇÃO TOTAL',
    },
    {
      icon: Compass,
      gradient: 'from-[#2f5d8f] to-indigo-700',
      badge: 'ALINHAMENTO JURÍDICO',
    },
    {
      icon: ShieldCheck,
      gradient: 'from-blue-700 to-cyan-700',
      badge: 'RIGOR NORMATIVO ABNT',
    },
    {
      icon: Layers,
      gradient: 'from-indigo-600 to-[#1e3e63]',
      badge: 'ALTA PRECISÃO',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-100 border-y border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background blueprint accent */}
      <div className="absolute inset-0 bg-blueprint-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-300/60 text-[#2f5d8f] text-sm font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-[#2f5d8f]" />
            <span>NOSSO DIFERENCIAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Não entregamos apenas um laudo. Entregamos a <span className="text-[#2f5d8f]">solução adequada</span> para cada demanda.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            O diferencial da Callegari Engenharia está na capacidade de conectar a precisão das normas técnicas de engenharia aos objetivos estratégicos do processo judicial ou extrajudicial.
          </p>
        </div>

        {/* 4 Pillars Grid - Centered & Attractive Blue Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DIFFERENTIALS.map((diff, idx) => {
            const config = differentialIcons[idx] || differentialIcons[0];
            const Icon = config.icon;

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 border border-blue-100 shadow-md hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Top Subtle Blue Glow Line */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-300 via-[#2f5d8f] to-blue-300 opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Centered Attractive Icon with Rich Blue Gradient & Ring */}
                <div className="relative mb-5">
                  <div className="absolute -inset-1.5 rounded-2xl bg-blue-400/20 blur-[5px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 stroke-[2.2]" />
                  </div>
                </div>

                {/* Badge Tag */}
                <span className="text-xs font-mono font-bold text-[#2f5d8f] uppercase tracking-wider bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full mb-3">
                  {config.badge}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-2.5 group-hover:text-[#2f5d8f] transition-colors">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {diff.description}
                </p>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 w-full flex justify-center">
                  <span className="w-8 h-1 rounded-full bg-blue-200 group-hover:w-14 group-hover:bg-[#2f5d8f] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Highlight Quote Box with Rich Blue Accent */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-white via-blue-50/50 to-white border-2 border-[#2f5d8f]/30 rounded-2xl p-8 sm:p-10 shadow-xl relative text-center">
          <Quote className="w-12 h-12 text-[#2f5d8f]/15 absolute top-5 left-6 pointer-events-none" />
          <blockquote className="text-xl sm:text-2xl font-serif font-bold text-[#2f5d8f] leading-snug relative z-10 italic max-w-2xl mx-auto">
            "Entender o problema é o primeiro passo para entregar a solução certa."
          </blockquote>
          <p className="text-sm font-mono font-bold uppercase tracking-widest text-slate-600 mt-4">
            — Filosofia de Trabalho Callegari Engenharia
          </p>
        </div>

      </div>
    </section>
  );
};

