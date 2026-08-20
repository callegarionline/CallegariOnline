import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/companyData';
import { CaseStudy } from '../types';
import { Briefcase, ArrowRight, X, FileText, CheckCircle2 } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenBudgetModal?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBudgetModal }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

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
    <section id="portfolio" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
            PORTFÓLIO & CASOS DE ATUAÇÃO
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Experiência aplicada a diferentes desafios.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Apresentação de casos técnicos estruturados exemplificando metodologias de avaliação e suporte pericial aplicadas a demandas judiciais e extrajudiciais.
          </p>
        </div>

        {/* Case Cards Grid - Elevated Box Highlight Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#2f5d8f] shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Highlight Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2f5d8f]" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold text-white bg-[#2f5d8f] uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                    {caseItem.type}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                    {caseItem.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 font-serif mb-3 group-hover:text-[#2f5d8f] transition-colors leading-snug">
                  {caseItem.title}
                </h3>

                <div className="space-y-3 text-xs text-slate-600 mb-6">
                  <div className="flex items-center gap-1.5 font-semibold text-[#2f5d8f]">
                    <span>Área: {caseItem.area}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Desafio Técnico: </span>
                    <p className="mt-1 leading-relaxed text-slate-600 font-normal">{caseItem.challenge}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCase(caseItem)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#2f5d8f] group-hover:text-[#234870] uppercase tracking-wider py-1"
                >
                  <span>VER SOLUÇÃO TÉCNICA</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono bg-[#2f5d8f] text-white font-bold px-2.5 py-1 rounded">
                {selectedCase.type}
              </span>
              <span className="text-xs font-semibold text-slate-500">{selectedCase.area}</span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-4">
              {selectedCase.title}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1 text-[#2f5d8f]">
                  Desafio Apresentado:
                </h4>
                <p className="leading-relaxed">{selectedCase.challenge}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1 text-[#2f5d8f]">
                  Solução Técnica Aplicada:
                </h4>
                <p className="leading-relaxed">{selectedCase.solution}</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-900">
                <h4 className="font-bold uppercase tracking-wide text-xs mb-1 text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Resultado Alcançado:
                </h4>
                <p className="leading-relaxed">{selectedCase.result}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Estratégia personalizada para demandas jurídicas
              </span>
              <a
                href="#orcamento"
                onClick={(e) => {
                  setSelectedCase(null);
                  scrollToSection(e, '#orcamento');
                  if (onOpenBudgetModal) onOpenBudgetModal();
                }}
                className="w-full sm:w-auto bg-[#2f5d8f] hover:bg-[#244973] text-white text-xs font-bold px-5 py-2.5 rounded transition-all uppercase tracking-wider text-center"
              >
                Analisar Minha Demanda
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
