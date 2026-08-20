import React from 'react';
import { Award, CheckCircle2, ShieldAlert, FileCheck2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

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
              QUEM SOMOS
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
              Experiência técnica para demandas que exigem precisão.
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                A <strong className="text-slate-900 font-semibold">Callegari Engenharia</strong> atua há{' '}
                <strong className="text-[#2f5d8f] font-bold">12 anos</strong> no mercado, oferecendo soluções altamente especializadas em Engenharia Legal, avaliações imobiliárias e perícias.
              </p>
              <p>
                Nossa atuação combina conhecimento técnico apurado, rigor metodológico e profunda compreensão das necessidades jurídicas de cada caso.
              </p>
              <p>
                Mais do que elaborar um laudo, buscamos compreender a fundo a demanda apresentada e entregar uma solução técnica clara, fundamentada e adequada aos objetivos e estratégias do cliente.
              </p>
              <p>
                Nosso trabalho é desenvolvido com foco absoluto em{' '}
                <strong className="text-slate-900 font-semibold">precisão, responsabilidade técnica, clareza e efetividade</strong>.
              </p>
            </div>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Precisão e Fundamentação</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Metodologias normatizadas ABNT e tratamento científico de dados.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Responsabilidade Técnica</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Laudos com ART (Anotação de Responsabilidade Técnica) junto ao CREA.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Authority Box & Dedicated Certificação AA Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 12 Years Big Banner Card */}
            <div className="bg-[#2f5d8f] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <Award className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 space-y-2">
                <div className="text-5xl font-black font-serif tracking-tight text-white">12 anos</div>
                <div className="text-lg font-bold tracking-wide uppercase text-blue-100">de atuação no mercado</div>
                <p className="text-xs text-blue-100 leading-relaxed pt-2 border-t border-blue-400/40">
                  Consolidação técnica em Engenharia Legal com histórico comprovado na elaboração de laudos periciais e pareceres assistenciais em ações de alto impacto.
                </p>
              </div>
            </div>

            {/* Dedicated Certificação AA Area */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 relative hover:border-[#2f5d8f]/40 transition-all shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#2f5d8f] text-white rounded">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base font-serif">Certificação AA</h3>
                    <p className="text-xs text-[#727375]">Selo de Excelência Técnica</p>
                  </div>
                </div>
                <span className="bg-[#2f5d8f] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded uppercase">
                  ACREDITAÇÃO
                </span>
              </div>

              {/* Graphic Representation of Seal */}
              <div className="mt-4 flex items-center gap-4">
                <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-400 flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-xs font-black text-amber-900 tracking-tighter">CERTIFICAÇÃO</div>
                    <div className="text-lg font-black text-[#2f5d8f] leading-none">AA</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    {COMPANY_INFO.certificationName}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reconhecimento de capacitação e rigor técnico nos mais elevados padrões exigidos pelo mercado judiciário e extrajudicial.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
