import React, { useState } from 'react';
import { BudgetFormData } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export const BudgetForm: React.FC = () => {
  const [formData, setFormData] = useState<BudgetFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    cityState: '',
    demandType: 'Laudos Periciais',
    description: '',
    howCanWeHelp: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Telefone).');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate server processing / integration hook
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const generateWhatsappMessage = () => {
    const msg = `Olá, meu nome é ${formData.name}${
      formData.company ? ` (${formData.company})` : ''
    }.
Gostaria de solicitar um orçamento/análise de demanda.
• Cidade/Estado: ${formData.cityState || 'Não informado'}
• Tipo de demanda: ${formData.demandType}
• Descrição: ${formData.description || 'Não detalhado'}
• Como podem ajudar: ${formData.howCanWeHelp || 'Orientação geral'}`;

    return `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div id="orcamento" className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      
      <div className="bg-[#2f5d8f] text-white p-8 text-center space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-200">
          ANÁLISE DE DEMANDA & ORÇAMENTO
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
          Solicite uma análise da sua demanda
        </h2>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Preencha os dados abaixo com as especificidades do seu caso. Retornaremos com uma proposta técnica objetiva e personalizada.
        </p>
      </div>

      <div className="p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-serif text-slate-900">
                    Solicitação Enviada com Sucesso!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Recebemos sua solicitação. Nossa equipe técnica analisará as informações e entrará em contato em breve.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-md mx-auto text-xs text-slate-600 text-left">
                  <span className="font-bold text-slate-800">Deseja resposta imediata?</span>
                  <p className="mt-1">Você também pode enviar estes dados diretamente via WhatsApp para agilizar o atendimento.</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsappMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enviar Também Pelo WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        cityState: '',
                        demandType: 'Laudos Periciais',
                        description: '',
                        howCanWeHelp: '',
                      });
                    }}
                    className="w-full sm:w-auto border border-slate-300 text-slate-700 text-xs font-semibold px-5 py-3 rounded-md hover:bg-slate-50 transition-colors"
                  >
                    Enviar Nova Solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Dr. Carlos Silva"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Empresa / Escritório */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Empresa / Escritório
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex: Silva & Associados Advocacia"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all"
                    />
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contato@escritorio.com.br"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all"
                    />
                  </div>

                  {/* WhatsApp / Telefone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(27) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Cidade / Estado */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Cidade / Estado
                    </label>
                    <input
                      type="text"
                      name="cityState"
                      value={formData.cityState}
                      onChange={handleChange}
                      placeholder="Ex: Vitória / ES"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Tipo de demanda */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Tipo de Demanda
                    </label>
                    <select
                      name="demandType"
                      value={formData.demandType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all bg-white"
                    >
                      <option value="Assistência Técnica Judicial">Assistência Técnica Judicial</option>
                      <option value="Laudo Pericial de Avaliação Imobiliária">Laudo Pericial de Avaliação Imobiliária (NBR 14.653)</option>
                      <option value="Contestação de ITBI / IPTU">Contestação de ITBI / IPTU (Revisão de Base)</option>
                      <option value="Engenharia Legal e Perícias">Engenharia Legal e Vícios Construtivos</option>
                      <option value="Desapropriações">Desapropriações e Indenização Justa</option>
                      <option value="Servidões">Servidões Administrativas e Passagens</option>
                      <option value="Outro">Outra Demanda Técnica</option>
                    </select>
                  </div>
                </div>

                {/* Breve descrição do caso */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Breve Descrição do Caso
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Descreva resumidamente o objeto da avaliação, o tipo de ação ou a questão técnica envolvida..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all"
                  />
                </div>

                {/* Como podemos ajudar? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Como Podemos Ajudar?
                  </label>
                  <textarea
                    name="howCanWeHelp"
                    rows={2}
                    value={formData.howCanWeHelp}
                    onChange={handleChange}
                    placeholder="Ex: Preciso de parecer assistencial, formulação de quesitos ou parecer em 15 dias..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#2f5d8f] focus:border-transparent text-sm outline-none transition-all"
                  />
                </div>

                {/* Submit button & WhatsApp alternative */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#2f5d8f] hover:bg-[#244973] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-md shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>ENVIANDO...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>ENVIAR SOLICITAÇÃO</span>
                      </>
                    )}
                  </button>

                  <a
                    href={generateWhatsappMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-600 hover:text-[#2f5d8f] flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Ou prefere falar no WhatsApp agora?</span>
                  </a>
                </div>

              </form>
            )}
          </div>

    </div>
  );
};
