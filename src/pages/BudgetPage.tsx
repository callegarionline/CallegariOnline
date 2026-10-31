import React, { useEffect } from 'react';
import { BudgetForm } from '../components/BudgetForm';
import { ShieldCheck, ArrowLeft, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface BudgetPageProps {
  onBackToHome: () => void;
}

export const BudgetPage: React.FC<BudgetPageProps> = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-36 sm:pt-44 lg:pt-48 pb-20 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2f5d8f] hover:text-[#234870] uppercase tracking-wider bg-white px-5 py-3 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Principal</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
            <span className="hover:underline cursor-pointer" onClick={onBackToHome}>
              Home
            </span>
            <span>/</span>
            <span className="text-[#2f5d8f] font-bold">Análise de Demanda & Orçamento</span>
          </div>
        </div>

        {/* Page Title & Institutional Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mb-10 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-blueprint-pattern opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#60a5fa] uppercase font-mono">
              <FileSpreadsheet className="w-4 h-4" />
              PÁGINA INTERNA DE SOLICITAÇÃO TÉCNICA
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
              Análise de Demanda & Orçamento Personalizado
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Solicite um orçamento técnico especializado para ações judiciais, extrajudiciais, pareceres assistenciais e engenharia de avaliações. Sua solicitação é analisada diretamente pela equipe técnica da Callegari Engenharia.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Sigilo Absoluto e Confidencialidade
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#60a5fa]" />
                Atendimento Direto a Advogados e Empresas
              </span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <BudgetForm />
        </div>

      </div>
    </div>
  );
};
