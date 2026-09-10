import React from 'react';
import { Award, Globe2, ShieldCheck, UserCheck2, Sparkles, CheckCircle2 } from 'lucide-react';

export const AuthorityBlock: React.FC = () => {
  const metrics = [
    {
      value: '12+ ANOS',
      highlight: 'AUTORIDADE',
      label: 'Experiência & Consistência',
      sublabel: 'Mais de 3.000 laudos periciais e pareceres técnicos elaborados com rigor normativo indiscutível.',
      icon: Award,
      badge: 'Desde 2014',
      gradient: 'from-blue-600 to-indigo-700',
      iconBg: 'bg-gradient-to-br from-amber-400 to-amber-600',
      iconColor: 'text-slate-950',
      accentGlow: 'group-hover:shadow-amber-500/20',
      borderAccent: 'hover:border-amber-400/40',
    },
    {
      value: '16+ ESTADOS',
      highlight: 'ESCALA NACIONAL',
      label: 'Atuação Nacional',
      sublabel: 'Mobilidade e estrutura logística para realizar vistorias e perícias complexas em qualquer comarca do Brasil.',
      icon: Globe2,
      badge: 'Todo o Brasil',
      gradient: 'from-cyan-600 to-blue-700',
      iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-600',
      iconColor: 'text-white',
      accentGlow: 'group-hover:shadow-cyan-500/20',
      borderAccent: 'hover:border-cyan-400/40',
    },
    {
      value: '+R$ 5 MI',
      highlight: 'ECONOMIA & VALOR',
      label: 'Otimização Tributária',
      sublabel: 'Redução efetiva e fundamentada de valores superavaliados em contestações fiscais de ITBI, IPTU e ITCMD.',
      icon: ShieldCheck,
      badge: 'Economia Real',
      gradient: 'from-blue-700 to-slate-800',
      iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
      iconColor: 'text-white',
      accentGlow: 'group-hover:shadow-emerald-500/20',
      borderAccent: 'hover:border-emerald-400/40',
    },
    {
      value: 'ABNT & IBAPE',
      highlight: 'RECONHECIMENTO',
      label: 'Rigor Normativo',
      sublabel: 'Laudos elaborados por peritos membros da Diretoria do IBAPE e mestres em Engenharia de Avaliações.',
      icon: UserCheck2,
      badge: 'Diretoria IBAPE',
      gradient: 'from-slate-700 to-blue-900',
      iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-600',
      iconColor: 'text-white',
      accentGlow: 'group-hover:shadow-blue-500/20',
      borderAccent: 'hover:border-blue-400/40',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-[#182d47] to-slate-950 text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-[#2f5d8f]/30 shadow-2xl">
      {/* Background blueprint matrix & ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Subtle Section Tagline Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>PILARES DE CONFIANÇA & AUTORIDADE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-white">
            Solidez técnica comprovada para decisões de alto impacto
          </h2>
        </div>

        {/* 4 Authority Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-6 border border-white/10 ${item.borderAccent} transition-all duration-300 hover:-translate-y-1.5 shadow-lg ${item.accentGlow} flex flex-col justify-between overflow-hidden`}
              >
                {/* Top Accent Light Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#60a5fa]/50 to-transparent group-hover:via-[#38bdf8] transition-all duration-500" />
                
                <div>
                  {/* Top Row: Eye-Catching Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative">
                      {/* Outer Glowing Ring */}
                      <div className="absolute -inset-1 rounded-2xl bg-white/20 blur-[6px] opacity-40 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Main Icon Container */}
                      <div className={`relative w-13 h-13 sm:w-14 sm:h-14 ${item.iconBg} ${item.iconColor} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 stroke-[2.2]" />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-200 bg-blue-500/20 border border-blue-400/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Main Value & Tag */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-cyan-300 block mb-0.5">
                      {item.highlight}
                    </span>
                    <h3 className="text-white text-2xl sm:text-3xl font-black tracking-tight font-serif group-hover:text-cyan-200 transition-colors">
                      {item.value}
                    </h3>
                  </div>

                  <h4 className="text-slate-200 text-sm font-bold tracking-wide mb-2 flex items-center gap-1.5">
                    {item.label}
                  </h4>

                  <p className="text-slate-400 group-hover:text-slate-300 text-xs leading-relaxed font-normal transition-colors">
                    {item.sublabel}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

