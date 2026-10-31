import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import heroBgImage1 from '../assets/images/hero_bg_engineering_1786490060979.jpg';

interface ConversionCTAProps {
  onOpenBudgetModal?: () => void;
}

export const ConversionCTA: React.FC<ConversionCTAProps> = ({ onOpenBudgetModal }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-slate-950 text-white py-20 sm:py-24 relative overflow-hidden">
      
      {/* Background Image Layer with vivid engineering background & dark gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={heroBgImage1}
          alt="Engenharia e Avaliações - Callegari Engenharia"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* High contrast gradient overlay for ultra-crisp legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-[#1d3d61]/80 to-slate-950/90" />
        <div className="absolute inset-0 bg-blueprint-pattern opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-mono font-bold tracking-widest uppercase">
            <span>RESPOSTA RÁPIDA & ANÁLISE PRÉVIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight text-white drop-shadow-sm">
            Precisa de Assistência Técnica Judicial ou Laudo de Avaliação Urgente?
          </h2>

          <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Não deixe prazos processuais correrem sem suporte pericial. Envie os detalhes da demanda ou os autos do processo e receba uma análise técnica preliminar com a metodologia ABNT aplicável.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#orcamento"
              onClick={(e) => {
                scrollToSection(e, '#orcamento');
                if (onOpenBudgetModal) onOpenBudgetModal();
              }}
              className="w-full sm:w-auto bg-[#2f5d8f] hover:bg-[#234870] text-white font-bold text-sm sm:text-base tracking-wider uppercase px-8 py-4 rounded-md shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer border border-blue-400/30"
            >
              <span>SOLICITAR ANÁLISE DO PROCESSO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-600 hover:border-slate-400 font-bold text-sm sm:text-base tracking-wider uppercase px-7 py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>FALAR COM ENGENHEIRA PELO WHATSAPP</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

