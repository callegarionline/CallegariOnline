import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/companyData';
import { ArrowRight, FileInput, SearchCheck, Compass, CheckCircle } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenBudgetModal?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenBudgetModal }) => {
  const stepIcons = [FileInput, SearchCheck, Compass, CheckCircle];

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
            PASSO A PASSO
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Como Funciona
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Fluxo simplificado e transparente desde o primeiro contato até a entrega do laudo pericial ou parecer técnico.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || CheckCircle;
            return (
              <div
                key={step.number}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200 relative flex flex-col justify-between hover:border-[#2f5d8f] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#2f5d8f] text-white flex items-center justify-center font-bold text-lg font-mono">
                      {step.number}
                    </div>
                    <div className="p-2 text-[#727375]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 z-10 text-slate-300">
                    <ArrowRight className="w-6 h-6 text-[#2f5d8f]/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#orcamento"
            onClick={(e) => {
              scrollToSection(e, '#orcamento');
              if (onOpenBudgetModal) onOpenBudgetModal();
            }}
            className="inline-flex items-center gap-2 bg-[#2f5d8f] hover:bg-[#244973] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-md shadow-md transition-all group"
          >
            <span>SOLICITAR ANÁLISE DA DEMANDA</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
