import React, { useState } from 'react';
import { X, Calculator, ArrowRight, Check, Scale, ShieldCheck, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface DemandEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBudget: () => void;
}

export const DemandEstimatorModal: React.FC<DemandEstimatorModalProps> = ({
  isOpen,
  onClose,
  onSelectBudget,
}) => {
  const [demandType, setDemandType] = useState('Laudo Pericial Judicial');
  const [propertyType, setPropertyType] = useState('Imóvel Urbano / Comercial');
  const [urgency, setUrgency] = useState('Prazo Normal (15 a 30 dias)');

  if (!isOpen) return null;

  const getStrategySummary = () => {
    switch (demandType) {
      case 'Desapropriação / Servidão':
        return {
          method: 'Método Comparativo Direto + Custo de Recomposição + Coeficiente de Depreciação Remanescente',
          norm: 'NBR 14.653-2 / NBR 14.653-3',
          deliverable: 'Laudo de Avaliação Indenizatória com Grau de Fundamentação II/III e Anotação de Responsabilidade Técnica (ART)',
          keyChecklist: [
            'Levantamento perimétrico e de benfeitorias reparáveis',
            'Tratamento estatístico por regressão linear de amostra de mercado',
            'Cálculo do prejuízo efetivo no remanescente do imóvel',
            'Suporte para formulação de quesitos específicos de desapropriação'
          ]
        };
      case 'Assistência Técnica & Impugnação':
        return {
          method: 'Análise Crítica de Laudo Pericial Oficial + Parecer Técnico Divergente ou Convergente',
          norm: 'NBR 13.752 e NBR 14.653',
          deliverable: 'Parecer Técnico Assistencial + Quesitos Complementares Strategicamente Elaborados',
          keyChecklist: [
            'Auditoria de vícios metodológicos e omissões do laudo pericial judicial',
            'Participação presencial na vistoria de campo do perito do juízo',
            'Formulação de quesitos iniciais e quesitos de esclarecimento',
            'Alinhamento prévio com a tese jurídica da petição'
          ]
        };
      default:
        return {
          method: 'Método Comparativo Direto de Dados de Mercado (MCDDM)',
          norm: 'NBR 14.653 (Grau II/III)',
          deliverable: 'Laudo Pericial Completo com ART e fundamentação estatística irrefutável',
          keyChecklist: [
            'Coleta e homologação de dados comparativos atualizados',
            'Vistoria cautelar detalhada com relatório fotográfico',
            'Análise de viabilidade técnica e nexo causal',
            'Emissão de ART junto ao CREA-ES'
          ]
        };
    }
  };

  const strategy = getStrategySummary();

  const handleWhatsappSend = () => {
    const text = `Olá, utilizei o Simulador Tático do site da Callegari Engenharia.
• Tipo de Demanda: ${demandType}
• Tipo de Imóvel: ${propertyType}
• Urgência: ${urgency}
• Metodologia Indicada: ${strategy.method}

Gostaria de solicitar orçamento e prazo para esta demanda.`;
    window.open(`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-sm font-bold font-mono text-[#2f5d8f] uppercase mb-2">
          <Calculator className="w-4 h-4" />
          SIMULADOR DE ESCOPO TÉCNICO PARA ADVOGADOS
        </div>

        <h3 className="text-2xl font-bold font-serif text-slate-900 mb-2">
          Estruturador de Estratégia Pericial
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Selecione os parâmetros da demanda processual para visualizar as normas ABNT aplicáveis, a metodologia recomendada e o escopo do laudo.
        </p>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase mb-1.5">
              Objeto / Tipo de Ação
            </label>
            <select
              value={demandType}
              onChange={(e) => setDemandType(e.target.value)}
              className="w-full text-sm font-medium p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] bg-slate-50 outline-none"
            >
              <option value="Laudo Pericial Judicial">Laudo Pericial Judicial</option>
              <option value="Desapropriação / Servidão">Desapropriação / Servidão</option>
              <option value="Assistência Técnica & Impugnação">Assistência Técnica & Impugnação</option>
              <option value="Ação Renovatória de Aluguel">Ação Renovatória de Aluguel</option>
              <option value="Vistoria Cautelar de Vizinhança">Vistoria Cautelar de Vizinhança</option>
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase mb-1.5">
              Tipo de Imóvel / Bem
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full text-sm font-medium p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] bg-slate-50 outline-none"
            >
              <option value="Imóvel Urbano / Comercial">Imóvel Urbano / Comercial</option>
              <option value="Propriedade Rural / Gleba">Propriedade Rural / Gleba</option>
              <option value="Complexo Industrial / Galpão">Complexo Industrial / Galpão</option>
              <option value="Faixa de Infraestrutura / Duto">Faixa de Infraestrutura / Duto</option>
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase mb-1.5">
              Urgência do Prazo
            </label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full text-sm font-medium p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] bg-slate-50 outline-none"
            >
              <option value="Prazo Normal (15 a 30 dias)">Prazo Normal (15 a 30 dias)</option>
              <option value="Urgente (Prazo Judicial de 15 dias)">Urgente (Prazo Judicial de 15 dias)</option>
              <option value="Extrema Urgência (Impugnação de 5 dias)">Extrema Urgência (Impugnação de 5 dias)</option>
            </select>
          </div>
        </div>

        {/* Output Strategy Summary */}
        <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4 mb-6 border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-sm font-mono text-[#60a5fa] font-bold uppercase">
              PLANO DE ABORDAGEM TÉCNICA SUGERIDO
            </span>
            <span className="text-xs font-mono bg-[#2f5d8f] text-white px-2.5 py-1 rounded">
              CERTIFICAÇÃO AAA
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-slate-400 font-mono block mb-1">METODOLOGIA RECOMENDADA:</span>
              <span className="font-bold text-slate-100">{strategy.method}</span>
            </div>
            <div>
              <span className="text-slate-400 font-mono block mb-1">NORMA ABNT DE REFERÊNCIA:</span>
              <span className="font-bold text-blue-300">{strategy.norm}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <span className="text-slate-400 font-mono text-sm block mb-2">CHECKLIST DE ENTREGÁVEIS TÉCNICOS:</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
              {strategy.keyChecklist.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Options */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onSelectBudget();
              const el = document.querySelector('#orcamento');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto border border-slate-300 hover:border-[#2f5d8f] text-slate-800 text-sm font-bold px-6 py-3 rounded-md transition-colors uppercase"
          >
            Preencher Formulário Oficial
          </button>

          <button
            onClick={handleWhatsappSend}
            className="w-full sm:w-auto bg-[#2f5d8f] hover:bg-[#244973] text-white text-sm font-bold px-6 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2 uppercase shadow"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>Enviar Esta Simulação Pelo WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
