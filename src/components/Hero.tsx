import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import heroBgImage1 from '../assets/images/hero_bg_engineering_1786490060979.jpg';
import heroBgImage2 from '../assets/images/hero_bg_valuation_1786538451052.jpg';
import heroTechImage from '../assets/images/hero_engineering_tech_1787220008077.jpg';

interface HeroProps {
  onOpenBudgetModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBudgetModal }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const heroImages = [heroBgImage1, heroBgImage2];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <section id="home" className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 md:pb-20 bg-slate-900 overflow-hidden border-b border-gray-100">
      {/* Hero Background Fade Slider Layer with controlled opacity */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Engenharia Legal e de Avaliações"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              activeImageIndex === idx ? 'opacity-[0.12]' : 'opacity-0'
            }`}
            referrerPolicy="no-referrer"
          />
        ))}
        {/* Soft gradient overlay ensuring clear reading of dark-on-light / high-contrast text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Copy Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge with Line Accent */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#2f5d8f]" />
              <span className="text-[11px] font-bold text-[#2f5d8f] uppercase tracking-[0.3em]">
                Engenharia Legal e de Avaliações
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-[1.15] font-serif tracking-tight">
              Engenharia Legal que transforma <span className="text-[#2f5d8f]">complexidade técnica</span> em decisões mais seguras.
            </h1>

            {/* Supporting Description */}
            <p className="text-[#727375] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Avaliações, perícias e soluções técnicas especializadas para apoiar advogados e escritórios de advocacia em demandas judiciais e extrajudiciais em todo o Brasil.
            </p>

            {/* Action Buttons - Sharp Rectangular Styling */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#orcamento"
                onClick={(e) => {
                  scrollToSection(e, '#orcamento');
                  if (onOpenBudgetModal) onOpenBudgetModal();
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#2f5d8f] hover:bg-[#234870] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-4 transition-all shadow-md hover:shadow-lg group"
              >
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#servicos"
                onClick={(e) => scrollToSection(e, '#servicos')}
                className="inline-flex items-center justify-center border border-gray-300 hover:border-[#2f5d8f] hover:bg-gray-50 text-black text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-4 transition-colors bg-white shadow-sm"
              >
                CONHEÇA NOSSOS SERVIÇOS
              </a>
            </div>

          </div>

          {/* Right Column: High-Impact Engineering & Valuation Photo (No text, pure technical visual) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden">
                <img
                  src={heroTechImage}
                  alt="Engenharia Legal e Perícias Técnicas - Callegari Engenharia"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft lighting overlay for elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

