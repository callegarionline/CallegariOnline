import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { FileText, Building2, Search, Scale, Compass, Briefcase, ArrowRight, X, Check, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ServicesSectionProps {
  onOpenBudgetModal?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBudgetModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'Building2': return Building2;
      case 'Search': return Search;
      case 'Scale': return Scale;
      case 'Compass': return Compass;
      case 'Briefcase': return Briefcase;
      default: return FileText;
    }
  };

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
    <section id="servicos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
            SOLUÇÕES PERICIAIS
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Engenharia Legal aplicada a controvérsias de alto valor.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Soluções estruturadas para instruir ações judiciais, impugnar laudos periciais frágeis, contestar tributos municipais abusivos e determinar o valor real de mercado com respaldo da ABNT NBR 14.653.
          </p>
        </div>

        {/* 4 Service Cards Grid - 2x2 Clean Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-[#2f5d8f] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Brand Accent Top Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2f5d8f] via-[#244870] to-[#2f5d8f]" />

                <div>
                  {/* Icon + Title side by side */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Icon Container */}
                    <div className="w-14 h-14 bg-[#2f5d8f] text-white rounded-xl shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 font-serif group-hover:text-[#2f5d8f] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner Below Services */}
        <div className="mt-16 bg-slate-900 text-white rounded-xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono text-[#60a5fa] uppercase tracking-widest">
              SUPORTE TÉCNICO ESPECIALIZADO
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              PRECISA DE SUPORTE TÉCNICO? FALE COM A CALLEGARI
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Nossa equipe técnica está pronta para avaliar seu caso e indicar a melhor metodologia para instrução da sua demanda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="#orcamento"
              onClick={(e) => {
                scrollToSection(e, '#orcamento');
                if (onOpenBudgetModal) onOpenBudgetModal();
              }}
              className="w-full sm:w-auto bg-[#2f5d8f] hover:bg-[#244973] text-white text-xs sm:text-sm font-bold tracking-wider px-6 py-3.5 rounded-md transition-all uppercase shadow"
            >
              SOLICITAR ANÁLISE
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent('Olá! Gostaria de falar sobre suporte técnico para uma demanda de engenharia.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-slate-700 hover:border-white text-slate-200 hover:text-white text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono bg-[#2f5d8f]/10 text-[#2f5d8f] font-bold px-2.5 py-1 rounded">
                ESPECIALIDADE TÉCNICA
              </span>
              <span className="text-xs font-semibold text-[#727375]">Callegari Engenharia</span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-3">
              {selectedService.title}
            </h3>

            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 mb-6">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Aplicações e Casos Típicos de Atuação:
              </h4>
              <ul className="space-y-2.5">
                {selectedService.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#2f5d8f] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500">Conforme normas ABNT & diretrizes do IBAPE</span>
              <a
                href="#orcamento"
                onClick={(e) => {
                  setSelectedService(null);
                  scrollToSection(e, '#orcamento');
                  if (onOpenBudgetModal) onOpenBudgetModal();
                }}
                className="w-full sm:w-auto bg-[#2f5d8f] hover:bg-[#244973] text-white text-xs font-bold px-5 py-2.5 rounded transition-all uppercase tracking-wider text-center"
              >
                Solicitar Orçamento Deste Serviço
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
