import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBuildingsImage from '../assets/images/hero_buildings_engineering_1789050587321.jpg';
import heroForensicDarkImage from '../assets/images/hero_forensic_dark_1789089864272.jpg';

interface HeroProps {
  onOpenBudgetModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBudgetModal }) => {
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
    <section id="home" className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 md:pb-20 bg-slate-100 overflow-hidden border-b border-gray-200">
      {/* Background: Imagem de engenharia e prédios com maior luminosidade e visibilidade */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={heroBuildingsImage}
          alt="Engenharia e Edificações Urbanas"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 brightness-[1.12] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Camada translúcida mais suave para acender os prédios mantendo leitura nítida do texto */}
        <div className="absolute inset-0 bg-white/65 sm:bg-white/60 lg:bg-gradient-to-r lg:from-white/88 lg:via-white/70 lg:to-white/35 backdrop-brightness-[1.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Copy Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-[1.15] font-serif tracking-tight">
              Engenharia Legal que transforma <span className="text-[#2f5d8f]">complexidade técnica</span> em segurança jurídica.
            </h1>

            {/* Supporting Description */}
            <p className="text-slate-900 text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              Elaboramos laudos periciais, avaliações patrimoniais e pareceres técnicos fundamentados na ABNT para blindar teses de advogados, escritórios e investidores em litígios de alto valor em todo o Brasil.
            </p>

            {/* Action Buttons - Sharp Rectangular Styling */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#orcamento"
                onClick={(e) => {
                  scrollToSection(e, '#orcamento');
                  if (onOpenBudgetModal) onOpenBudgetModal();
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#2f5d8f] hover:bg-[#234870] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-4 transition-all shadow-md hover:shadow-lg group"
              >
                <span>SOLICITAR ANÁLISE PRÉVIA</span>
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

          {/* Right Column: Quadro com imagem escura de engenharia legal e perícias */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 group">
              <div className="relative h-[380px] sm:h-[450px] w-full overflow-hidden">
                <img
                  src={heroForensicDarkImage}
                  alt="Engenharia Legal e Perícias Técnicas - Callegari Engenharia"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.98] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle soft lighting overlay for elegance and contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

