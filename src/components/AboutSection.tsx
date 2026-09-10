import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import legalEngineeringImg from '../assets/images/legal_engineering_report_1788303678275.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: About Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
              <span className="w-8 h-0.5 bg-[#2f5d8f]" />
              SEGURANÇA JURÍDICA & PROTEÇÃO PATRIMONIAL
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
              Rigor científico e visão estratégica para demandas que não admitem erros.
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Com mais de uma década de atuação, a <strong className="text-slate-900 font-semibold">Callegari Engenharia</strong> combina conhecimento normativo aprofundado e inteligência pericial para atuar na interface exata entre a Engenharia e o Direito.
              </p>
              <p>
                Não entregamos apenas relatórios; entregamos provas técnicas robustas que suportam decisões judiciais e negociações extrajudiciais complexas, reduzindo drasticamente o risco de sucumbência para bancas de advocacia e grandes proprietários.
              </p>
            </div>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Precisão e Fundamentação</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Aplicação rigorosa das NBRs 14653 e 13752 com inferência estatística e amostragem de mercado auditável.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Responsabilidade & Cumprimento de Prazos</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Gestão ágil e compromisso com o calendário e quesitamentação processual.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Professional Contextual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src={legalEngineeringImg}
                alt="Engenharia Legal, Laudos e Perícias"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />
              
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
                      Rigor técnico e suporte probatório em todo o Brasil.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative subtle backdrop element */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#2f5d8f]/10 rounded-full blur-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};
