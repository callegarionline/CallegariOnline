import React, { useEffect } from 'react';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { CamilaCallegariSection } from '../components/CamilaCallegariSection';
import { PortfolioSection } from '../components/PortfolioSection';
import {
  ShieldCheck,
  ArrowLeft,
  CheckCircle2,
  Scale,
  FileCheck2,
  Award,
  BookOpen,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import legalEngineeringImg from '../assets/images/legal_engineering.jpeg';

interface SegurancaJuridicaPageProps {
  onBackToHome: () => void;
  onOpenBudgetModal: () => void;
}

export const SegurancaJuridicaPage: React.FC<SegurancaJuridicaPageProps> = ({
  onBackToHome,
  onOpenBudgetModal,
}) => {
  useEffect(() => {
    // If hash contains specific sub-anchor (e.g., #portfolio), scroll to it; otherwise top
    if (window.location.hash.includes('portfolio')) {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-32 sm:pt-40 lg:pt-44 pb-20 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb & Back Button */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2f5d8f] hover:text-[#234870] uppercase tracking-wider bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Principal</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="hover:underline cursor-pointer" onClick={onBackToHome}>
              Home
            </span>
            <span>/</span>
            <span className="text-[#2f5d8f] font-bold">Segurança Jurídica & Proteção Patrimonial</span>
          </div>
        </div>

        {/* Top Hero Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-blueprint-pattern opacity-10 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#2f5d8f]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase">
              <Scale className="w-3.5 h-3.5 text-blue-300" />
              <span>SEGURANÇA JURÍDICA & PROTEÇÃO PATRIMONIAL</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white leading-tight">
              Rigor científico e visão estratégica para demandas que não admitem erros.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              A atuação técnica da Callegari Engenharia na interface exata entre a Engenharia e o Direito, assegurando laudos periciais e pareceres incontestáveis que blindam teses jurídicas e preservam grandes patrimônios em todo o Brasil.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBudgetModal}
                className="bg-[#2f5d8f] hover:bg-[#234870] text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <span>Solicitar Parecer Técnico</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Consultar Engenheiro Perito</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 1: Detailed Segurança Jurídica & Proteção Patrimonial Block */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
                <span className="w-8 h-0.5 bg-[#2f5d8f]" />
                FUNDAMENTAÇÃO TÉCNICA E NORMATIVA
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif leading-tight">
                Como nossa engenharia legal protege decisões de alto valor patrimonial
              </h2>

              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Com mais de uma década de atuação, a <strong className="text-slate-900 font-semibold">Callegari Engenharia</strong> combina conhecimento normativo aprofundado e inteligência pericial para atuar na interface entre a Engenharia e o Direito.
                </p>
                <p>
                  Não entregamos apenas relatórios. Cada trabalho é conduzido com fundamentação normativa e metodologia transparente, para que a prova técnica seja clara, consistente e sustentável no contraditório.
                </p>
                <p>
                  Nossos laudos atendem com grau máximo de fundamentação e precisão às normas da ABNT (NBR 14653 e NBR 13752), utilizando modelos de regressão linear múltipla, inferência estatística, amostragem criteriosa e vistorias detalhadas com tecnologia de ponta.
                </p>
              </div>

              {/* Technical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Rescisão e Fundamentação</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Aplicação das normas técnicas pertinentes a cada trabalho, especialmente as ABNT NBR 14653 e 13752, com métodos claros e conclusões fundamentadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Responsabilidade & Prazos</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Gestão ágil e compromisso com os prazos processuais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <FileCheck2 className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Quesitos Estratégicos</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Elaboração de quesitos direcionados e manifestações técnicas sobre laudos periciais judiciais adversos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <Award className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Certificação de Excelência</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Certificação AA em Engenharia de Avaliações e Perícias pelo IBAPE, máxima distinção do setor.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Image with Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src={legalEngineeringImg}
                  alt="Engenharia Legal, Laudos e Perícias"
                  className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent pointer-events-none" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#2f5d8f] text-white shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
                        Engenharia Legal & Avaliações
                      </h4>
                      <p className="text-xs text-slate-300 font-normal mt-0.5">
                        Rigor técnico e suporte probatório em todo o território nacional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Section 2: NOSSO DIFERENCIAL */}
      <div className="border-t border-slate-200">
        <DifferentialsSection />
      </div>

      {/* Section 3: PASSO A PASSO */}
      <div className="border-t border-slate-200">
        <HowItWorksSection onOpenBudgetModal={onOpenBudgetModal} />
      </div>

      {/* Section: CAMILA CALLEGARI (Liderança e Autoridade Técnica) */}
      <div className="border-t border-slate-200">
        <CamilaCallegariSection />
      </div>

      {/* Section 4: PORTFÓLIO & CASOS DE ATUAÇÃO */}
      <div className="border-t border-slate-200">
        <PortfolioSection onOpenBudgetModal={onOpenBudgetModal} />
      </div>

      {/* Bottom Conversion Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute inset-0 bg-blueprint-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-block text-blue-300 text-xs font-mono font-bold tracking-widest uppercase bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-400/30">
              ATENDIMENTO ESPECIALIZADO
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
              Sua demanda exige a máxima segurança jurídica e rigor técnico?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Entre em contato conosco para uma análise preliminar da sua demanda processual ou avaliação patrimonial com nossos engenheiros peritos.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenBudgetModal}
                className="bg-[#2f5d8f] hover:bg-[#234870] text-white px-7 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Solicitar Parecer Técnico / Orçamento
              </button>
              <button
                onClick={onBackToHome}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-lg font-bold text-sm tracking-wide transition-all cursor-pointer"
              >
                Voltar à Home
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
